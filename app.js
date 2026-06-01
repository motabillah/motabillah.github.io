'use strict';
/* ============================================================
   CompTIA A+ Study Tool — Application Logic
   Reads: DOMAINS, FLASHCARDS, QUIZ_QUESTIONS, GLOSSARY,
          CHEAT_SHEETS  (all defined in data.js)
   ============================================================ */

// ── Storage key ───────────────────────────────────────────────────────────
const STORAGE_KEY = 'comptia_aplus_v1';
const TIMED_SECS_PER_Q = 120; // 2 minutes per question in timed mode

// ── Shorthand helpers ──────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// ── Progress state (persisted to localStorage) ─────────────────────────────
let progress = {
  flashcards: {},          // { [card.id]: 'know' | 'review' | 'skip' }
  quiz: { history: [] }   // array of session objects
};

// ── Flashcard runtime state ────────────────────────────────────────────────
let fc = {
  deck: [],
  index: 0,
  flipped: false
};

// ── Quiz runtime state ─────────────────────────────────────────────────────
let quiz = {
  questions: [],
  index: 0,
  answers: [],      // { questionId, exam, domain, selected, correct, isCorrect, question, options, explanation }
  startTime: null,
  timer: null,
  timeLeft: 0,
  timed: false
};

// ── Cheat-sheet state ──────────────────────────────────────────────────────
let csActiveTable = 'ports';
let csSearch = '';

// ═══════════════════════════════════════════════════════════════════════════
// STORAGE
// ═══════════════════════════════════════════════════════════════════════════

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const p = JSON.parse(raw);
    progress.flashcards = p.flashcards || {};
    progress.quiz = p.quiz || { history: [] };
  } catch (_) { /* first run */ }
}

function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (_) {}
}

function resetAllProgress() {
  if (!confirm('Reset ALL progress? This clears every flashcard mark and quiz history. Cannot be undone.')) return;
  progress = { flashcards: {}, quiz: { history: [] } };
  saveProgress();
  renderProgress();
  renderDashboard();
}

// ═══════════════════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

function navigateTo(sectionId) {
  // Stop quiz timer when leaving quiz section
  if (sectionId !== 'quiz' && quiz.timer) {
    clearInterval(quiz.timer);
    quiz.timer = null;
  }

  $$('.section').forEach(s => s.classList.remove('active'));
  $$('.nav-btn').forEach(b => b.classList.remove('active'));

  const sec = $('section-' + sectionId);
  if (sec) sec.classList.add('active');
  $$(`[data-section="${sectionId}"]`).forEach(b => b.classList.add('active'));

  // Section-specific init
  const init = {
    dashboard:   renderDashboard,
    flashcards:  initFlashcards,
    quiz:        initQuiz,
    glossary:    initGlossary,
    cheatsheets: initCheatSheets,
    progress:    renderProgress
  };
  if (init[sectionId]) init[sectionId]();
}

// ═══════════════════════════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════

function renderDashboard() {
  // Top stats
  const known   = Object.values(progress.flashcards).filter(v => v === 'know').length;
  const review  = Object.values(progress.flashcards).filter(v => v === 'review').length;
  const sessions = progress.quiz.history.length;
  const totalQ  = progress.quiz.history.reduce((s, h) => s + h.count, 0);
  const totalOk = progress.quiz.history.reduce((s, h) => s + h.correct, 0);

  $('stat-cards-mastered').textContent = known;
  $('stat-cards-review').textContent   = review;
  $('stat-quizzes-taken').textContent  = sessions;
  $('stat-quiz-accuracy').textContent  = totalQ > 0
    ? Math.round(totalOk / totalQ * 100) + '%' : '—';

  // Domain progress bars
  renderDomainBars('dash-core1-domains', 'core1');
  renderDomainBars('dash-core2-domains', 'core2');

  // Focus topics
  renderFocusTopics();
}

function renderDomainBars(containerId, exam) {
  const el = $(containerId);
  if (!el) return;
  el.innerHTML = '';
  const mastery = getDomainMastery();
  const isAmber = exam === 'core2';

  Object.entries(DOMAINS[exam]).forEach(([key, domain]) => {
    const pct = mastery[exam][key] || 0;
    el.insertAdjacentHTML('beforeend', `
      <div class="domain-item">
        <div class="domain-item-header">
          <span class="domain-item-name">${domain.name}</span>
          <span class="domain-item-pct">${pct}%</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill${isAmber ? ' amber' : ''}" style="width:${pct}%"></div>
        </div>
      </div>`);
  });
}

