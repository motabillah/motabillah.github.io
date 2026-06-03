<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Logic Flow Engine</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    /* ── Reset & Base ─────────────────────────────────────────────────── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:           #0f1117;
      --bg-panel:     #161820;
      --bg-node:      rgba(22, 24, 35, 0.92);
      --bg-node-hov:  rgba(30, 33, 48, 0.96);
      --border:       rgba(255,255,255,0.07);
      --border-sel:   rgba(255,255,255,0.22);
      --text:         #e2e4ef;
      --text-muted:   #6b7094;
      --text-dim:     #3d4160;

      --accent-input:  #4f8ef7;   /* blue  – number */
      --accent-logic:  #a855f7;   /* purple – logic  */
      --accent-math:   #f97316;   /* orange – math   */
      --accent-string: #22d3ee;   /* cyan  – string  */
      --accent-output: #10b981;   /* green – output  */
      --accent-flow:   #f59e0b;   /* amber – flow    */

      --wire-number:  #4f8ef7;
      --wire-bool:    #22c55e;
      --wire-string:  #f97316;
      --wire-null:    #6b7094;

      --port-r: 6px;
      --node-radius: 10px;
      --toolbar-h: 44px;
      --sidebar-w: 220px;

      --shadow-node: 0 4px 24px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.4);
      --shadow-node-sel: 0 0 0 2px var(--border-sel), 0 4px 32px rgba(0,0,0,0.7);
    }

    html, body {
      width: 100%; height: 100%;
      overflow: hidden;
      background: var(--bg);
      color: var(--text);
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      user-select: none;
    }

    /* ── Layout Shell ─────────────────────────────────────────────────── */
    #app {
      display: grid;
      grid-template-rows: var(--toolbar-h) 1fr;
      grid-template-columns: var(--sidebar-w) 1fr;
      grid-template-areas:
        "toolbar toolbar"
        "sidebar canvas";
      width: 100%; height: 100%;
    }

    /* ── Toolbar ──────────────────────────────────────────────────────── */
    #toolbar {
      grid-area: toolbar;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 14px;
      background: var(--bg-panel);
      border-bottom: 1px solid var(--border);
      z-index: 100;
    }

    #toolbar .logo {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--text);
      margin-right: 10px;
      white-space: nowrap;
    }
    #toolbar .logo span { color: var(--accent-input); }

    .tb-sep {
      width: 1px; height: 22px;
      background: var(--border);
      margin: 0 4px;
    }

    .tb-btn {
      display: flex; align-items: center; gap: 5px;
      padding: 5px 10px;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text-muted);
      cursor: pointer;
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
      white-space: nowrap;
    }
    .tb-btn:hover {
      background: rgba(255,255,255,0.08);
      color: var(--text);
      border-color: rgba(255,255,255,0.14);
    }
    .tb-btn.danger:hover { color: #f87171; border-color: rgba(248,113,113,0.3); }
    .tb-btn svg { flex-shrink: 0; }

    /* ── Sidebar ──────────────────────────────────────────────────────── */
    #sidebar {
      grid-area: sidebar;
      display: flex;
      flex-direction: column;
      background: var(--bg-panel);
      border-right: 1px solid var(--border);
      overflow: hidden;
      z-index: 50;
    }

    #sidebar-header {
      padding: 10px 12px 8px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--text-dim);
      border-bottom: 1px solid var(--border);
    }

    #palette {
      flex: 1;
      overflow-y: auto;
      padding: 8px 0;
    }
    #palette::-webkit-scrollbar { width: 4px; }
    #palette::-webkit-scrollbar-track { background: transparent; }
    #palette::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }

    .palette-category { margin-bottom: 2px; }

    .palette-cat-header {
      display: flex; align-items: center; gap: 6px;
      padding: 5px 12px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-dim);
      cursor: pointer;
      transition: color 0.15s;
    }
    .palette-cat-header:hover { color: var(--text-muted); }
    .palette-cat-header .cat-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .palette-cat-header .cat-arrow {
      margin-left: auto;
      transition: transform 0.2s;
      font-size: 9px;
    }
    .palette-cat-header.collapsed .cat-arrow { transform: rotate(-90deg); }

    .palette-items { padding: 0 8px 4px; }
    .palette-items.hidden { display: none; }

    .palette-item {
      display: flex; align-items: center; gap: 8px;
      padding: 6px 8px;
      border-radius: 6px;
      cursor: grab;
      color: var(--text-muted);
      font-size: 11px;
      font-weight: 500;
      transition: background 0.12s, color 0.12s;
      border: 1px solid transparent;
    }
    .palette-item:hover {
      background: rgba(255,255,255,0.05);
      color: var(--text);
      border-color: var(--border);
    }
    .palette-item:active { cursor: grabbing; }
    .palette-item .item-icon {
      width: 20px; height: 20px;
      border-radius: 4px;
      display: flex; align-items: center; justify-content: center;
      font-size: 10px;
      flex-shrink: 0;
    }

    /* ── Canvas Area ──────────────────────────────────────────────────── */
    #canvas-wrap {
      grid-area: canvas;
      position: relative;
      overflow: hidden;
      background: var(--bg);
      cursor: default;
    }

    /* dot-grid background via SVG data URI */
    #canvas-wrap::before {
      content: '';
      position: absolute; inset: 0;
      background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
      background-size: 28px 28px;
      pointer-events: none;
      z-index: 0;
    }

    #svg-layer {
      position: absolute; inset: 0;
      width: 100%; height: 100%;
      z-index: 1;
      pointer-events: none;
    }
    #svg-layer .wire-group { pointer-events: stroke; }

    #nodes-layer {
      position: absolute; top: 0; left: 0;
      width: 0; height: 0;           /* children use absolute positioning */
      z-index: 2;
      transform-origin: 0 0;
    }

    /* ── Nodes ────────────────────────────────────────────────────────── */
    .node {
      position: absolute;
      min-width: 160px;
      background: var(--bg-node);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--border);
      border-radius: var(--node-radius);
      box-shadow: var(--shadow-node);
      cursor: grab;
      transition: box-shadow 0.15s, border-color 0.15s;
    }
    .node:hover { border-color: rgba(255,255,255,0.13); }
    .node.selected { box-shadow: var(--shadow-node-sel); border-color: rgba(255,255,255,0.28); }
    .node.active { /* pulsing border when data flows through */ }
    .node.error { border-color: rgba(239,68,68,0.5); box-shadow: 0 0 0 1px rgba(239,68,68,0.3), var(--shadow-node); }
    .node:active { cursor: grabbing; }

    .node-header {
      display: flex; align-items: center; gap: 7px;
      padding: 8px 10px 7px;
      border-bottom: 1px solid var(--border);
      border-radius: var(--node-radius) var(--node-radius) 0 0;
      position: relative;
    }
    /* coloured left-border accent */
    .node-header::before {
      content: '';
      position: absolute; left: 0; top: 0; bottom: 0;
      width: 3px;
      border-radius: var(--node-radius) 0 0 0;
      background: var(--node-accent, #555);
    }
    .node-header .node-icon {
      font-size: 12px; flex-shrink: 0;
      margin-left: 4px;
    }
    .node-header .node-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.04em;
      color: var(--text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }
    .node-header .node-type-badge {
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-dim);
      white-space: nowrap;
    }

    .node-body {
      padding: 8px 10px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .node-row {
      display: flex;
      align-items: center;
      gap: 6px;
      position: relative;
      min-height: 22px;
    }
    .node-row.port-row { justify-content: space-between; }

    /* ── Ports ────────────────────────────────────────────────────────── */
    .port {
      width: calc(var(--port-r)*2);
      height: calc(var(--port-r)*2);
      border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.2);
      background: var(--bg);
      cursor: crosshair;
      position: absolute;
      transition: border-color 0.12s, background 0.12s, box-shadow 0.12s, transform 0.12s;
      z-index: 10;
    }
    .port:hover, .port.highlight {
      border-color: #fff;
      background: rgba(255,255,255,0.15);
      box-shadow: 0 0 6px rgba(255,255,255,0.4);
      transform: scale(1.3);
    }
    .port.connected {
      background: var(--port-color, #555);
      border-color: var(--port-color, #555);
    }
    .port.input  { left:  calc(var(--port-r) * -1 - 1px); }
    .port.output { right: calc(var(--port-r) * -1 - 1px); }

    .port-label {
      font-size: 10px;
      color: var(--text-muted);
      white-space: nowrap;
    }
    .port-label.input-label  { padding-left: 10px; }
    .port-label.output-label { padding-right: 10px; margin-left: auto; }

    /* ── Node inline controls ─────────────────────────────────────────── */
    .node-control {
      width: 100%;
      margin-top: 2px;
    }
    .node-control input[type="number"],
    .node-control input[type="text"] {
      width: 100%;
      background: rgba(0,0,0,0.3);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 5px;
      color: var(--text);
      font-family: inherit;
      font-size: 12px;
      padding: 4px 8px;
      outline: none;
      transition: border-color 0.15s;
    }
    .node-control input:focus {
      border-color: rgba(255,255,255,0.25);
    }
    .node-control input[type="range"] {
      width: 100%;
      accent-color: var(--node-accent, #4f8ef7);
      cursor: pointer;
    }
    .node-control .toggle-wrap {
      display: flex; align-items: center; justify-content: space-between;
      gap: 8px;
    }
    .node-control .toggle-label { font-size: 11px; color: var(--text-muted); }
    .node-control .toggle {
      width: 36px; height: 20px;
      border-radius: 10px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.1);
      cursor: pointer;
      position: relative;
      transition: background 0.2s, border-color 0.2s;
      flex-shrink: 0;
    }
    .node-control .toggle.on {
      background: var(--wire-bool);
      border-color: var(--wire-bool);
    }
    .node-control .toggle::after {
      content: '';
      position: absolute;
      top: 2px; left: 2px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: #fff;
      transition: transform 0.2s;
    }
    .node-control .toggle.on::after { transform: translateX(16px); }

    .node-control select {
      width: 100%;
      background: rgba(0,0,0,0.3);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 5px;
      color: var(--text);
      font-family: inherit;
      font-size: 11px;
      padding: 4px 6px;
      outline: none;
      cursor: pointer;
    }

    .node-value-display {
      font-size: 12px;
      font-weight: 600;
      color: var(--text);
      padding: 4px 6px;
      background: rgba(0,0,0,0.3);
      border-radius: 5px;
      border: 1px solid var(--border);
      min-height: 24px;
      word-break: break-all;
    }
    .node-value-display.null-val { color: var(--text-dim); font-style: italic; }

    /* LED indicator */
    .led {
      width: 22px; height: 22px;
      border-radius: 50%;
      background: rgba(255,255,255,0.06);
      border: 2px solid rgba(255,255,255,0.1);
      transition: background 0.2s, box-shadow 0.2s, border-color 0.2s;
      flex-shrink: 0;
    }
    .led.on {
      background: var(--wire-bool);
      border-color: var(--wire-bool);
      box-shadow: 0 0 10px rgba(34,197,94,0.7), 0 0 20px rgba(34,197,94,0.35);
    }
    .led.error { background: #ef4444; border-color: #ef4444; box-shadow: 0 0 10px rgba(239,68,68,0.7); }

    /* Logger node */
    .logger-log {
      background: rgba(0,0,0,0.35);
      border: 1px solid var(--border);
      border-radius: 5px;
      padding: 4px 6px;
      max-height: 80px;
      overflow-y: auto;
      font-size: 10px;
      color: var(--text-muted);
      line-height: 1.6;
    }
    .logger-log::-webkit-scrollbar { width: 3px; }
    .logger-log::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
    .log-entry { color: var(--text-muted); }
    .log-entry .log-ts { color: var(--text-dim); margin-right: 4px; }

    /* ── Wires (SVG) ──────────────────────────────────────────────────── */
    .wire {
      fill: none;
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke: var(--wire-null);
      opacity: 0.55;
      cursor: pointer;
      transition: opacity 0.2s, stroke-width 0.2s;
    }
    .wire:hover, .wire.selected { stroke-width: 3.5; opacity: 1; }
    .wire.wire-number  { stroke: var(--wire-number); }
    .wire.wire-boolean { stroke: var(--wire-bool); }
    .wire.wire-string  { stroke: var(--wire-string); }
    .wire.hot {
      opacity: 1;
      filter: drop-shadow(0 0 4px currentColor);
    }
    .wire.type-mismatch { stroke: #ef4444; stroke-dasharray: 5 3; }

    /* pulse animation on wires */
    @keyframes wire-pulse {
      0%   { stroke-dashoffset: 100; opacity: 1; }
      100% { stroke-dashoffset: 0;   opacity: 0.6; }
    }
    .wire.pulse {
      stroke-dasharray: 10 6;
      animation: wire-pulse 0.4s ease-out;
    }

    /* dragging wire (not yet connected) */
    #drag-wire {
      fill: none;
      stroke: rgba(255,255,255,0.5);
      stroke-width: 2;
      stroke-dasharray: 6 4;
      pointer-events: none;
    }

    /* ── Context Menu ─────────────────────────────────────────────────── */
    #context-menu {
      position: fixed;
      background: var(--bg-panel);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 8px;
      padding: 4px;
      min-width: 180px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.6);
      z-index: 1000;
      display: none;
    }
    #context-menu.visible { display: block; }

    .ctx-section {
      padding: 4px 8px 2px;
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--text-dim);
    }
    .ctx-item {
      display: flex; align-items: center; gap: 8px;
      padding: 6px 10px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 12px;
      color: var(--text-muted);
      transition: background 0.1s, color 0.1s;
    }
    .ctx-item:hover { background: rgba(255,255,255,0.07); color: var(--text); }
    .ctx-item.danger:hover { background: rgba(239,68,68,0.1); color: #f87171; }
    .ctx-sep { height: 1px; background: var(--border); margin: 4px 0; }

    /* ── Minimap ──────────────────────────────────────────────────────── */
    #minimap {
      position: absolute;
      bottom: 16px; right: 16px;
      width: 160px; height: 100px;
      background: rgba(15,17,23,0.85);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      overflow: hidden;
      z-index: 50;
      backdrop-filter: blur(8px);
    }
    #minimap canvas { display: block; }
    #minimap-viewport {
      position: absolute;
      border: 1px solid rgba(255,255,255,0.4);
      background: rgba(255,255,255,0.04);
      border-radius: 2px;
      pointer-events: none;
    }

    /* ── Wire tooltip ─────────────────────────────────────────────────── */
    #wire-tooltip {
      position: fixed;
      background: rgba(15,17,23,0.92);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 6px;
      padding: 4px 10px;
      font-size: 11px;
      color: var(--text);
      pointer-events: none;
      z-index: 500;
      display: none;
      white-space: nowrap;
    }

    /* ── Status bar ───────────────────────────────────────────────────── */
    #statusbar {
      position: absolute;
      bottom: 16px; left: 50%;
      transform: translateX(-50%);
      background: rgba(15,17,23,0.85);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 4px 14px;
      font-size: 10px;
      color: var(--text-dim);
      z-index: 50;
      pointer-events: none;
      backdrop-filter: blur(8px);
      transition: opacity 0.4s;
    }
    #statusbar.hide { opacity: 0; }

    /* ── Scrollbar (global) ───────────────────────────────────────────── */
    ::-webkit-scrollbar { width: 5px; height: 5px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }

    /* ── Cycle error flash ────────────────────────────────────────────── */
    @keyframes cycle-flash {
      0%, 100% { border-color: rgba(239,68,68,0.5); }
      50%       { border-color: rgba(239,68,68,1); box-shadow: 0 0 12px rgba(239,68,68,0.6); }
    }
    .node.cycle { animation: cycle-flash 0.6s ease 3; }

    /* ── Node active pulse ────────────────────────────────────────────── */
    @keyframes node-active {
      0%   { box-shadow: var(--shadow-node), 0 0 0 0 rgba(255,255,255,0.2); }
      50%  { box-shadow: var(--shadow-node), 0 0 0 4px rgba(255,255,255,0.06); }
      100% { box-shadow: var(--shadow-node); }
    }
    .node.just-evaluated { animation: node-active 0.3s ease; }

    /* ── Drag-from-palette ghost ──────────────────────────────────────── */
    #drag-ghost {
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.75;
      display: none;
      background: var(--bg-node);
      border: 1px solid rgba(255,255,255,0.18);
      border-radius: var(--node-radius);
      padding: 7px 12px;
      font-size: 11px;
      font-weight: 600;
      color: var(--text);
      box-shadow: var(--shadow-node);
      white-space: nowrap;
    }

    /* ── Drop-zone highlight ──────────────────────────────────────────── */
    #canvas-wrap.drop-active::after {
      content: '';
      position: absolute; inset: 0;
      border: 2px dashed rgba(79,142,247,0.35);
      border-radius: 0;
      pointer-events: none;
      z-index: 200;
    }
  </style>
