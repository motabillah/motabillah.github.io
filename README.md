<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>The Peoples IQ Test — Free CHC Cognitive Assessment</title>
<meta name="description" content="Take the free Peoples IQ Test — a CHC-grounded cognitive assessment across 6 broad ability domains. No sign-up required. Get your instant IQ score in minutes.">
<meta name="keywords" content="free IQ test, cognitive assessment, CHC theory, intelligence test, no sign up IQ test, online IQ test, instant IQ score, broad ability domains">
<meta name="author" content="The Peoples IQ Test">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.peoplesiqtest.com/">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<link rel="apple-touch-icon" href="favicon.svg">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.peoplesiqtest.com/">
<meta property="og:title" content="The Peoples IQ Test — Free CHC Cognitive Assessment">
<meta property="og:description" content="A free, no sign-up CHC-grounded cognitive assessment across 6 broad ability domains. Get your instant IQ score in minutes.">
<meta property="og:image" content="https://www.peoplesiqtest.com/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="The Peoples IQ Test — Free Cognitive Assessment">
<meta property="og:site_name" content="The Peoples IQ Test">
<meta property="og:locale" content="en_US">

<!-- Twitter / X Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://www.peoplesiqtest.com/">
<meta name="twitter:title" content="The Peoples IQ Test — Free CHC Cognitive Assessment">
<meta name="twitter:description" content="A free, no sign-up CHC-grounded cognitive assessment across 6 broad ability domains. Get your instant IQ score in minutes.">
<meta name="twitter:image" content="https://www.peoplesiqtest.com/og-image.png">
<meta name="twitter:image:alt" content="The Peoples IQ Test — Free Cognitive Assessment">

<!-- Schema.org Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "The Peoples IQ Test",
  "url": "https://www.peoplesiqtest.com/",
  "description": "A free, no sign-up CHC-grounded cognitive assessment across 6 broad ability domains with instant IQ scoring.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Free to use",
    "No sign-up required",
    "CHC-grounded cognitive assessment",
    "6 broad ability domains",
    "Instant IQ scoring"
  ]
}
</script>
<style>
/* ============================================================
   THE PEOPLES IQ TEST — Styles
   Mobile-first, WCAG AA contrast, reduced-motion aware
   ============================================================ */
:root {
  --clr-bg:        #0f1117;
  --clr-surface:   #1a1d27;
  --clr-surface2:  #242838;
  --clr-border:    #2e3347;
  --clr-accent:    #4f7cff;
  --clr-accent2:   #7c4fff;
  --clr-success:   #22c55e;
  --clr-warn:      #f59e0b;
  --clr-danger:    #ef4444;
  --clr-text:      #e8eaf0;
  --clr-muted:     #8892b0;
  --radius:        12px;
  --radius-sm:     8px;
  --transition:    0.22s ease;
}
@media (prefers-color-scheme: light) {
  :root {
    --clr-bg:      #f0f2f8;
    --clr-surface: #ffffff;
    --clr-surface2:#eef0f8;
    --clr-border:  #d0d4e8;
    --clr-text:    #1a1d27;
    --clr-muted:   #5a6480;
  }
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
  background:var(--clr-bg);
  color:var(--clr-text);
  min-height:100dvh;
  display:flex;
  flex-direction:column;
  align-items:center;
}
@media(prefers-reduced-motion:reduce){
  *{transition:none!important;animation:none!important}
}

/* ---- Layout ---- */
#app{width:100%;max-width:640px;padding:0 16px;flex:1;display:flex;flex-direction:column}
.screen{display:none;flex-direction:column;gap:16px;padding:20px 0 40px}
.screen.active{display:flex}

/* ---- Ad Slots ---- */
/* AD-PLACEMENT-BANNER-TOP */
.ad-slot-top{
  width:100%;
  min-height:60px;
  background:var(--clr-surface2);
  border:2px dashed var(--clr-border);
  border-radius:var(--radius-sm);
  display:flex;align-items:center;justify-content:center;
  color:var(--clr-muted);font-size:12px;letter-spacing:.05em;
  margin-bottom:4px;
}
/* AD-PLACEMENT-SIDEBAR-RESULTS */
.ad-slot-results{
  width:100%;
  min-height:90px;
  background:var(--clr-surface2);
  border:2px dashed var(--clr-border);
  border-radius:var(--radius-sm);
  display:flex;align-items:center;justify-content:center;
  color:var(--clr-muted);font-size:12px;letter-spacing:.05em;
  margin:8px 0;
}

/* ---- Progress bar ---- */
#progress-bar-wrap{
  position:sticky;top:0;z-index:50;
  background:var(--clr-bg);
  padding:8px 0 4px;
  border-bottom:1px solid var(--clr-border);
  display:none;
}
#progress-bar-wrap.visible{display:block}
#progress-label{font-size:12px;color:var(--clr-muted);margin-bottom:4px;display:flex;justify-content:space-between}
#progress-bar-track{height:6px;background:var(--clr-surface2);border-radius:99px;overflow:hidden}
#progress-bar-fill{height:100%;background:linear-gradient(90deg,var(--clr-accent),var(--clr-accent2));border-radius:99px;transition:width var(--transition)}
#subtest-timer{font-size:13px;color:var(--clr-warn);font-weight:600;text-align:right;margin-top:2px;min-height:18px}