function renderFocusTopics() {
  const el = $('focus-topics');
  if (!el) return;
  const mastery = getDomainMastery();

  const all = [];
  ['core1', 'core2'].forEach(exam => {
    Object.entries(DOMAINS[exam]).forEach(([key, d]) => {
      const attempted = progress.quiz.history.some(h =>
        h.answers && h.answers.some(a => a.exam === exam && a.domain === key)
      );
      all.push({ name: d.name, pct: mastery[exam][key] || 0, exam, key, attempted });
    });
  });

  let focus = all.filter(d => d.attempted).sort((a, b) => a.pct - b.pct).slice(0, 4);
  // Fall back to lowest-weight domains if no quiz data yet
  if (!focus.length) focus = all.slice(0, 4);

  el.innerHTML = focus.map(d => `
    <div class="focus-topic-tag">
      <span>${d.name}</span>
      <span class="fc-exam-badge${d.exam === 'core2' ? ' core2' : ''}">${d.exam === 'core1' ? 'C1' : 'C2'}</span>
      <span class="ft-pct">${d.pct}%</span>
    </div>`).join('');

  if (!focus.length) el.innerHTML = '<div style="color:var(--text-dim);font-size:14px">Take some quizzes to see your focus areas.</div>';
}

// ═══════════════════════════════════════════════════════════════════════════
// FLASHCARDS
// ═══════════════════════════════════════════════════════════════════════════

function initFlashcards() {
  populateDomainSelect('fc-domain', $('fc-exam').value);

  // Wire up controls (safe to call multiple times — replaces handlers)
  $('fc-exam').onchange = () => {
    populateDomainSelect('fc-domain', $('fc-exam').value);
    buildDeck();
  };
  $('fc-domain').onchange    = buildDeck;
  $('fc-difficulty').onchange = buildDeck;
  $('fc-status-filter').onchange = buildDeck;

  $('fc-shuffle-btn').onclick = () => {
    fc.deck  = shuffle(fc.deck);
    fc.index = 0;
    renderCard();
  };
  $('fc-reset-deck-btn').onclick = () => {
    fc.index  = 0;
    fc.flipped = false;
    renderCard();
  };

  $('flashcard').onclick = flipCard;
  $('fc-prev-btn').onclick = prevCard;
  $('fc-next-btn').onclick = nextCard;
  $('fc-mark-know').onclick   = () => markCard('know');
  $('fc-mark-review').onclick = () => markCard('review');
  $('fc-mark-skip').onclick   = () => markCard('skip');

  buildDeck();
}

function buildDeck() {
  const exam   = $('fc-exam').value;
  const domain = $('fc-domain').value;
  const diff   = $('fc-difficulty').value;
  const status = $('fc-status-filter').value;

  fc.deck = FLASHCARDS.filter(c => {
    if (exam   !== 'all' && c.exam   !== exam)   return false;
    if (domain !== 'all' && c.domain !== domain) return false;
    if (diff   !== 'all' && c.difficulty !== diff) return false;
    if (status === 'review' && progress.flashcards[c.id] !== 'review') return false;
    if (status === 'know'   && progress.flashcards[c.id] !== 'know')   return false;
    if (status === 'new'    && progress.flashcards[c.id])               return false;
    return true;
  });

  fc.index  = 0;
  fc.flipped = false;
  renderCard();
}

function renderCard() {
  const total = fc.deck.length;
  $('fc-total-num').textContent = total;

  if (total === 0) {
    $('fc-current-num').textContent = 0;
    $('fc-front-text').textContent  = 'No cards match your current filters.';
    $('fc-back-text').textContent   = 'Try adjusting the filters above.';
    $('fc-exam-badge').textContent  = '—';
    $('fc-domain-badge').textContent = '—';
    $('fc-diff-badge').textContent  = '—';
    $('fc-deck-bar').style.width    = '0%';
    $('fc-prev-btn').disabled = true;
    $('fc-next-btn').disabled = true;
    updateFCStats();
    return;
  }

  const card = fc.deck[fc.index];
  const domObj = DOMAINS[card.exam] && DOMAINS[card.exam][card.domain];
  const domName = domObj ? domObj.name : card.domain;

  $('fc-current-num').textContent = fc.index + 1;
  $('fc-front-text').textContent  = card.front;
  $('fc-back-text').textContent   = card.back;

  const badge = $('fc-exam-badge');
  badge.textContent = card.exam === 'core1' ? 'CORE 1' : 'CORE 2';
  badge.className   = 'fc-exam-badge' + (card.exam === 'core2' ? ' core2' : '');
  $('fc-domain-badge').textContent = domName;
  $('fc-diff-badge').textContent   = cap(card.difficulty);

  // Unflip on card change
  $('flashcard').classList.remove('flipped');
  fc.flipped = false;

  $('fc-prev-btn').disabled = fc.index === 0;
  $('fc-next-btn').disabled = fc.index === total - 1;
  $('fc-deck-bar').style.width = `${((fc.index + 1) / total) * 100}%`;

  updateFCStats();
}