</head>
<body>
<div id="app">

  <!-- Toolbar -->
  <div id="toolbar">
    <div class="logo">Logic<span>Flow</span></div>
    <div class="tb-sep"></div>
    <button class="tb-btn" id="btn-new">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      New
    </button>
    <button class="tb-btn" id="btn-save">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
      Save
    </button>
    <button class="tb-btn" id="btn-load">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
      Load
    </button>
    <button class="tb-btn" id="btn-export">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      Export
    </button>
    <div class="tb-sep"></div>
    <button class="tb-btn danger" id="btn-clear">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
      Clear
    </button>
  </div>

  <!-- Sidebar / Palette -->
  <div id="sidebar">
    <div id="sidebar-header">Node Palette</div>
    <div id="palette"></div>
  </div>

  <!-- Canvas -->
  <div id="canvas-wrap">
    <svg id="svg-layer" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.3)" />
        </marker>
      </defs>
      <g id="wires-group"></g>
      <path id="drag-wire" d="" />
    </svg>
    <div id="nodes-layer"></div>
    <div id="minimap">
      <canvas id="minimap-canvas" width="160" height="100"></canvas>
      <div id="minimap-viewport"></div>
    </div>
    <div id="statusbar">Ready</div>
  </div>

</div>

<!-- Context Menu -->
<div id="context-menu"></div>

<!-- Wire Tooltip -->
<div id="wire-tooltip"></div>

<!-- Palette drag ghost -->
<div id="drag-ghost"></div>

<!-- Hidden file input for Load/Import -->
<input type="file" id="file-input" accept=".json" style="display:none" />

<script>
'use strict';

/* ═══════════════════════════════════════════════════════════════════════
   APP STATE
   Single source of truth — everything serialisable lives here.
   ═══════════════════════════════════════════════════════════════════════ */
const appState = {
  /** @type {Map<string, NodeState>} node id → node data */
  nodes: new Map(),

  /** @type {Map<string, WireState>} wire id → wire data */
  wires: new Map(),

  /** Canvas transform */
  viewport: {
    x: 0,      // pan offset x (px)
    y: 0,      // pan offset y (px)
    scale: 1,  // zoom level
  },

  /** Currently selected entity */
  selection: {
    type: null,   // 'node' | 'wire' | null
    id:   null,
  },

  /** Interaction state (not serialised) */
  interaction: {
    isPanning:       false,
    panStart:        { x: 0, y: 0 },
    panOrigin:       { x: 0, y: 0 },
    isDraggingNode:  false,
    draggingNodeId:  null,
    dragOffset:      { x: 0, y: 0 },
    isDrawingWire:   false,
    wireFrom:        null,   // { nodeId, portId, portType:'output', worldX, worldY }
    mouseWorld:      { x: 0, y: 0 },
    paletteDrag:     null,   // { type: nodeTypeName }
  },

  /** Graph evaluation bookkeeping (not serialised) */
  execution: {
    order:    [],    // topological order of node ids
    hasCycle: false,
    cycleIds: [],
  },

  /** Settings */
  settings: {
    animateWires:  true,
    showMinimap:   true,
    maxLogEntries: 20,
  },
};

/**
 * @typedef {Object} NodeState
 * @property {string}  id
 * @property {string}  type       - registered node type name
 * @property {number}  x
 * @property {number}  y
 * @property {Object}  config     - node-type-specific user-editable config
 * @property {Object}  inputs     - portId → current value
 * @property {Object}  outputs    - portId → current value
 * @property {string}  status     - 'idle' | 'active' | 'error'
 * @property {string}  [errorMsg]
 */

/**
 * @typedef {Object} WireState
 * @property {string} id
 * @property {string} fromNodeId
 * @property {string} fromPortId
 * @property {string} toNodeId
 * @property {string} toPortId
 * @property {*}      value       - last value that flowed through
 * @property {string} dataType    - 'number' | 'boolean' | 'string' | 'null'
 */

/* ═══════════════════════════════════════════════════════════════════════
   GRAPH ENGINE
   Node registry, topological sort, cycle detection, evaluation.
   ═══════════════════════════════════════════════════════════════════════ */