/* ---- Typography ---- */
h1{font-size:clamp(24px,6vw,36px);font-weight:800;line-height:1.15;letter-spacing:-.02em}
h2{font-size:clamp(18px,4vw,24px);font-weight:700}
h3{font-size:16px;font-weight:600}
.subtitle{color:var(--clr-muted);font-size:15px;line-height:1.6}
.tag{display:inline-block;padding:2px 10px;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase}
.tag-gf{background:#4f7cff22;color:#7aa0ff}
.tag-gc{background:#22c55e22;color:#4ade80}
.tag-gq{background:#f59e0b22;color:#fbbf24}
.tag-gv{background:#a855f722;color:#c084fc}
.tag-gwm{background:#ef444422;color:#f87171}
.tag-gs{background:#06b6d422;color:#22d3ee}

/* ---- Cards ---- */
.card{background:var(--clr-surface);border:1px solid var(--clr-border);border-radius:var(--radius);padding:20px}
.card-sm{padding:14px 16px}

/* ---- Buttons ---- */
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  padding:14px 24px;border-radius:var(--radius);border:none;
  font-size:16px;font-weight:600;cursor:pointer;
  transition:transform var(--transition),opacity var(--transition);
  min-height:48px;touch-action:manipulation;user-select:none;
  width:100%;
}
.btn:active{transform:scale(.97)}
.btn-primary{background:linear-gradient(135deg,var(--clr-accent),var(--clr-accent2));color:#fff}
.btn-secondary{background:var(--clr-surface2);color:var(--clr-text);border:1px solid var(--clr-border)}
.btn-sm{padding:10px 18px;font-size:14px;min-height:40px}
.btn-danger{background:#ef444420;color:var(--clr-danger);border:1px solid var(--clr-danger)}

/* ---- Answer options ---- */
.options-grid{display:flex;flex-direction:column;gap:10px}
.option-btn{
  background:var(--clr-surface);
  border:2px solid var(--clr-border);
  border-radius:var(--radius);
  padding:14px 16px;
  text-align:left;
  font-size:15px;
  color:var(--clr-text);
  cursor:pointer;
  transition:border-color var(--transition),background var(--transition);
  min-height:52px;
  display:flex;align-items:center;gap:10px;
  touch-action:manipulation;
}
.option-btn:active{transform:scale(.99)}
.option-btn.selected{border-color:var(--clr-accent);background:var(--clr-accent)18}
.option-btn .opt-letter{
  width:28px;height:28px;border-radius:50%;
  background:var(--clr-surface2);
  display:flex;align-items:center;justify-content:center;
  font-size:12px;font-weight:700;flex-shrink:0;
}
.option-btn.selected .opt-letter{background:var(--clr-accent);color:#fff}

/* ---- SVG matrix / stimuli ---- */
.stimulus-wrap{
  width:100%;
  display:flex;justify-content:center;align-items:center;
  padding:12px 0;
}
.stimulus-wrap svg{max-width:100%;height:auto}

/* ---- Digit keypad ---- */
#digit-display{
  font-size:clamp(28px,8vw,48px);
  font-weight:800;letter-spacing:0.15em;
  text-align:center;padding:20px 12px;
  background:var(--clr-surface2);
  border-radius:var(--radius);
  min-height:80px;
  display:flex;align-items:center;justify-content:center;
}
#keypad{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
.key-btn{
  background:var(--clr-surface);
  border:2px solid var(--clr-border);
  border-radius:var(--radius);
  font-size:22px;font-weight:700;
  color:var(--clr-text);
  cursor:pointer;
  padding:18px 0;
  touch-action:manipulation;
}
.key-btn:active{background:var(--clr-accent);color:#fff;border-color:var(--clr-accent)}
.key-btn.key-clear{background:var(--clr-surface2);font-size:14px}
.key-btn.key-submit{background:var(--clr-accent);color:#fff;border-color:var(--clr-accent);font-size:14px}

/* ---- Symbol-digit matching ---- */
#sym-key{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-bottom:12px}
.sym-key-cell{background:var(--clr-surface2);border-radius:6px;padding:8px 4px;text-align:center;font-size:13px}
.sym-key-cell .sym{font-size:20px;display:block}
.sym-key-cell .dig{font-weight:700;color:var(--clr-accent)}
#sym-task{display:flex;flex-direction:column;gap:12px}
.sym-item{display:flex;align-items:center;justify-content:space-between;background:var(--clr-surface);border:1px solid var(--clr-border);border-radius:var(--radius-sm);padding:10px 14px}
.sym-item .sym-big{font-size:30px}
.sym-digits{display:flex;gap:8px}
.sym-digit-btn{
  width:42px;height:42px;border-radius:8px;
  background:var(--clr-surface2);border:2px solid var(--clr-border);
  font-size:18px;font-weight:700;cursor:pointer;touch-action:manipulation;
}
.sym-digit-btn.selected{background:var(--clr-accent);border-color:var(--clr-accent);color:#fff}

/* ---- Results ---- */
#results-score{text-align:center;padding:24px 0 8px}
.iq-display{font-size:clamp(56px,15vw,96px);font-weight:900;line-height:1;
  background:linear-gradient(135deg,var(--clr-accent),var(--clr-accent2));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.iq-label{font-size:14px;color:var(--clr-muted);margin-top:4px}
.iq-band{font-size:18px;font-weight:700;color:var(--clr-text);margin-top:6px}
.pct-label{font-size:14px;color:var(--clr-muted)}

.factor-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--clr-border)}
.factor-row:last-child{border-bottom:none}
.factor-name{flex:1;font-size:14px;font-weight:600}
.factor-score-num{width:38px;text-align:right;font-weight:700;font-size:15px}
.factor-bar-wrap{flex:2;height:8px;background:var(--clr-surface2);border-radius:99px;overflow:hidden}
.factor-bar{height:100%;border-radius:99px;background:linear-gradient(90deg,var(--clr-accent),var(--clr-accent2));transition:width .8s ease}

/* ---- Radar chart ---- */
#radar-wrap{width:100%;display:flex;justify-content:center;padding:8px 0}

/* ---- Methodology ---- */
.methodology{font-size:13px;color:var(--clr-muted);line-height:1.7}
.methodology h4{color:var(--clr-text);font-size:14px;margin-bottom:6px;margin-top:14px}
.methodology cite{font-style:italic;color:var(--clr-accent)}

/* ---- Disclaimer ---- */
.disclaimer{
  background:#ef444410;border:1px solid #ef444430;
  border-radius:var(--radius-sm);padding:12px 14px;
  font-size:12px;color:#f87171;line-height:1.6;
}

/* ---- Instruction screen ---- */
.instr-card{background:var(--clr-surface);border:1px solid var(--clr-border);border-radius:var(--radius);padding:20px}
.factor-icon{font-size:36px;text-align:center;margin-bottom:8px}

/* ---- Misc ---- */
.divider{height:1px;background:var(--clr-border);margin:4px 0}
.flex-row{display:flex;gap:10px}
.flex-row .btn{flex:1}
.text-center{text-align:center}
.mt-auto{margin-top:auto}
.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}

/* ---- Practice badge ---- */
.practice-badge{
  display:inline-block;background:var(--clr-warn);color:#000;
  font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;
  margin-bottom:8px;letter-spacing:.06em;text-transform:uppercase;
}
</style>
</head>
<body>

<!-- ===== STICKY PROGRESS BAR ===== -->
<div id="app">
  <div id="progress-bar-wrap">
    <div id="progress-label">
      <span id="progress-subtest">Subtest</span>
      <span id="progress-counter">0 / 0</span>
    </div>
    <div id="progress-bar-track"><div id="progress-bar-fill" style="width:0%"></div></div>
    <div id="subtest-timer"></div>
  </div>

  <!-- ===== WELCOME SCREEN ===== -->
  <div id="screen-welcome" class="screen active">
    <!-- AD-PLACEMENT-BANNER-TOP -->
    <div class="ad-slot-top" data-ad-id="banner-top">
      <script async="async" data-cfasync="false" src="https://wistfulseverely.com/c3c07b26189b8918c94d289e7eb329da/invoke.js"></script>
      <div id="container-c3c07b26189b8918c94d289e7eb329da"></div>
    </div>

    <div style="text-align:center;padding:16px 0 8px">
      <div style="font-size:48px;margin-bottom:8px">🧠</div>
      <h1>The Peoples<br>IQ Test</h1>
      <p class="subtitle" style="margin-top:10px">A CHC-grounded cognitive assessment<br>across 6 broad ability domains</p>
    </div>

    <div class="disclaimer">
      <strong>Disclaimer:</strong> This is an educational and entertainment estimate only. It is <em>not</em> a clinically validated assessment, diagnosis, or substitute for professional psychological evaluation. Real IQ testing requires trained administration and population-standardized norms.
    </div>

    <div class="card card-sm">
      <h3 style="margin-bottom:8px">What to expect</h3>
      <ul style="padding-left:18px;font-size:14px;color:var(--clr-muted);line-height:1.8">
        <li>~60 questions across 6 cognitive domains</li>
        <li>12 subtests — each starts with a practice item</li>
        <li>Some subtests are timed (shown clearly)</li>
        <li>~25–35 minutes total</li>
        <li>Progress auto-saves if you refresh</li>
      </ul>
    </div>

    <div id="resume-wrap" style="display:none">
      <div class="card card-sm" style="border-color:var(--clr-accent)">
        <p style="font-size:14px;margin-bottom:10px">You have a saved session. Continue where you left off?</p>
        <div class="flex-row">
          <button class="btn btn-primary btn-sm" onclick="resumeTest()">Resume</button>
          <button class="btn btn-secondary btn-sm" onclick="startFresh()">Restart</button>
        </div>
      </div>
    </div>

    <button class="btn btn-primary" id="start-btn" onclick="startTest()">Begin Test</button>
    <p class="text-center" style="font-size:12px;color:var(--clr-muted)">Find a quiet place · No interruptions recommended</p>
  </div>

  <!-- ===== INSTRUCTION SCREEN ===== -->
  <div id="screen-instruction" class="screen">
    <div class="factor-icon" id="instr-icon"></div>
    <h2 id="instr-title"></h2>
    <p class="subtitle" id="instr-desc"></p>
    <div class="card" id="instr-rules"></div>
    <div class="card" style="border-color:var(--clr-warn)">
      <div class="practice-badge">Practice Item</div>
      <div id="practice-item-wrap"></div>
    </div>
    <button class="btn btn-primary" id="instr-next-btn" onclick="endInstruction()">Start Subtest</button>
  </div>

  <!-- ===== QUESTION SCREEN ===== -->
  <div id="screen-question" class="screen">
    <div id="q-factor-tag"></div>
    <div class="card" id="q-prompt-card">
      <p id="q-prompt-text" style="font-size:16px;line-height:1.6"></p>
      <div id="q-stimulus" class="stimulus-wrap" style="display:none"></div>
    </div>
    <!-- Digit span special UI -->
    <div id="digit-span-ui" style="display:none">
      <div id="digit-display"></div>
      <div id="keypad"></div>
    </div>
    <!-- Symbol-digit matching UI -->
    <div id="sym-digit-ui" style="display:none">
      <div id="sym-key"></div>
      <div id="sym-task"></div>
    </div>
    <!-- Standard options -->
    <div id="q-options" class="options-grid"></div>
    <button class="btn btn-primary" id="q-next-btn" style="display:none;margin-top:8px" onclick="submitAnswer()">Next</button>
  </div>

  <!-- ===== COMPLETE SCREEN ===== -->
  <div id="screen-complete" class="screen">
    <div class="text-center">
      <div style="font-size:48px">✅</div>
      <h2 style="margin-top:10px">Test Complete!</h2>
      <p class="subtitle">Calculating your results…</p>
    </div>
    <button class="btn btn-primary" onclick="showResults()">View Results</button>
  </div>

  <!-- ===== RESULTS SCREEN ===== -->
  <div id="screen-results" class="screen">
    <!-- AD-PLACEMENT-SIDEBAR-RESULTS -->
    <div class="ad-slot-results" data-ad-id="results-mid">
      <script>
        atOptions = {
          'key' : '7e4adf7db785d969e68cab7ca2f67aa3',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      </script>
      <script src="https://wistfulseverely.com/7e4adf7db785d969e68cab7ca2f67aa3/invoke.js"></script>
    </div>

    <div id="results-score">
      <div class="iq-display" id="res-iq">--</div>
      <div class="iq-label">Full-Scale IQ (g estimate)</div>
      <div class="iq-band" id="res-band">--</div>
      <div class="pct-label" id="res-pct">--</div>
    </div>

    <div class="card">
      <h3 style="margin-bottom:14px">Factor Profile</h3>
      <div id="factor-bars"></div>
    </div>

    <div id="radar-wrap">
      <svg id="radar-svg" viewBox="0 0 300 300" width="300" height="300" aria-label="Radar chart of factor scores"></svg>
    </div>

    <div class="card">
      <h3 style="margin-bottom:12px">Subtest Breakdown</h3>
      <div id="subtest-breakdown"></div>
    </div>

    <div class="card">
      <h3 style="margin-bottom:10px">Time Summary</h3>
      <div id="time-summary" style="font-size:14px;color:var(--clr-muted)"></div>
    </div>

    <div class="card methodology">
      <h3 style="color:var(--clr-text);margin-bottom:8px">Methodology</h3>
      <p>This test is structured around the <strong>Cattell–Horn–Carroll (CHC)</strong> hierarchical model of cognitive abilities and draws on:</p>
      <h4>Theoretical Foundations</h4>
      <p><cite>Spearman (1904)</cite> — Introduced the <em>g</em> factor (general intelligence) and the positive manifold: diverse cognitive tasks intercorrelate because they share a common general factor. This test reports an overall <em>g</em>-composite reflecting that shared variance.</p>
      <p><cite>Carroll (1993)</cite> — Three-stratum theory: Stratum III (g), Stratum II (broad abilities: Gf, Gc, Gq, Gv, Gwm, Gs), Stratum I (narrow). Scoring mirrors this: items → subtest scaled scores → index scores → Full-Scale composite.</p>
      <p><cite>Jensen (1998)</cite> — Items differ in g-loading. High-g subtests (matrix reasoning, number series) are weighted more heavily in the Full-Scale composite.</p>
      <h4>Score Structure</h4>
      <p>Mirrors the <strong>Stanford-Binet 5 (SB5)</strong> five-factor structure and <strong>WAIS-IV/WAIS-5</strong> index scores (VCI, VSI, FRI, WMI, PSI). Scaled scores: mean 10, SD 3. Index scores: mean 100, SD 15.</p>
      <h4>Norming Caveat</h4>
      <p>Difficulty values and g-loadings are <em>author-assigned estimates</em>, not derived from population norming studies. IQ = 100 + 15·z, where z is weighted proportion-correct transformed to a z-score using assumed item difficulties. <strong>These are not empirically standardized norms.</strong></p>
    </div>

    <div class="disclaimer">
      <strong>Full Disclaimer:</strong> This instrument is for educational and entertainment purposes only. It has not been normed on a representative population sample, validated against clinical criteria, or reviewed by a licensed psychologist. Scores should not be used for academic placement, employment decisions, medical/psychiatric diagnosis, or any high-stakes purpose. Real IQ assessment (e.g., WAIS-5, SB5) requires administration by a trained psychologist under standardized conditions. Results may be affected by fatigue, distractions, test-taking experience, and cultural/linguistic background.
    </div>

    <button class="btn btn-secondary" onclick="restartTest()" style="margin-top:8px">Take Test Again</button>
  </div>
</div>

<script>
/* ================================================================
   THE PEOPLES IQ TEST — Engine
   Sections:
     1. ITEM BANK
     2. TEST ENGINE (state, sequencing, timing)
     3. SCORING
     4. RENDERING / UI
   ================================================================ */

// ================================================================
// SECTION 1: ITEM BANK
// Each item: { id, factor, subtest, type, prompt, stimulus?,
//              options, correctAnswer, difficulty (p-value 0-1),
//              gLoading (0-1) }
// difficulty: expected proportion correct in norming population
// gLoading: weight in g-composite (Jensen 1998)
// ================================================================

const SUBTESTS = [
  { id:'matrix',   factor:'Gf',  name:'Matrix Reasoning',         icon:'🔢', color:'tag-gf',
    desc:'Identify the missing piece that completes the pattern in a 3×3 matrix.',
    rules:'Look at the 3×3 grid of shapes. One cell is missing. Select the answer that correctly completes the pattern. Patterns may involve shape, color, size, or number.',
    timed:false, gLoad:0.78 },
  { id:'series',   factor:'Gf',  name:'Series Completion',        icon:'🔢', color:'tag-gf',
    desc:'Complete number sequences, letter patterns, and logical series.',
    rules:'Find the rule governing the sequence and select the next element or the missing element.',
    timed:false, gLoad:0.74 },
  { id:'vocab',    factor:'Gc',  name:'Vocabulary',               icon:'📚', color:'tag-gc',
    desc:'Select the word most similar or opposite in meaning.',
    rules:'Read the target word and choose the answer closest in meaning (synonym) or opposite in meaning (antonym), as specified.',
    timed:false, gLoad:0.65 },
  { id:'analogies',factor:'Gc',  name:'Verbal Analogies',         icon:'📚', color:'tag-gc',
    desc:'Complete word analogies and answer general knowledge questions.',
    rules:'For analogies, find the relationship between the first pair and apply it to complete the second pair. For general knowledge, select the best answer.',
    timed:false, gLoad:0.62 },
  { id:'arith',    factor:'Gq',  name:'Arithmetic',               icon:'🔢', color:'tag-gq',
    desc:'Mental math, ratios, proportions, and word problems.',
    rules:'Work mentally — no calculator. Select the correct numerical answer. Read each problem carefully.',
    timed:false, gLoad:0.66 },
  { id:'numrel',   factor:'Gq',  name:'Number Relationships',     icon:'🔢', color:'tag-gq',
    desc:'Find values that complete equations or quantitative patterns.',
    rules:'Identify the mathematical relationship and find the missing value.',
    timed:false, gLoad:0.68 },
  { id:'rotation', factor:'Gv',  name:'Mental Rotation',          icon:'🔷', color:'tag-gv',
    desc:'Decide if two figures are the same shape (rotated) or mirror images.',
    rules:'The target figure is on the left. Is the answer figure the SAME shape (just rotated) or a MIRROR image? Choose Same or Mirror.',
    timed:false, gLoad:0.58 },
  { id:'fold',     factor:'Gv',  name:'Paper Folding',            icon:'🔷', color:'tag-gv',
    desc:'Predict what a folded/punched paper looks like when unfolded.',
    rules:'A square paper is folded (dotted line shows the fold), then a hole is punched. Select which unfolded result shows the correct hole positions.',
    timed:false, gLoad:0.55 },
  { id:'digit',    factor:'Gwm', name:'Digit Span',               icon:'🧠', color:'tag-gwm',
    desc:'Remember and recall digit sequences forward and backward.',
    rules:'Digits appear one at a time on screen. Then enter them in order on the keypad. Later sequences ask for BACKWARD recall — type the digits in reverse order.',
    timed:false, gLoad:0.60 },
  { id:'lns',      factor:'Gwm', name:'Letter–Number Sequencing', icon:'🧠', color:'tag-gwm',
    desc:'Reorder a mixed sequence of letters and numbers.',
    rules:'A sequence of mixed letters and numbers is shown. Reorder them: numbers first (ascending), then letters (alphabetical). Select the correct reordered sequence.',
    timed:false, gLoad:0.62 },
  { id:'symdig',   factor:'Gs',  name:'Symbol–Digit Matching',    icon:'⚡', color:'tag-gs',
    desc:'Match symbols to digits using the key shown. Score as many as possible within the time limit.',
    rules:'A key maps symbols to digits (1–9). For each symbol shown, tap the matching digit as quickly and accurately as possible. You have 90 seconds.',
    timed:true, timeLimit:90, gLoad:0.52 },
  { id:'viscomp',  factor:'Gs',  name:'Visual Comparison',        icon:'⚡', color:'tag-gs',
    desc:'Quickly decide if two side-by-side figures are identical or different.',
    rules:'Two figures appear. Tap SAME if they are identical, or DIFFERENT if anything differs. Answer as quickly as possible — each item has a 6-second limit.',
    timed:true, timeLimit:6, gLoad:0.50 },
];

// Helper: build a 3x3 matrix SVG. cells = array of 9 SVG strings (last = answer slot)
function makeMatrixSVG(cells, answerIdx=8) {
  const sz=80, gap=4, full=sz*3+gap*4;
  let s=`<svg viewBox="0 0 ${full} ${full}" width="260" height="260">`;
  for(let i=0;i<9;i++){
    const col=i%3, row=Math.floor(i/3);
    const x=gap+col*(sz+gap), y=gap+row*(sz+gap);
    s+=`<rect x="${x}" y="${y}" width="${sz}" height="${sz}" rx="4" fill="#242838" stroke="#2e3347" stroke-width="1.5"/>`;
    if(i===answerIdx){
      s+=`<text x="${x+sz/2}" y="${y+sz/2+6}" text-anchor="middle" fill="#4f7cff" font-size="24" font-weight="800">?</text>`;
    } else {
      s+=`<g transform="translate(${x},${y})">${cells[i]}</g>`;
    }
  }
  s+=`</svg>`;
  return s;
}

// Shape primitives for matrix items
function circle(cx,cy,r,fill='#7aa0ff',opacity=1){return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${opacity}"/>`}
function rect2(x,y,w,h,fill='#7aa0ff',rx=2){return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" rx="${rx}"/>`}
function tri(cx,cy,size,fill='#4ade80',up=true){
  const h=size*0.87;
  const p=up?`${cx},${cy-h*0.67} ${cx-size/2},${cy+h*0.33} ${cx+size/2},${cy+h*0.33}`
             :`${cx},${cy+h*0.67} ${cx-size/2},${cy-h*0.33} ${cx+size/2},${cy-h*0.33}`;
  return `<polygon points="${p}" fill="${fill}"/>`;
}
function diamond(cx,cy,size,fill='#c084fc'){return `<polygon points="${cx},${cy-size} ${cx+size*0.6},${cy} ${cx},${cy+size} ${cx-size*0.6},${cy}" fill="${fill}"/>` }
function cross(cx,cy,size,fill='#f87171'){return `<line x1="${cx-size}" y1="${cy}" x2="${cx+size}" y2="${cy}" stroke="${fill}" stroke-width="7" stroke-linecap="round"/><line x1="${cx}" y1="${cy-size}" x2="${cx}" y2="${cy+size}" stroke="${fill}" stroke-width="7" stroke-linecap="round"/>`}
function star(cx,cy,outer,inner,fill='#fbbf24'){
  let pts='';for(let i=0;i<10;i++){const a=Math.PI/5*i-Math.PI/2;const r=i%2===0?outer:inner;pts+=`${cx+Math.cos(a)*r},${cy+Math.sin(a)*r} `}
  return `<polygon points="${pts.trim()}" fill="${fill}"/>`;
}
// Option cell for matrix (smaller)
function optCircle(n,fill='#7aa0ff'){const c=`<circle cx="40" cy="40" r="${10+n*4}" fill="${fill}"/>`;return c;}

const ITEM_BANK = [

// ===================== MATRIX REASONING (Gf) =====================
// Pattern: each row has 1,2,3 circles; each col same → missing = 3 circles bottom-right
{id:'mat_p', factor:'Gf', subtest:'matrix', practice:true,
  prompt:'Practice: Which figure completes the 3×3 matrix?',
  stimulus: makeMatrixSVG([
    circle(40,40,10)+circle(25,55,10)+circle(55,55,10), // row1: 3 small circles
    circle(40,40,14),                                    // row2: 1 medium circle
    circle(40,40,10)+circle(25,55,10),                  // row3: 2 small circles
    circle(40,40,14)+circle(25,55,14),                  // col pattern — actually let's do a simpler count pattern
    circle(40,40,10),
    circle(40,40,10)+circle(25,55,10),
    circle(40,40,14),
    circle(40,40,10)+circle(25,55,10),
  ]),
  // Simpler: each row has 1,2,3 shapes (left to right)
  // Let's rebuild stimulus properly
  options:['1 circle','2 circles','3 circles','4 circles'],
  correctAnswer:'3 circles', difficulty:0.85, gLoading:0.78},

{id:'mat1', factor:'Gf', subtest:'matrix',
  prompt:'Which figure completes the pattern?',
  stimulusType:'matrix_count',
  matrixDef:{
    // row 0: 1 circle, 2 circles, 3 circles
    // row 1: 1 square, 2 squares, 3 squares
    // row 2: 1 triangle, 2 triangles, ?
    cells:[
      {shapes:'circle',count:1},{shapes:'circle',count:2},{shapes:'circle',count:3},
      {shapes:'square',count:1},{shapes:'square',count:2},{shapes:'square',count:3},
      {shapes:'triangle',count:1},{shapes:'triangle',count:2},{shapes:'?',count:3},
    ],
    answer:2 // index of correct option
  },
  options:['1 triangle','2 triangles','3 triangles','4 triangles'],
  correctAnswer:'3 triangles', difficulty:0.82, gLoading:0.78},

{id:'mat2', factor:'Gf', subtest:'matrix',
  prompt:'Which figure completes the pattern?',
  stimulusType:'matrix_size',
  options:['Small diamond','Medium diamond','Large diamond','Square'],
  correctAnswer:'Large diamond', difficulty:0.75, gLoading:0.78},

{id:'mat3', factor:'Gf', subtest:'matrix',
  prompt:'Which figure completes the pattern?',
  stimulusType:'matrix_rotation',
  options:['Arrow pointing right','Arrow pointing down','Arrow pointing left','Arrow pointing up'],
  correctAnswer:'Arrow pointing down', difficulty:0.68, gLoading:0.78},

{id:'mat4', factor:'Gf', subtest:'matrix',
  prompt:'Which figure completes the pattern?',
  stimulusType:'matrix_shade',
  options:['Empty circle','Half-filled circle','Filled circle','Cross'],
  correctAnswer:'Filled circle', difficulty:0.62, gLoading:0.78},

{id:'mat5', factor:'Gf', subtest:'matrix',
  prompt:'Which figure completes the pattern?',
  stimulusType:'matrix_combo',
  options:['Large dark triangle','Small light triangle','Large light square','Small dark circle'],
  correctAnswer:'Large dark triangle', difficulty:0.55, gLoading:0.78},

{id:'mat6', factor:'Gf', subtest:'matrix',
  prompt:'Which figure completes the pattern?',
  stimulusType:'matrix_xor',
  options:['Star inside square','Circle inside triangle','Square inside circle','Diamond only'],
  correctAnswer:'Square inside circle', difficulty:0.45, gLoading:0.78},

// ===================== SERIES COMPLETION (Gf) =====================
{id:'ser_p', factor:'Gf', subtest:'series', practice:true,
  prompt:'Practice: What comes next in the sequence?\n2, 4, 6, 8, ?',
  options:['9','10','11','12'],
  correctAnswer:'10', difficulty:0.95, gLoading:0.74},

{id:'ser1', factor:'Gf', subtest:'series',
  prompt:'What comes next?\n3, 6, 9, 12, ?',
  options:['13','14','15','16'],
  correctAnswer:'15', difficulty:0.90, gLoading:0.74},

{id:'ser2', factor:'Gf', subtest:'series',
  prompt:'What comes next?\n1, 4, 9, 16, ?',
  options:['20','24','25','32'],
  correctAnswer:'25', difficulty:0.82, gLoading:0.74},

{id:'ser3', factor:'Gf', subtest:'series',
  prompt:'What comes next?\nA, C, E, G, ?',
  options:['H','I','J','K'],
  correctAnswer:'I', difficulty:0.85, gLoading:0.74},

{id:'ser4', factor:'Gf', subtest:'series',
  prompt:'What comes next?\n2, 6, 18, 54, ?',
  options:['108','162','216','270'],
  correctAnswer:'162', difficulty:0.72, gLoading:0.74},

{id:'ser5', factor:'Gf', subtest:'series',
  prompt:'What is missing?\n1, 1, 2, 3, 5, 8, ?, 21',
  options:['10','11','12','13'],
  correctAnswer:'13', difficulty:0.68, gLoading:0.74},

{id:'ser6', factor:'Gf', subtest:'series',
  prompt:'What comes next?\n144, 121, 100, 81, 64, ?',
  options:['49','48','50','56'],
  correctAnswer:'49', difficulty:0.62, gLoading:0.74},

{id:'ser7', factor:'Gf', subtest:'series',
  prompt:'Which conclusion follows?\nAll birds have wings. Eagles are birds. Therefore:',
  options:['All winged animals are eagles','Eagles have wings','Wings enable flight','Eagles are not birds'],
  correctAnswer:'Eagles have wings', difficulty:0.80, gLoading:0.74},

{id:'ser8', factor:'Gf', subtest:'series',
  prompt:'What is missing?\n2, 3, 5, 7, 11, 13, ?',
  options:['14','15','16','17'],
  correctAnswer:'17', difficulty:0.58, gLoading:0.74},

// ===================== VOCABULARY (Gc) =====================
{id:'voc_p', factor:'Gc', subtest:'vocab', practice:true,
  prompt:'Practice: Which word is closest in meaning to HAPPY?',
  options:['Sad','Joyful','Angry','Tired'],
  correctAnswer:'Joyful', difficulty:0.95, gLoading:0.65},

{id:'voc1', factor:'Gc', subtest:'vocab',
  prompt:'Which word is closest in meaning to BRAVE?',
  options:['Cowardly','Reckless','Courageous','Strong'],
  correctAnswer:'Courageous', difficulty:0.88, gLoading:0.65},

{id:'voc2', factor:'Gc', subtest:'vocab',
  prompt:'Which word is OPPOSITE in meaning to ANCIENT?',
  options:['Old','Antique','Modern','Fragile'],
  correctAnswer:'Modern', difficulty:0.85, gLoading:0.65},

{id:'voc3', factor:'Gc', subtest:'vocab',
  prompt:'Which word is closest in meaning to ELOQUENT?',
  options:['Silent','Articulate','Confused','Loud'],
  correctAnswer:'Articulate', difficulty:0.72, gLoading:0.65},

{id:'voc4', factor:'Gc', subtest:'vocab',
  prompt:'Which word is closest in meaning to ARDUOUS?',
  options:['Easy','Colorful','Difficult','Fast'],
  correctAnswer:'Difficult', difficulty:0.68, gLoading:0.65},

{id:'voc5', factor:'Gc', subtest:'vocab',
  prompt:'Which word is OPPOSITE in meaning to BENEVOLENT?',
  options:['Kind','Generous','Malevolent','Helpful'],
  correctAnswer:'Malevolent', difficulty:0.65, gLoading:0.65},

{id:'voc6', factor:'Gc', subtest:'vocab',
  prompt:'Which word is closest in meaning to EPHEMERAL?',
  options:['Permanent','Transient','Colorful','Enormous'],
  correctAnswer:'Transient', difficulty:0.55, gLoading:0.65},

{id:'voc7', factor:'Gc', subtest:'vocab',
  prompt:'Which word is closest in meaning to OBFUSCATE?',
  options:['Clarify','Confuse','Illuminate','Simplify'],
  correctAnswer:'Confuse', difficulty:0.50, gLoading:0.65},

{id:'voc8', factor:'Gc', subtest:'vocab',
  prompt:'Which word is closest in meaning to SANGUINE?',
  options:['Pessimistic','Melancholic','Optimistic','Aggressive'],
  correctAnswer:'Optimistic', difficulty:0.45, gLoading:0.65},

// ===================== VERBAL ANALOGIES (Gc) =====================
{id:'ana_p', factor:'Gc', subtest:'analogies', practice:true,
  prompt:'Practice: Hot is to Cold as Day is to ___',
  options:['Warm','Night','Sun','Morning'],
  correctAnswer:'Night', difficulty:0.95, gLoading:0.62},

{id:'ana1', factor:'Gc', subtest:'analogies',
  prompt:'Bird is to Nest as Human is to ___',
  options:['Food','House','Feather','Tree'],
  correctAnswer:'House', difficulty:0.90, gLoading:0.62},

{id:'ana2', factor:'Gc', subtest:'analogies',
  prompt:'Author is to Novel as Composer is to ___',
  options:['Painting','Sculpture','Symphony','Poem'],
  correctAnswer:'Symphony', difficulty:0.82, gLoading:0.62},

{id:'ana3', factor:'Gc', subtest:'analogies',
  prompt:'General knowledge: Which planet is closest to the Sun?',
  options:['Venus','Earth','Mars','Mercury'],
  correctAnswer:'Mercury', difficulty:0.78, gLoading:0.62},

{id:'ana4', factor:'Gc', subtest:'analogies',
  prompt:'Doctor is to Hospital as Judge is to ___',
  options:['Prison','Police','Courtroom','Library'],
  correctAnswer:'Courtroom', difficulty:0.85, gLoading:0.62},

{id:'ana5', factor:'Gc', subtest:'analogies',
  prompt:'General knowledge: How many sides does a hexagon have?',
  options:['5','6','7','8'],
  correctAnswer:'6', difficulty:0.80, gLoading:0.62},

{id:'ana6', factor:'Gc', subtest:'analogies',
  prompt:'Petal is to Flower as Chapter is to ___',
  options:['Page','Book','Word','Author'],
  correctAnswer:'Book', difficulty:0.75, gLoading:0.62},

{id:'ana7', factor:'Gc', subtest:'analogies',
  prompt:'General knowledge: What gas do plants absorb from the air during photosynthesis?',
  options:['Oxygen','Nitrogen','Carbon dioxide','Hydrogen'],
  correctAnswer:'Carbon dioxide', difficulty:0.72, gLoading:0.62},

{id:'ana8', factor:'Gc', subtest:'analogies',
  prompt:'Microscope is to Cell as Telescope is to ___',
  options:['Atom','Star','Virus','Root'],
  correctAnswer:'Star', difficulty:0.70, gLoading:0.62},

// ===================== ARITHMETIC (Gq) =====================
{id:'ari_p', factor:'Gq', subtest:'arith', practice:true,
  prompt:'Practice: If apples cost $2 each, how much do 3 apples cost?',
  options:['$4','$5','$6','$7'],
  correctAnswer:'$6', difficulty:0.95, gLoading:0.66},

{id:'ari1', factor:'Gq', subtest:'arith',
  prompt:'A train travels 60 km in 1 hour. How far does it travel in 2.5 hours?',
  options:['120 km','140 km','150 km','180 km'],
  correctAnswer:'150 km', difficulty:0.88, gLoading:0.66},

{id:'ari2', factor:'Gq', subtest:'arith',
  prompt:'What is 15% of 200?',
  options:['20','25','30','35'],
  correctAnswer:'30', difficulty:0.82, gLoading:0.66},

{id:'ari3', factor:'Gq', subtest:'arith',
  prompt:'A shirt costs $40 after a 20% discount. What was the original price?',
  options:['$48','$50','$52','$56'],
  correctAnswer:'$50', difficulty:0.72, gLoading:0.66},

{id:'ari4', factor:'Gq', subtest:'arith',
  prompt:'If 6 workers finish a job in 8 days, how many days for 4 workers (same rate)?',
  options:['10','12','14','16'],
  correctAnswer:'12', difficulty:0.65, gLoading:0.66},

{id:'ari5', factor:'Gq', subtest:'arith',
  prompt:'A tank fills in 6 hours; a drain empties it in 8 hours. How many hours to fill from empty with both open?',
  options:['20 hours','22 hours','24 hours','26 hours'],
  correctAnswer:'24 hours', difficulty:0.52, gLoading:0.66},

{id:'ari6', factor:'Gq', subtest:'arith',
  prompt:'Two numbers have a ratio of 3:5 and their sum is 160. What is the larger number?',
  options:['60','90','100','120'],
  correctAnswer:'100', difficulty:0.58, gLoading:0.66},

// ===================== NUMBER RELATIONSHIPS (Gq) =====================
{id:'num_p', factor:'Gq', subtest:'numrel', practice:true,
  prompt:'Practice: If x + 5 = 12, what is x?',
  options:['5','6','7','8'],
  correctAnswer:'7', difficulty:0.95, gLoading:0.68},

{id:'num1', factor:'Gq', subtest:'numrel',
  prompt:'Which value completes the equation?\n4 × ? = 36',
  options:['7','8','9','10'],
  correctAnswer:'9', difficulty:0.90, gLoading:0.68},

{id:'num2', factor:'Gq', subtest:'numrel',
  prompt:'Which value completes the pattern?\n? : 4 = 15 : 20',
  options:['2','3','4','5'],
  correctAnswer:'3', difficulty:0.80, gLoading:0.68},

{id:'num3', factor:'Gq', subtest:'numrel',
  prompt:'If 2^n = 64, what is n?',
  options:['4','5','6','7'],
  correctAnswer:'6', difficulty:0.72, gLoading:0.68},

{id:'num4', factor:'Gq', subtest:'numrel',
  prompt:'Which number is divisible by both 4 and 6?',
  options:['14','18','20','24'],
  correctAnswer:'24', difficulty:0.70, gLoading:0.68},

{id:'num5', factor:'Gq', subtest:'numrel',
  prompt:'Complete: 3, 7, 13, 21, 31, ?',
  options:['40','42','43','45'],
  correctAnswer:'43', difficulty:0.58, gLoading:0.68},

{id:'num6', factor:'Gq', subtest:'numrel',
  prompt:'If x² − 5x + 6 = 0, which set contains both solutions?',
  options:['{1, 6}','{2, 3}','{−2, 3}','{−2, −3}'],
  correctAnswer:'{2, 3}', difficulty:0.50, gLoading:0.68},

// ===================== MENTAL ROTATION (Gv) =====================
{id:'rot_p', factor:'Gv', subtest:'rotation', practice:true,
  prompt:'Practice: Is the second figure the SAME shape (rotated) or a MIRROR image of the first?',
  stimulusType:'rotation',
  rotDef:{type:'same', angle:90},
  options:['Same (rotated)','Mirror image'],
  correctAnswer:'Same (rotated)', difficulty:0.90, gLoading:0.58},

{id:'rot1', factor:'Gv', subtest:'rotation',
  prompt:'Same shape (rotated) or Mirror image?',
  stimulusType:'rotation',
  rotDef:{type:'same', angle:180},
  options:['Same (rotated)','Mirror image'],
  correctAnswer:'Same (rotated)', difficulty:0.85, gLoading:0.58},

{id:'rot2', factor:'Gv', subtest:'rotation',
  prompt:'Same shape (rotated) or Mirror image?',
  stimulusType:'rotation',
  rotDef:{type:'mirror', angle:45},
  options:['Same (rotated)','Mirror image'],
  correctAnswer:'Mirror image', difficulty:0.80, gLoading:0.58},

{id:'rot3', factor:'Gv', subtest:'rotation',
  prompt:'Same shape (rotated) or Mirror image?',
  stimulusType:'rotation',
  rotDef:{type:'same', angle:270},
  options:['Same (rotated)','Mirror image'],
  correctAnswer:'Same (rotated)', difficulty:0.75, gLoading:0.58},

{id:'rot4', factor:'Gv', subtest:'rotation',
  prompt:'Same shape (rotated) or Mirror image?',
  stimulusType:'rotation',
  rotDef:{type:'mirror', angle:90},
  options:['Same (rotated)','Mirror image'],
  correctAnswer:'Mirror image', difficulty:0.68, gLoading:0.58},

{id:'rot5', factor:'Gv', subtest:'rotation',
  prompt:'Same shape (rotated) or Mirror image?',
  stimulusType:'rotation',
  rotDef:{type:'same', angle:135},
  options:['Same (rotated)','Mirror image'],
  correctAnswer:'Same (rotated)', difficulty:0.60, gLoading:0.58},

{id:'rot6', factor:'Gv', subtest:'rotation',
  prompt:'Same shape (rotated) or Mirror image?',
  stimulusType:'rotation',
  rotDef:{type:'mirror', angle:225},
  options:['Same (rotated)','Mirror image'],
  correctAnswer:'Mirror image', difficulty:0.50, gLoading:0.58},

// ===================== PAPER FOLDING (Gv) =====================
{id:'fold_p', factor:'Gv', subtest:'fold', practice:true,
  prompt:'Practice: A square paper is folded in half (left side folds onto right), then a hole is punched in the center. When unfolded, where are the holes?',
  stimulusType:'fold',
  foldDef:{fold:'vertical', holes:[[3,2],[1,2]]},
  options:['One hole in center','Two holes — left center and right center','Two holes at top','One hole at left edge'],
  correctAnswer:'Two holes — left center and right center', difficulty:0.88, gLoading:0.55},

{id:'fold1', factor:'Gv', subtest:'fold',
  prompt:'Paper folded horizontally (top folds onto bottom), hole punched top-right of folded paper. Where are holes when unfolded?',
  stimulusType:'fold',
  foldDef:{fold:'horizontal', holes:[[3,1],[3,3]]},
  options:['One hole top-right','Two holes — top-right and bottom-right','One hole center','Two holes at left side'],
  correctAnswer:'Two holes — top-right and bottom-right', difficulty:0.80, gLoading:0.55},

{id:'fold2', factor:'Gv', subtest:'fold',
  prompt:'Paper folded diagonally (top-left corner to bottom-right), hole punched near top edge. When unfolded, holes appear:',
  options:['One hole at top','Two holes — symmetrically about diagonal','Three holes','One hole at center'],
  correctAnswer:'Two holes — symmetrically about diagonal', difficulty:0.68, gLoading:0.55},

{id:'fold3', factor:'Gv', subtest:'fold',
  prompt:'Square folded in half twice (first vertically, then horizontally), hole punched at the folded corner. When fully unfolded, how many holes?',
  options:['1','2','4','8'],
  correctAnswer:'4', difficulty:0.55, gLoading:0.55},

{id:'fold4', factor:'Gv', subtest:'fold',
  prompt:'Strip folded in thirds (left third folds over middle, right third folds over left). Hole punched through all layers at center. How many holes when unfolded?',
  options:['1','2','3','6'],
  correctAnswer:'3', difficulty:0.48, gLoading:0.55},

// ===================== DIGIT SPAN (Gwm) =====================
// type:'digit-span', direction:'forward'|'backward'
{id:'dig_p', factor:'Gwm', subtest:'digit', practice:true, type:'digit-span',
  prompt:'Practice: Remember these digits IN ORDER. Type them on the keypad when asked.',
  digits:[3,7],
  direction:'forward',
  correctAnswer:'37', difficulty:0.98, gLoading:0.60},

{id:'dig1', factor:'Gwm', subtest:'digit', type:'digit-span',
  prompt:'Remember these digits IN ORDER.',
  digits:[5,2,8],
  direction:'forward',
  correctAnswer:'528', difficulty:0.92, gLoading:0.60},

{id:'dig2', factor:'Gwm', subtest:'digit', type:'digit-span',
  prompt:'Remember these digits IN ORDER.',
  digits:[3,6,1,9],
  direction:'forward',
  correctAnswer:'3619', difficulty:0.85, gLoading:0.60},

{id:'dig3', factor:'Gwm', subtest:'digit', type:'digit-span',
  prompt:'Remember these digits IN ORDER.',
  digits:[7,4,2,5,1],
  direction:'forward',
  correctAnswer:'74251', difficulty:0.72, gLoading:0.60},

{id:'dig4', factor:'Gwm', subtest:'digit', type:'digit-span',
  prompt:'Remember and type these digits IN REVERSE ORDER.',
  digits:[4,8,3],
  direction:'backward',
  correctAnswer:'384', difficulty:0.78, gLoading:0.60},

{id:'dig5', factor:'Gwm', subtest:'digit', type:'digit-span',
  prompt:'Remember and type these digits IN REVERSE ORDER.',
  digits:[9,2,5,6],
  direction:'backward',
  correctAnswer:'6529', difficulty:0.65, gLoading:0.60},

{id:'dig6', factor:'Gwm', subtest:'digit', type:'digit-span',
  prompt:'Remember and type these digits IN REVERSE ORDER.',
  digits:[3,7,1,8,4],
  direction:'backward',
  correctAnswer:'48173', difficulty:0.55, gLoading:0.60},

{id:'dig7', factor:'Gwm', subtest:'digit', type:'digit-span',
  prompt:'Remember these digits IN ORDER.',
  digits:[6,1,9,4,7,2],
  direction:'forward',
  correctAnswer:'619472', difficulty:0.48, gLoading:0.60},

// ===================== LETTER-NUMBER SEQUENCING (Gwm) =====================
{id:'lns_p', factor:'Gwm', subtest:'lns', practice:true,
  prompt:'Practice: Reorder this sequence — numbers first (ascending), then letters (A–Z):\nB, 2, A, 1',
  options:['1, 2, A, B','A, B, 1, 2','2, 1, B, A','1, A, 2, B'],
  correctAnswer:'1, 2, A, B', difficulty:0.92, gLoading:0.62},

{id:'lns1', factor:'Gwm', subtest:'lns',
  prompt:'Reorder — numbers first (ascending), then letters (A–Z):\n3, C, 1, A, 2',
  options:['1, 2, 3, A, C','A, C, 1, 2, 3','1, A, 2, C, 3','3, 2, 1, C, A'],
  correctAnswer:'1, 2, 3, A, C', difficulty:0.88, gLoading:0.62},

{id:'lns2', factor:'Gwm', subtest:'lns',
  prompt:'Reorder — numbers first (ascending), then letters (A–Z):\n7, F, 3, B, 9, A',
  options:['3, 7, 9, A, B, F','A, B, F, 3, 7, 9','7, 3, 9, F, B, A','3, 9, 7, F, A, B'],
  correctAnswer:'3, 7, 9, A, B, F', difficulty:0.80, gLoading:0.62},

{id:'lns3', factor:'Gwm', subtest:'lns',
  prompt:'Reorder — numbers first (ascending), then letters (A–Z):\n5, Z, 2, M, 8, D, 1',
  options:['1, 2, 5, 8, D, M, Z','Z, M, D, 1, 2, 5, 8','8, 5, 2, 1, D, M, Z','1, 2, 5, 8, M, D, Z'],
  correctAnswer:'1, 2, 5, 8, D, M, Z', difficulty:0.72, gLoading:0.62},

{id:'lns4', factor:'Gwm', subtest:'lns',
  prompt:'Reorder — numbers first (ascending), then letters (A–Z):\nK, 4, R, 9, E, 2, T, 7',
  options:['2, 4, 7, 9, E, K, R, T','E, K, R, T, 2, 4, 7, 9','9, 7, 4, 2, T, R, K, E','2, 4, 7, 9, K, E, T, R'],
  correctAnswer:'2, 4, 7, 9, E, K, R, T', difficulty:0.62, gLoading:0.62},

{id:'lns5', factor:'Gwm', subtest:'lns',
  prompt:'Reorder — numbers first (ascending), then letters (A–Z):\nP, 6, H, 1, V, 8, B, 3, N',
  options:['1, 3, 6, 8, B, H, N, P, V','B, H, N, P, V, 1, 3, 6, 8','6, 1, 8, 3, P, H, V, B, N','1, 3, 6, 8, H, B, P, N, V'],
  correctAnswer:'1, 3, 6, 8, B, H, N, P, V', difficulty:0.52, gLoading:0.62},

// ===================== SYMBOL-DIGIT (Gs) =====================
// These are timed — rendered as a batch; score = correct within time limit
// symdig items represent the key mapping; actual task is dynamic in the engine
{id:'symdig_p', factor:'Gs', subtest:'symdig', practice:true,
  prompt:'Practice: Look at the key above. Select the matching digit for each symbol shown.',
  type:'symdig-practice',
  options:['Understood — Start Task'],
  correctAnswer:'Understood — Start Task', difficulty:1.0, gLoading:0.52},

// The actual timed block is one "item" that scores correct responses
{id:'symdig1', factor:'Gs', subtest:'symdig',
  prompt:'Symbol–Digit Matching — 90 seconds. Match as many symbols to digits as possible.',
  type:'symdig-timed',
  difficulty:0.60, gLoading:0.52,
  // correctAnswer determined dynamically
  options:[], correctAnswer:null},

// ===================== VISUAL COMPARISON (Gs) =====================
{id:'vis_p', factor:'Gs', subtest:'viscomp', practice:true,
  prompt:'Practice: Are these two figures SAME or DIFFERENT?',
  stimulusType:'viscomp',
  viscompDef:{same:true, shape:'circle', variant:'a'},
  options:['Same','Different'],
  correctAnswer:'Same', difficulty:0.95, gLoading:0.50},

{id:'vis1', factor:'Gs', subtest:'viscomp',
  prompt:'Same or Different? (6 sec)',
  stimulusType:'viscomp', viscompDef:{same:true, shape:'rect', variant:'a'},
  options:['Same','Different'], correctAnswer:'Same', difficulty:0.90, gLoading:0.50},

{id:'vis2', factor:'Gs', subtest:'viscomp',
  prompt:'Same or Different? (6 sec)',
  stimulusType:'viscomp', viscompDef:{same:false, shape:'tri', variant:'b'},
  options:['Same','Different'], correctAnswer:'Different', difficulty:0.85, gLoading:0.50},

{id:'vis3', factor:'Gs', subtest:'viscomp',
  prompt:'Same or Different? (6 sec)',
  stimulusType:'viscomp', viscompDef:{same:true, shape:'star', variant:'a'},
  options:['Same','Different'], correctAnswer:'Same', difficulty:0.82, gLoading:0.50},

{id:'vis4', factor:'Gs', subtest:'viscomp',
  prompt:'Same or Different? (6 sec)',
  stimulusType:'viscomp', viscompDef:{same:false, shape:'rect', variant:'c'},
  options:['Same','Different'], correctAnswer:'Different', difficulty:0.78, gLoading:0.50},

{id:'vis5', factor:'Gs', subtest:'viscomp',
  prompt:'Same or Different? (6 sec)',
  stimulusType:'viscomp', viscompDef:{same:true, shape:'arrow', variant:'b'},
  options:['Same','Different'], correctAnswer:'Same', difficulty:0.75, gLoading:0.50},

{id:'vis6', factor:'Gs', subtest:'viscomp',
  prompt:'Same or Different? (6 sec)',
  stimulusType:'viscomp', viscompDef:{same:false, shape:'cross', variant:'a'},
  options:['Same','Different'], correctAnswer:'Different', difficulty:0.70, gLoading:0.50},

{id:'vis7', factor:'Gs', subtest:'viscomp',
  prompt:'Same or Different? (6 sec)',
  stimulusType:'viscomp', viscompDef:{same:false, shape:'hex', variant:'a'},
  options:['Same','Different'], correctAnswer:'Different', difficulty:0.65, gLoading:0.50},

{id:'vis8', factor:'Gs', subtest:'viscomp',
  prompt:'Same or Different? (6 sec)',
  stimulusType:'viscomp', viscompDef:{same:true, shape:'diamond', variant:'b'},
  options:['Same','Different'], correctAnswer:'Same', difficulty:0.62, gLoading:0.50},

];

// Symbol key for symdig task
const SYM_KEY = [
  {sym:'★', dig:1},{sym:'◆', dig:2},{sym:'▲', dig:3},
  {sym:'●', dig:4},{sym:'✦', dig:5},{sym:'⬟', dig:6},
  {sym:'✿', dig:7},{sym:'⬡', dig:8},{sym:'◉', dig:9},
];

// ================================================================
// SECTION 2: TEST ENGINE
// ================================================================

const SUBTEST_ORDER = ['matrix','series','vocab','analogies','arith','numrel','rotation','fold','digit','lns','symdig','viscomp'];

let STATE = {
  phase: 'welcome',         // welcome | instruction | question | complete | results
  subtestIdx: 0,            // index into SUBTEST_ORDER
  itemQueue: [],            // items for current subtest (excluding practice)
  practiceItem: null,
  currentItem: null,
  itemIdx: 0,
  totalItems: 0,
  selectedAnswer: null,
  responses: {},            // itemId → {answer, correct, rt, timestamp}
  startTime: null,
  subtestStartTime: null,
  practiceMode: false,
  practiceAnswered: false,
  digitInput: '',
  digitPhase: 'show',       // show | recall
  digitSeq: [],
  digitTimer: null,
  symdigResponses: [],
  symdigItems: [],
  symdigTimerEnd: null,
  viscompTimer: null,
  viscompTimerEnd: null,
};

function saveState(){
  try{ localStorage.setItem('peoples_iq_state', JSON.stringify(STATE)); }catch(e){}
}
function loadState(){
  try{
    const s=localStorage.getItem('peoples_iq_state');
    if(s) return JSON.parse(s);
  }catch(e){}
  return null;
}
function clearState(){ try{localStorage.removeItem('peoples_iq_state');}catch(e){} }

function checkResume(){
  const s=loadState();
  if(s && s.phase && s.phase!=='welcome' && s.phase!=='results'){
    document.getElementById('resume-wrap').style.display='block';
    document.getElementById('start-btn').textContent='New Test';
  }
}

function resumeTest(){
  const s=loadState();
  if(!s){startTest();return;}
  STATE=s;
  if(STATE.phase==='instruction') showInstruction();
  else if(STATE.phase==='question') renderQuestion();
  else if(STATE.phase==='complete') showScreen('screen-complete');
  else startTest();
}

function startFresh(){ clearState(); startTest(); }
function startTest(){
  clearState();
  STATE={
    phase:'instruction', subtestIdx:0,
    itemQueue:[], practiceItem:null, currentItem:null,
    itemIdx:0, totalItems:0,
    selectedAnswer:null, responses:{}, startTime:performance.now(),
    subtestStartTime:performance.now(),
    practiceMode:false, practiceAnswered:false,
    digitInput:'', digitPhase:'show', digitSeq:[], digitTimer:null,
    symdigResponses:[], symdigItems:[], symdigTimerEnd:null,
    viscompTimer:null, viscompTimerEnd:null,
  };
  // Count total real items
  STATE.totalItems = ITEM_BANK.filter(i=>!i.practice).length;
  showInstruction();
}

function currentSubtestDef(){
  return SUBTESTS.find(s=>s.id===SUBTEST_ORDER[STATE.subtestIdx]);
}

function buildSubtestQueue(subtestId){
  const items = ITEM_BANK.filter(i=>i.subtest===subtestId && !i.practice);
  // Shuffle within difficulty bands
  const shuffled = shuffleWithinBands(items);
  // Shuffle options
  return shuffled.map(item=>{
    if(item.options && item.options.length>1 && item.type!=='digit-span' && item.type!=='symdig-timed' && item.type!=='symdig-practice'){
      const opts=[...item.options];
      const correct=item.correctAnswer;
      shuffleArray(opts);
      return {...item, options:opts, correctAnswer:correct};
    }
    return {...item};
  });
}

function shuffleArray(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a;}
function shuffleWithinBands(items){
  const bands=[[0,.35],[.35,.60],[.60,.80],[.80,1.01]];
  const out=[];
  bands.forEach(([lo,hi])=>{
    const b=items.filter(i=>i.difficulty>=lo&&i.difficulty<hi);
    shuffleArray(b);
    out.push(...b);
  });
  return out;
}

// ---- Instruction screen ----
function showInstruction(){
  STATE.phase='instruction';
  const def=currentSubtestDef();
  document.getElementById('instr-icon').textContent=def.icon;
  document.getElementById('instr-title').textContent=def.name;
  document.getElementById('instr-desc').textContent=def.desc;
  document.getElementById('instr-rules').innerHTML=`<p style="font-size:14px;color:var(--clr-muted);line-height:1.7">${def.rules}</p>${def.timed?`<p style="margin-top:8px;font-size:13px;color:var(--clr-warn);font-weight:600">⏱ Timed subtest</p>`:''}`;
  // Practice item
  const pItem=ITEM_BANK.find(i=>i.subtest===def.id&&i.practice);
  STATE.practiceItem=pItem;
  STATE.practiceAnswered=false;
  const pw=document.getElementById('practice-item-wrap');
  if(pItem){
    pw.innerHTML=`<p style="font-size:15px;margin-bottom:10px;white-space:pre-line">${pItem.prompt}</p>`;
    if(pItem.stimulusType) pw.innerHTML+=renderStimulusHTML(pItem);
    const og=document.createElement('div');
    og.className='options-grid';
    og.style.marginTop='10px';
    pItem.options.forEach((opt,i)=>{
      const b=document.createElement('button');
      b.className='option-btn';
      b.innerHTML=`<span class="opt-letter">${'ABCD'[i]}</span>${opt}`;
      b.onclick=()=>{
        og.querySelectorAll('.option-btn').forEach(x=>x.classList.remove('selected'));
        b.classList.add('selected');
        STATE.practiceAnswered=true;
        // Show correct feedback
        setTimeout(()=>{
          og.querySelectorAll('.option-btn').forEach((x,j)=>{
            if(pItem.options[j]===pItem.correctAnswer) x.style.borderColor='var(--clr-success)';
          });
          document.getElementById('instr-next-btn').style.display='flex';
        },400);
      };
      og.appendChild(b);
    });
    pw.appendChild(og);
    document.getElementById('instr-next-btn').style.display=pItem.options.length===1?'flex':'none';
  } else {
    pw.innerHTML='<p style="color:var(--clr-muted);font-size:14px">No practice item for this subtest.</p>';
    document.getElementById('instr-next-btn').style.display='flex';
  }
  showScreen('screen-instruction');
  updateProgress();
  saveState();
}

function endInstruction(){
  const def=currentSubtestDef();
  STATE.itemQueue=buildSubtestQueue(def.id);
  STATE.itemIdx=0;
  STATE.subtestStartTime=performance.now();
  nextItem();
}

// ---- Item sequencing ----
function nextItem(){
  if(STATE.itemIdx>=STATE.itemQueue.length){
    nextSubtest(); return;
  }
  STATE.currentItem=STATE.itemQueue[STATE.itemIdx];
  STATE.selectedAnswer=null;
  STATE.phase='question';
  renderQuestion();
  saveState();
}

function nextSubtest(){
  STATE.subtestIdx++;
  if(STATE.subtestIdx>=SUBTEST_ORDER.length){
    STATE.phase='complete';
    showScreen('screen-complete');
    saveState();
    return;
  }
  showInstruction();
}

function countCompletedItems(){
  return Object.keys(STATE.responses).filter(k=>!k.endsWith('_p')).length;
}

function updateProgress(){
  const wrap=document.getElementById('progress-bar-wrap');
  const def=currentSubtestDef();
  if(!def){wrap.classList.remove('visible');return;}
  wrap.classList.add('visible');
  const done=countCompletedItems();
  const pct=STATE.totalItems>0?(done/STATE.totalItems*100):0;
  document.getElementById('progress-bar-fill').style.width=pct+'%';
  document.getElementById('progress-subtest').textContent=def.name;
  const subtestDone=STATE.itemIdx;
  const subtestTotal=STATE.itemQueue.length||0;
  document.getElementById('progress-counter').textContent=`${done}/${STATE.totalItems}`;
  document.getElementById('subtest-timer').textContent='';
}

// ================================================================
// SECTION 3: RENDERING / UI
// ================================================================

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ---- Matrix Reasoning SVG builders ----
function buildMatrixSVG(item){
  const sz=80, gap=4, full=sz*3+gap*4;
  let cells=[];
  const t=item.stimulusType;

  if(t==='matrix_count'){
    // Shapes: circle/square/triangle, counts 1-3
    const shapeMap={
      'circle':(n)=>{ let s=''; const positions=[[40,40],[25,30],[55,30],[40,60]]; for(let i=0;i<n;i++) s+=circle(positions[i][0],positions[i][1],12,'#7aa0ff'); return s; },
      'square':(n)=>{ let s=''; const positions=[[28,28],[52,28],[28,52],[52,52]]; for(let i=0;i<n&&i<4;i++) s+=rect2(positions[i][0]-10,positions[i][1]-10,20,20,'#4ade80'); return s; },
      'triangle':(n)=>{ let s=''; const positions=[[40,30],[25,55],[55,55],[40,55]]; for(let i=0;i<n&&i<3;i++) s+=tri(positions[i][0],positions[i][1],22,'#c084fc'); return s; },
    };
    const def=item.matrixDef;
    def.cells.forEach(c=>{
      if(c.shapes==='?') cells.push('');
      else cells.push(shapeMap[c.shapes]?shapeMap[c.shapes](c.count):'');
    });
  } else if(t==='matrix_size'){
    // diamonds increasing in size across rows/cols
    const sizes=[[16,22,30],[16,22,30],[16,22,30]];
    const colors=['#c084fc','#7aa0ff','#4ade80'];
    for(let r=0;r<3;r++) for(let c=0;c<3;c++){
      if(r===2&&c===2) cells.push(''); // missing
      else cells.push(diamond(40,40,sizes[r][c],colors[r]));
    }
  } else if(t==='matrix_rotation'){
    // Arrow rotating 90° clockwise across each cell
    function arrow(angle,fill='#fbbf24'){
      return `<g transform="rotate(${angle},40,40)"><polygon points="40,15 55,50 40,42 25,50" fill="${fill}"/></g>`;
    }
    const angles=[0,90,180,90,180,270,180,270,0]; // row pattern, last is missing
    for(let i=0;i<9;i++){
      if(i===8) cells.push('');
      else cells.push(arrow(angles[i]));
    }
  } else if(t==='matrix_shade'){
    // Fill level: 0=empty, 1=half, 2=full, pattern varies by row
    function shadedCircle(level,fill='#7aa0ff'){
      if(level===0) return `<circle cx="40" cy="40" r="26" fill="none" stroke="${fill}" stroke-width="3"/>`;
      if(level===1) return `<circle cx="40" cy="40" r="26" fill="none" stroke="${fill}" stroke-width="3"/><clipPath id="cp"><rect x="14" y="40" width="52" height="26"/></clipPath><circle cx="40" cy="40" r="26" fill="${fill}" clip-path="url(#cp)" opacity=".9"/>`;
      return `<circle cx="40" cy="40" r="26" fill="${fill}"/>`;
    }
    // Row 0: 0,1,2; Row 1: 1,2,0; Row 2: 2,0,?=1
    const levels=[0,1,2,1,2,0,2,0,1];
    for(let i=0;i<9;i++){
      if(i===8) cells.push('');
      else cells.push(shadedCircle(levels[i]));
    }
  } else if(t==='matrix_combo'){
    // Two attributes: size (small/large) and shade (light/dark), shapes are triangles
    // Row 0: small-light, small-dark, large-light
    // Row 1: large-dark, small-light, small-dark
    // Row 2: small-dark, large-light, ? = large-dark
    function comboTri(large, dark){
      const sz=large?32:18;
      const fill=dark?'#4f7cff':'#a0bcff';
      return tri(40,40,sz,fill);
    }
    const defs=[[0,0],[0,1],[1,0],[1,1],[0,0],[0,1],[0,1],[1,0],[1,1]]; // [large,dark]
    for(let i=0;i<9;i++){
      if(i===8) cells.push('');
      else cells.push(comboTri(defs[i][0],defs[i][1]));
    }
  } else if(t==='matrix_xor'){
    // Outer shape + inner shape, XOR logic: inner appears only in some cells
    function nested(outer,inner){
      let s='';
      if(outer==='sq') s+=rect2(20,20,40,40,'#4ade80');
      if(outer==='ci') s+=circle(40,40,22,'#7aa0ff');
      if(outer==='tr') s+=tri(40,40,28,'#c084fc');
      if(inner==='sq') s+=rect2(30,30,20,20,'#1a1d27');
      if(inner==='ci') s+=circle(40,40,10,'#1a1d27');
      if(inner==='di') s+=diamond(40,40,12,'#1a1d27');
      return s;
    }
    // Row 0: sq+ci, ci+sq, tr (no inner)
    // Row 1: ci (no inner), tr+di, sq+ci
    // Row 2: tr+di, sq (no inner), ? = ci+sq (square inside circle)
    const defs=[
      ['sq','ci'],['ci','sq'],['tr',''],
      ['ci',''],['tr','di'],['sq','ci'],
      ['tr','di'],['sq',''],['ci','sq'],
    ];
    for(let i=0;i<9;i++){
      if(i===8) cells.push('');
      else cells.push(nested(defs[i][0],defs[i][1]));
    }
  } else {
    for(let i=0;i<9;i++) cells.push(i===8?'':circle(40,40,20));
  }

  let svg=`<svg viewBox="0 0 ${full} ${full}" width="260" height="260" role="img" aria-label="3x3 matrix pattern">`;
  for(let i=0;i<9;i++){
    const col=i%3, row=Math.floor(i/3);
    const x=gap+col*(sz+gap), y=gap+row*(sz+gap);
    svg+=`<rect x="${x}" y="${y}" width="${sz}" height="${sz}" rx="5" fill="var(--clr-surface2)" stroke="var(--clr-border)" stroke-width="1.5"/>`;
    if(i===8){
      svg+=`<text x="${x+sz/2}" y="${y+sz/2+8}" text-anchor="middle" fill="var(--clr-accent)" font-size="26" font-weight="800">?</text>`;
    } else {
      svg+=`<g transform="translate(${x},${y})">${cells[i]}</g>`;
    }
  }
  svg+='</svg>';
  return svg;
}

// ---- Mental Rotation SVG ----
function buildRotationSVG(item){
  // Asymmetric L-shape — clearly not a rectangle, so mirror is distinguishable
  function lshape(flip=false){
    // L-shape points (relative to 0,0): go from top-left clockwise
    const pts = flip
      ? '60,10 60,60 30,60 30,40 10,40 10,10'  // mirrored
      : '10,10 40,10 40,40 60,40 60,60 10,60';  // original
    return `<polygon points="${pts}" fill="#7aa0ff" opacity="0.9"/>`;
  }
  const angle=item.rotDef.angle;
  const isMirror=item.rotDef.type==='mirror';
  const cx=65, cy=65;
  let svg=`<svg viewBox="0 0 300 140" width="300" height="140" role="img" aria-label="Rotation comparison">`;
  // Left: original shape
  svg+=`<g transform="translate(20,10)">${lshape(false)}</g>`;
  svg+=`<text x="85" y="75" text-anchor="middle" fill="var(--clr-muted)" font-size="11">Original</text>`;
  // Divider
  svg+=`<line x1="150" y1="10" x2="150" y2="130" stroke="var(--clr-border)" stroke-width="1.5" stroke-dasharray="4,3"/>`;
  // Right: rotated (or mirrored+rotated)
  const rad=angle*Math.PI/180;
  svg+=`<g transform="translate(215,70) rotate(${angle}) translate(-35,-35)">${lshape(isMirror)}</g>`;
  svg+=`<text x="215" y="125" text-anchor="middle" fill="var(--clr-muted)" font-size="11">Rotated ${angle}°</text>`;
  svg+=`</svg>`;
  return svg;
}

// ---- Paper Folding SVG ----
function buildFoldSVG(item){
  if(!item.foldDef) return '';
  const {fold, holes}=item.foldDef;
  const sz=100;
  let svg=`<svg viewBox="0 0 240 130" width="240" height="130" role="img" aria-label="Paper folding diagram">`;
  // Square paper
  svg+=`<rect x="10" y="15" width="${sz}" height="${sz}" rx="3" fill="var(--clr-surface2)" stroke="var(--clr-border)" stroke-width="2"/>`;
  // Fold line
  if(fold==='vertical'){
    svg+=`<line x1="60" y1="15" x2="60" y2="115" stroke="var(--clr-accent)" stroke-width="1.5" stroke-dasharray="5,3"/>`;
    svg+=`<text x="60" y="11" text-anchor="middle" fill="var(--clr-accent)" font-size="9">fold</text>`;
  } else {
    svg+=`<line x1="10" y1="65" x2="110" y2="65" stroke="var(--clr-accent)" stroke-width="1.5" stroke-dasharray="5,3"/>`;
    svg+=`<text x="60" y="62" text-anchor="middle" fill="var(--clr-accent)" font-size="9">fold</text>`;
  }
  // Hole punch indicator
  svg+=`<circle cx="85" cy="40" r="7" fill="none" stroke="var(--clr-danger)" stroke-width="2"/>`;
  svg+=`<text x="85" y="37" text-anchor="middle" fill="var(--clr-danger)" font-size="8">●</text>`;
  // Arrow
  svg+=`<text x="125" y="68" fill="var(--clr-muted)" font-size="20">→</text>`;
  // Unfolded paper (right side) with holes shown
  svg+=`<rect x="145" y="15" width="${sz}" height="${sz}" rx="3" fill="var(--clr-surface2)" stroke="var(--clr-border)" stroke-width="2"/>`;
  if(holes) holes.forEach(([hx,hy])=>{
    const px=145+hx*(sz/4), py=15+hy*(sz/4);
    svg+=`<circle cx="${px}" cy="${py}" r="5" fill="var(--clr-danger)" opacity=".8"/>`;
  });
  svg+=`</svg>`;
  return svg;
}

// ---- Visual Comparison SVG ----
function buildViscompSVG(item){
  const {same, shape}=item.viscompDef;
  const W=300, H=130;
  let svg=`<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Visual comparison">`;

  function drawShape(cx,cy,shp,variant='a'){
    if(shp==='circle') return circle(cx,cy,30,'#7aa0ff');
    if(shp==='rect') return rect2(cx-28,cy-22,56,44,'#4ade80');
    if(shp==='tri') return tri(cx,cy,40,'#c084fc');
    if(shp==='star') return star(cx,cy,28,14,'#fbbf24');
    if(shp==='arrow') return `<polygon points="${cx},${cy-30} ${cx+20},${cy} ${cx+10},${cy} ${cx+10},${cy+20} ${cx-10},${cy+20} ${cx-10},${cy} ${cx-20},${cy}" fill="#7aa0ff"/>`;
    if(shp==='cross') return cross(cx,cy,28,'#ef4444');
    if(shp==='hex'){ let s='',R=28;let pts='';for(let i=0;i<6;i++){const a=Math.PI/3*i-Math.PI/6;pts+=`${cx+Math.cos(a)*R},${cy+Math.sin(a)*R} `} return `<polygon points="${pts}" fill="#22d3ee"/>`; }
    if(shp==='diamond') return diamond(cx,cy,30,'#c084fc');
    return circle(cx,cy,25,'#7aa0ff');
  }

  // Left shape
  svg+=drawShape(75,65,shape,'a');
  // Divider
  svg+=`<line x1="${W/2}" y1="10" x2="${W/2}" y2="${H-10}" stroke="var(--clr-border)" stroke-width="1.5" stroke-dasharray="4,3"/>`;
  // Right shape — if different, slightly alter (different color or size)
  if(same){
    svg+=drawShape(225,65,shape,'a');
  } else {
    // Make it subtly different: different shape entirely or different orientation
    const altShapes=['rect','tri','star','circle','diamond','cross','hex','arrow'];
    const alt=altShapes.find(s=>s!==shape)||'cross';
    svg+=drawShape(225,65,alt,'b');
  }
  svg+=`</svg>`;
  return svg;
}

// Master stimulus renderer
function renderStimulusHTML(item){
  if(item.stimulusType==='matrix_count'||item.stimulusType==='matrix_size'||
     item.stimulusType==='matrix_rotation'||item.stimulusType==='matrix_shade'||
     item.stimulusType==='matrix_combo'||item.stimulusType==='matrix_xor'){
    return `<div class="stimulus-wrap">${buildMatrixSVG(item)}</div>`;
  }
  if(item.stimulusType==='rotation'){
    return `<div class="stimulus-wrap">${buildRotationSVG(item)}</div>`;
  }
  if(item.stimulusType==='fold'){
    return `<div class="stimulus-wrap">${buildFoldSVG(item)}</div>`;
  }
  if(item.stimulusType==='viscomp'){
    return `<div class="stimulus-wrap">${buildViscompSVG(item)}</div>`;
  }
  return '';
}

// ---- Render question screen ----
function renderQuestion(){
  showScreen('screen-question');
  updateProgress();
  const item=STATE.currentItem;
  const def=currentSubtestDef();

  // Factor tag
  const tagEl=document.getElementById('q-factor-tag');
  tagEl.innerHTML=`<span class="tag ${def.color}">${def.factor} · ${def.name}</span>`;

  // Prompt
  document.getElementById('q-prompt-text').textContent=item.prompt;

  // Stimulus
  const stimWrap=document.getElementById('q-stimulus');
  if(item.stimulusType){
    stimWrap.style.display='flex';
    stimWrap.innerHTML=renderStimulusHTML(item);
  } else {
    stimWrap.style.display='none';
    stimWrap.innerHTML='';
  }

  // Hide special UIs
  document.getElementById('digit-span-ui').style.display='none';
  document.getElementById('sym-digit-ui').style.display='none';
  document.getElementById('q-options').innerHTML='';
  document.getElementById('q-next-btn').style.display='none';

  // Dispatch by type
  if(item.type==='digit-span'){
    renderDigitSpan(item);
  } else if(item.type==='symdig-practice'){
    renderSymdigPractice(item);
  } else if(item.type==='symdig-timed'){
    renderSymdigTimed(item);
  } else {
    renderMCQ(item, def);
  }
}

// ---- Multiple Choice ----
function renderMCQ(item, def){
  const optEl=document.getElementById('q-options');
  const letters='ABCDEFGH';
  item.options.forEach((opt,i)=>{
    const b=document.createElement('button');
    b.className='option-btn';
    b.setAttribute('aria-label', opt);
    b.innerHTML=`<span class="opt-letter">${letters[i]}</span><span>${opt}</span>`;
    b.onclick=()=>{
      optEl.querySelectorAll('.option-btn').forEach(x=>x.classList.remove('selected'));
      b.classList.add('selected');
      STATE.selectedAnswer=opt;
      // For viscomp, auto-advance after selection
      if(item.stimulusType==='viscomp'){
        clearTimeout(STATE.viscompTimer);
        recordAnswer(item,opt);
        return;
      }
      document.getElementById('q-next-btn').style.display='flex';
    };
    optEl.appendChild(b);
  });

  // Timed visual comparison
  if(item.stimulusType==='viscomp' && !item.practice){
    const timerEl=document.getElementById('subtest-timer');
    let remaining=6;
    timerEl.textContent=`⏱ ${remaining}s`;
    STATE.viscompTimer=setInterval(()=>{
      remaining--;
      timerEl.textContent=`⏱ ${remaining}s`;
      if(remaining<=0){
        clearInterval(STATE.viscompTimer);
        timerEl.textContent='';
        recordAnswer(item,'[timeout]');
      }
    },1000);
  }
}

// ---- Digit Span ----
let digitRevealTimer=null;
function renderDigitSpan(item){
  STATE.digitPhase='show';
  STATE.digitInput='';
  STATE.digitSeq=[...item.digits];
  const ui=document.getElementById('digit-span-ui');
  ui.style.display='block';
  document.getElementById('q-prompt-card').style.display='block';

  const display=document.getElementById('digit-display');
  const keypad=document.getElementById('keypad');
  keypad.style.display='none';
  display.textContent='Get ready…';

  let idx=0;
  function showNext(){
    if(idx<STATE.digitSeq.length){
      display.textContent=STATE.digitSeq[idx];
      idx++;
      digitRevealTimer=setTimeout(showNext,800);
    } else {
      display.textContent=item.direction==='backward'?'Type REVERSED':'Type digits';
      STATE.digitPhase='recall';
      STATE.digitInput='';
      keypad.style.display='grid';
      buildKeypad(item);
    }
  }
  setTimeout(showNext,600);
}

function buildKeypad(item){
  const keypad=document.getElementById('keypad');
  keypad.innerHTML='';
  const display=document.getElementById('digit-display');
  const keys=[1,2,3,4,5,6,7,8,9,'CLR',0,'OK'];
  keys.forEach(k=>{
    const b=document.createElement('button');
    b.className='key-btn';
    if(k==='CLR'){b.className+=' key-clear';b.textContent='⌫';}
    else if(k==='OK'){b.className+=' key-submit';b.textContent='Submit';}
    else b.textContent=k;
    b.onclick=()=>{
      if(k==='CLR'){STATE.digitInput=STATE.digitInput.slice(0,-1);}
      else if(k==='OK'){
        recordAnswer(item,STATE.digitInput);
        return;
      } else { STATE.digitInput+=k; }
      display.textContent=STATE.digitInput||'_';
    };
    keypad.appendChild(b);
  });
  display.textContent='_';
}

// ---- Symbol-Digit Practice ----
function renderSymdigPractice(item){
  const optEl=document.getElementById('q-options');
  const b=document.createElement('button');
  b.className='option-btn';
  b.innerHTML=`<span class="opt-letter">A</span><span>Understood — Start Task</span>`;
  b.onclick=()=>{
    b.classList.add('selected');
    STATE.selectedAnswer='Understood — Start Task';
    recordAnswer(item,'Understood — Start Task');
  };
  optEl.appendChild(b);
}

// ---- Symbol-Digit Timed ----
function renderSymdigTimed(item){
  const ui=document.getElementById('sym-digit-ui');
  ui.style.display='block';

  // Build key display
  const keyEl=document.getElementById('sym-key');
  keyEl.innerHTML='';
  SYM_KEY.forEach(k=>{
    const cell=document.createElement('div');
    cell.className='sym-key-cell';
    cell.innerHTML=`<span class="sym">${k.sym}</span><span class="dig">${k.dig}</span>`;
    keyEl.appendChild(cell);
  });

  // Generate task items (30 symbols in random order)
  const taskItems=[];
  for(let i=0;i<30;i++) taskItems.push(SYM_KEY[Math.floor(Math.random()*SYM_KEY.length)]);
  STATE.symdigItems=taskItems;
  STATE.symdigResponses=[];

  const taskEl=document.getElementById('sym-task');
  taskEl.innerHTML='';

  let currentIdx=0;
  const timerEl=document.getElementById('subtest-timer');
  let secondsLeft=90;
  timerEl.textContent=`⏱ ${secondsLeft}s`;

  function renderCurrentItem(){
    if(currentIdx>=taskItems.length){
      finishSymdig(); return;
    }
    const sym=taskItems[currentIdx];
    taskEl.innerHTML='';
    const row=document.createElement('div');
    row.className='sym-item';
    row.innerHTML=`<span class="sym-big">${sym.sym}</span>`;
    const digs=document.createElement('div');
    digs.className='sym-digits';
    [1,2,3,4,5,6,7,8,9].forEach(d=>{
      const db=document.createElement('button');
      db.className='sym-digit-btn';
      db.textContent=d;
      db.onclick=()=>{
        const correct=d===sym.dig;
        STATE.symdigResponses.push({correct, rt:0});
        currentIdx++;
        renderCurrentItem();
      };
      digs.appendChild(db);
    });
    row.appendChild(digs);
    taskEl.appendChild(row);
    // Progress indicator
    const prog=document.createElement('p');
    prog.style.cssText='font-size:13px;color:var(--clr-muted);text-align:center;margin-top:8px';
    prog.textContent=`${currentIdx+1} / ${taskItems.length}`;
    taskEl.appendChild(prog);
  }

  const symInterval=setInterval(()=>{
    secondsLeft--;
    timerEl.textContent=`⏱ ${secondsLeft}s`;
    if(secondsLeft<=0){clearInterval(symInterval);finishSymdig();}
  },1000);
  STATE._symdigInterval=symInterval;

  function finishSymdig(){
    clearInterval(symInterval);
    timerEl.textContent='';
    recordAnswer(item,'__symdig__');
  }
  renderCurrentItem();
}

// ---- Record answer and advance ----
function recordAnswer(item, answer){
  clearInterval(STATE._symdigInterval);
  clearInterval(STATE.viscompTimer);
  document.getElementById('subtest-timer').textContent='';

  let correct=false;
  if(item.type==='digit-span'){
    correct=(answer===item.correctAnswer);
  } else if(item.type==='symdig-timed'){
    // score handled in scoring section
    correct=true; // placeholder
  } else if(item.type==='symdig-practice'){
    correct=true;
  } else {
    correct=(answer===item.correctAnswer);
  }

  STATE.responses[item.id]={
    answer, correct,
    rt: performance.now()-STATE.subtestStartTime,
    symdigResponses: item.type==='symdig-timed'?[...STATE.symdigResponses]:undefined,
    timestamp: Date.now()
  };

  STATE.itemIdx++;
  saveState();
  nextItem();
}

function submitAnswer(){
  if(!STATE.selectedAnswer) return;
  recordAnswer(STATE.currentItem, STATE.selectedAnswer);
}

// ================================================================
// SECTION 4: SCORING
// ================================================================
/*
  Scoring pipeline (Carroll 1993, Jensen 1998):
  1. Raw proportion correct per subtest → weighted by gLoading
  2. z-score via assumed difficulty distribution
  3. Scaled score: mean=10, SD=3 (Wechsler convention)
  4. Index scores per factor: mean=100, SD=15
  5. Full-Scale g estimate: mean=100, SD=15, weighted by avg gLoading
  IQ = 100 + 15 * z

  NOTE: All norms are author-assigned, NOT empirically standardized.
        The difficulty (p) values are assumed population proportions
        correct, used to compute an expected mean for z-transformation.
*/

function scoreSubtest(subtestId){
  const items=ITEM_BANK.filter(i=>i.subtest===subtestId&&!i.practice);
  if(items.length===0) return {rawProp:0,weightedProp:0,scaledScore:10,gLoad:0.6};

  if(subtestId==='symdig'){
    const resp=STATE.responses['symdig1'];
    if(!resp||!resp.symdigResponses||resp.symdigResponses.length===0)
      return {rawProp:0,weightedProp:0,scaledScore:1,gLoad:0.52};
    const srs=resp.symdigResponses;
    const correct=srs.filter(r=>r.correct).length;
    const total=srs.length;
    const errors=srs.filter(r=>!r.correct).length;
    // Accuracy-penalized score: (correct - 0.5*errors) / total
    const prop=Math.max(0,(correct-0.5*errors))/Math.max(total,1);
    const avgDiff=0.60;
    const avgGL=0.52;
    // Expected SD of proportion ~ sqrt(p*(1-p)/n)
    const z=(prop-avgDiff)/Math.max(Math.sqrt(avgDiff*(1-avgDiff)/Math.max(total,1)),0.05);
    const scaled=Math.round(10+3*z);
    return {rawProp:prop,weightedProp:prop*avgGL,scaledScore:Math.max(1,Math.min(19,scaled)),gLoad:avgGL};
  }

  if(subtestId==='viscomp'){
    const items2=ITEM_BANK.filter(i=>i.subtest==='viscomp'&&!i.practice);
    let correct=0, total=0;
    items2.forEach(it=>{
      const r=STATE.responses[it.id];
      if(r) { total++; if(r.correct) correct++; }
    });
    const prop=total>0?correct/total:0;
    // Timeout counts as wrong
    const avgDiff=items2.reduce((s,i)=>s+i.difficulty,0)/items2.length;
    const avgGL=0.50;
    const z=(prop-avgDiff)/Math.max(Math.sqrt(avgDiff*(1-avgDiff)/Math.max(total,1)),0.08);
    const scaled=Math.round(10+3*z);
    return {rawProp:prop,weightedProp:prop*avgGL,scaledScore:Math.max(1,Math.min(19,scaled)),gLoad:avgGL};
  }

  // Standard subtests
  let weightedCorrect=0, totalWeight=0, totalCorrect=0, totalItems=0;
  const avgDifficulty=items.reduce((s,i)=>s+i.difficulty,0)/items.length;
  const avgGL=items.reduce((s,i)=>s+i.gLoading,0)/items.length;

  items.forEach(it=>{
    const r=STATE.responses[it.id];
    const w=it.gLoading||avgGL;
    totalWeight+=w;
    totalItems++;
    if(r&&r.correct){ weightedCorrect+=w; totalCorrect++; }
  });

  const rawProp=totalItems>0?totalCorrect/totalItems:0;
  const weightedProp=totalWeight>0?weightedCorrect/totalWeight:0;

  // z via expected proportion = avgDifficulty
  const expectedSD=Math.sqrt(avgDifficulty*(1-avgDifficulty)/Math.max(totalItems,1));
  const z=(weightedProp-avgDifficulty)/Math.max(expectedSD,0.08);
  const scaled=Math.round(10+3*z);

  return {
    rawProp, weightedProp,
    scaledScore: Math.max(1,Math.min(19,scaled)),
    gLoad: avgGL
  };
}

function computeResults(){
  const factorMap={ Gf:'matrix,series', Gc:'vocab,analogies', Gq:'arith,numrel', Gv:'rotation,fold', Gwm:'digit,lns', Gs:'symdig,viscomp' };
  const factorScores={};
  const subtestScores={};
  const factorGloads={};

  SUBTEST_ORDER.forEach(sid=>{
    subtestScores[sid]=scoreSubtest(sid);
  });

  Object.entries(factorMap).forEach(([factor,sids])=>{
    const ids=sids.split(',');
    const scores=ids.map(id=>subtestScores[id]);
    const avgScaled=scores.reduce((s,sc)=>s+sc.scaledScore,0)/scores.length;
    // Convert avg scaled (mean=10,SD=3) to index (mean=100,SD=15)
    const z=(avgScaled-10)/3;
    const index=Math.round(100+15*z);
    const avgGL=scores.reduce((s,sc)=>s+sc.gLoad,0)/scores.length;
    factorScores[factor]=Math.max(40,Math.min(160,index));
    factorGloads[factor]=avgGL;
  });

  // Full-Scale g: weighted average of all subtest scaled scores by gLoad
  let weightedSum=0, totalGL=0;
  SUBTEST_ORDER.forEach(sid=>{
    const sc=subtestScores[sid];
    weightedSum+=sc.scaledScore*sc.gLoad;
    totalGL+=sc.gLoad;
  });
  const weightedAvgScaled=totalGL>0?weightedSum/totalGL:10;
  const gZ=(weightedAvgScaled-10)/3;
  const fullScale=Math.round(100+15*gZ);
  const fsIQ=Math.max(40,Math.min(160,fullScale));

  // Percentile from normal distribution (approximation)
  function normalCDF(z){
    const a1=0.254829592,a2=-0.284496736,a3=1.421413741,a4=-1.453152027,a5=1.061405429,p=0.3275911;
    const sign=z<0?-1:1;
    const x=Math.abs(z)/Math.SQRT2;
    const t=1/(1+p*x);
    const y=1-(((((a5*t+a4)*t+a3)*t+a2)*t+a1)*t)*Math.exp(-x*x);
    return 0.5*(1+sign*y);
  }
  const pct=Math.round(normalCDF(gZ)*100);
  const band=iqBand(fsIQ);

  const totalTime=Math.round((performance.now()-STATE.startTime)/1000);

  return {factorScores, subtestScores, fsIQ, pct, band, gZ, totalTime};
}

function iqBand(iq){
  if(iq>=145) return 'Exceptionally Gifted';
  if(iq>=130) return 'Very Superior';
  if(iq>=120) return 'Superior';
  if(iq>=110) return 'High Average';
  if(iq>=90)  return 'Average';
  if(iq>=80)  return 'Low Average';
  if(iq>=70)  return 'Borderline';
  return 'Extremely Low';
}

function showResults(){
  const R=computeResults();
  showScreen('screen-results');
  document.getElementById('progress-bar-wrap').classList.remove('visible');

  document.getElementById('res-iq').textContent=R.fsIQ;
  document.getElementById('res-band').textContent=R.band;
  document.getElementById('res-pct').textContent=`${R.pct}th percentile`;

  // Factor bars
  const factorNames={Gf:'Fluid Reasoning',Gc:'Crystallized Intelligence',Gq:'Quantitative Reasoning',Gv:'Visual–Spatial',Gwm:'Working Memory',Gs:'Processing Speed'};
  const factorColors={Gf:'tag-gf',Gc:'tag-gc',Gq:'tag-gq',Gv:'tag-gv',Gwm:'tag-gwm',Gs:'tag-gs'};
  const barsEl=document.getElementById('factor-bars');
  barsEl.innerHTML='';
  Object.entries(R.factorScores).forEach(([f,score])=>{
    const pct=Math.round((score-40)/120*100);
    barsEl.innerHTML+=`
      <div class="factor-row">
        <div class="factor-name"><span class="tag ${factorColors[f]}">${f}</span> ${factorNames[f]}</div>
        <div class="factor-score-num">${score}</div>
        <div class="factor-bar-wrap"><div class="factor-bar" style="width:${pct}%"></div></div>
      </div>`;
  });

  // Radar chart
  drawRadar(R.factorScores);

  // Subtest breakdown
  const stEl=document.getElementById('subtest-breakdown');
  stEl.innerHTML='';
  SUBTESTS.forEach(def=>{
    const sc=R.subtestScores[def.id];
    if(!sc) return;
    stEl.innerHTML+=`
      <div class="factor-row">
        <div class="factor-name" style="font-size:13px">${def.name}</div>
        <div class="factor-score-num" style="font-size:13px">${sc.scaledScore}</div>
        <div class="factor-bar-wrap"><div class="factor-bar" style="width:${Math.round((sc.scaledScore-1)/18*100)}%;background:${sc.gLoad>0.65?'linear-gradient(90deg,#4f7cff,#7c4fff)':'linear-gradient(90deg,#22d3ee,#4ade80)'}"></div></div>
      </div>`;
  });

  // Time summary
  const mins=Math.floor(R.totalTime/60), secs=R.totalTime%60;
  document.getElementById('time-summary').innerHTML=`Total time: <strong>${mins}m ${secs}s</strong>`;

  clearState();
}

// ---- Radar / Spider Chart (pure SVG) ----
function drawRadar(factorScores){
  const factors=['Gf','Gc','Gq','Gv','Gwm','Gs'];
  const labels=['Fluid','Crystalized','Quant','Spatial','Working Mem','Speed'];
  const N=factors.length;
  const cx=150, cy=150, maxR=100;
  const minIQ=70, maxIQ=130;

  function polarToXY(angle, r){
    return [cx+r*Math.cos(angle), cy+r*Math.sin(angle)];
  }

  const svg=document.getElementById('radar-svg');
  let html='';

  // Grid rings
  [0.25,0.5,0.75,1.0].forEach(frac=>{
    let pts='';
    for(let i=0;i<N;i++){
      const a=Math.PI*2/N*i-Math.PI/2;
      const [x,y]=polarToXY(a,maxR*frac);
      pts+=`${x},${y} `;
    }
    html+=`<polygon points="${pts}" fill="none" stroke="var(--clr-border)" stroke-width="1"/>`;
    // Label
    const [lx,ly]=polarToXY(-Math.PI/2, maxR*frac);
    html+=`<text x="${lx+4}" y="${ly}" fill="var(--clr-muted)" font-size="9">${Math.round(minIQ+(maxIQ-minIQ)*frac)}</text>`;
  });

  // Spokes
  for(let i=0;i<N;i++){
    const a=Math.PI*2/N*i-Math.PI/2;
    const [x,y]=polarToXY(a,maxR);
    html+=`<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="var(--clr-border)" stroke-width="1"/>`;
    const [lx,ly]=polarToXY(a,maxR+18);
    html+=`<text x="${lx}" y="${ly+4}" text-anchor="middle" fill="var(--clr-muted)" font-size="10">${labels[i]}</text>`;
  }

  // Data polygon
  let dataPts='';
  factors.forEach((f,i)=>{
    const score=factorScores[f]||100;
    const frac=Math.max(0,Math.min(1,(score-minIQ)/(maxIQ-minIQ)));
    const a=Math.PI*2/N*i-Math.PI/2;
    const [x,y]=polarToXY(a,maxR*frac);
    dataPts+=`${x},${y} `;
  });
  html+=`<polygon points="${dataPts}" fill="#4f7cff33" stroke="#4f7cff" stroke-width="2"/>`;

  // Data points
  factors.forEach((f,i)=>{
    const score=factorScores[f]||100;
    const frac=Math.max(0,Math.min(1,(score-minIQ)/(maxIQ-minIQ)));
    const a=Math.PI*2/N*i-Math.PI/2;
    const [x,y]=polarToXY(a,maxR*frac);
    html+=`<circle cx="${x}" cy="${y}" r="4" fill="#4f7cff"/>`;
    html+=`<text x="${x+6}" y="${y-4}" fill="var(--clr-text)" font-size="10" font-weight="700">${score}</text>`;
  });

  svg.innerHTML=html;
}

// ---- Restart ----
function restartTest(){
  clearState();
  location.reload();
}

// ================================================================
// INIT
// ================================================================
(function init(){
  checkResume();
})();
</script>
</body>
</html>