function flipCard() {
  if (!fc.deck.length) return;
  fc.flipped = !fc.flipped;
  $('flashcard').classList.toggle('flipped', fc.flipped);
}

function nextCard() {
  if (fc.index < fc.deck.length - 1) { fc.index++; renderCard(); }
}

function prevCard() {
  if (fc.index > 0) { fc.index--; renderCard(); }
}

function markCard(status) {
  if (!fc.deck.length) return;
  progress.flashcards[fc.deck[fc.index].id] = status;
  saveProgress();
  updateFCStats();
  // Auto-advance after a short delay
  setTimeout(() => {
    if (fc.index < fc.deck.length - 1) nextCard();
    else renderCard(); // refresh stats on last card
  }, 280);
}

function updateFCStats() {
  let know = 0, rev = 0, skip = 0;
  fc.deck.forEach(c => {
    const s = progress.flashcards[c.id];
    if (s === 'know')   know++;
    else if (s === 'review') rev++;
    else if (s === 'skip')   skip++;
  });
  $('fc-know-count').textContent   = `✓ ${know} Know`;
  $('fc-review-count').textContent = `↺ ${rev} Review`;
  $('fc-skip-count').textContent   = `→ ${skip} Skip`;
}

// ═══════════════════════════════════════════════════════════════════════════
// QUIZ
// ═══════════════════════════════════════════════════════════════════════════