const GraphEngine = (() => {

  /* ── Node Type Registry ─────────────────────────────────────────────── */

  /** @type {Map<string, NodeTypeDef>} */
  const _registry = new Map();

  /**
   * @typedef {Object} PortDef
   * @property {string}  id
   * @property {string}  label
   * @property {string}  dataType   - 'number'|'boolean'|'string'|'any'
   */

  /**
   * @typedef {Object} NodeTypeDef
   * @property {string}    type
   * @property {string}    label
   * @property {string}    category   - 'input'|'logic'|'math'|'string'|'output'|'flow'
   * @property {string}    icon
   * @property {PortDef[]} inputs
   * @property {PortDef[]} outputs
   * @property {Object}    defaultConfig
   * @property {function(Object, Object): Object} compute
   *   Pure function: (inputs, config) => outputs object.
   *   May throw — error is caught and set as node error state.
   */

  /**
   * Register a node type definition.
   * @param {NodeTypeDef} def
   */
  function registerNodeType(def) {
    _registry.set(def.type, def);
  }

  /** @returns {NodeTypeDef|undefined} */
  function getNodeType(type) {
    return _registry.get(type);
  }

  /** @returns {NodeTypeDef[]} all registered types */
  function getAllNodeTypes() {
    return Array.from(_registry.values());
  }

  /* ── ID generation ──────────────────────────────────────────────────── */

  let _idCounter = 1;
  /** @returns {string} unique id */
  function newId(prefix = 'n') {
    return `${prefix}_${Date.now()}_${_idCounter++}`;
  }

  /* ── Node creation ──────────────────────────────────────────────────── */

  /**
   * Create a new NodeState from a registered type.
   * @param {string} type
   * @param {number} x
   * @param {number} y
   * @returns {NodeState}
   */
  function createNode(type, x, y) {
    const def = _registry.get(type);
    if (!def) throw new Error(`Unknown node type: ${type}`);

    const id = newId('n');
    const inputs  = {};
    const outputs = {};

    for (const p of def.inputs)  inputs[p.id]  = null;
    for (const p of def.outputs) outputs[p.id] = null;

    return {
      id,
      type,
      x,
      y,
      config:   structuredClone(def.defaultConfig),
      inputs,
      outputs,
      status:   'idle',
      errorMsg: '',
    };
  }

  /* ── Wire creation ──────────────────────────────────────────────────── */

  /**
   * Create a WireState connecting two ports.
   * Returns null if the connection would duplicate an existing wire
   * or violate single-input-per-port rule.
   * @returns {WireState|null}
   */
  function createWire(fromNodeId, fromPortId, toNodeId, toPortId) {
    // an input port may only receive one wire
    for (const w of appState.wires.values()) {
      if (w.toNodeId === toNodeId && w.toPortId === toPortId) return null;
      // no duplicate wires
      if (w.fromNodeId === fromNodeId && w.fromPortId === fromPortId &&
          w.toNodeId   === toNodeId   && w.toPortId   === toPortId) return null;
    }
    return {
      id:         newId('w'),
      fromNodeId,
      fromPortId,
      toNodeId,
      toPortId,
      value:      null,
      dataType:   'null',
    };
  }

  /* ── Graph topology helpers ─────────────────────────────────────────── */

  /**
   * Build adjacency list and in-degree map from current appState.
   * @returns {{ adj: Map<string,string[]>, indeg: Map<string,number> }}
   */
  function _buildGraph() {
    const adj   = new Map();   // nodeId → [downstream nodeIds]
    const indeg = new Map();   // nodeId → in-degree count

    for (const id of appState.nodes.keys()) {
      adj.set(id, []);
      indeg.set(id, 0);
    }

    for (const w of appState.wires.values()) {
      const { fromNodeId, toNodeId } = w;
      if (!adj.has(fromNodeId) || !adj.has(toNodeId)) continue;
      adj.get(fromNodeId).push(toNodeId);
      indeg.set(toNodeId, indeg.get(toNodeId) + 1);
    }

    return { adj, indeg };
  }

  /**
   * Kahn's algorithm — topological sort + cycle detection.
   * Populates appState.execution.order / hasCycle / cycleIds.
   */
  function topoSort() {
    const { adj, indeg } = _buildGraph();
    const queue  = [];
    const order  = [];

    for (const [id, deg] of indeg) {
      if (deg === 0) queue.push(id);
    }

    while (queue.length) {
      const id = queue.shift();
      order.push(id);
      for (const next of adj.get(id)) {
        const d = indeg.get(next) - 1;
        indeg.set(next, d);
        if (d === 0) queue.push(next);
      }
    }

    const hasCycle = order.length < appState.nodes.size;
    const cycleIds = hasCycle
      ? Array.from(appState.nodes.keys()).filter(id => !order.includes(id))
      : [];

    appState.execution.order    = order;
    appState.execution.hasCycle = hasCycle;
    appState.execution.cycleIds = cycleIds;

    return { order, hasCycle, cycleIds };
  }

  /* ── Value typing helper ────────────────────────────────────────────── */

  /**
   * Derive the wire CSS class from a value.
   * @param {*} val
   * @returns {'number'|'boolean'|'string'|'null'}
   */
  function classifyType(val) {
    if (val === null || val === undefined) return 'null';
    if (typeof val === 'boolean')  return 'boolean';
    if (typeof val === 'number')   return 'number';
    if (typeof val === 'string')   return 'string';
    return 'null';
  }

  /**
   * Coerce a value to match the expected port dataType.
   * Returns the coerced value, or null on failure.
   * @param {*} val
   * @param {string} targetType  - 'number'|'boolean'|'string'|'any'
   * @returns {*}
   */
  function coerce(val, targetType) {
    if (targetType === 'any' || val === null || val === undefined) return val;
    const t = typeof val;
    if (targetType === 'number') {
      if (t === 'number')  return val;
      if (t === 'boolean') return val ? 1 : 0;
      const n = Number(val);
      return isNaN(n) ? null : n;
    }
    if (targetType === 'boolean') {
      if (t === 'boolean') return val;
      if (t === 'number')  return val !== 0;
      if (t === 'string')  return val.length > 0 && val !== 'false' && val !== '0';
      return Boolean(val);
    }
    if (targetType === 'string') {
      return String(val);
    }
    return val;
  }

  /* ── Core evaluation ────────────────────────────────────────────────── */

  /**
   * Evaluate the full graph in topological order.
   * Propagates output values along wires, then calls each node's compute().
   * Returns an array of { nodeId, changed } for renderer to animate.
   * @returns {{ nodeId: string, changed: boolean }[]}
   */
  function evaluate() {
    const { order, hasCycle } = topoSort();
    const results = [];

    // build a fast lookup: toNodeId+toPortId → wire
    const wireByDest = new Map();
    for (const w of appState.wires.values()) {
      wireByDest.set(`${w.toNodeId}::${w.toPortId}`, w);
    }

    // build lookup: fromNodeId+fromPortId → [wires]
    const wireBySource = new Map();
    for (const w of appState.wires.values()) {
      const key = `${w.fromNodeId}::${w.fromPortId}`;
      if (!wireBySource.has(key)) wireBySource.set(key, []);
      wireBySource.get(key).push(w);
    }

    for (const nodeId of order) {
      const node = appState.nodes.get(nodeId);
      if (!node) continue;
      const def  = _registry.get(node.type);
      if (!def) continue;

      // --- 1. Pull values from incoming wires into node.inputs
      for (const portDef of def.inputs) {
        const wire = wireByDest.get(`${nodeId}::${portDef.id}`);
        if (wire) {
          // propagate upstream node's output onto this input
          const upstreamNode = appState.nodes.get(wire.fromNodeId);
          const rawVal = upstreamNode ? upstreamNode.outputs[wire.fromPortId] : null;
          node.inputs[portDef.id] = coerce(rawVal, portDef.dataType);

          // update wire metadata
          wire.value    = rawVal;
          wire.dataType = classifyType(rawVal);
        }
      }

      // --- 2. Compute outputs
      const prevOutputs = structuredClone(node.outputs);
      try {
        const newOutputs = def.compute(node.inputs, node.config);
        Object.assign(node.outputs, newOutputs);
        node.status   = 'active';
        node.errorMsg = '';
      } catch (err) {
        node.status   = 'error';
        node.errorMsg = err.message;
        // zero out outputs on error
        for (const k of Object.keys(node.outputs)) node.outputs[k] = null;
      }

      // --- 3. Push output values along outgoing wires & detect type mismatches
      for (const portDef of def.outputs) {
        const wires = wireBySource.get(`${nodeId}::${portDef.id}`) || [];
        for (const wire of wires) {
          wire.value    = node.outputs[portDef.id];
          wire.dataType = classifyType(wire.value);
          // flag type mismatch
          const destNode = appState.nodes.get(wire.toNodeId);
          const destDef  = destNode ? _registry.get(destNode.type) : null;
          if (destDef) {
            const destPort = destDef.inputs.find(p => p.id === wire.toPortId);
            if (destPort && destPort.dataType !== 'any' &&
                wire.dataType !== 'null' && wire.dataType !== destPort.dataType) {
              wire.typeMismatch = true;
            } else {
              wire.typeMismatch = false;
            }
          }
        }
      }

      // --- 4. Record whether this node's output changed (for animation)
      const changed = JSON.stringify(prevOutputs) !== JSON.stringify(node.outputs);
      results.push({ nodeId, changed });
    }

    return results;
  }

  /**
   * Re-evaluate only a node and all its downstream descendants.
   * Cheaper than a full evaluate() when only one source changes.
   * @param {string} startNodeId
   * @returns {{ nodeId: string, changed: boolean }[]}
   */
  function evaluateFrom(startNodeId) {
    // collect all descendants via BFS on the wire graph
    const visited  = new Set();
    const queue    = [startNodeId];

    // build adjacency for quick traversal
    const adj = new Map();
    for (const id of appState.nodes.keys()) adj.set(id, []);
    for (const w of appState.wires.values()) {
      if (adj.has(w.fromNodeId)) adj.get(w.fromNodeId).push(w.toNodeId);
    }

    while (queue.length) {
      const id = queue.shift();
      if (visited.has(id)) continue;
      visited.add(id);
      for (const next of (adj.get(id) || [])) queue.push(next);
    }

    // run full topo-sort but only evaluate nodes in the affected set
    const { order } = topoSort();

    const wireByDest   = new Map();
    const wireBySource = new Map();
    for (const w of appState.wires.values()) {
      wireByDest.set(`${w.toNodeId}::${w.toPortId}`, w);
      const key = `${w.fromNodeId}::${w.fromPortId}`;
      if (!wireBySource.has(key)) wireBySource.set(key, []);
      wireBySource.get(key).push(w);
    }

    const results = [];

    for (const nodeId of order) {
      if (!visited.has(nodeId)) continue;
      const node = appState.nodes.get(nodeId);
      if (!node) continue;
      const def  = _registry.get(node.type);
      if (!def) continue;

      for (const portDef of def.inputs) {
        const wire = wireByDest.get(`${nodeId}::${portDef.id}`);
        if (wire) {
          const upstreamNode = appState.nodes.get(wire.fromNodeId);
          const rawVal = upstreamNode ? upstreamNode.outputs[wire.fromPortId] : null;
          node.inputs[portDef.id] = coerce(rawVal, portDef.dataType);
          wire.value    = rawVal;
          wire.dataType = classifyType(rawVal);
        }
      }

      const prevOutputs = structuredClone(node.outputs);
      try {
        const newOutputs = def.compute(node.inputs, node.config);
        Object.assign(node.outputs, newOutputs);
        node.status   = 'active';
        node.errorMsg = '';
      } catch (err) {
        node.status   = 'error';
        node.errorMsg = err.message;
        for (const k of Object.keys(node.outputs)) node.outputs[k] = null;
      }

      for (const portDef of def.outputs) {
        const wires = wireBySource.get(`${nodeId}::${portDef.id}`) || [];
        for (const wire of wires) {
          wire.value    = node.outputs[portDef.id];
          wire.dataType = classifyType(wire.value);
          const destNode = appState.nodes.get(wire.toNodeId);
          const destDef  = destNode ? _registry.get(destNode.type) : null;
          if (destDef) {
            const destPort = destDef.inputs.find(p => p.id === wire.toPortId);
            wire.typeMismatch = !!(destPort && destPort.dataType !== 'any' &&
              wire.dataType !== 'null' && wire.dataType !== destPort.dataType);
          }
        }
      }

      const changed = JSON.stringify(prevOutputs) !== JSON.stringify(node.outputs);
      results.push({ nodeId, changed });
    }

    return results;
  }

  /* ── Node Type Definitions ──────────────────────────────────────────── */
  // Registered here so they are co-located with the engine.

  // ── INPUT ──────────────────────────────────────────────────────────────

  registerNodeType({
    type: 'NumberInput', label: 'Number Input', category: 'input', icon: '🔢',
    inputs: [],
    outputs: [{ id: 'value', label: 'Value', dataType: 'number' }],
    defaultConfig: { value: 0 },
    compute: (_, cfg) => ({ value: Number(cfg.value) }),
  });

  registerNodeType({
    type: 'TextInput', label: 'Text Input', category: 'input', icon: '📝',
    inputs: [],
    outputs: [{ id: 'value', label: 'Value', dataType: 'string' }],
    defaultConfig: { value: '' },
    compute: (_, cfg) => ({ value: String(cfg.value) }),
  });

  registerNodeType({
    type: 'BooleanToggle', label: 'Boolean Toggle', category: 'input', icon: '🔘',
    inputs: [],
    outputs: [{ id: 'value', label: 'Value', dataType: 'boolean' }],
    defaultConfig: { value: false },
    compute: (_, cfg) => ({ value: Boolean(cfg.value) }),
  });

  registerNodeType({
    type: 'SliderInput', label: 'Slider', category: 'input', icon: '🎚️',
    inputs: [],
    outputs: [{ id: 'value', label: 'Value', dataType: 'number' }],
    defaultConfig: { value: 50, min: 0, max: 100, step: 1 },
    compute: (_, cfg) => ({ value: Number(cfg.value) }),
  });

  // ── LOGIC ───────────────────────────────────────────────────────────────

  registerNodeType({
    type: 'AND', label: 'AND', category: 'logic', icon: '⊓',
    inputs:  [{ id: 'a', label: 'A', dataType: 'boolean' }, { id: 'b', label: 'B', dataType: 'boolean' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'boolean' }],
    defaultConfig: {},
    compute: (inp) => ({ out: Boolean(inp.a) && Boolean(inp.b) }),
  });

  registerNodeType({
    type: 'OR', label: 'OR', category: 'logic', icon: '⊔',
    inputs:  [{ id: 'a', label: 'A', dataType: 'boolean' }, { id: 'b', label: 'B', dataType: 'boolean' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'boolean' }],
    defaultConfig: {},
    compute: (inp) => ({ out: Boolean(inp.a) || Boolean(inp.b) }),
  });

  registerNodeType({
    type: 'NOT', label: 'NOT', category: 'logic', icon: '¬',
    inputs:  [{ id: 'a', label: 'A', dataType: 'boolean' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'boolean' }],
    defaultConfig: {},
    compute: (inp) => ({ out: !Boolean(inp.a) }),
  });

  registerNodeType({
    type: 'XOR', label: 'XOR', category: 'logic', icon: '⊕',
    inputs:  [{ id: 'a', label: 'A', dataType: 'boolean' }, { id: 'b', label: 'B', dataType: 'boolean' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'boolean' }],
    defaultConfig: {},
    compute: (inp) => ({ out: Boolean(inp.a) !== Boolean(inp.b) }),
  });

  registerNodeType({
    type: 'Compare', label: 'Compare', category: 'logic', icon: '⚖',
    inputs:  [{ id: 'a', label: 'A', dataType: 'any' }, { id: 'b', label: 'B', dataType: 'any' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'boolean' }],
    defaultConfig: { op: '==' },
    compute: (inp, cfg) => {
      const a = inp.a, b = inp.b;
      let out;
      switch (cfg.op) {
        case '==': out = a == b;  break;
        case '!=': out = a != b;  break;
        case '>':  out = a > b;   break;
        case '<':  out = a < b;   break;
        case '>=': out = a >= b;  break;
        case '<=': out = a <= b;  break;
        default:   out = false;
      }
      return { out };
    },
  });

  registerNodeType({
    type: 'Switch', label: 'Switch', category: 'logic', icon: '⇄',
    inputs:  [
      { id: 'cond',  label: 'Cond',  dataType: 'boolean' },
      { id: 'true',  label: 'True',  dataType: 'any' },
      { id: 'false', label: 'False', dataType: 'any' },
    ],
    outputs: [{ id: 'out', label: 'Out', dataType: 'any' }],
    defaultConfig: {},
    compute: (inp) => ({ out: inp.cond ? inp.true : inp.false }),
  });

  // ── MATH ────────────────────────────────────────────────────────────────

  registerNodeType({
    type: 'Add', label: 'Add', category: 'math', icon: '+',
    inputs:  [{ id: 'a', label: 'A', dataType: 'number' }, { id: 'b', label: 'B', dataType: 'number' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'number' }],
    defaultConfig: {},
    compute: (inp) => ({ out: (inp.a ?? 0) + (inp.b ?? 0) }),
  });

  registerNodeType({
    type: 'Subtract', label: 'Subtract', category: 'math', icon: '−',
    inputs:  [{ id: 'a', label: 'A', dataType: 'number' }, { id: 'b', label: 'B', dataType: 'number' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'number' }],
    defaultConfig: {},
    compute: (inp) => ({ out: (inp.a ?? 0) - (inp.b ?? 0) }),
  });

  registerNodeType({
    type: 'Multiply', label: 'Multiply', category: 'math', icon: '×',
    inputs:  [{ id: 'a', label: 'A', dataType: 'number' }, { id: 'b', label: 'B', dataType: 'number' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'number' }],
    defaultConfig: {},
    compute: (inp) => ({ out: (inp.a ?? 0) * (inp.b ?? 0) }),
  });

  registerNodeType({
    type: 'Divide', label: 'Divide', category: 'math', icon: '÷',
    inputs:  [{ id: 'a', label: 'A', dataType: 'number' }, { id: 'b', label: 'B', dataType: 'number' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'number' }],
    defaultConfig: {},
    compute: (inp) => {
      if ((inp.b ?? 0) === 0) throw new Error('Division by zero');
      return { out: (inp.a ?? 0) / inp.b };
    },
  });

  registerNodeType({
    type: 'Modulo', label: 'Modulo', category: 'math', icon: '%',
    inputs:  [{ id: 'a', label: 'A', dataType: 'number' }, { id: 'b', label: 'B', dataType: 'number' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'number' }],
    defaultConfig: {},
    compute: (inp) => {
      if ((inp.b ?? 0) === 0) throw new Error('Modulo by zero');
      return { out: (inp.a ?? 0) % inp.b };
    },
  });

  registerNodeType({
    type: 'Clamp', label: 'Clamp', category: 'math', icon: '⌈⌋',
    inputs:  [
      { id: 'value', label: 'Value', dataType: 'number' },
      { id: 'min',   label: 'Min',   dataType: 'number' },
      { id: 'max',   label: 'Max',   dataType: 'number' },
    ],
    outputs: [{ id: 'out', label: 'Out', dataType: 'number' }],
    defaultConfig: {},
    compute: (inp) => {
      const v   = inp.value ?? 0;
      const lo  = inp.min   ?? 0;
      const hi  = inp.max   ?? 1;
      return { out: Math.min(Math.max(v, lo), hi) };
    },
  });

  // ── STRING ──────────────────────────────────────────────────────────────

  registerNodeType({
    type: 'Concat', label: 'Concat', category: 'string', icon: '∥',
    inputs:  [{ id: 'a', label: 'A', dataType: 'string' }, { id: 'b', label: 'B', dataType: 'string' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'string' }],
    defaultConfig: { separator: '' },
    compute: (inp, cfg) => ({ out: `${inp.a ?? ''}${cfg.separator}${inp.b ?? ''}` }),
  });

  registerNodeType({
    type: 'Split', label: 'Split', category: 'string', icon: '⌇',
    inputs:  [{ id: 'str', label: 'String', dataType: 'string' }],
    outputs: [
      { id: 'first', label: 'First', dataType: 'string' },
      { id: 'rest',  label: 'Rest',  dataType: 'string' },
      { id: 'count', label: 'Count', dataType: 'number' },
    ],
    defaultConfig: { separator: ',' },
    compute: (inp, cfg) => {
      const parts = String(inp.str ?? '').split(cfg.separator);
      return { first: parts[0] ?? '', rest: parts.slice(1).join(cfg.separator), count: parts.length };
    },
  });

  registerNodeType({
    type: 'Uppercase', label: 'Uppercase', category: 'string', icon: 'AA',
    inputs:  [{ id: 'str', label: 'String', dataType: 'string' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'string' }],
    defaultConfig: {},
    compute: (inp) => ({ out: String(inp.str ?? '').toUpperCase() }),
  });

  registerNodeType({
    type: 'Lowercase', label: 'Lowercase', category: 'string', icon: 'aa',
    inputs:  [{ id: 'str', label: 'String', dataType: 'string' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'string' }],
    defaultConfig: {},
    compute: (inp) => ({ out: String(inp.str ?? '').toLowerCase() }),
  });

  registerNodeType({
    type: 'Contains', label: 'Contains', category: 'string', icon: '∋',
    inputs:  [{ id: 'str', label: 'String', dataType: 'string' }, { id: 'sub', label: 'Substr', dataType: 'string' }],
    outputs: [{ id: 'out', label: 'Out', dataType: 'boolean' }],
    defaultConfig: {},
    compute: (inp) => ({ out: String(inp.str ?? '').includes(String(inp.sub ?? '')) }),
  });

  // ── OUTPUT ──────────────────────────────────────────────────────────────

  registerNodeType({
    type: 'DisplayValue', label: 'Display', category: 'output', icon: '🖥',
    inputs:  [{ id: 'value', label: 'Value', dataType: 'any' }],
    outputs: [],
    defaultConfig: {},
    compute: (inp) => ({}),   // side effect handled by renderer reading inputs
  });

  registerNodeType({
    type: 'Logger', label: 'Logger', category: 'output', icon: '📋',
    inputs:  [{ id: 'value', label: 'Value', dataType: 'any' }],
    outputs: [],
    defaultConfig: { log: [] },
    compute: (inp, cfg) => {
      const entry = { ts: Date.now(), value: inp.value };
      cfg.log = [entry, ...(cfg.log || [])].slice(0, appState.settings.maxLogEntries);
      return {};
    },
  });

  registerNodeType({
    type: 'LED', label: 'LED', category: 'output', icon: '💡',
    inputs:  [{ id: 'value', label: 'Value', dataType: 'boolean' }],
    outputs: [],
    defaultConfig: {},
    compute: (inp) => ({}),
  });

  // ── FLOW ────────────────────────────────────────────────────────────────

  registerNodeType({
    type: 'IfElse', label: 'If / Else', category: 'flow', icon: '⑂',
    inputs:  [
      { id: 'cond',  label: 'Condition', dataType: 'boolean' },
      { id: 'value', label: 'Value',     dataType: 'any' },
    ],
    outputs: [
      { id: 'true',  label: 'True',  dataType: 'any' },
      { id: 'false', label: 'False', dataType: 'any' },
    ],
    defaultConfig: {},
    compute: (inp) => ({
      true:  inp.cond ? inp.value : null,
      false: inp.cond ? null : inp.value,
    }),
  });

  registerNodeType({
    type: 'Delay', label: 'Delay', category: 'flow', icon: '⏱',
    inputs:  [{ id: 'value', label: 'Value', dataType: 'any' }],
    outputs: [{ id: 'out',   label: 'Out',   dataType: 'any' }],
    defaultConfig: { ms: 500, _pending: null },
    // Delay is stateful — compute sets a timer, output lags by ms.
    // The engine calls this synchronously; the actual delay is managed
    // by the UIManager which re-triggers evaluate after the timeout.
    compute: (inp, cfg) => {
      cfg._pending = inp.value;
      return { out: cfg._lastOut ?? null };
    },
  });

  registerNodeType({
    type: 'Throttle', label: 'Throttle', category: 'flow', icon: '⏲',
    inputs:  [{ id: 'value', label: 'Value', dataType: 'any' }],
    outputs: [{ id: 'out',   label: 'Out',   dataType: 'any' }],
    defaultConfig: { ms: 200, _lastEmit: 0 },
    compute: (inp, cfg) => {
      const now = Date.now();
      if (now - cfg._lastEmit >= cfg.ms) {
        cfg._lastEmit = now;
        cfg._lastVal  = inp.value;
      }
      return { out: cfg._lastVal ?? null };
    },
  });

  /* ── Public API ─────────────────────────────────────────────────────── */
  return {
    registerNodeType,
    getNodeType,
    getAllNodeTypes,
    createNode,
    createWire,
    topoSort,
    evaluate,
    evaluateFrom,
    classifyType,
    coerce,
    newId,
  };

})();

/* ═══════════════════════════════════════════════════════════════════════
   CANVAS RENDERER
   Owns all visual output: node DOM elements, SVG wires, viewport
   transform, hit-testing, and the minimap.
   ═══════════════════════════════════════════════════════════════════════ */
const CanvasRenderer = (() => {

  /* ── DOM refs ───────────────────────────────────────────────────────── */
  const wrap       = document.getElementById('canvas-wrap');
  const nodesLayer = document.getElementById('nodes-layer');
  const wiresGroup = document.getElementById('wires-group');
  const dragWire   = document.getElementById('drag-wire');
  const minimapEl  = document.getElementById('minimap');
  const mmCanvas   = document.getElementById('minimap-canvas');
  const mmCtx      = mmCanvas.getContext('2d');
  const mmViewport = document.getElementById('minimap-viewport');

  /* ── Category accent colours (mirrors CSS vars) ─────────────────────── */
  const CATEGORY_COLOR = {
    input:  '#4f8ef7',
    logic:  '#a855f7',
    math:   '#f97316',
    string: '#22d3ee',
    output: '#10b981',
    flow:   '#f59e0b',
  };

  /* ── Viewport transform ─────────────────────────────────────────────── */

  const ZOOM_MIN = 0.15;
  const ZOOM_MAX = 3.0;
  const ZOOM_STEP = 0.0012;   // multiplied by deltaY

  /** Apply current viewport transform to the nodes layer and SVG. */
  function applyViewport() {
    const { x, y, scale } = appState.viewport;
    nodesLayer.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    // SVG wires are drawn in screen space, so we track world→screen ourselves.
  }

  /**
   * Convert a screen-space point to world (canvas) coordinates.
   * @param {number} sx  screen x
   * @param {number} sy  screen y
   * @returns {{ x: number, y: number }}
   */
  function screenToWorld(sx, sy) {
    const { x, y, scale } = appState.viewport;
    return {
      x: (sx - x) / scale,
      y: (sy - y) / scale,
    };
  }

  /**
   * Convert a world-space point to screen coordinates.
   * @param {number} wx
   * @param {number} wy
   * @returns {{ x: number, y: number }}
   */
  function worldToScreen(wx, wy) {
    const { x, y, scale } = appState.viewport;
    return {
      x: wx * scale + x,
      y: wy * scale + y,
    };
  }

  /**
   * Zoom toward a focal screen point.
   * @param {number} delta   positive = zoom in
   * @param {number} focalX  screen x of zoom origin
   * @param {number} focalY  screen y of zoom origin
   */
  function zoomAt(delta, focalX, focalY) {
    const vp    = appState.viewport;
    const oldScale = vp.scale;
    const newScale = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, oldScale * (1 + delta)));
    if (newScale === oldScale) return;

    // adjust pan so the focal point stays fixed on screen
    vp.x = focalX - (focalX - vp.x) * (newScale / oldScale);
    vp.y = focalY - (focalY - vp.y) * (newScale / oldScale);
    vp.scale = newScale;

    applyViewport();
    renderAllWires();
    renderMinimap();
  }

  /**
   * Fit all nodes into view with padding.
   */
  function fitToView() {
    if (appState.nodes.size === 0) return;

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const node of appState.nodes.values()) {
      const el = document.getElementById(`node-${node.id}`);
      const w  = el ? el.offsetWidth  : 180;
      const h  = el ? el.offsetHeight : 100;
      minX = Math.min(minX, node.x);
      minY = Math.min(minY, node.y);
      maxX = Math.max(maxX, node.x + w);
      maxY = Math.max(maxY, node.y + h);
    }

    const pad    = 60;
    const cw     = wrap.clientWidth;
    const ch     = wrap.clientHeight;
    const graphW = maxX - minX + pad * 2;
    const graphH = maxY - minY + pad * 2;
    const scale  = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Math.min(cw / graphW, ch / graphH)));

    appState.viewport.scale = scale;
    appState.viewport.x     = (cw - (maxX + minX) * scale) / 2;
    appState.viewport.y     = (ch - (maxY + minY) * scale) / 2;

    applyViewport();
    renderAllWires();
    renderMinimap();
  }

  /* ── Port world-position lookup ─────────────────────────────────────── */

  /**
   * Get the world-space centre of a port element.
   * Port elements are absolutely positioned children of .node,
   * which itself is in world space (nodesLayer is transformed).
   * @param {string} nodeId
   * @param {string} portId
   * @param {'input'|'output'} side
   * @returns {{ x: number, y: number }|null}
   */
  function getPortWorldPos(nodeId, portId, side) {
    const nodeEl = document.getElementById(`node-${nodeId}`);
    if (!nodeEl) return null;
    const portEl = nodeEl.querySelector(`[data-port-id="${portId}"][data-side="${side}"]`);
    if (!portEl) return null;

    // port position relative to nodesLayer origin (world space)
    const nodeRect = nodeEl.getBoundingClientRect();
    const portRect = portEl.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();
    const { scale } = appState.viewport;

    // convert port screen centre to world
    const screenX = portRect.left + portRect.width  / 2 - wrapRect.left;
    const screenY = portRect.top  + portRect.height / 2 - wrapRect.top;
    return screenToWorld(screenX, screenY);
  }

  /* ── Wire SVG path ──────────────────────────────────────────────────── */

  /**
   * Build a cubic-bezier SVG path string between two screen points.
   * The control-point offset scales with horizontal distance.
   * @param {number} x1 @param {number} y1  source (screen)
   * @param {number} x2 @param {number} y2  dest   (screen)
   * @returns {string}
   */
  function wirePath(x1, y1, x2, y2) {
    const dx = Math.abs(x2 - x1);
    const cx = Math.max(60, dx * 0.55);
    return `M${x1},${y1} C${x1+cx},${y1} ${x2-cx},${y2} ${x2},${y2}`;
  }

  /* ── Wire rendering ─────────────────────────────────────────────────── */

  /**
   * Create or update the SVG <path> element for a single wire.
   * @param {WireState} wire
   */
  function renderWire(wire) {
    const fromPos = getPortWorldPos(wire.fromNodeId, wire.fromPortId, 'output');
    const toPos   = getPortWorldPos(wire.toNodeId,   wire.toPortId,   'input');
    if (!fromPos || !toPos) return;

    const s1 = worldToScreen(fromPos.x, fromPos.y);
    const s2 = worldToScreen(toPos.x,   toPos.y);

    let path = document.getElementById(`wire-${wire.id}`);
    if (!path) {
      path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.id = `wire-${wire.id}`;
      path.classList.add('wire');
      path.dataset.wireId = wire.id;
      wiresGroup.appendChild(path);
    }

    path.setAttribute('d', wirePath(s1.x, s1.y, s2.x, s2.y));

    // type class
    path.classList.remove('wire-number', 'wire-boolean', 'wire-string');
    if (wire.dataType && wire.dataType !== 'null') {
      path.classList.add(`wire-${wire.dataType}`);
    }

    // mismatch / selected
    path.classList.toggle('type-mismatch', !!wire.typeMismatch);
    path.classList.toggle('selected',      appState.selection.type === 'wire' && appState.selection.id === wire.id);

    // hot = has a non-null value
    path.classList.toggle('hot', wire.value !== null && wire.value !== undefined);
  }

  /** Re-render every wire in the graph. */
  function renderAllWires() {
    // remove stale wire elements
    const existingIds = new Set(appState.wires.keys());
    for (const el of Array.from(wiresGroup.children)) {
      const wid = el.dataset.wireId;
      if (wid && !existingIds.has(wid)) el.remove();
    }
    for (const wire of appState.wires.values()) {
      renderWire(wire);
    }
  }

  /**
   * Pulse-animate a wire briefly to show data flowing.
   * @param {string} wireId
   */
  function pulseWire(wireId) {
    if (!appState.settings.animateWires) return;
    const el = document.getElementById(`wire-${wireId}`);
    if (!el) return;
    el.classList.remove('pulse');
    // force reflow to restart animation
    void el.offsetWidth;
    el.classList.add('pulse');
    el.addEventListener('animationend', () => el.classList.remove('pulse'), { once: true });
  }

  /* ── Drag-wire (in-progress connection) ─────────────────────────────── */

  /**
   * Update the temporary drag wire from a port to the mouse cursor.
   * @param {number} fromWorldX @param {number} fromWorldY  source port world pos
   * @param {number} mouseScreenX @param {number} mouseScreenY
   */
  function updateDragWire(fromWorldX, fromWorldY, mouseScreenX, mouseScreenY) {
    const s = worldToScreen(fromWorldX, fromWorldY);
    dragWire.setAttribute('d', wirePath(s.x, s.y, mouseScreenX, mouseScreenY));
  }

  /** Hide the drag wire. */
  function clearDragWire() {
    dragWire.setAttribute('d', '');
  }

  /* ── Node DOM rendering ─────────────────────────────────────────────── */

  /**
   * Build and insert the DOM element for a node.
   * Idempotent — if the element already exists it is rebuilt.
   * @param {NodeState} node
   */
  function renderNode(node) {
    // remove old element if present
    const existing = document.getElementById(`node-${node.id}`);
    if (existing) existing.remove();

    const def    = GraphEngine.getNodeType(node.type);
    if (!def) return;
    const accent = CATEGORY_COLOR[def.category] || '#888';

    const el = document.createElement('div');
    el.className  = 'node';
    el.id         = `node-${node.id}`;
    el.dataset.nodeId = node.id;
    el.style.left = `${node.x}px`;
    el.style.top  = `${node.y}px`;
    el.style.setProperty('--node-accent', accent);

    // ── Header
    const header = document.createElement('div');
    header.className = 'node-header';
    header.innerHTML = `
      <span class="node-icon">${def.icon}</span>
      <span class="node-label">${def.label}</span>
      <span class="node-type-badge">${def.category}</span>`;
    el.appendChild(header);

    // ── Body
    const body = document.createElement('div');
    body.className = 'node-body';

    // inline control (for input/flow config nodes)
    const controlHTML = _buildControlHTML(node, def);
    if (controlHTML) {
      const ctrlWrap = document.createElement('div');
      ctrlWrap.className = 'node-control';
      ctrlWrap.innerHTML = controlHTML;
      body.appendChild(ctrlWrap);
    }

    // port rows — pair inputs + outputs by index
    const maxPorts = Math.max(def.inputs.length, def.outputs.length);
    for (let i = 0; i < maxPorts; i++) {
      const inp = def.inputs[i];
      const out = def.outputs[i];

      const row = document.createElement('div');
      row.className = 'node-row port-row';

      if (inp) {
        const portEl = _makePortEl(node.id, inp, 'input', accent);
        row.appendChild(portEl);
        const lbl = document.createElement('span');
        lbl.className = 'port-label input-label';
        lbl.textContent = inp.label;
        row.appendChild(lbl);
      }

      if (out) {
        const lbl = document.createElement('span');
        lbl.className = 'port-label output-label';
        lbl.textContent = out.label;
        row.appendChild(lbl);
        const portEl = _makePortEl(node.id, out, 'output', accent);
        row.appendChild(portEl);
      }

      body.appendChild(row);
    }

    // special output displays
    _appendOutputDisplay(body, node, def);

    el.appendChild(body);
    nodesLayer.appendChild(el);

    // position
    el.style.left = `${node.x}px`;
    el.style.top  = `${node.y}px`;

    // reflect current status
    _applyNodeStatus(el, node);
  }

  /**
   * Build the inline-control HTML snippet for a node type.
   * @returns {string} HTML or ''
   */
  function _buildControlHTML(node, def) {
    const cfg = node.config;
    switch (node.type) {
      case 'NumberInput':
        return `<input type="number" data-cfg="value" value="${cfg.value}" step="any" />`;
      case 'TextInput':
        return `<input type="text" data-cfg="value" value="${_esc(String(cfg.value))}" placeholder="text…" />`;
      case 'BooleanToggle':
        return `<div class="toggle-wrap">
          <span class="toggle-label">Value</span>
          <div class="toggle${cfg.value ? ' on' : ''}" data-cfg="value" data-toggle="bool"></div>
        </div>`;
      case 'SliderInput':
        return `<input type="range" data-cfg="value"
          min="${cfg.min}" max="${cfg.max}" step="${cfg.step}" value="${cfg.value}" />
          <div class="node-value-display" data-display="slider">${cfg.value}</div>`;
      case 'Compare':
        return `<select data-cfg="op">
          ${['==','!=','>','<','>=','<='].map(op =>
            `<option value="${op}"${cfg.op===op?' selected':''}>${op}</option>`).join('')}
        </select>`;
      case 'Concat':
        return `<input type="text" data-cfg="separator" value="${_esc(String(cfg.separator))}" placeholder="separator" />`;
      case 'Split':
        return `<input type="text" data-cfg="separator" value="${_esc(String(cfg.separator))}" placeholder="separator" />`;
      case 'Delay':
        return `<input type="number" data-cfg="ms" value="${cfg.ms}" min="0" step="50" /> <span style="font-size:10px;color:var(--text-dim)">ms</span>`;
      case 'Throttle':
        return `<input type="number" data-cfg="ms" value="${cfg.ms}" min="0" step="50" /> <span style="font-size:10px;color:var(--text-dim)">ms</span>`;
      default:
        return '';
    }
  }

  /**
   * Append output-specific display elements (Display, Logger, LED).
   */
  function _appendOutputDisplay(body, node, def) {
    if (node.type === 'DisplayValue') {
      const d = document.createElement('div');
      d.className = 'node-value-display';
      d.dataset.display = 'value';
      const val = node.inputs.value;
      d.textContent = val === null || val === undefined ? 'null' : String(val);
      if (val === null || val === undefined) d.classList.add('null-val');
      body.appendChild(d);
    }

    if (node.type === 'LED') {
      const row = document.createElement('div');
      row.className = 'node-row';
      row.style.justifyContent = 'center';
      row.style.padding = '4px 0';
      const led = document.createElement('div');
      led.className = 'led' + (node.inputs.value ? ' on' : '');
      led.dataset.display = 'led';
      row.appendChild(led);
      body.appendChild(row);
    }

    if (node.type === 'Logger') {
      const log = document.createElement('div');
      log.className = 'logger-log';
      log.dataset.display = 'logger';
      _renderLogEntries(log, node.config.log || []);
      body.appendChild(log);
    }
  }

  /** Render log entries into a logger display element. */
  function _renderLogEntries(logEl, entries) {
    logEl.innerHTML = entries.map(e => {
      const ts  = new Date(e.ts).toLocaleTimeString('en', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const val = e.value === null ? '<i>null</i>' : _esc(String(e.value));
      return `<div class="log-entry"><span class="log-ts">${ts}</span>${val}</div>`;
    }).join('');
  }

  /**
   * Build a port dot element.
   * @param {string} nodeId
   * @param {PortDef} portDef
   * @param {'input'|'output'} side
   * @param {string} accent
   * @returns {HTMLElement}
   */
  function _makePortEl(nodeId, portDef, side, accent) {
    const el = document.createElement('div');
    el.className = `port ${side}`;
    el.dataset.portId  = portDef.id;
    el.dataset.nodeId  = nodeId;
    el.dataset.side    = side;
    el.dataset.type    = portDef.dataType;
    el.title           = `${portDef.label} (${portDef.dataType})`;
    // colour connected ports by their wire type
    el.style.setProperty('--port-color', _typeColor(portDef.dataType));
    return el;
  }

  /** Map a dataType to its wire colour. */
  function _typeColor(dt) {
    return { number: '#4f8ef7', boolean: '#22c55e', string: '#f97316', any: '#a0a0b0' }[dt] || '#6b7094';
  }

  /** HTML-escape a string for safe innerHTML insertion. */
  function _esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ── Node status & live update ──────────────────────────────────────── */

  /**
   * Apply visual status classes to a node element.
   * @param {HTMLElement} el
   * @param {NodeState} node
   */
  function _applyNodeStatus(el, node) {
    el.classList.toggle('error', node.status === 'error');
    const isCycle = appState.execution.cycleIds.includes(node.id);
    el.classList.toggle('cycle', isCycle);
    if (node.status === 'error' && node.errorMsg) {
      el.title = `Error: ${node.errorMsg}`;
    } else {
      el.title = '';
    }
  }

  /**
   * Lightweight update of a node's live outputs — avoids a full DOM rebuild.
   * Updates: value displays, LED, logger, port connected-state, status.
   * @param {NodeState} node
   */
  function updateNodeDisplay(node) {
    const el = document.getElementById(`node-${node.id}`);
    if (!el) return;

    _applyNodeStatus(el, node);

    // DisplayValue
    const disp = el.querySelector('[data-display="value"]');
    if (disp) {
      const val = node.inputs.value;
      disp.textContent = val === null || val === undefined ? 'null' : String(val);
      disp.classList.toggle('null-val', val === null || val === undefined);
    }

    // LED
    const led = el.querySelector('[data-display="led"]');
    if (led) {
      led.classList.toggle('on', Boolean(node.inputs.value));
    }

    // Logger
    const logEl = el.querySelector('[data-display="logger"]');
    if (logEl) {
      _renderLogEntries(logEl, node.config.log || []);
    }

    // Slider readout
    const sliderDisp = el.querySelector('[data-display="slider"]');
    if (sliderDisp) {
      sliderDisp.textContent = node.config.value;
    }

    // Port connected state
    _refreshPortConnected(el, node.id);

    // brief flash animation
    el.classList.remove('just-evaluated');
    void el.offsetWidth;
    el.classList.add('just-evaluated');
  }

  /**
   * Mark ports as connected/unconnected based on current wires.
   */
  function _refreshPortConnected(nodeEl, nodeId) {
    const connectedInputs  = new Set();
    const connectedOutputs = new Set();
    for (const w of appState.wires.values()) {
      if (w.toNodeId   === nodeId) connectedInputs.add(w.toPortId);
      if (w.fromNodeId === nodeId) connectedOutputs.add(w.fromPortId);
    }
    for (const portEl of nodeEl.querySelectorAll('.port')) {
      const pid  = portEl.dataset.portId;
      const side = portEl.dataset.side;
      const connected = side === 'input'
        ? connectedInputs.has(pid)
        : connectedOutputs.has(pid);
      portEl.classList.toggle('connected', connected);
    }
  }

  /* ── Selection rendering ────────────────────────────────────────────── */

  /**
   * Update selection highlight on nodes and wires.
   * @param {'node'|'wire'|null} type
   * @param {string|null} id
   */
  function setSelection(type, id) {
    // clear old
    for (const el of nodesLayer.querySelectorAll('.node.selected')) {
      el.classList.remove('selected');
    }
    for (const el of wiresGroup.querySelectorAll('.wire.selected')) {
      el.classList.remove('selected');
    }

    appState.selection.type = type;
    appState.selection.id   = id;

    if (type === 'node' && id) {
      const el = document.getElementById(`node-${id}`);
      if (el) el.classList.add('selected');
    } else if (type === 'wire' && id) {
      const el = document.getElementById(`wire-${id}`);
      if (el) el.classList.add('selected');
    }
  }

  /* ── Node position sync ─────────────────────────────────────────────── */

  /**
   * Move a node's DOM element to match its state position.
   * @param {string} nodeId
   */
  function syncNodePosition(nodeId) {
    const node = appState.nodes.get(nodeId);
    const el   = document.getElementById(`node-${nodeId}`);
    if (!node || !el) return;
    el.style.left = `${node.x}px`;
    el.style.top  = `${node.y}px`;
  }

  /* ── Hit testing ────────────────────────────────────────────────────── */

  /**
   * Find the node whose DOM element contains a given screen point.
   * @param {number} sx @param {number} sy  screen coords
   * @returns {string|null}  nodeId or null
   */
  function hitTestNode(sx, sy) {
    const els = document.elementsFromPoint(sx, sy);
    for (const el of els) {
      const nodeEl = el.closest('.node');
      if (nodeEl && nodeEl.dataset.nodeId) return nodeEl.dataset.nodeId;
    }
    return null;
  }

  /**
   * Find a port element at a screen point.
   * @param {number} sx @param {number} sy
   * @returns {HTMLElement|null}
   */
  function hitTestPort(sx, sy) {
    const els = document.elementsFromPoint(sx, sy);
    for (const el of els) {
      if (el.classList.contains('port')) return el;
    }
    return null;
  }

  /**
   * Find a wire SVG element at a screen point.
   * Returns the wireId or null.
   * @param {number} sx @param {number} sy
   * @returns {string|null}
   */
  function hitTestWire(sx, sy) {
    const els = document.elementsFromPoint(sx, sy);
    for (const el of els) {
      if (el.dataset && el.dataset.wireId) return el.dataset.wireId;
    }
    return null;
  }

  /* ── Full scene render ──────────────────────────────────────────────── */

  /** Clear and rebuild every node and wire DOM element from appState. */
  function renderAll() {
    // nodes
    nodesLayer.innerHTML = '';
    for (const node of appState.nodes.values()) {
      renderNode(node);
    }
    // wires (after nodes so ports exist in DOM)
    wiresGroup.innerHTML = '';
    for (const wire of appState.wires.values()) {
      renderWire(wire);
    }
    applyViewport();
    renderMinimap();
  }

  /* ── Minimap ────────────────────────────────────────────────────────── */

  const MM_W = 160;
  const MM_H = 100;
  const MM_PAD = 10;

  /** Redraw the minimap canvas and viewport indicator. */
  function renderMinimap() {
    if (!appState.settings.showMinimap) {
      minimapEl.style.display = 'none';
      return;
    }
    minimapEl.style.display = '';

    mmCtx.clearRect(0, 0, MM_W, MM_H);
    mmCtx.fillStyle = 'rgba(15,17,23,0)';
    mmCtx.fillRect(0, 0, MM_W, MM_H);

    if (appState.nodes.size === 0) {
      mmViewport.style.display = 'none';
      return;
    }

    // compute world bounding box of all nodes
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const node of appState.nodes.values()) {
      const el = document.getElementById(`node-${node.id}`);
      const w  = el ? el.offsetWidth  : 180;
      const h  = el ? el.offsetHeight : 100;
      minX = Math.min(minX, node.x);
      minY = Math.min(minY, node.y);
      maxX = Math.max(maxX, node.x + w);
      maxY = Math.max(maxY, node.y + h);
    }

    // extend bounds to include current viewport region
    const vp = appState.viewport;
    const canvasW = wrap.clientWidth;
    const canvasH = wrap.clientHeight;
    const vpMinX = (-vp.x) / vp.scale;
    const vpMinY = (-vp.y) / vp.scale;
    const vpMaxX = vpMinX + canvasW  / vp.scale;
    const vpMaxY = vpMinY + canvasH  / vp.scale;

    const bMinX = Math.min(minX, vpMinX) - MM_PAD;
    const bMinY = Math.min(minY, vpMinY) - MM_PAD;
    const bMaxX = Math.max(maxX, vpMaxX) + MM_PAD;
    const bMaxY = Math.max(maxY, vpMaxY) + MM_PAD;
    const bW    = bMaxX - bMinX;
    const bH    = bMaxY - bMinY;

    const scale = Math.min((MM_W - MM_PAD*2) / bW, (MM_H - MM_PAD*2) / bH);
    const offX  = MM_PAD + (MM_W - MM_PAD*2 - bW * scale) / 2;
    const offY  = MM_PAD + (MM_H - MM_PAD*2 - bH * scale) / 2;

    /** world → minimap pixel */
    const toMM = (wx, wy) => ({
      x: (wx - bMinX) * scale + offX,
      y: (wy - bMinY) * scale + offY,
    });

    // draw wires
    mmCtx.lineWidth = 1;
    mmCtx.globalAlpha = 0.5;
    for (const wire of appState.wires.values()) {
      const fp = getPortWorldPos(wire.fromNodeId, wire.fromPortId, 'output');
      const tp = getPortWorldPos(wire.toNodeId,   wire.toPortId,   'input');
      if (!fp || !tp) continue;
      const p1 = toMM(fp.x, fp.y);
      const p2 = toMM(tp.x, tp.y);
      const colors = { number:'#4f8ef7', boolean:'#22c55e', string:'#f97316' };
      mmCtx.strokeStyle = colors[wire.dataType] || '#6b7094';
      mmCtx.beginPath();
      mmCtx.moveTo(p1.x, p1.y);
      mmCtx.lineTo(p2.x, p2.y);
      mmCtx.stroke();
    }
    mmCtx.globalAlpha = 1;

    // draw nodes
    const catColors = CATEGORY_COLOR;
    for (const node of appState.nodes.values()) {
      const def = GraphEngine.getNodeType(node.type);
      const el  = document.getElementById(`node-${node.id}`);
      const w   = (el ? el.offsetWidth  : 180) * scale;
      const h   = (el ? el.offsetHeight : 100) * scale;
      const p   = toMM(node.x, node.y);
      mmCtx.fillStyle = catColors[def ? def.category : ''] || '#555';
      mmCtx.globalAlpha = 0.75;
      mmCtx.beginPath();
      mmCtx.roundRect(p.x, p.y, w, h, 2);
      mmCtx.fill();
      mmCtx.globalAlpha = 1;
    }

    // draw viewport indicator
    const vp1 = toMM(vpMinX, vpMinY);
    const vp2 = toMM(vpMaxX, vpMaxY);
    const vpW = vp2.x - vp1.x;
    const vpH = vp2.y - vp1.y;

    mmViewport.style.display = '';
    mmViewport.style.left    = `${vp1.x}px`;
    mmViewport.style.top     = `${vp1.y}px`;
    mmViewport.style.width   = `${Math.max(4, vpW)}px`;
    mmViewport.style.height  = `${Math.max(4, vpH)}px`;
  }

  /* ── Public API ─────────────────────────────────────────────────────── */
  return {
    applyViewport,
    screenToWorld,
    worldToScreen,
    zoomAt,
    fitToView,
    getPortWorldPos,
    wirePath,
    renderWire,
    renderAllWires,
    pulseWire,
    updateDragWire,
    clearDragWire,
    renderNode,
    updateNodeDisplay,
    syncNodePosition,
    setSelection,
    hitTestNode,
    hitTestPort,
    hitTestWire,
    renderAll,
    renderMinimap,
    CATEGORY_COLOR,
  };

})();