function initQuiz() {
  populateDomainSelect('quiz-domain', $('quiz-exam').value);

  $('quiz-exam').onchange = () => populateDomainSelect('quiz-domain', $('quiz-exam').value);

  $$('.count-btn').forEach(btn => {
    btn.onclick = () => {
      $$('.count-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };
  });

  $('start-quiz-btn').onclick  = startQuiz;
  $('quiz-next-btn').onclick   = nextQuestion;
  $('quiz-finish-btn').onclick = finishQuiz;
  $('new-quiz-btn').onclick    = showQuizSetup;

  // "View Progress" button inside results
  $$('#quiz-results .secondary-btn[data-section]').forEach(btn => {
    btn.onclick = () => navigateTo(btn.dataset.section);
  });
}

function showQuizSetup() {
  if (quiz.timer) { clearInterval(quiz.timer); quiz.timer = null; }
  $('quiz-setup').style.display   = '';
  $('quiz-active').style.display  = 'none';
  $('quiz-results').style.display = 'none';
}

function startQuiz() {
  const exam   = $('quiz-exam').value;
  const domain = $('quiz-domain').value;
  const diff   = $('quiz-difficulty').value;
  const count  = parseInt($$('.count-btn.active')[0]?.dataset.count || '10');
  const timed  = document.querySelector('input[name="quiz-mode"]:checked').value === 'timed';

  let pool = QUIZ_QUESTIONS.filter(q => {
    if (exam   !== 'all' && q.exam   !== exam)   return false;
    if (domain !== 'all' && q.domain !== domain) return false;
    if (diff   !== 'all' && q.difficulty !== diff) return false;
    return true;
  });

  if (!pool.length) {
    alert('No questions match your filters. Try selecting "All" for exam and domain.');
    return;
  }

  pool = shuffle(pool);
  quiz.questions  = pool.slice(0, Math.min(count, pool.length));
  quiz.index      = 0;
  quiz.answers    = [];
  quiz.startTime  = Date.now();
  quiz.timed      = timed;

  if (timed) {
    quiz.timeLeft = quiz.questions.length * TIMED_SECS_PER_Q;
    startTimer();
  }

  $('quiz-setup').style.display   = 'none';
  $('quiz-active').style.display  = '';
  $('quiz-results').style.display = 'none';
  $('quiz-timer').style.display   = timed ? 'flex' : 'none';

  renderQuestion();
}

function startTimer() {
  const timerEl  = $('quiz-timer');
  const timerVal = $('quiz-timer-value');
  if (quiz.timer) clearInterval(quiz.timer);

  timerVal.textContent = fmtTime(quiz.timeLeft);

  quiz.timer = setInterval(() => {
    quiz.timeLeft--;
    timerVal.textContent = fmtTime(quiz.timeLeft);

    timerEl.className = 'quiz-timer'
      + (quiz.timeLeft < 30  ? ' danger'  :
         quiz.timeLeft < 120 ? ' warning' : '');

    if (quiz.timeLeft <= 0) {
      clearInterval(quiz.timer);
      quiz.timer = null;
      finishQuiz();
    }
  }, 1000);
}

function renderQuestion() {
  const q     = quiz.questions[quiz.index];
  const total = quiz.questions.length;

  $('quiz-progress-text').textContent = `Question ${quiz.index + 1} of ${total}`;
  $('quiz-prog-fill').style.width     = `${(quiz.index / total) * 100}%`;

  const domObj  = DOMAINS[q.exam] && DOMAINS[q.exam][q.domain];
  const domName = domObj ? domObj.name : q.domain;

  const exBadge = $('quiz-exam-badge');
  exBadge.textContent = q.exam === 'core1' ? 'CORE 1' : 'CORE 2';
  exBadge.className   = 'fc-exam-badge' + (q.exam === 'core2' ? ' core2' : '');

  $('quiz-domain-badge').textContent = domName;
  $('quiz-type-badge').textContent   = q.type === 'scenario' ? 'Scenario' : 'Factual';
  $('quiz-question-text').textContent = q.question;

  const optsEl = $('quiz-options');
  optsEl.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span>${opt}`;
    btn.onclick   = () => selectAnswer(i);
    optsEl.appendChild(btn);
  });

  $('quiz-explanation').style.display = 'none';
  $('quiz-next-btn').style.display    = 'none';
  $('quiz-finish-btn').style.display  = 'none';
}

function selectAnswer(selected) {
  const q       = quiz.questions[quiz.index];
  const correct = q.correct;
  const isOk    = selected === correct;
  const isLast  = quiz.index === quiz.questions.length - 1;

  quiz.answers.push({
    questionId:  q.id,
    exam:        q.exam,
    domain:      q.domain,
    question:    q.question,
    options:     q.options,
    selected,
    correct,
    isCorrect:   isOk,
    explanation: q.explanation
  });

  // Style options
  $$('#quiz-options .quiz-option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct && isOk)   btn.classList.add('correct');
    if (i === selected && !isOk) btn.classList.add('incorrect');
    if (i === correct && !isOk)  btn.classList.add('revealed');
  });

  $('explanation-text').textContent   = q.explanation;
  $('quiz-explanation').style.display = 'block';

  if (isLast) $('quiz-finish-btn').style.display = 'inline-flex';
  else        $('quiz-next-btn').style.display   = 'inline-flex';
}

function nextQuestion() {
  quiz.index++;
  renderQuestion();
}

function finishQuiz() {
  if (quiz.timer) { clearInterval(quiz.timer); quiz.timer = null; }

  const timeTaken = Math.round((Date.now() - quiz.startTime) / 1000);
  const correct   = quiz.answers.filter(a => a.isCorrect).length;
  const count     = quiz.questions.length;
  const pct       = count > 0 ? Math.round(correct / count * 100) : 0;

  // Persist session
  progress.quiz.history.unshift({
    date:    new Date().toISOString(),
    exam:    $('quiz-exam').value,
    domain:  $('quiz-domain').value,
    count,
    correct,
    pct,
    time:    timeTaken,
    answers: quiz.answers.map(a => ({
      questionId: a.questionId,
      exam:       a.exam,
      domain:     a.domain,
      isCorrect:  a.isCorrect
    }))
  });
  if (progress.quiz.history.length > 50) progress.quiz.history.length = 50;
  saveProgress();

  renderResults(pct, correct, count, timeTaken);
  $('quiz-active').style.display  = 'none';
  $('quiz-results').style.display = 'block';
}

function renderResults(pct, correct, count, timeTaken) {
  // Animated score ring
  const circ  = 2 * Math.PI * 52;
  const ring  = $('ring-fill-circle');
  const color = pct >= 80 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444';
  ring.style.strokeDasharray  = circ;
  ring.style.strokeDashoffset = circ;
  ring.style.stroke           = color;
  setTimeout(() => { ring.style.strokeDashoffset = circ * (1 - pct / 100); }, 50);

  $('result-pct').textContent         = pct + '%';
  $('result-pct').style.color         = color;
  $('result-correct-count').textContent = `${correct} Correct`;
  $('result-wrong-count').textContent   = `${count - correct} Incorrect`;
  $('result-time-taken').textContent    = fmtTime(timeTaken);

  // Domain breakdown
  const map = {};
  quiz.answers.forEach(a => {
    const key = a.exam + '|' + a.domain;
    if (!map[key]) {
      const domObj = DOMAINS[a.exam] && DOMAINS[a.exam][a.domain];
      map[key] = { name: domObj ? domObj.name : a.domain, correct: 0, total: 0 };
    }
    map[key].total++;
    if (a.isCorrect) map[key].correct++;
  });

  const grid = $('results-domain-grid');
  grid.innerHTML = '';
  Object.values(map).forEach(d => {
    const dp = Math.round(d.correct / d.total * 100);
    grid.insertAdjacentHTML('beforeend', `
      <div class="domain-result-card">
        <div class="domain-result-name">${d.name}</div>
        <div class="domain-result-score ${pctColor(dp)}">${dp}%</div>
        <div class="pb-detail">${d.correct}/${d.total} correct</div>
      </div>`);
  });

  // Answer review
  const reviewList = $('results-review-list');
  reviewList.innerHTML = '';
  quiz.answers.forEach((a, i) => {
    const cls  = a.isCorrect ? 'correct-item' : 'incorrect-item';
    const your = a.isCorrect ? '' : `<div class="review-item-wrong">Your answer: ${a.options[a.selected]}</div>`;
    reviewList.insertAdjacentHTML('beforeend', `
      <div class="review-item ${cls}">
        <div class="review-item-q"><strong>Q${i + 1}.</strong> ${a.question}</div>
        ${your}
        <div class="review-item-ans">Correct: <span>${a.options[a.correct]}</span></div>
        <div style="font-size:12px;color:var(--text-dim);margin-top:5px">${a.explanation}</div>
      </div>`);
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// GLOSSARY
// ═══════════════════════════════════════════════════════════════════════════

let glossTimer = null;

function initGlossary() {
  // Populate category dropdown from data
  const cats = [...new Set(GLOSSARY.map(g => g.category))].sort();
  const catSel = $('gloss-category');
  catSel.innerHTML = '<option value="all">All Categories</option>';
  cats.forEach(c => {
    const o = document.createElement('option');
    o.value = o.textContent = c;
    catSel.appendChild(o);
  });

  $('gloss-count').textContent = GLOSSARY.length;

  $('gloss-search').oninput = () => {
    clearTimeout(glossTimer);
    glossTimer = setTimeout(renderGlossary, 180);
  };
  $('gloss-exam').onchange     = renderGlossary;
  $('gloss-category').onchange = renderGlossary;

  renderGlossary();
}

function renderGlossary() {
  const q    = $('gloss-search').value.toLowerCase().trim();
  const exam = $('gloss-exam').value;
  const cat  = $('gloss-category').value;

  const filtered = GLOSSARY.filter(g => {
    if (exam !== 'all' && g.exam !== exam && !(exam === 'both' && g.exam === 'both')) return false;
    if (cat  !== 'all' && g.category !== cat) return false;
    if (q) {
      const hay = `${g.term} ${g.fullName || ''} ${g.definition} ${(g.relatedTerms || []).join(' ')}`.toLowerCase();
      return hay.includes(q);
    }
    return true;
  });

  $('gloss-showing').textContent = `Showing ${filtered.length} of ${GLOSSARY.length} terms`;

  const list = $('glossary-list');
  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">⊘</div><h3>No Results</h3><p>Try a different search term or clear the filters.</p></div>';
    return;
  }

  list.innerHTML = filtered.map(g => {
    const exClass = g.exam === 'core2' ? 'badge-core2' : 'badge-core1';
    const exLabel = g.exam === 'core1' ? 'Core 1' : g.exam === 'core2' ? 'Core 2' : 'Both';
    const portLine = g.port ? `<div style="font-family:var(--font-mono);font-size:12px;color:var(--amber);margin-bottom:6px">Port: ${g.port}</div>` : '';
    const related  = g.relatedTerms && g.relatedTerms.length
      ? `<div class="gloss-related"><strong>Related:</strong> ${g.relatedTerms.map(r => `<span class="related-tag" onclick="searchGlossaryTerm('${r}')">${r}</span>`).join('')}</div>`
      : '';
    return `
      <div class="gloss-entry">
        <div class="gloss-term-row">
          <span class="gloss-term">${g.term}</span>
          ${g.fullName ? `<span class="gloss-fullname">— ${g.fullName}</span>` : ''}
          <div class="gloss-badges">
            <span class="${exClass}">${exLabel}</span>
            <span class="gloss-cat-badge">${g.category}</span>
          </div>
        </div>
        ${portLine}
        <div class="gloss-definition">${g.definition}</div>
        ${related}
      </div>`;
  }).join('');
}

function searchGlossaryTerm(term) {
  $('gloss-search').value    = term;
  $('gloss-exam').value      = 'all';
  $('gloss-category').value  = 'all';
  renderGlossary();
  $('gloss-search').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ═══════════════════════════════════════════════════════════════════════════
// CHEAT SHEETS
// ═══════════════════════════════════════════════════════════════════════════

function initCheatSheets() {
  $$('#cs-tabs .cs-tab').forEach(tab => {
    tab.onclick = () => {
      $$('.cs-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      csActiveTable = tab.dataset.table;
      csSearch = '';
      $('cs-search').value = '';
      renderTable();
    };
  });

  $('cs-search').oninput = () => {
    csSearch = $('cs-search').value.toLowerCase().trim();
    renderTable();
  };

  renderTable();
}

function renderTable() {
  const tableData = CHEAT_SHEETS[csActiveTable];
  const container = $('cs-table-container');

  if (!tableData) {
    container.innerHTML = '<div class="no-data">This table has not been loaded yet. Check back after all data sections are complete.</div>';
    return;
  }

  let rows = csSearch
    ? tableData.rows.filter(row => row.some(cell => String(cell).toLowerCase().includes(csSearch)))
    : tableData.rows;

  if (!rows.length) {
    container.innerHTML = '<div class="no-data">No rows match your search.</div>';
    return;
  }

  const hl  = tableData.highlightCols || [];
  const amb = tableData.amberCols     || [];

  container.innerHTML = `
    <table class="cs-table">
      <thead><tr>${tableData.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>
        ${rows.map(row => `<tr>${row.map((cell, ci) =>
          `<td${hl.includes(ci) ? ' class="highlight"' : amb.includes(ci) ? ' class="amber-val"' : ''}>${cell}</td>`
        ).join('')}</tr>`).join('')}
      </tbody>
    </table>`;
}

// ═══════════════════════════════════════════════════════════════════════════
// PROGRESS & RADAR CHART
// ═══════════════════════════════════════════════════════════════════════════

function renderProgress() {
  const mastery  = getDomainMastery();
  const known    = Object.values(progress.flashcards).filter(v => v === 'know').length;
  const review   = Object.values(progress.flashcards).filter(v => v === 'review').length;
  const totalQ   = progress.quiz.history.reduce((s, h) => s + h.count,   0);
  const totalOk  = progress.quiz.history.reduce((s, h) => s + h.correct, 0);
  const avgScore = totalQ > 0 ? Math.round(totalOk / totalQ * 100) : 0;
  const avgColor = avgScore >= 80 ? 'green' : avgScore >= 60 ? 'amber' : 'red';

  $('progress-overall-stats').innerHTML = `
    <div class="progress-stat-row"><span class="ps-label">Cards Mastered</span><span class="ps-value">${known}</span></div>
    <div class="progress-stat-row"><span class="ps-label">Cards Needing Review</span><span class="ps-value">${review}</span></div>
    <div class="progress-stat-row"><span class="ps-label">Total Flashcards</span><span class="ps-value">${FLASHCARDS.length}</span></div>
    <div class="progress-stat-row"><span class="ps-label">Quizzes Completed</span><span class="ps-value">${progress.quiz.history.length}</span></div>
    <div class="progress-stat-row"><span class="ps-label">Questions Answered</span><span class="ps-value">${totalQ}</span></div>
    <div class="progress-stat-row"><span class="ps-label">Overall Accuracy</span><span class="ps-value" style="color:var(--${avgColor})">${totalQ > 0 ? avgScore + '%' : '—'}</span></div>`;

  renderProgressBars('progress-core1-list', 'core1', mastery);
  renderProgressBars('progress-core2-list', 'core2', mastery);

  // Radar chart — all 9 domains
  const radarData = [];
  ['core1', 'core2'].forEach(exam => {
    Object.entries(DOMAINS[exam]).forEach(([key, d]) => {
      radarData.push({ name: d.name, pct: mastery[exam][key] || 0 });
    });
  });
  drawRadarChart(radarData);

  // Weak spots
  const allAttempted = [];
  ['core1', 'core2'].forEach(exam => {
    Object.entries(DOMAINS[exam]).forEach(([key, d]) => {
      const total = getTotalInDomain(exam, key);
      if (total > 0) allAttempted.push({ name: d.name, pct: mastery[exam][key] || 0, exam, key });
    });
  });

  const weakEl = $('weak-spots-list');
  const weak   = allAttempted.filter(d => d.pct < 80).sort((a, b) => a.pct - b.pct);

  if (!weak.length) {
    weakEl.innerHTML = `<div class="empty-state"><p>${allAttempted.length ? 'All attempted domains are above 80% — great work!' : 'Take some quizzes to discover your weak spots.'}</p></div>`;
  } else {
    weakEl.innerHTML = weak.slice(0, 6).map(d => `
      <div class="weak-spot-item">
        <span class="ws-name">
          <span class="${d.exam === 'core1' ? 'badge-core1' : 'badge-core2'}" style="margin-right:6px">${d.exam === 'core1' ? 'C1' : 'C2'}</span>
          ${d.name}
        </span>
        <span class="ws-pct">${d.pct}%</span>
      </div>`).join('');
  }

  // Quiz history
  const histEl = $('quiz-history-list');
  if (!progress.quiz.history.length) {
    histEl.innerHTML = '<div class="empty-state"><p>No quiz sessions yet.</p></div>';
  } else {
    histEl.innerHTML = progress.quiz.history.slice(0, 10).map(h => {
      const examLabel   = h.exam === 'all' ? 'All' : h.exam === 'core1' ? 'Core 1' : 'Core 2';
      const domainLabel = h.domain === 'all'
        ? 'All Domains'
        : (DOMAINS[h.exam] && DOMAINS[h.exam][h.domain] ? DOMAINS[h.exam][h.domain].name : h.domain);
      const date = new Date(h.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      return `
        <div class="history-item">
          <div class="history-score ${pctColor(h.pct)}">${h.pct}%</div>
          <div class="history-detail">
            <div>${h.correct}/${h.count} correct · ${examLabel} · ${domainLabel}</div>
            <div class="history-date">${date} · ${fmtTime(h.time || 0)}</div>
          </div>
        </div>`;
    }).join('');
  }
}

function renderProgressBars(containerId, exam, mastery) {
  const el = $(containerId);
  if (!el) return;
  el.innerHTML = '';
  Object.entries(DOMAINS[exam]).forEach(([key, d]) => {
    const pct    = mastery[exam][key] || 0;
    const total  = getTotalInDomain(exam, key);
    const ok     = getCorrectInDomain(exam, key);
    const detail = total > 0 ? `${ok}/${total} questions correct · ` : 'No quiz data yet · ';
    const amber  = exam === 'core2';
    el.insertAdjacentHTML('beforeend', `
      <div class="pb-item">
        <div class="pb-header">
          <span class="pb-name">${d.name}</span>
          <span class="pb-pct">${pct}%</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill${amber ? ' amber' : ''}" style="width:${pct}%"></div>
        </div>
        <div class="pb-detail">${detail}Exam weight: ${d.weight}</div>
      </div>`);
  });
}

// ── Domain mastery helpers ─────────────────────────────────────────────────

function getDomainMastery() {
  const result = { core1: {}, core2: {} };
  ['core1', 'core2'].forEach(exam => {
    Object.keys(DOMAINS[exam]).forEach(key => {
      const total = getTotalInDomain(exam, key);
      result[exam][key] = total > 0 ? Math.round(getCorrectInDomain(exam, key) / total * 100) : 0;
    });
  });
  return result;
}

function getTotalInDomain(exam, key) {
  return progress.quiz.history.reduce((sum, s) =>
    sum + (s.answers ? s.answers.filter(a => a.exam === exam && a.domain === key).length : 0), 0);
}

function getCorrectInDomain(exam, key) {
  return progress.quiz.history.reduce((sum, s) =>
    sum + (s.answers ? s.answers.filter(a => a.exam === exam && a.domain === key && a.isCorrect).length : 0), 0);
}

// ── SVG Radar Chart ────────────────────────────────────────────────────────

function svgEl(tag, attrs) {
  const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
  return e;
}

function polyPoints(n, cx, cy, r) {
  return Array.from({ length: n }, (_, i) => {
    const a = (2 * Math.PI / n) * i - Math.PI / 2;
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(' ');
}

function drawRadarChart(domains) {
  const svg = $('radar-svg');
  if (!svg || domains.length < 3) return;
  svg.innerHTML = '';
  const cx = 190, cy = 190, r = 120, N = domains.length;

  // Grid rings at 25 / 50 / 75 / 100 %
  [0.25, 0.5, 0.75, 1].forEach((f, i) => {
    svg.appendChild(svgEl('polygon', {
      points: polyPoints(N, cx, cy, r * f),
      fill:   'none',
      stroke: i === 3 ? '#2e3d55' : '#1a2236',
      'stroke-width': i === 3 ? '1.5' : '0.8'
    }));
    // % label near top of each ring
    const la = -Math.PI / 2;
    const txt = svgEl('text', {
      x: (cx + r * f * Math.cos(la) + 4).toFixed(1),
      y: (cy + r * f * Math.sin(la) - 3).toFixed(1),
      fill: '#3d526e', 'font-size': '9',
      'font-family': 'monospace', 'text-anchor': 'start'
    });
    txt.textContent = Math.round(f * 100) + '%';
    svg.appendChild(txt);
  });

  // Axis spokes
  domains.forEach((_, i) => {
    const a = (2 * Math.PI / N) * i - Math.PI / 2;
    svg.appendChild(svgEl('line', {
      x1: cx, y1: cy,
      x2: (cx + r * Math.cos(a)).toFixed(2),
      y2: (cy + r * Math.sin(a)).toFixed(2),
      stroke: '#1a2236', 'stroke-width': '1'
    }));
  });

  // Outer area (faint)
  svg.appendChild(svgEl('polygon', {
    points: polyPoints(N, cx, cy, r),
    fill: 'rgba(0,212,255,0.02)', stroke: 'none'
  }));

  // Data polygon
  const dPts = domains.map((d, i) => {
    const a  = (2 * Math.PI / N) * i - Math.PI / 2;
    const dr = r * d.pct / 100;
    return `${(cx + dr * Math.cos(a)).toFixed(2)},${(cy + dr * Math.sin(a)).toFixed(2)}`;
  }).join(' ');

  svg.appendChild(svgEl('polygon', {
    points: dPts,
    fill:   'rgba(0,212,255,0.18)',
    stroke: '#00d4ff',
    'stroke-width': '2',
    filter: 'drop-shadow(0 0 6px rgba(0,212,255,0.5))'
  }));

  // Data-point dots
  domains.forEach((d, i) => {
    const a  = (2 * Math.PI / N) * i - Math.PI / 2;
    const dr = r * d.pct / 100;
    svg.appendChild(svgEl('circle', {
      cx: (cx + dr * Math.cos(a)).toFixed(2),
      cy: (cy + dr * Math.sin(a)).toFixed(2),
      r: '4', fill: '#00d4ff', stroke: '#0d1220', 'stroke-width': '2'
    }));
  });

  // Labels (outside outer ring)
  domains.forEach((d, i) => {
    const a  = (2 * Math.PI / N) * i - Math.PI / 2;
    const lr = r + 28;
    const lx = cx + lr * Math.cos(a);
    const ly = cy + lr * Math.sin(a);

    // Split long names across two lines
    const words = d.name.split(' ');
    const lines = [];
    let cur = '';
    words.forEach(w => {
      if ((cur + ' ' + w).trim().length <= 13 || !cur) cur = (cur + ' ' + w).trim();
      else { lines.push(cur); cur = w; }
    });
    if (cur) lines.push(cur);

    const g = svgEl('g', {});
    lines.forEach((line, li) => {
      const t = svgEl('text', {
        x: lx.toFixed(2),
        y: (ly + (li - (lines.length - 1) / 2) * 12).toFixed(2),
        fill: '#6b7fa3', 'font-size': '10',
        'font-family': 'monospace',
        'text-anchor': 'middle',
        'dominant-baseline': 'middle'
      });
      t.textContent = line;
      g.appendChild(t);
    });
    svg.appendChild(g);
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// KEYBOARD SHORTCUTS
// ═══════════════════════════════════════════════════════════════════════════

document.addEventListener('keydown', e => {
  const active = document.querySelector('.section.active')?.id;
  if (active !== 'section-flashcards') return;
  if (['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName)) return;

  switch (e.key) {
    case ' ':          e.preventDefault(); flipCard(); break;
    case 'ArrowRight': e.preventDefault(); nextCard(); break;
    case 'ArrowLeft':  e.preventDefault(); prevCard(); break;
    case '1': markCard('know');   break;
    case '2': markCard('review'); break;
    case '3': markCard('skip');   break;
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════════════

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmtTime(secs) {
  const m = Math.floor(secs / 60), s = secs % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function cap(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

function pctColor(pct) {
  return pct >= 80 ? 'good' : pct >= 60 ? 'ok' : 'bad';
}

function populateDomainSelect(selectId, examFilter) {
  const sel = $(selectId);
  if (!sel) return;
  const prev = sel.value;
  sel.innerHTML = '<option value="all">All Domains</option>';

  if (examFilter === 'all') {
    ['core1', 'core2'].forEach(exam => {
      const grp = document.createElement('optgroup');
      grp.label = exam === 'core1' ? 'Core 1 (220-1201)' : 'Core 2 (220-1202)';
      Object.entries(DOMAINS[exam]).forEach(([key, d]) => {
        const o = document.createElement('option');
        o.value = key; o.textContent = d.name;
        grp.appendChild(o);
      });
      sel.appendChild(grp);
    });
  } else {
    Object.entries(DOMAINS[examFilter] || {}).forEach(([key, d]) => {
      const o = document.createElement('option');
      o.value = key; o.textContent = d.name;
      sel.appendChild(o);
    });
  }

  if ([...sel.options].some(o => o.value === prev)) sel.value = prev;
}

// ═══════════════════════════════════════════════════════════════════════════
// BOOTSTRAP
// ═══════════════════════════════════════════════════════════════════════════

function init() {
  loadProgress();

  // Navigation — sidebar + bottom nav
  $$('.nav-btn[data-section]').forEach(btn =>
    btn.addEventListener('click', () => navigateTo(btn.dataset.section))
  );

  // Quick-launch buttons on dashboard
  $$('.quick-btn[data-section]').forEach(btn =>
    btn.addEventListener('click', () => navigateTo(btn.dataset.section))
  );

  // Reset progress
  $('reset-progress-btn').onclick = resetAllProgress;

  // Start on dashboard
  navigateTo('dashboard');
}

document.addEventListener('DOMContentLoaded', init);