/* ═══════════════════════════════════════════════════════════════════════
   WIRE SYSTEM
   Drag-to-connect, wire deletion, hover tooltip, pulse after evaluate.
   ═══════════════════════════════════════════════════════════════════════ */
const WireSystem = (() => {

  /* ── DOM refs ───────────────────────────────────────────────────────── */
  const wrap      = document.getElementById('canvas-wrap');
  const svgLayer  = document.getElementById('svg-layer');
  const tooltip   = document.getElementById('wire-tooltip');

  /* ── Internal state ─────────────────────────────────────────────────── */

  /**
   * Tracks an in-progress wire drag.
   * @type {{ nodeId:string, portId:string, side:'input'|'output',
   *          worldX:number, worldY:number }|null}
   */
  let _dragFrom = null;

  /** portEl currently highlighted as a valid drop target */
  let _dropTarget = null;

  /** wireId being hovered for the tooltip */
  let _tooltipWireId = null;
  let _tooltipTimeout = null;

  /* ── Helpers ────────────────────────────────────────────────────────── */

  /**
   * Determine whether two ports may be connected.
   * Rules: output→input only, no self-loops, types compatible, no duplicate.
   */
  function _canConnect(fromNodeId, fromPortId, toNodeId, toPortId) {
    if (fromNodeId === toNodeId) return false;

    const fromDef = GraphEngine.getNodeType(appState.nodes.get(fromNodeId)?.type);
    const toDef   = GraphEngine.getNodeType(appState.nodes.get(toNodeId)?.type);
    if (!fromDef || !toDef) return false;

    const fromPort = fromDef.outputs.find(p => p.id === fromPortId);
    const toPort   = toDef.inputs.find(p  => p.id === toPortId);
    if (!fromPort || !toPort) return false;

    // type compatibility — 'any' accepts everything
    const compatible =
      fromPort.dataType === 'any' ||
      toPort.dataType   === 'any' ||
      fromPort.dataType === toPort.dataType;

    return compatible;   // duplicate/single-input enforced by createWire
  }

  /**
   * Highlight a port element as a valid (green) or invalid (red) target.
   */
  function _highlightPort(portEl, valid) {
    if (_dropTarget && _dropTarget !== portEl) _clearHighlight(_dropTarget);
    _dropTarget = portEl;
    portEl.style.borderColor = valid ? '#22c55e' : '#ef4444';
    portEl.style.boxShadow   = valid
      ? '0 0 8px rgba(34,197,94,0.7)'
      : '0 0 8px rgba(239,68,68,0.6)';
    portEl.style.transform   = 'scale(1.4)';
  }

  function _clearHighlight(portEl) {
    if (!portEl) return;
    portEl.style.borderColor = '';
    portEl.style.boxShadow   = '';
    portEl.style.transform   = '';
  }

  /** Illuminate all *input* ports on canvas while dragging from an output. */
  function _setAllInputPortsGlow(on) {
    for (const portEl of document.querySelectorAll('.port.input')) {
      if (on) {
        portEl.style.opacity = '1';
        portEl.style.transition = 'border-color 0.1s, box-shadow 0.1s';
      } else {
        portEl.style.opacity = '';
        portEl.style.transition = '';
      }
    }
  }

  /* ── Wire finalization ──────────────────────────────────────────────── */

  /**
   * Attempt to create a wire between two ports and trigger evaluation.
   * @param {string} fromNodeId @param {string} fromPortId
   * @param {string} toNodeId   @param {string} toPortId
   */
  function _finalizeWire(fromNodeId, fromPortId, toNodeId, toPortId) {
    const wire = GraphEngine.createWire(fromNodeId, fromPortId, toNodeId, toPortId);
    if (!wire) return;   // rejected (duplicate or single-input violation)

    appState.wires.set(wire.id, wire);

    // render the new wire
    CanvasRenderer.renderWire(wire);

    // refresh connected state on both endpoint nodes
    const fromEl = document.getElementById(`node-${fromNodeId}`);
    const toEl   = document.getElementById(`node-${toNodeId}`);
    if (fromEl) fromEl.querySelector(`[data-port-id="${fromPortId}"][data-side="output"]`)?.classList.add('connected');
    if (toEl)   toEl.querySelector(`[data-port-id="${toPortId}"][data-side="input"]`)?.classList.add('connected');

    // evaluate downstream from the source node
    const results = GraphEngine.evaluateFrom(fromNodeId);
    _applyEvaluationResults(results);

    CanvasRenderer.renderMinimap();
    _setStatus(`Connected ${fromPortId} → ${toPortId}`);
  }

  /* ── Post-evaluation update ─────────────────────────────────────────── */

  /**
   * After GraphEngine.evaluate() or evaluateFrom(), update the DOM and
   * pulse wires that carried a changed value.
   * @param {{ nodeId:string, changed:boolean }[]} results
   */
  function applyEvaluationResults(results) {
    _applyEvaluationResults(results);
  }

  function _applyEvaluationResults(results) {
    // find wires whose source node had a changed output
    const changedNodes = new Set(results.filter(r => r.changed).map(r => r.nodeId));

    for (const node of appState.nodes.values()) {
      CanvasRenderer.updateNodeDisplay(node);
    }

    // update all wire SVG elements (colour, hot state)
    CanvasRenderer.renderAllWires();

    // pulse wires attached to changed nodes
    if (appState.settings.animateWires) {
      for (const wire of appState.wires.values()) {
        if (changedNodes.has(wire.fromNodeId)) {
          CanvasRenderer.pulseWire(wire.id);
        }
      }
    }

    // flag cycle nodes
    if (appState.execution.hasCycle) {
      for (const id of appState.execution.cycleIds) {
        const el = document.getElementById(`node-${id}`);
        if (el) {
          el.classList.remove('cycle');
          void el.offsetWidth;
          el.classList.add('cycle');
        }
      }
    }
  }

  /* ── Wire deletion ──────────────────────────────────────────────────── */

  /**
   * Delete a wire by id, re-null the destination input, re-evaluate.
   * @param {string} wireId
   */
  function deleteWire(wireId) {
    const wire = appState.wires.get(wireId);
    if (!wire) return;

    appState.wires.delete(wireId);

    // null out the destination port value
    const toNode = appState.nodes.get(wire.toNodeId);
    if (toNode) toNode.inputs[wire.toPortId] = null;

    // remove SVG element
    const el = document.getElementById(`wire-${wireId}`);
    if (el) el.remove();

    // re-evaluate from upstream of the broken wire
    const results = GraphEngine.evaluateFrom(wire.fromNodeId);
    _applyEvaluationResults(results);

    // also re-evaluate the disconnected destination subtree with null input
    const results2 = GraphEngine.evaluateFrom(wire.toNodeId);
    _applyEvaluationResults(results2);

    if (appState.selection.id === wireId) {
      CanvasRenderer.setSelection(null, null);
    }

    CanvasRenderer.renderMinimap();
    _setStatus('Wire deleted');
  }

  /**
   * Delete all wires connected to a node (called when node is removed).
   * @param {string} nodeId
   */
  function deleteWiresForNode(nodeId) {
    const toDelete = [];
    for (const wire of appState.wires.values()) {
      if (wire.fromNodeId === nodeId || wire.toNodeId === nodeId) {
        toDelete.push(wire.id);
      }
    }
    for (const wid of toDelete) {
      const wire = appState.wires.get(wid);
      if (wire) {
        appState.wires.delete(wid);
        const el = document.getElementById(`wire-${wid}`);
        if (el) el.remove();
      }
    }
  }

  /* ── Tooltip ────────────────────────────────────────────────────────── */

  function _showTooltip(wireId, screenX, screenY) {
    const wire = appState.wires.get(wireId);
    if (!wire) return;
    const valStr = wire.value === null || wire.value === undefined
      ? 'null'
      : String(wire.value);
    const typeStr = wire.dataType || 'null';
    tooltip.textContent = `${typeStr}: ${valStr}`;
    tooltip.style.display = 'block';
    tooltip.style.left    = `${screenX + 12}px`;
    tooltip.style.top     = `${screenY - 28}px`;
    _tooltipWireId = wireId;
  }

  function _hideTooltip() {
    tooltip.style.display = 'none';
    _tooltipWireId = null;
  }

  /* ── Status bar helper ──────────────────────────────────────────────── */

  let _statusTimer = null;
  function _setStatus(msg) {
    const bar = document.getElementById('statusbar');
    if (!bar) return;
    bar.textContent = msg;
    bar.classList.remove('hide');
    clearTimeout(_statusTimer);
    _statusTimer = setTimeout(() => bar.classList.add('hide'), 2000);
  }

  /* ── Mouse event handlers ───────────────────────────────────────────── */

  /**
   * mousedown on a port — begin wire drag.
   * Attached via event delegation on the canvas-wrap.
   */
  function _onPortMouseDown(e, portEl) {
    e.stopPropagation();
    e.preventDefault();

    const nodeId = portEl.dataset.nodeId;
    const portId = portEl.dataset.portId;
    const side   = portEl.dataset.side;

    // if clicking an input port that already has a wire, detach it (re-drag)
    if (side === 'input') {
      const existing = _findWireToInput(nodeId, portId);
      if (existing) {
        // remove the wire and start dragging from the source output port instead
        const fromPort = CanvasRenderer.getPortWorldPos(existing.fromNodeId, existing.fromPortId, 'output');
        appState.wires.delete(existing.id);
        const el = document.getElementById(`wire-${existing.id}`);
        if (el) el.remove();

        const toNode = appState.nodes.get(existing.toNodeId);
        if (toNode) toNode.inputs[existing.toPortId] = null;

        _dragFrom = {
          nodeId: existing.fromNodeId,
          portId: existing.fromPortId,
          side:   'output',
          worldX: fromPort ? fromPort.x : 0,
          worldY: fromPort ? fromPort.y : 0,
        };
      } else {
        return; // can't drag from unconnected input
      }
    } else {
      // output port — start fresh drag
      const worldPos = CanvasRenderer.getPortWorldPos(nodeId, portId, 'output');
      if (!worldPos) return;
      _dragFrom = { nodeId, portId, side: 'output', worldX: worldPos.x, worldY: worldPos.y };
    }

    appState.interaction.isDrawingWire = true;
    _setAllInputPortsGlow(true);

    // draw initial drag wire at mouse position
    const rect = wrap.getBoundingClientRect();
    CanvasRenderer.updateDragWire(
      _dragFrom.worldX, _dragFrom.worldY,
      e.clientX - rect.left, e.clientY - rect.top
    );
  }

  /**
   * mousemove — update drag wire path and highlight nearest valid target.
   */
  function _onMouseMove(e) {
    if (!appState.interaction.isDrawingWire || !_dragFrom) return;

    const rect    = wrap.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;

    CanvasRenderer.updateDragWire(_dragFrom.worldX, _dragFrom.worldY, screenX, screenY);

    // hit-test for a target port
    const portEl = CanvasRenderer.hitTestPort(e.clientX, e.clientY);
    if (portEl && portEl.dataset.side === 'input') {
      const valid = _canConnect(
        _dragFrom.nodeId, _dragFrom.portId,
        portEl.dataset.nodeId, portEl.dataset.portId
      );
      _highlightPort(portEl, valid);
    } else {
      if (_dropTarget) {
        _clearHighlight(_dropTarget);
        _dropTarget = null;
      }
    }
  }

  /**
   * mouseup — complete or cancel the wire drag.
   */
  function _onMouseUp(e) {
    if (!appState.interaction.isDrawingWire || !_dragFrom) return;

    appState.interaction.isDrawingWire = false;
    CanvasRenderer.clearDragWire();
    _setAllInputPortsGlow(false);

    if (_dropTarget) {
      _clearHighlight(_dropTarget);
    }

    // check if we landed on a valid input port
    const portEl = CanvasRenderer.hitTestPort(e.clientX, e.clientY);
    if (portEl && portEl.dataset.side === 'input') {
      const toNodeId = portEl.dataset.nodeId;
      const toPortId = portEl.dataset.portId;
      if (_canConnect(_dragFrom.nodeId, _dragFrom.portId, toNodeId, toPortId)) {
        _finalizeWire(_dragFrom.nodeId, _dragFrom.portId, toNodeId, toPortId);
      }
    }

    _dropTarget = null;
    _dragFrom   = null;
  }

  /**
   * Click on a wire SVG element — select it.
   */
  function _onWireClick(e, wireId) {
    e.stopPropagation();
    CanvasRenderer.setSelection('wire', wireId);
  }

  /**
   * Wire hover — show tooltip after a short delay.
   */
  function _onWireMouseEnter(e, wireId) {
    clearTimeout(_tooltipTimeout);
    _tooltipTimeout = setTimeout(() => {
      _showTooltip(wireId, e.clientX, e.clientY);
    }, 300);
  }

  function _onWireMouseMove(e, wireId) {
    if (_tooltipWireId === wireId) {
      tooltip.style.left = `${e.clientX + 12}px`;
      tooltip.style.top  = `${e.clientY - 28}px`;
    }
  }

  function _onWireMouseLeave() {
    clearTimeout(_tooltipTimeout);
    _hideTooltip();
  }

  /* ── Helper: find wire arriving at an input port ────────────────────── */
  function _findWireToInput(nodeId, portId) {
    for (const wire of appState.wires.values()) {
      if (wire.toNodeId === nodeId && wire.toPortId === portId) return wire;
    }
    return null;
  }

  /* ── Keyboard: Delete selected wire ─────────────────────────────────── */
  function _onKeyDown(e) {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      // only delete wire if an input control is not focused
      if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
      if (document.activeElement && document.activeElement.tagName === 'SELECT') return;
      if (appState.selection.type === 'wire' && appState.selection.id) {
        deleteWire(appState.selection.id);
      }
    }
    if (e.key === 'Escape') {
      // cancel wire drag
      if (appState.interaction.isDrawingWire) {
        appState.interaction.isDrawingWire = false;
        CanvasRenderer.clearDragWire();
        _setAllInputPortsGlow(false);
        if (_dropTarget) { _clearHighlight(_dropTarget); _dropTarget = null; }
        _dragFrom = null;
      }
    }
  }

  /* ── Event delegation ───────────────────────────────────────────────── */

  /**
   * Attach all wire-system event listeners.
   * Called once during init.
   */
  function attach() {
    // port mousedown — delegation on canvas-wrap
    wrap.addEventListener('mousedown', e => {
      const portEl = CanvasRenderer.hitTestPort(e.clientX, e.clientY);
      if (portEl) _onPortMouseDown(e, portEl);
    }, true);   // capture so it fires before node drag

    // drag move + up on window so dragging outside canvas still works
    window.addEventListener('mousemove', _onMouseMove);
    window.addEventListener('mouseup',   _onMouseUp);

    // wire click + hover via delegation on the SVG wires group
    const wiresGroup = document.getElementById('wires-group');
    wiresGroup.addEventListener('click', e => {
      const wireId = e.target.dataset && e.target.dataset.wireId;
      if (wireId) _onWireClick(e, wireId);
    });
    wiresGroup.addEventListener('mouseenter', e => {
      const wireId = e.target.dataset && e.target.dataset.wireId;
      if (wireId) _onWireMouseEnter(e, wireId);
    }, true);
    wiresGroup.addEventListener('mousemove', e => {
      const wireId = e.target.dataset && e.target.dataset.wireId;
      if (wireId) _onWireMouseMove(e, wireId);
    });
    wiresGroup.addEventListener('mouseleave', e => {
      const wireId = e.target.dataset && e.target.dataset.wireId;
      if (wireId) _onWireMouseLeave();
    }, true);

    // keyboard
    window.addEventListener('keydown', _onKeyDown);
  }

  /* ── Public API ─────────────────────────────────────────────────────── */
  return {
    attach,
    deleteWire,
    deleteWiresForNode,
    applyEvaluationResults,
  };

})();

/* ═══════════════════════════════════════════════════════════════════════
   UI MANAGER
   Sidebar palette, toolbar buttons, context menu, node drag,
   canvas pan/zoom, and inline control event handling.
   ═══════════════════════════════════════════════════════════════════════ */
const UIManager = (() => {

  /* ── DOM refs ───────────────────────────────────────────────────────── */
  const wrap       = document.getElementById('canvas-wrap');
  const palette    = document.getElementById('palette');
  const ctxMenu    = document.getElementById('context-menu');
  const ghost      = document.getElementById('drag-ghost');
  const fileInput  = document.getElementById('file-input');

  /* ── Category display metadata ──────────────────────────────────────── */
  const CATEGORIES = [
    { id: 'input',  label: 'Input',  color: '#4f8ef7' },
    { id: 'logic',  label: 'Logic',  color: '#a855f7' },
    { id: 'math',   label: 'Math',   color: '#f97316' },
    { id: 'string', label: 'String', color: '#22d3ee' },
    { id: 'output', label: 'Output', color: '#10b981' },
    { id: 'flow',   label: 'Flow',   color: '#f59e0b' },
  ];

  /* ── Status bar ─────────────────────────────────────────────────────── */
  let _statusTimer = null;
  function setStatus(msg, duration = 2200) {
    const bar = document.getElementById('statusbar');
    if (!bar) return;
    bar.textContent = msg;
    bar.classList.remove('hide');
    clearTimeout(_statusTimer);
    _statusTimer = setTimeout(() => bar.classList.add('hide'), duration);
  }

  /* ══════════════════════════════════════════════════════════════════════
     PALETTE
     ══════════════════════════════════════════════════════════════════════ */

  /** Build the sidebar palette from the GraphEngine registry. */
  function buildPalette() {
    palette.innerHTML = '';
    const allTypes = GraphEngine.getAllNodeTypes();

    for (const cat of CATEGORIES) {
      const types = allTypes.filter(t => t.category === cat.id);
      if (!types.length) continue;

      const section = document.createElement('div');
      section.className = 'palette-category';

      // category header (collapsible)
      const header = document.createElement('div');
      header.className = 'palette-cat-header';
      header.innerHTML = `
        <span class="cat-dot" style="background:${cat.color}"></span>
        <span>${cat.label}</span>
        <span class="cat-arrow">▾</span>`;
      header.addEventListener('click', () => {
        header.classList.toggle('collapsed');
        items.classList.toggle('hidden');
      });

      const items = document.createElement('div');
      items.className = 'palette-items';

      for (const typeDef of types) {
        const item = document.createElement('div');
        item.className = 'palette-item';
        item.draggable = true;
        item.dataset.nodeType = typeDef.type;

        const icon = document.createElement('span');
        icon.className = 'item-icon';
        icon.style.background = cat.color + '22';
        icon.style.color = cat.color;
        icon.textContent = typeDef.icon;

        const label = document.createElement('span');
        label.textContent = typeDef.label;

        item.appendChild(icon);
        item.appendChild(label);

        // click-to-add (places near centre of current viewport)
        item.addEventListener('click', () => {
          const centre = _viewportCentre();
          addNodeAt(typeDef.type, centre.x, centre.y);
        });

        // drag-to-canvas
        item.addEventListener('dragstart', e => _onPaletteDragStart(e, typeDef));
        item.addEventListener('dragend',   _onPaletteDragEnd);

        items.appendChild(item);
      }

      section.appendChild(header);
      section.appendChild(items);
      palette.appendChild(section);
    }
  }

  /* ── Palette drag ───────────────────────────────────────────────────── */

  let _paletteDragType = null;

  function _onPaletteDragStart(e, typeDef) {
    _paletteDragType = typeDef.type;
    appState.interaction.paletteDrag = { type: typeDef.type };
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/plain', typeDef.type);

    ghost.textContent = `${typeDef.icon}  ${typeDef.label}`;
    ghost.style.display = 'block';
    e.dataTransfer.setDragImage(ghost, 0, 0);

    wrap.classList.add('drop-active');
  }

  function _onPaletteDragEnd() {
    ghost.style.display = 'none';
    wrap.classList.remove('drop-active');
    _paletteDragType = null;
    appState.interaction.paletteDrag = null;
  }

  function _onCanvasDragOver(e) {
    if (!_paletteDragType && !e.dataTransfer.types.includes('text/plain')) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function _onCanvasDrop(e) {
    e.preventDefault();
    wrap.classList.remove('drop-active');
    ghost.style.display = 'none';

    const type = _paletteDragType || e.dataTransfer.getData('text/plain');
    if (!type || !GraphEngine.getNodeType(type)) return;

    const rect  = wrap.getBoundingClientRect();
    const world = CanvasRenderer.screenToWorld(e.clientX - rect.left, e.clientY - rect.top);
    addNodeAt(type, world.x - 80, world.y - 30);

    _paletteDragType = null;
    appState.interaction.paletteDrag = null;
  }

  /* ── JSON file import (drag onto canvas) ────────────────────────────── */
  function _onCanvasFileDrop(e) {
    const file = e.dataTransfer.files[0];
    if (!file || !file.name.endsWith('.json')) return;
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        StorageManager.importJSON(ev.target.result);
        setStatus('Graph imported');
      } catch {
        setStatus('Import failed — invalid JSON');
      }
    };
    reader.readAsText(file);
  }

  /* ── Viewport centre helper ─────────────────────────────────────────── */
  function _viewportCentre() {
    const cw = wrap.clientWidth  / 2;
    const ch = wrap.clientHeight / 2;
    return CanvasRenderer.screenToWorld(cw, ch);
  }

  /* ══════════════════════════════════════════════════════════════════════
     NODE CREATION & DELETION
     ══════════════════════════════════════════════════════════════════════ */

  /**
   * Create a node, add it to state, render it, evaluate, update minimap.
   * @param {string} type
   * @param {number} x  world x
   * @param {number} y  world y
   * @returns {NodeState}
   */
  function addNodeAt(type, x, y) {
    const node = GraphEngine.createNode(type, x, y);
    appState.nodes.set(node.id, node);
    CanvasRenderer.renderNode(node);

    // evaluate the new node (no inputs yet, but computes defaults)
    const results = GraphEngine.evaluateFrom(node.id);
    WireSystem.applyEvaluationResults(results);

    CanvasRenderer.renderMinimap();
    CanvasRenderer.setSelection('node', node.id);
    setStatus(`Added ${GraphEngine.getNodeType(type).label}`);
    return node;
  }

  /**
   * Delete a node and all its connected wires.
   * @param {string} nodeId
   */
  function deleteNode(nodeId) {
    // gather affected downstream nodes before deletion
    const affectedNodes = new Set();
    for (const wire of appState.wires.values()) {
      if (wire.fromNodeId === nodeId) affectedNodes.add(wire.toNodeId);
    }

    WireSystem.deleteWiresForNode(nodeId);
    appState.nodes.delete(nodeId);

    const el = document.getElementById(`node-${nodeId}`);
    if (el) el.remove();

    if (appState.selection.id === nodeId) {
      CanvasRenderer.setSelection(null, null);
    }

    // re-evaluate all formerly-downstream nodes (they now have null inputs)
    for (const id of affectedNodes) {
      const results = GraphEngine.evaluateFrom(id);
      WireSystem.applyEvaluationResults(results);
    }

    CanvasRenderer.renderMinimap();
    setStatus('Node deleted');
  }

  /* ══════════════════════════════════════════════════════════════════════
     CANVAS PAN & ZOOM
     ══════════════════════════════════════════════════════════════════════ */

  function _onCanvasMouseDown(e) {
    // ignore if clicking a node, port, or control
    if (e.target.closest('.node')) return;
    if (e.target.closest('#context-menu')) return;
    if (appState.interaction.isDrawingWire) return;
    if (e.button !== 0 && e.button !== 1) return;   // LMB or MMB only

    CanvasRenderer.setSelection(null, null);
    appState.interaction.isPanning  = true;
    appState.interaction.panStart   = { x: e.clientX, y: e.clientY };
    appState.interaction.panOrigin  = { x: appState.viewport.x, y: appState.viewport.y };
    wrap.style.cursor = 'grabbing';
    e.preventDefault();
  }

  function _onCanvasMouseMove(e) {
    if (!appState.interaction.isPanning) return;
    const dx = e.clientX - appState.interaction.panStart.x;
    const dy = e.clientY - appState.interaction.panStart.y;
    appState.viewport.x = appState.interaction.panOrigin.x + dx;
    appState.viewport.y = appState.interaction.panOrigin.y + dy;
    CanvasRenderer.applyViewport();
    CanvasRenderer.renderAllWires();
    CanvasRenderer.renderMinimap();
  }

  function _onCanvasMouseUp() {
    if (!appState.interaction.isPanning) return;
    appState.interaction.isPanning = false;
    wrap.style.cursor = '';
  }

  function _onCanvasWheel(e) {
    e.preventDefault();
    const rect  = wrap.getBoundingClientRect();
    const delta = -e.deltaY * ZOOM_STEP;
    CanvasRenderer.zoomAt(delta, e.clientX - rect.left, e.clientY - rect.top);
  }

  const ZOOM_STEP = 0.0012;

  /* ══════════════════════════════════════════════════════════════════════
     NODE DRAG
     ══════════════════════════════════════════════════════════════════════ */

  function _onNodeMouseDown(e, nodeEl) {
    // don't drag if interacting with a control inside the node
    if (e.target.tagName === 'INPUT')  return;
    if (e.target.tagName === 'SELECT') return;
    if (e.target.tagName === 'BUTTON') return;
    if (e.target.classList.contains('port'))   return;
    if (e.target.classList.contains('toggle')) return;

    const nodeId = nodeEl.dataset.nodeId;
    CanvasRenderer.setSelection('node', nodeId);

    const node  = appState.nodes.get(nodeId);
    if (!node) return;

    const rect  = wrap.getBoundingClientRect();
    const scale = appState.viewport.scale;
    const worldMouseX = (e.clientX - rect.left - appState.viewport.x) / scale;
    const worldMouseY = (e.clientY - rect.top  - appState.viewport.y) / scale;

    appState.interaction.isDraggingNode = true;
    appState.interaction.draggingNodeId = nodeId;
    appState.interaction.dragOffset     = { x: worldMouseX - node.x, y: worldMouseY - node.y };

    // bring to front
    nodeEl.style.zIndex = '10';
    e.preventDefault();
  }

  function _onNodeMouseMove(e) {
    if (!appState.interaction.isDraggingNode) return;
    const nodeId = appState.interaction.draggingNodeId;
    const node   = appState.nodes.get(nodeId);
    if (!node) return;

    const rect  = wrap.getBoundingClientRect();
    const scale = appState.viewport.scale;
    const worldX = (e.clientX - rect.left - appState.viewport.x) / scale;
    const worldY = (e.clientY - rect.top  - appState.viewport.y) / scale;

    node.x = worldX - appState.interaction.dragOffset.x;
    node.y = worldY - appState.interaction.dragOffset.y;

    CanvasRenderer.syncNodePosition(nodeId);
    CanvasRenderer.renderAllWires();
    CanvasRenderer.renderMinimap();
  }

  function _onNodeMouseUp(e) {
    if (!appState.interaction.isDraggingNode) return;
    const nodeId = appState.interaction.draggingNodeId;
    const el = document.getElementById(`node-${nodeId}`);
    if (el) el.style.zIndex = '';
    appState.interaction.isDraggingNode = false;
    appState.interaction.draggingNodeId = null;
  }

  /* ══════════════════════════════════════════════════════════════════════
     INLINE CONTROL EVENTS
     Config changes → re-evaluate the node and downstream.
     ══════════════════════════════════════════════════════════════════════ */

  function _onControlChange(e, nodeEl) {
    const nodeId = nodeEl.dataset.nodeId;
    const node   = appState.nodes.get(nodeId);
    if (!node) return;

    const target  = e.target;
    const cfgKey  = target.dataset.cfg;
    if (!cfgKey) return;

    // read raw value and coerce to the right type
    let val = target.type === 'checkbox' ? target.checked : target.value;
    if (target.type === 'number' || target.type === 'range') val = parseFloat(val);

    node.config[cfgKey] = val;

    // Delay node — commit pending value after ms
    if (node.type === 'Delay') {
      const cfg = node.config;
      clearTimeout(cfg._timer);
      cfg._timer = setTimeout(() => {
        cfg._lastOut = cfg._pending;
        const r = GraphEngine.evaluateFrom(nodeId);
        WireSystem.applyEvaluationResults(r);
        CanvasRenderer.renderMinimap();
      }, cfg.ms);
    }

    const results = GraphEngine.evaluateFrom(nodeId);
    WireSystem.applyEvaluationResults(results);
    CanvasRenderer.renderMinimap();
  }

  function _onToggleClick(e, nodeEl) {
    const nodeId = nodeEl.dataset.nodeId;
    const node   = appState.nodes.get(nodeId);
    if (!node) return;

    const toggle = e.target.closest('[data-toggle="bool"]');
    if (!toggle) return;

    const cfgKey = toggle.dataset.cfg;
    node.config[cfgKey] = !node.config[cfgKey];
    toggle.classList.toggle('on', node.config[cfgKey]);

    const results = GraphEngine.evaluateFrom(nodeId);
    WireSystem.applyEvaluationResults(results);
    CanvasRenderer.renderMinimap();
  }

  /* ══════════════════════════════════════════════════════════════════════
     CONTEXT MENU
     ══════════════════════════════════════════════════════════════════════ */

  function _showContextMenu(e) {
    e.preventDefault();
    const rect  = wrap.getBoundingClientRect();
    const world = CanvasRenderer.screenToWorld(e.clientX - rect.left, e.clientY - rect.top);

    // what did we right-click on?
    const nodeId = CanvasRenderer.hitTestNode(e.clientX, e.clientY);
    const wireId = !nodeId ? CanvasRenderer.hitTestWire(e.clientX, e.clientY) : null;

    ctxMenu.innerHTML = '';

    if (nodeId) {
      _ctxSection('Node');
      _ctxItem('Delete Node', '🗑', () => deleteNode(nodeId), true);
      _ctxItem('Duplicate',   '⧉', () => {
        const src = appState.nodes.get(nodeId);
        if (!src) return;
        addNodeAt(src.type, src.x + 30, src.y + 30);
      });
    } else if (wireId) {
      _ctxSection('Wire');
      _ctxItem('Delete Wire', '🗑', () => WireSystem.deleteWire(wireId), true);
    } else {
      _ctxSection('Add Node');
      for (const cat of CATEGORIES) {
        const types = GraphEngine.getAllNodeTypes().filter(t => t.category === cat.id);
        if (!types.length) continue;
        _ctxSection(cat.label);
        for (const typeDef of types) {
          _ctxItem(`${typeDef.icon}  ${typeDef.label}`, '', () => {
            addNodeAt(typeDef.type, world.x - 80, world.y - 30);
          });
        }
      }
      if (appState.nodes.size > 0) {
        _ctxSep();
        _ctxItem('Fit to View', '⛶', () => CanvasRenderer.fitToView());
      }
    }

    ctxMenu.classList.add('visible');

    // position menu, keeping it on screen
    ctxMenu.style.left = '0';
    ctxMenu.style.top  = '0';
    ctxMenu.style.display = 'block';

    const mw = ctxMenu.offsetWidth;
    const mh = ctxMenu.offsetHeight;
    const ww = window.innerWidth;
    const wh = window.innerHeight;

    ctxMenu.style.left = `${Math.min(e.clientX, ww - mw - 8)}px`;
    ctxMenu.style.top  = `${Math.min(e.clientY, wh - mh - 8)}px`;
  }

  function _hideContextMenu() {
    ctxMenu.classList.remove('visible');
    ctxMenu.innerHTML = '';
  }

  function _ctxSection(label) {
    const el = document.createElement('div');
    el.className = 'ctx-section';
    el.textContent = label;
    ctxMenu.appendChild(el);
  }

  function _ctxSep() {
    const el = document.createElement('div');
    el.className = 'ctx-sep';
    ctxMenu.appendChild(el);
  }

  function _ctxItem(label, icon, onClick, danger = false) {
    const el = document.createElement('div');
    el.className = 'ctx-item' + (danger ? ' danger' : '');
    el.innerHTML = icon
      ? `<span style="font-size:13px">${icon}</span><span>${label}</span>`
      : `<span>${label}</span>`;
    el.addEventListener('click', () => { _hideContextMenu(); onClick(); });
    ctxMenu.appendChild(el);
  }

  /* ══════════════════════════════════════════════════════════════════════
     TOOLBAR BUTTONS
     ══════════════════════════════════════════════════════════════════════ */

  function _bindToolbar() {
    document.getElementById('btn-new').addEventListener('click', () => {
      if (appState.nodes.size > 0 &&
          !confirm('Clear the current graph and load the starter template?')) return;
      StorageManager.loadStarter();
    });

    document.getElementById('btn-save').addEventListener('click', () => {
      StorageManager.saveToLocalStorage();
      setStatus('Saved to browser storage');
    });

    document.getElementById('btn-load').addEventListener('click', () => {
      fileInput.value = '';
      fileInput.click();
    });

    document.getElementById('btn-export').addEventListener('click', () => {
      StorageManager.exportJSON();
      setStatus('Graph exported as JSON');
    });

    document.getElementById('btn-clear').addEventListener('click', () => {
      if (!confirm('Clear all nodes and wires?')) return;
      StorageManager.clearAll();
      setStatus('Canvas cleared');
    });

    fileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          StorageManager.importJSON(ev.target.result);
          setStatus('Graph loaded');
        } catch {
          setStatus('Load failed — invalid JSON');
        }
      };
      reader.readAsText(file);
    });
  }

  /* ══════════════════════════════════════════════════════════════════════
     EVENT WIRING
     ══════════════════════════════════════════════════════════════════════ */

  function attach() {
    buildPalette();
    _bindToolbar();

    // ── Canvas pan
    wrap.addEventListener('mousedown', e => {
      if (!e.target.closest('.node') && !appState.interaction.isDrawingWire) {
        _onCanvasMouseDown(e);
      }
    });
    window.addEventListener('mousemove', e => {
      _onCanvasMouseMove(e);
      _onNodeMouseMove(e);
    });
    window.addEventListener('mouseup', e => {
      _onCanvasMouseUp(e);
      _onNodeMouseUp(e);
    });

    // ── Zoom
    wrap.addEventListener('wheel', _onCanvasWheel, { passive: false });

    // ── Node drag (delegation on nodes-layer)
    document.getElementById('nodes-layer').addEventListener('mousedown', e => {
      const nodeEl = e.target.closest('.node');
      if (nodeEl) _onNodeMouseDown(e, nodeEl);
    });

    // ── Inline controls (delegation on nodes-layer)
    document.getElementById('nodes-layer').addEventListener('input', e => {
      const nodeEl = e.target.closest('.node');
      if (nodeEl) _onControlChange(e, nodeEl);
    });
    document.getElementById('nodes-layer').addEventListener('change', e => {
      const nodeEl = e.target.closest('.node');
      if (nodeEl) _onControlChange(e, nodeEl);
    });
    document.getElementById('nodes-layer').addEventListener('click', e => {
      const nodeEl = e.target.closest('.node');
      if (nodeEl) _onToggleClick(e, nodeEl);
    });

    // ── Context menu
    wrap.addEventListener('contextmenu', _showContextMenu);
    document.addEventListener('click', e => {
      if (!ctxMenu.contains(e.target)) _hideContextMenu();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') _hideContextMenu();
    });

    // ── Palette drag-to-canvas
    wrap.addEventListener('dragover', _onCanvasDragOver);
    wrap.addEventListener('drop', e => {
      // JSON file import takes priority
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0 &&
          e.dataTransfer.files[0].name.endsWith('.json')) {
        _onCanvasFileDrop(e);
      } else {
        _onCanvasDrop(e);
      }
    });

    // ── Delete key for selected node
    window.addEventListener('keydown', e => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (document.activeElement?.tagName === 'INPUT')  return;
        if (document.activeElement?.tagName === 'SELECT') return;
        if (appState.selection.type === 'node' && appState.selection.id) {
          deleteNode(appState.selection.id);
        }
      }
      // F key = fit to view
      if (e.key === 'f' || e.key === 'F') {
        if (document.activeElement?.tagName === 'INPUT') return;
        CanvasRenderer.fitToView();
      }
    });
  }

  /* ── Public API ─────────────────────────────────────────────────────── */
  return {
    attach,
    addNodeAt,
    deleteNode,
    buildPalette,
    setStatus,
  };

})();

/* ═══════════════════════════════════════════════════════════════════════
   STORAGE MANAGER
   Save / load from localStorage, export .json download,
   import from JSON string, and the starter template.
   ═══════════════════════════════════════════════════════════════════════ */
const StorageManager = (() => {

  const LS_KEY = 'logicflow_graph_v1';

  /* ── Serialisation ──────────────────────────────────────────────────── */

  /**
   * Serialise the current graph to a plain JSON-safe object.
   * Maps become arrays of [id, value] pairs.
   * Transient runtime fields (_timer, _pending, _lastEmit, _lastVal)
   * are stripped so the saved file stays clean.
   * @returns {Object}
   */
  function serialise() {
    const STRIP = new Set(['_timer', '_pending', '_lastOut', '_lastEmit', '_lastVal']);

    const nodes = [];
    for (const node of appState.nodes.values()) {
      const cleanCfg = {};
      for (const [k, v] of Object.entries(node.config)) {
        if (!STRIP.has(k)) cleanCfg[k] = v;
      }
      nodes.push({
        id:      node.id,
        type:    node.type,
        x:       node.x,
        y:       node.y,
        config:  cleanCfg,
        inputs:  { ...node.inputs  },
        outputs: { ...node.outputs },
        status:  node.status,
      });
    }

    const wires = [];
    for (const wire of appState.wires.values()) {
      wires.push({
        id:         wire.id,
        fromNodeId: wire.fromNodeId,
        fromPortId: wire.fromPortId,
        toNodeId:   wire.toNodeId,
        toPortId:   wire.toPortId,
        value:      wire.value,
        dataType:   wire.dataType,
      });
    }

    return {
      version:  1,
      savedAt:  new Date().toISOString(),
      viewport: { ...appState.viewport },
      nodes,
      wires,
    };
  }

  /**
   * Deserialise a plain object back into appState, then re-render.
   * Validates the version field; throws on corrupt data.
   * @param {Object} data
   */
  function deserialise(data) {
    if (!data || data.version !== 1) throw new Error('Unsupported file version');
    if (!Array.isArray(data.nodes) || !Array.isArray(data.wires)) {
      throw new Error('Missing nodes or wires array');
    }

    // wipe current state
    _clearState();

    // restore viewport
    if (data.viewport) {
      appState.viewport.x     = data.viewport.x     ?? 0;
      appState.viewport.y     = data.viewport.y     ?? 0;
      appState.viewport.scale = data.viewport.scale ?? 1;
    }

    // restore nodes — only accept known types
    for (const n of data.nodes) {
      if (!GraphEngine.getNodeType(n.type)) continue;
      const def = GraphEngine.getNodeType(n.type);

      const inputs  = {};
      const outputs = {};
      for (const p of def.inputs)  inputs[p.id]  = n.inputs?.[p.id]  ?? null;
      for (const p of def.outputs) outputs[p.id] = n.outputs?.[p.id] ?? null;

      // merge saved config onto fresh default (handles added fields in later versions)
      const config = { ...structuredClone(def.defaultConfig), ...(n.config ?? {}) };

      appState.nodes.set(n.id, {
        id:       n.id,
        type:     n.type,
        x:        n.x ?? 100,
        y:        n.y ?? 100,
        config,
        inputs,
        outputs,
        status:   n.status ?? 'idle',
        errorMsg: '',
      });
    }

    // restore wires — validate endpoints exist
    for (const w of data.wires) {
      const fromNode = appState.nodes.get(w.fromNodeId);
      const toNode   = appState.nodes.get(w.toNodeId);
      if (!fromNode || !toNode) continue;
      appState.wires.set(w.id, {
        id:           w.id,
        fromNodeId:   w.fromNodeId,
        fromPortId:   w.fromPortId,
        toNodeId:     w.toNodeId,
        toPortId:     w.toPortId,
        value:        w.value    ?? null,
        dataType:     w.dataType ?? 'null',
        typeMismatch: false,
      });
    }

    // render everything then evaluate
    CanvasRenderer.renderAll();
    const results = GraphEngine.evaluate();
    WireSystem.applyEvaluationResults(results);
    CanvasRenderer.renderMinimap();
  }

  /* ── Internal: wipe state without touching the DOM ──────────────────── */
  function _clearState() {
    appState.nodes.clear();
    appState.wires.clear();
    appState.selection.type = null;
    appState.selection.id   = null;
    appState.execution.order    = [];
    appState.execution.hasCycle = false;
    appState.execution.cycleIds = [];
    // reset interaction flags
    appState.interaction.isPanning       = false;
    appState.interaction.isDraggingNode  = false;
    appState.interaction.isDrawingWire   = false;
    appState.interaction.draggingNodeId  = null;
    appState.interaction.wireFrom        = null;
  }

  /* ── localStorage ───────────────────────────────────────────────────── */

  /** Save the current graph to localStorage. */
  function saveToLocalStorage() {
    try {
      const data = JSON.stringify(serialise());
      localStorage.setItem(LS_KEY, data);
    } catch (e) {
      UIManager.setStatus('Save failed: ' + e.message);
    }
  }

  /**
   * Load a graph from localStorage.
   * @returns {boolean} true if something was loaded
   */
  function loadFromLocalStorage() {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return false;
    try {
      deserialise(JSON.parse(raw));
      return true;
    } catch (e) {
      console.warn('StorageManager: localStorage load failed —', e.message);
      return false;
    }
  }

  /* ── JSON export (download) ─────────────────────────────────────────── */

  /** Trigger a .json file download of the current graph. */
  function exportJSON() {
    const json = JSON.stringify(serialise(), null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `logicflow_${_dateStamp()}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  /**
   * Import a graph from a JSON string (from file-picker or file-drop).
   * @param {string} jsonStr
   */
  function importJSON(jsonStr) {
    const data = JSON.parse(jsonStr);   // throws on bad JSON
    deserialise(data);                  // throws on bad schema
    saveToLocalStorage();               // persist the newly imported graph
  }

  /* ── Clear all ──────────────────────────────────────────────────────── */

  /** Wipe state, clear DOM, reset viewport. */
  function clearAll() {
    _clearState();
    document.getElementById('nodes-layer').innerHTML = '';
    document.getElementById('wires-group').innerHTML = '';
    CanvasRenderer.clearDragWire();
    CanvasRenderer.setSelection(null, null);
    appState.viewport = { x: 0, y: 0, scale: 1 };
    CanvasRenderer.applyViewport();
    CanvasRenderer.renderMinimap();
    localStorage.removeItem(LS_KEY);
  }

  /* ── Starter template ───────────────────────────────────────────────── */

  /**
   * Populate the canvas with a small example workflow:
   *   NumberInput A ─┐
   *                  ├─► Add ─► DisplayValue
   *   NumberInput B ─┘
   *
   *   BooleanToggle ─► NOT ─► LED
   */
  function loadStarter() {
    clearAll();

    // reset viewport to a comfortable starting position
    appState.viewport = { x: 60, y: 80, scale: 1 };

    // ── Math chain
    const numA  = GraphEngine.createNode('NumberInput',  60,  60);
    numA.config.value = 4;
    const numB  = GraphEngine.createNode('NumberInput',  60, 170);
    numB.config.value = 8;
    const add   = GraphEngine.createNode('Add',         280, 110);
    const disp  = GraphEngine.createNode('DisplayValue',480, 110);

    // ── Boolean chain
    const tog   = GraphEngine.createNode('BooleanToggle', 60, 310);
    tog.config.value = true;
    const notN  = GraphEngine.createNode('NOT',          280, 310);
    const led   = GraphEngine.createNode('LED',          480, 310);

    // register nodes
    for (const n of [numA, numB, add, disp, tog, notN, led]) {
      appState.nodes.set(n.id, n);
    }

    // ── Wires
    const wires = [
      GraphEngine.createWire(numA.id, 'value', add.id,  'a'),
      GraphEngine.createWire(numB.id, 'value', add.id,  'b'),
      GraphEngine.createWire(add.id,  'out',   disp.id, 'value'),
      GraphEngine.createWire(tog.id,  'value', notN.id, 'a'),
      GraphEngine.createWire(notN.id, 'out',   led.id,  'value'),
    ];
    for (const w of wires) {
      if (w) appState.wires.set(w.id, w);
    }

    // render and evaluate
    CanvasRenderer.renderAll();
    const results = GraphEngine.evaluate();
    WireSystem.applyEvaluationResults(results);
    CanvasRenderer.applyViewport();
    CanvasRenderer.renderMinimap();

    saveToLocalStorage();
    UIManager.setStatus('Starter template loaded');
  }

  /* ── Date stamp helper ──────────────────────────────────────────────── */
  function _dateStamp() {
    const d = new Date();
    return `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}_`
      + `${String(d.getHours()).padStart(2,'0')}${String(d.getMinutes()).padStart(2,'0')}`;
  }

  /* ── Public API ─────────────────────────────────────────────────────── */
  return {
    saveToLocalStorage,
    loadFromLocalStorage,
    exportJSON,
    importJSON,
    clearAll,
    loadStarter,
    serialise,
    deserialise,
  };

})();

/* ═══════════════════════════════════════════════════════════════════════
   OVERLAY MANAGER
   Minimap navigation, wire pointer-events, typed status bar,
   window-resize re-render, and auto-save on page hide.
   ═══════════════════════════════════════════════════════════════════════ */
const OverlayManager = (() => {

  /* ── DOM refs ───────────────────────────────────────────────────────── */
  const minimapEl  = document.getElementById('minimap');
  const mmCanvas   = document.getElementById('minimap-canvas');
  const statusBar  = document.getElementById('statusbar');
  const wrap       = document.getElementById('canvas-wrap');

  /* ══════════════════════════════════════════════════════════════════════
     STATUS BAR
     Supports: info (default), success (green), warning (amber), error (red)
     ══════════════════════════════════════════════════════════════════════ */

  const STATUS_COLORS = {
    info:    { text: 'var(--text-muted)',  border: 'rgba(255,255,255,0.08)' },
    success: { text: '#34d399',            border: 'rgba(52,211,153,0.25)'  },
    warning: { text: '#fbbf24',            border: 'rgba(251,191,36,0.25)'  },
    error:   { text: '#f87171',            border: 'rgba(248,113,113,0.25)' },
  };

  let _statusTimer = null;

  /**
   * Show a typed status message that fades out after `duration` ms.
   * @param {string} msg
   * @param {'info'|'success'|'warning'|'error'} [type='info']
   * @param {number} [duration=2400]
   */
  function setStatus(msg, type = 'info', duration = 2400) {
    const col = STATUS_COLORS[type] || STATUS_COLORS.info;
    statusBar.textContent    = msg;
    statusBar.style.color    = col.text;
    statusBar.style.border   = `1px solid ${col.border}`;
    statusBar.classList.remove('hide');

    clearTimeout(_statusTimer);
    _statusTimer = setTimeout(() => statusBar.classList.add('hide'), duration);
  }

  /* ══════════════════════════════════════════════════════════════════════
     WIRE POINTER-EVENTS FIX
     #svg-layer has pointer-events:none so child <path> elements must
     individually opt in. We patch renderWire to set the attribute and
     also sweep existing wires once on attach.
     ══════════════════════════════════════════════════════════════════════ */

  /** Enable pointer events on every existing wire path element. */
  function _fixWirePointerEvents() {
    const group = document.getElementById('wires-group');
    if (!group) return;
    // the group itself must pass events through
    group.style.pointerEvents = 'all';
    for (const el of group.children) {
      if (el.classList.contains('wire')) {
        el.style.pointerEvents = 'stroke';
      }
    }
  }

  /**
   * Monkey-patch CanvasRenderer.renderWire so every newly created
   * wire path already has pointer-events:stroke set.
   * Called once during attach — safe because renderWire returns void.
   */
  function _patchRenderWire() {
    const original = CanvasRenderer.renderWire.bind(CanvasRenderer);
    CanvasRenderer.renderWire = function(wire) {
      original(wire);
      const el = document.getElementById(`wire-${wire.id}`);
      if (el) el.style.pointerEvents = 'stroke';
      // also ensure the group itself passes events
      const group = document.getElementById('wires-group');
      if (group) group.style.pointerEvents = 'all';
    };
  }

  /* ══════════════════════════════════════════════════════════════════════
     MINIMAP NAVIGATION
     Click or drag on the minimap canvas to pan the main viewport.
     Coordinate math mirrors renderMinimap's toMM() transform in reverse.
     ══════════════════════════════════════════════════════════════════════ */

  const MM_W   = 160;
  const MM_H   = 100;
  const MM_PAD = 10;

  let _mmDragging = false;

  /**
   * Convert a minimap pixel position to a world coordinate, then
   * centre the viewport on that world point.
   * @param {number} mmX  pixel x within the minimap canvas
   * @param {number} mmY  pixel y within the minimap canvas
   */
  function _minimapNavigate(mmX, mmY) {
    if (appState.nodes.size === 0) return;

    // recompute the same bounding box that renderMinimap uses
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const node of appState.nodes.values()) {
      const el = document.getElementById(`node-${node.id}`);
      const w  = el ? el.offsetWidth  : 180;
      const h  = el ? el.offsetHeight : 100;
      minX = Math.min(minX, node.x);
      minY = Math.min(minY, node.y);
      maxX = Math.max(maxX, node.x + w);
      maxY = Math.max(maxY, node.y + h);
    }

    const vp     = appState.viewport;
    const canvasW = wrap.clientWidth;
    const canvasH = wrap.clientHeight;
    const vpMinX  = (-vp.x) / vp.scale;
    const vpMinY  = (-vp.y) / vp.scale;
    const vpMaxX  = vpMinX + canvasW / vp.scale;
    const vpMaxY  = vpMinY + canvasH / vp.scale;

    const bMinX = Math.min(minX, vpMinX) - MM_PAD;
    const bMinY = Math.min(minY, vpMinY) - MM_PAD;
    const bMaxX = Math.max(maxX, vpMaxX) + MM_PAD;
    const bMaxY = Math.max(maxY, vpMaxY) + MM_PAD;
    const bW    = bMaxX - bMinX;
    const bH    = bMaxY - bMinY;

    const scale = Math.min((MM_W - MM_PAD*2) / bW, (MM_H - MM_PAD*2) / bH);
    const offX  = MM_PAD + (MM_W - MM_PAD*2 - bW * scale) / 2;
    const offY  = MM_PAD + (MM_H - MM_PAD*2 - bH * scale) / 2;

    // invert toMM: worldX = (mmX - offX) / scale + bMinX
    const worldX = (mmX - offX) / scale + bMinX;
    const worldY = (mmY - offY) / scale + bMinY;

    // centre the viewport on that world point
    appState.viewport.x = canvasW / 2 - worldX * vp.scale;
    appState.viewport.y = canvasH / 2 - worldY * vp.scale;

    CanvasRenderer.applyViewport();
    CanvasRenderer.renderAllWires();
    CanvasRenderer.renderMinimap();
  }

  function _onMinimapMouseDown(e) {
    e.preventDefault();
    _mmDragging = true;
    const rect = mmCanvas.getBoundingClientRect();
    _minimapNavigate(e.clientX - rect.left, e.clientY - rect.top);
  }

  function _onMinimapMouseMove(e) {
    if (!_mmDragging) return;
    const rect = mmCanvas.getBoundingClientRect();
    _minimapNavigate(e.clientX - rect.left, e.clientY - rect.top);
  }

  function _onMinimapMouseUp() {
    _mmDragging = false;
  }

  /* ══════════════════════════════════════════════════════════════════════
     WIRE TOOLTIP — live value refresh
     WireSystem handles show/hide/move.  Here we patch updateNodeDisplay
     so the tooltip refreshes whenever the wire value changes while it
     is still visible.
     ══════════════════════════════════════════════════════════════════════ */

  function _patchTooltipRefresh() {
    const tooltipEl = document.getElementById('wire-tooltip');
    const original  = WireSystem.applyEvaluationResults.bind(WireSystem);

    WireSystem.applyEvaluationResults = function(results) {
      original(results);
      // if a wire tooltip is open, refresh its text
      if (tooltipEl.style.display !== 'none') {
        // find which wire is being shown by scanning the text content pattern
        for (const wire of appState.wires.values()) {
          const valStr  = wire.value === null || wire.value === undefined ? 'null' : String(wire.value);
          const typeStr = wire.dataType || 'null';
          const expected = `${typeStr}: ${valStr}`;
          // crude check: if text starts with the type prefix, update it
          if (tooltipEl.textContent.startsWith(typeStr + ':')) {
            tooltipEl.textContent = expected;
            break;
          }
        }
      }
    };
  }

  /* ══════════════════════════════════════════════════════════════════════
     WINDOW RESIZE
     Re-render wires and minimap so they stay aligned with the canvas.
     ══════════════════════════════════════════════════════════════════════ */

  function _onResize() {
    CanvasRenderer.renderAllWires();
    CanvasRenderer.renderMinimap();
  }

  /* ══════════════════════════════════════════════════════════════════════
     AUTO-SAVE
     ══════════════════════════════════════════════════════════════════════ */

  function _onVisibilityChange() {
    if (document.visibilityState === 'hidden' && appState.nodes.size > 0) {
      StorageManager.saveToLocalStorage();
    }
  }

  function _onBeforeUnload() {
    if (appState.nodes.size > 0) {
      StorageManager.saveToLocalStorage();
    }
  }

  /* ══════════════════════════════════════════════════════════════════════
     ATTACH
     ══════════════════════════════════════════════════════════════════════ */

  function attach() {
    // ── Wire pointer-events
    _patchRenderWire();
    _fixWirePointerEvents();   // for any wires already in DOM at attach time

    // ── Tooltip live refresh
    _patchTooltipRefresh();

    // ── Minimap click / drag navigation
    mmCanvas.addEventListener('mousedown', _onMinimapMouseDown);
    window.addEventListener('mousemove',   _onMinimapMouseMove);
    window.addEventListener('mouseup',     _onMinimapMouseUp);

    // ── Resize
    window.addEventListener('resize', _onResize);

    // ── Auto-save
    document.addEventListener('visibilitychange', _onVisibilityChange);
    window.addEventListener('beforeunload', _onBeforeUnload);
  }

  /* ── Public API ─────────────────────────────────────────────────────── */
  return {
    attach,
    setStatus,
  };

})();

/* ═══════════════════════════════════════════════════════════════════════
   INIT
   Boot sequence: attach all systems, load saved graph or starter.
   ═══════════════════════════════════════════════════════════════════════ */
function init() {
  // 1. Patch and attach interaction systems in dependency order.
  //    OverlayManager must run first so renderWire is patched before
  //    any nodes or wires are rendered.
  OverlayManager.attach();
  WireSystem.attach();
  UIManager.attach();

  // 2. Unify the two setStatus implementations — route every caller
  //    through OverlayManager so typed colours work everywhere.
  UIManager.setStatus = (msg, type, dur) => OverlayManager.setStatus(msg, type, dur);

  // 3. Load persisted graph, or show the starter template on first open.
  const restored = StorageManager.loadFromLocalStorage();
  if (!restored) {
    StorageManager.loadStarter();
  } else {
    // Fix pointer-events on wires that were just rendered by deserialise
    const group = document.getElementById('wires-group');
    if (group) {
      group.style.pointerEvents = 'all';
      for (const el of group.children) {
        if (el.classList.contains('wire')) el.style.pointerEvents = 'stroke';
      }
    }
    OverlayManager.setStatus('Graph restored', 'success');
  }
}

// Run after the DOM is fully parsed.
document.addEventListener('DOMContentLoaded', init);
</script>
</body>
</html>
