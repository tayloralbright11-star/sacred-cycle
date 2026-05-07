<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="default"/>
<meta name="apple-mobile-web-app-title" content="Sacred Cycle"/>
<meta name="theme-color" content="#c2185b"/>
<title>Sacred Cycle — Tantric Menstrual Journal</title>
<style>
:root{--rose:#c2185b;--rose-light:#fce4ec;--gold:#b8860b;--gold-light:#fdf6e3;--plum:#7b1fa2;--plum-light:#f3e5f5;--navy:#1a237e;--navy-light:#e8eaf6;--orange:#e65100;--orange-light:#fff3e0;--cream:#fff9f5;--text:#3a2535;--muted:#8d4e6c;--subtle:#c9a0c0;--border:#f0d6e0;--card:rgba(255,255,255,0.88);--shadow:0 4px 20px rgba(194,24,91,0.09);}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
html{height:-webkit-fill-available;}
body{font-family:'Georgia',serif;background:linear-gradient(135deg,#fff5f7 0%,#fdf6e3 50%,#fff0f5 100%);min-height:100vh;min-height:-webkit-fill-available;color:var(--text);padding-bottom:env(safe-area-inset-bottom);}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg width='52' height='52' viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c2185b' fill-opacity='0.03'%3E%3Cpath d='M26 0l2.4 7.4L36 4l-4 6.8 7.4 2.4-7.4 2.4 4 6.8-7.6-3.2L26 26l-2.4-6.8-7.6 3.2 4-6.8L12.6 13l7.4-2.4-4-6.8 7.6 3.2z'/%3E%3C/g%3E%3C/svg%3E");pointer-events:none;z-index:0;}

/* NAV */
nav{position:sticky;top:0;z-index:100;background:rgba(255,255,255,0.96);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(–border);display:flex;align-items:center;gap:2px;padding:10px 14px;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;box-shadow:0 2px 16px rgba(194,24,91,0.07);}
nav::-webkit-scrollbar{display:none;}
.logo{font-size:17px;color:var(–rose);margin-right:10px;white-space:nowrap;letter-spacing:.5px;flex-shrink:0;}
.nb{border:none;background:transparent;padding:7px 13px;border-radius:20px;font-family:inherit;font-size:13px;color:var(–muted);cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all .2s;}
.nb:hover{background:var(–rose-light);color:var(–rose);}
.nb.active{background:var(–rose);color:#fff;}

/* SCREENS */
.screen{display:none;max-width:680px;margin:0 auto;padding:20px 16px 80px;position:relative;z-index:1;}
.screen.active{display:block;}

/* CARDS */
.card{background:var(–card);border-radius:16px;border:1px solid var(–border);padding:18px 20px;margin-bottom:14px;box-shadow:var(–shadow);}
.card-moon{background:linear-gradient(135deg,#1a0a2e,#2d1b4e);color:#f9e4f5;border:none;}
.card-gold{background:linear-gradient(135deg,#fffbf0,#fdf8e8);border-color:#e8d090;}
.card-gradient{border-width:1.5px;}

/* BUTTONS */
.btn{border:none;border-radius:22px;padding:10px 22px;font-family:inherit;font-size:14px;cursor:pointer;transition:all .2s;letter-spacing:.3px;display:inline-block;}
.btn:active{transform:scale(0.96);}
.btn-gold{background:linear-gradient(135deg,#b8860b,#d4a017);color:#fff8e7;}
.btn-rose{color:#fff;}
.btn-ghost{background:transparent;border:1.5px solid;}
.btn-sm{padding:8px 18px;font-size:13px;}
.btn-xs{padding:5px 12px;font-size:12px;}
.btn-full{width:100%;text-align:center;}
.btn-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;}

/* FORMS */
input,textarea,select{font-family:inherit;font-size:14px;border:1px solid var(–border);border-radius:10px;padding:10px 12px;background:rgba(255,255,255,0.92);color:var(–text);width:100%;outline:none;transition:border .2s;}
input:focus,textarea:focus,select:focus{border-color:var(–rose);box-shadow:0 0 0 3px rgba(194,24,91,0.08);}
textarea{resize:vertical;line-height:1.8;min-height:110px;}
label{font-size:11px;color:var(–muted);letter-spacing:.8px;text-transform:uppercase;display:block;margin-bottom:6px;}
.field{margin-bottom:14px;}

/* TAGS */
.tag{display:inline-block;border-radius:12px;padding:3px 10px;font-size:11px;margin:2px;}
.tag-rose{background:var(–rose-light);color:var(–rose);}
.tag-gold{background:var(–gold-light);color:var(–gold);}
.tag-plum{background:var(–plum-light);color:var(–plum);}
.tag-moon{background:rgba(255,255,255,0.15);color:#e8d4f8;}
.tag-navy{background:var(–navy-light);color:var(–navy);}

/* TYPE */
h1{font-size:26px;font-weight:400;letter-spacing:.8px;}
h2{font-size:19px;font-weight:400;letter-spacing:.4px;margin-bottom:14px;}
h3{font-size:16px;font-weight:600;margin-bottom:8px;}
h4{font-size:14px;font-weight:600;margin-bottom:6px;}
p{line-height:1.75;}
.label-sm{font-size:11px;color:var(–muted);letter-spacing:1.2px;text-transform:uppercase;}
.italic{font-style:italic;}
.muted{color:var(–muted);}
.center{text-align:center;}

/* GRID */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;}
@media(max-width:440px){.g3{grid-template-columns:1fr 1fr;}.g4{grid-template-columns:repeat(4,1fr);}}

/* STAT */
.stat{background:rgba(255,255,255,0.8);border:1px solid var(–border);border-radius:12px;padding:14px;text-align:center;}
.stat-n{font-size:28px;font-weight:300;}
.stat-l{font-size:10px;color:var(–muted);margin-top:2px;letter-spacing:.8px;text-transform:uppercase;}

/* SYM TAGS */
.sym{border:1px solid var(–border);border-radius:20px;padding:5px 12px;font-size:12px;cursor:pointer;background:transparent;color:var(–muted);font-family:inherit;transition:all .15s;margin:3px;display:inline-block;}
.sym.on{background:var(–rose-light);border-color:var(–rose);color:var(–rose);}

/* PRACTICE ITEMS */
.pi{border:1px solid var(–border);border-radius:12px;padding:14px 16px;margin-bottom:10px;cursor:pointer;transition:all .2s;}
.pi:hover,.pi.open{background:var(–rose-light);border-color:var(–rose);}
.pi-body{display:none;margin-top:12px;padding-top:12px;border-top:1px solid var(–border);}
.pi-body.show{display:block;}

/* PROMPTS */
.prbtn{display:block;width:100%;text-align:left;background:transparent;border:1px solid var(–border);border-radius:10px;padding:9px 12px;margin-bottom:8px;font-family:inherit;font-size:13px;cursor:pointer;color:var(–muted);transition:all .2s;}
.prbtn:hover,.prbtn.sel{background:var(–rose-light);border-color:var(–rose);color:var(–rose);}

/* TABS */
.tabs{display:flex;gap:4px;margin-bottom:16px;border-bottom:1px solid var(–border);overflow-x:auto;scrollbar-width:none;}
.tabs::-webkit-scrollbar{display:none;}
.tab{background:none;border:none;border-bottom:2.5px solid transparent;padding:8px 13px;font-family:inherit;font-size:13px;color:var(–muted);cursor:pointer;white-space:nowrap;margin-bottom:-1px;transition:all .2s;}
.tab.active{color:var(–rose);border-bottom-color:var(–rose);}
.tp{display:none;}
.tp.active{display:block;}

/* RITUAL STEPS */
.rstep{display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(–border);}
.rstep:last-child{border-bottom:none;}
.rcheck{width:24px;height:24px;border-radius:50%;border:2px solid var(–border);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;margin-top:2px;font-size:12px;transition:all .2s;}
.rcheck.done{color:#fff;}

/* BREATHING */
@keyframes breathe{0%,100%{transform:scale(1);opacity:.75}50%{transform:scale(1.28);opacity:1}}
@keyframes breathe-nadi{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
.orb{width:110px;height:110px;border-radius:50%;margin:18px auto;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;text-align:center;line-height:1.4;font-family:Georgia,serif;}
.orb.go{animation:breathe 4s ease-in-out infinite;}
.orb.nadi{animation:breathe-nadi 8s ease-in-out infinite;}

/* MANTRA RING */
.mring{width:160px;height:160px;margin:0 auto 16px;position:relative;}
.mring svg{transform:rotate(-90deg);}
.ring-bg{fill:none;stroke:var(–rose-light);stroke-width:8;}
.ring-p{fill:none;stroke:var(–rose);stroke-width:8;stroke-linecap:round;transition:stroke-dashoffset .4s;}
.mring-inner{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;}

/* DAY GRID */
.daygrid{display:flex;flex-wrap:wrap;gap:5px;}
.dd{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer;border:1px solid transparent;transition:all .15s;font-family:inherit;}
.dd:hover{transform:scale(1.1);}

/* MOON ROW */
.moonrow{display:flex;justify-content:space-between;align-items:flex-end;}
.mphase{text-align:center;cursor:pointer;}
.mphase .me{font-size:18px;line-height:1;display:block;}
.mphase .md{width:4px;height:4px;border-radius:50%;background:#d4a0f0;margin:4px auto 0;display:none;}
.mphase.cur .me{font-size:28px;}
.mphase.cur .md{display:block;}

/* WHEEL SVG */
#wsvg{width:100%;max-width:320px;display:block;margin:0 auto 14px;}
.wseg{cursor:pointer;transition:opacity .2s;}
.wseg:hover{opacity:.82;}

/* LOG ENTRY */
.logentry{border-left:3px solid var(–rose);padding:10px 14px;margin-bottom:10px;background:rgba(255,255,255,0.75);border-radius:0 10px 10px 0;}

/* INSIGHT ROW */
.irow{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(–border);}
.irow:last-child{border-bottom:none;}
.iicon{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;}

/* TOAST */
#toast{position:fixed;bottom:calc(24px + env(safe-area-inset-bottom));left:50%;transform:translateX(-50%) translateY(80px);background:var(–rose);color:#fff;border-radius:22px;padding:10px 24px;font-size:13px;z-index:999;transition:transform .3s;pointer-events:none;white-space:nowrap;box-shadow:0 4px 16px rgba(194,24,91,.3);}
#toast.show{transform:translateX(-50%) translateY(0);}

/* MODAL */
.moverlay{display:none;position:fixed;inset:0;background:rgba(26,10,46,.65);z-index:200;align-items:flex-end;justify-content:center;padding:0;}
.moverlay.open{display:flex;}
.mbox{background:#fff9f5;border-radius:24px 24px 0 0;padding:28px 22px calc(28px + env(safe-area-inset-bottom));width:100%;max-height:85vh;overflow-y:auto;position:relative;}
.mclose{position:absolute;top:16px;right:16px;background:rgba(0,0,0,.05);border:none;width:32px;height:32px;border-radius:50%;font-size:18px;color:var(–muted);cursor:pointer;display:flex;align-items:center;justify-content:center;}

/* HERO */
.hero{text-align:center;padding:12px 0 24px;}
.hero .sym-big{font-size:50px;display:block;margin-bottom:10px;}
.hero h1{color:#7b1f4e;margin-bottom:4px;}
.hero .sub{font-size:11px;color:var(–muted);letter-spacing:2.5px;text-transform:uppercase;}

/* AFFIRMATION */
.aff-card{border-radius:16px;padding:22px;text-align:center;margin-bottom:14px;color:#fff;}
.aff-q{font-size:15px;font-style:italic;line-height:1.85;}
.aff-attr{font-size:10px;opacity:.75;margin-top:10px;letter-spacing:1px;text-transform:uppercase;}

/* RANGE */
input[type=range]{-webkit-appearance:none;height:4px;border-radius:4px;background:var(–rose-light);border:none;padding:0;}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:var(–rose);cursor:pointer;border:2px solid #fff;box-shadow:0 1px 6px rgba(194,24,91,.3);}

/* PROGRESS BAR */
.pbar{background:#f5f5f5;border-radius:6px;height:5px;overflow:hidden;}
.pfill{height:5px;border-radius:6px;transition:width .3s;}

/* MOOD TRACKER */
.moodrow{display:flex;justify-content:space-around;margin:10px 0;}
.moodopt{display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;padding:8px 6px;border-radius:12px;transition:all .2s;border:1.5px solid transparent;}
.moodopt.sel{background:var(–rose-light);border-color:var(–rose);}
.moodopt .emoji{font-size:24px;}
.moodopt .lbl{font-size:10px;color:var(–muted);}
.moodopt.sel .lbl{color:var(–rose);}

/* DREAM SYMBOLS */
.dsym{display:inline-block;border:1px solid var(–border);border-radius:20px;padding:5px 12px;font-size:12px;cursor:pointer;background:transparent;color:var(–muted);font-family:inherit;transition:all .15s;margin:3px;}
.dsym.on{background:var(–plum-light);border-color:var(–plum);color:var(–plum);}

/* BODY MAP */
.bodymap-row{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0;}
.bodypart{border:1px solid var(–border);border-radius:20px;padding:5px 12px;font-size:12px;cursor:pointer;background:transparent;color:var(–muted);font-family:inherit;transition:all .15s;}
.bodypart.on{background:#fff3e0;border-color:var(–orange);color:var(–orange);}

/* GRATITUDE */
.grat-item{display:flex;gap:10px;align-items:center;margin-bottom:8px;}
.grat-num{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;flex-shrink:0;}

/* LOADING */
@keyframes spin{to{transform:rotate(360deg)}}
.loading::after{content:‘✦’;display:inline-block;animation:spin 1.2s linear infinite;margin-left:6px;}
@keyframes ldots{0%{content:’.’}33%{content:’..’}66%{content:’…’}}
.ldots::after{content:’…’;animation:ldots 1.2s infinite;}

/* DIVIDER */
hr{border:none;border-top:1px solid var(–border);margin:16px 0;}

/* SCROLL */
::-webkit-scrollbar{width:3px;}
::-webkit-scrollbar-thumb{background:var(–rose-light);border-radius:3px;}
</style>

</head>
<body>

<nav>
  <span class="logo">✦ Sacred Cycle</span>
  <button class="nb active" onclick="go('home')">Altar</button>
  <button class="nb" onclick="go('tracker')">Cycle</button>
  <button class="nb" onclick="go('practices')">Practices</button>
  <button class="nb" onclick="go('rituals')">Rituals</button>
  <button class="nb" onclick="go('journal')">Journal</button>
  <button class="nb" onclick="go('breathwork')">Breathwork</button>
  <button class="nb" onclick="go('oracle')">Oracle</button>
  <button class="nb" onclick="go('insights')">Insights</button>
</nav>

<div id="toast"></div>

<div class="moverlay" id="modal"><div class="mbox"><button class="mclose" onclick="closeModal()">✕</button><div id="modal-body"></div></div></div>

<!-- ===== HOME ===== -->

<div class="screen active" id="screen-home">
  <div class="hero">
    <span class="sym-big">✦</span>
    <h1>Sacred Cycle</h1>
    <p class="sub">Your Tantric Menstrual Journal</p>
  </div>

  <div class="card card-gradient" id="h-phase-card">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;">
      <div>
        <p class="label-sm" id="h-day-lbl">Today — Day 1</p>
        <h2 id="h-phase-name" style="margin-bottom:6px;"></h2>
        <p class="muted" id="h-goddess" style="font-size:13px;margin-bottom:10px;"></p>
        <div id="h-tags"></div>
      </div>
      <div id="h-circle" style="width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="color:#fff;font-size:11px;font-weight:600;text-align:center;line-height:1.4;" id="h-circle-txt">Day 1</span>
      </div>
    </div>
    <p class="italic" id="h-wisdom" style="margin-top:14px;font-size:14px;line-height:1.85;color:#5a3048;"></p>
  </div>

  <div class="card card-moon">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
      <span id="h-moon-e" style="font-size:36px;"></span>
      <div style="flex:1;">
        <p class="label-sm" style="color:#d8a4ef;margin-bottom:2px;">Moon Phase</p>
        <p style="font-size:17px;font-weight:400;" id="h-moon-name"></p>
      </div>
      <span class="tag tag-moon" id="h-moon-energy"></span>
    </div>
    <p style="font-size:13px;line-height:1.75;font-style:italic;color:#d8c4e8;" id="h-moon-teach"></p>
  </div>

  <div class="aff-card" id="h-aff-card">
    <p class="aff-q" id="h-aff"></p>
    <p class="aff-attr" id="h-mantra"></p>
  </div>

  <div class="g2" style="margin-bottom:14px;">
    <div class="stat"><div class="stat-n" id="s-day">1</div><div class="stat-l">Cycle Day</div></div>
    <div class="stat"><div class="stat-n" id="s-phase-day">1</div><div class="stat-l">Phase Day</div></div>
  </div>

  <div class="g2" style="margin-bottom:14px;">
    <button class="card" style="cursor:pointer;text-align:center;margin-bottom:0;" onclick="go('practices')">
      <div style="font-size:28px;margin-bottom:6px;">🌸</div>
      <p style="font-size:13px;font-weight:600;" id="h-prac-lbl">Today's Practices</p>
      <p class="muted" style="font-size:12px;">Tap to begin</p>
    </button>
    <button class="card" style="cursor:pointer;text-align:center;margin-bottom:0;" onclick="go('journal')">
      <div style="font-size:28px;margin-bottom:6px;">📿</div>
      <p style="font-size:13px;font-weight:600;">Sacred Journal</p>
      <p class="muted" style="font-size:12px;">Write your wisdom</p>
    </button>
  </div>

  <div class="card card-gold">
    <h4>✦ Today's Transmission</h4>
    <p class="muted" style="font-size:13px;margin-bottom:14px;">Personalised Vedic wisdom channeled from your phase goddess.</p>
    <button class="btn btn-gold btn-full" onclick="go('oracle');fetchDaily()">Receive Sacred Transmission ✦</button>
  </div>

  <div class="card">
    <h4>Quick Daily Log</h4>
    <p class="label-sm" style="margin-bottom:8px;">How are you feeling today?</p>
    <div id="h-syms" style="margin-bottom:12px;">
      <span class="sym" onclick="this.classList.toggle('on')">Cramps</span>
      <span class="sym" onclick="this.classList.toggle('on')">Bloating</span>
      <span class="sym" onclick="this.classList.toggle('on')">Tender</span>
      <span class="sym" onclick="this.classList.toggle('on')">Energized</span>
      <span class="sym" onclick="this.classList.toggle('on')">Creative</span>
      <span class="sym" onclick="this.classList.toggle('on')">Emotional</span>
      <span class="sym" onclick="this.classList.toggle('on')">Intuitive</span>
      <span class="sym" onclick="this.classList.toggle('on')">Grounded</span>
      <span class="sym" onclick="this.classList.toggle('on')">Magnetic</span>
      <span class="sym" onclick="this.classList.toggle('on')">Dreamy</span>
      <span class="sym" onclick="this.classList.toggle('on')">Restless</span>
      <span class="sym" onclick="this.classList.toggle('on')">Scattered</span>
    </div>
    <label>Energy — <span id="h-ev">5</span>/10</label>
    <input type="range" min="1" max="10" value="5" id="h-e" oninput="document.getElementById('h-ev').textContent=this.value" style="margin-bottom:12px;">
    <button class="btn btn-rose btn-sm" id="h-log-btn" onclick="saveQuickLog()">Save to Log ✦</button>
  </div>
</div>

<!-- ===== TRACKER ===== -->

<div class="screen" id="screen-tracker">
  <h2 id="tr-title">My Sacred Cycle</h2>
  <div class="card">
    <div class="field">
      <label>Last bleed started</label>
      <input type="date" id="tr-start" onchange="updateCycle()">
    </div>
    <label>Cycle length — <span id="tr-len-lbl">28</span> days</label>
    <input type="range" min="21" max="35" value="28" id="tr-len" oninput="document.getElementById('tr-len-lbl').textContent=this.value;updateCycle()">
  </div>

  <div class="card">
    <h4>Tap any day</h4>
    <div class="daygrid" id="daygrid" style="margin-bottom:10px;"></div>
    <div id="day-info" style="display:none;padding-top:12px;border-top:1px solid var(--border);margin-top:10px;">
      <h4 id="di-title"></h4>
      <p id="di-desc" class="muted" style="font-size:13px;margin-top:4px;"></p>
    </div>
  </div>

  <div class="card">
    <h4 style="margin-bottom:14px;">Phase Wheel</h4>
    <svg id="wsvg" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
      <circle cx="160" cy="160" r="155" fill="#fff9f5" stroke="#f0d6e0" stroke-width="1"/>
      <g id="wsegs"></g>
      <circle cx="160" cy="160" r="60" fill="#fff9f5" stroke="#f0d6e0" stroke-width="1"/>
      <text x="160" y="156" text-anchor="middle" font-family="Georgia" font-size="11" fill="#8d4e6c" id="w-cp">My Cycle</text>
      <text x="160" y="172" text-anchor="middle" font-family="Georgia" font-size="10" fill="#c9a0c0" id="w-cd"></text>
    </svg>
    <div class="g4" id="w-legend"></div>
  </div>

  <div class="card card-moon">
    <h4 style="margin-bottom:12px;color:#f9e4f5;">Lunar Calendar</h4>
    <div class="moonrow" id="moonrow"></div>
    <p style="font-size:13px;font-style:italic;color:#d8c4e8;margin-top:14px;" id="moon-detail"></p>
  </div>

  <div class="card">
    <h4>Upcoming Phases</h4>
    <div id="upcoming"></div>
  </div>
</div>

<!-- ===== PRACTICES ===== -->

<div class="screen" id="screen-practices">
  <h2 id="pr-title">Sacred Practices</h2>
  <div class="tabs">
    <button class="tab active" onclick="ptab('cur',this)">Current Phase</button>
    <button class="tab" onclick="ptab('all',this)">All Phases</button>
    <button class="tab" onclick="ptab('blood',this)">Blood Arts</button>
    <button class="tab" onclick="ptab('tantric',this)">Tantric</button>
  </div>
  <div class="tp active" id="pt-cur">
    <div class="card card-gold" id="pr-intro"><p id="pr-intro-txt" style="font-size:14px;font-style:italic;line-height:1.85;color:#5a3048;"></p></div>
    <div id="pr-list"></div>
  </div>
  <div class="tp" id="pt-all"><div id="pr-all"></div></div>
  <div class="tp" id="pt-blood">
    <div class="card" style="border-color:var(--rose);">
      <h4 style="color:var(--rose);">✦ Sacred Blood Arts</h4>
      <p class="muted" style="font-size:13px;line-height:1.75;">In Tantra, menstrual blood is Raktam — Shakti's direct manifestation, sacred fluid of life, and healing medicine. These practices honour this essence.</p>
    </div>
    <div id="pr-blood"></div>
  </div>
  <div class="tp" id="pt-tantric">
    <div class="card" style="border-color:var(--plum);">
      <h4 style="color:var(--plum);">✦ Advanced Tantric Practices</h4>
      <p class="muted" style="font-size:13px;line-height:1.75;">Practices preserved in the ancient Tantric lineages. Approach with reverence, preparation, and pure intention. For experienced practitioners.</p>
    </div>
    <div id="pr-tant"></div>
  </div>
</div>

<!-- ===== RITUALS ===== -->

<div class="screen" id="screen-rituals">
  <h2>Sacred Rituals</h2>
  <p class="muted italic" style="margin-bottom:16px;font-size:13px;">Complete step-by-step guided rituals. Tick each step as you complete it.</p>
  <div id="ritual-list"></div>
</div>

<!-- ===== JOURNAL ===== -->

<div class="screen" id="screen-journal">
  <h2>Sacred Journal</h2>
  <div class="tabs">
    <button class="tab active" onclick="jtab('write',this)">Write</button>
    <button class="tab" onclick="jtab('dream',this)">Dream Log</button>
    <button class="tab" onclick="jtab('gratitude',this)">Gratitude</button>
    <button class="tab" onclick="jtab('shadow',this)">Shadow Work</button>
    <button class="tab" onclick="jtab('body',this)">Body Wisdom</button>
    <button class="tab" onclick="jtab('entries',this)">Past Entries</button>
    <button class="tab" onclick="jtab('patterns',this)">Patterns</button>
  </div>

  <!-- WRITE -->

  <div class="tp active" id="jt-write">
    <div class="card card-gradient" id="j-banner">
      <p class="label-sm" id="j-phase-lbl"></p>
      <p style="font-size:14px;font-style:italic;margin-top:4px;" id="j-aff"></p>
    </div>
    <div class="card">
      <label>Choose a sacred prompt</label>
      <div id="j-prompts"></div>
      <button class="prbtn" onclick="selPrompt(this,'')">✦ Free writing — let the goddess move through me</button>
    </div>
    <div class="card">
      <div id="j-prompt-disp" style="display:none;margin-bottom:10px;padding:10px;background:var(--rose-light);border-radius:8px;">
        <p style="font-size:13px;font-style:italic;color:var(--rose);" id="j-prompt-txt"></p>
      </div>
      <label>Your sacred writing</label>
      <textarea id="j-text" rows="8" placeholder="Begin here… Let your blood speak through your pen. Let the goddess move through your words. There is no wrong way to write in this sacred space."></textarea>
      <div class="btn-row">
        <button class="btn btn-rose btn-sm" id="j-save-btn" onclick="saveEntry()">Save ✦</button>
        <button class="btn btn-ghost btn-sm" style="border-color:var(--rose);color:var(--rose);" onclick="j2oracle()">Ask Oracle ↗</button>
        <button class="btn btn-gold btn-sm" onclick="aiExpandEntry()">AI Deepen ✦</button>
      </div>
    </div>
    <div class="card">
      <h4>Today's Symptoms &amp; Feelings</h4>
      <div id="j-syms" style="margin-bottom:12px;">
        <span class="sym" onclick="this.classList.toggle('on')">Cramps</span>
        <span class="sym" onclick="this.classList.toggle('on')">Bloating</span>
        <span class="sym" onclick="this.classList.toggle('on')">Headache</span>
        <span class="sym" onclick="this.classList.toggle('on')">Breast tenderness</span>
        <span class="sym" onclick="this.classList.toggle('on')">Fatigue</span>
        <span class="sym" onclick="this.classList.toggle('on')">Energized</span>
        <span class="sym" onclick="this.classList.toggle('on')">Creative surge</span>
        <span class="sym" onclick="this.classList.toggle('on')">Emotional</span>
        <span class="sym" onclick="this.classList.toggle('on')">Intuitive</span>
        <span class="sym" onclick="this.classList.toggle('on')">Grounded</span>
        <span class="sym" onclick="this.classList.toggle('on')">Scattered</span>
        <span class="sym" onclick="this.classList.toggle('on')">Magnetic</span>
        <span class="sym" onclick="this.classList.toggle('on')">Anxious</span>
        <span class="sym" onclick="this.classList.toggle('on')">Sensual</span>
        <span class="sym" onclick="this.classList.toggle('on')">Visionary</span>
        <span class="sym" onclick="this.classList.toggle('on')">Restless</span>
        <span class="sym" onclick="this.classList.toggle('on')">Dreamy</span>
      </div>
      <div class="field">
        <label>Flow (if bleeding)</label>
        <select id="j-flow"><option value="">Select...</option><option>Spotting</option><option>Light</option><option>Medium</option><option>Heavy</option><option>Very heavy</option><option>Not bleeding</option></select>
      </div>
      <div class="field">
        <label>Flow colour (sacred observation)</label>
        <select id="j-flow-col"><option value="">Select...</option><option>Bright red — Raktam vitality</option><option>Deep crimson — Mahashakti power</option><option>Dark burgundy — ancestral depth</option><option>Pink — Shonita tenderness</option><option>Brown — earth essence release</option><option>Clotted — stories releasing</option></select>
      </div>
      <label>Energy — <span id="j-ev">5</span>/10</label>
      <input type="range" min="1" max="10" value="5" id="j-e" oninput="document.getElementById('j-ev').textContent=this.value">
    </div>
    <div class="card">
      <label>Mood check-in</label>
      <div class="moodrow" id="j-mood">
        <div class="moodopt" onclick="selMood(this,'devastated')"><div class="emoji">😞</div><div class="lbl">Heavy</div></div>
        <div class="moodopt" onclick="selMood(this,'sad')"><div class="emoji">🥺</div><div class="lbl">Tender</div></div>
        <div class="moodopt" onclick="selMood(this,'okay')"><div class="emoji">🌿</div><div class="lbl">Still</div></div>
        <div class="moodopt" onclick="selMood(this,'good')"><div class="emoji">🌸</div><div class="lbl">Blooming</div></div>
        <div class="moodopt" onclick="selMood(this,'radiant')"><div class="emoji">🌟</div><div class="lbl">Radiant</div></div>
      </div>
    </div>
  </div>

  <!-- DREAM LOG -->

  <div class="tp" id="jt-dream">
    <div class="card" style="border-color:var(--plum);">
      <h4 style="color:var(--plum);">🌙 Dream Wisdom Log</h4>
      <p class="muted" style="font-size:13px;line-height:1.75;margin-bottom:0;">Your blood speaks through your dreams during menstruation. Record what arises — symbols, feelings, colours, beings, and waters. Over cycles, sacred patterns reveal themselves.</p>
    </div>
    <div class="card">
      <label>Dream journal — describe what you experienced</label>
      <textarea id="dr-text" rows="7" placeholder="I dreamed of… The feeling was… I saw… There was a figure / place / water / fire… The colour was… I felt…"></textarea>
      <div class="field" style="margin-top:12px;">
        <label>Sacred symbols that appeared</label>
        <div id="dr-syms">
          <span class="dsym" onclick="this.classList.toggle('on')">🌊 Water</span>
          <span class="dsym" onclick="this.classList.toggle('on')">🔴 Red liquid</span>
          <span class="dsym" onclick="this.classList.toggle('on')">🌕 Moon</span>
          <span class="dsym" onclick="this.classList.toggle('on')">🐍 Serpent</span>
          <span class="dsym" onclick="this.classList.toggle('on')">🌹 Roses</span>
          <span class="dsym" onclick="this.classList.toggle('on')">🔥 Fire</span>
          <span class="dsym" onclick="this.classList.toggle('on')">👁️ Eye / Vision</span>
          <span class="dsym" onclick="this.classList.toggle('on')">🗝️ Key / Door</span>
          <span class="dsym" onclick="this.classList.toggle('on')">🌀 Spiral</span>
          <span class="dsym" onclick="this.classList.toggle('on')">👸 Goddess / Woman</span>
          <span class="dsym" onclick="this.classList.toggle('on')">🌳 Tree / Roots</span>
          <span class="dsym" onclick="this.classList.toggle('on')">💀 Skull / Death</span>
          <span class="dsym" onclick="this.classList.toggle('on')">🌙 Cave / Darkness</span>
          <span class="dsym" onclick="this.classList.toggle('on')">✨ Light / Stars</span>
          <span class="dsym" onclick="this.classList.toggle('on')">👁️‍🗨️ Ancestor</span>
          <span class="dsym" onclick="this.classList.toggle('on')">🦋 Transformation</span>
        </div>
      </div>
      <div class="field">
        <label>Overall dream feeling</label>
        <select id="dr-feel"><option value="">Select...</option><option>Sacred / Numinous</option><option>Dark / Shadow</option><option>Healing / Gentle</option><option>Prophetic / Vivid</option><option>Confused / Scattered</option><option>Ecstatic / Blissful</option><option>Frightening / Intense</option><option>Ancestral / Ancient</option></select>
      </div>
      <div class="btn-row">
        <button class="btn btn-rose btn-sm" onclick="saveDream()">Save Dream ✦</button>
        <button class="btn btn-gold btn-sm" onclick="interpretDream()">Oracle Interpretation ✦</button>
      </div>
    </div>
    <div id="dr-interp" style="display:none;" class="card" style="border-color:var(--plum);"></div>
    <div id="dr-entries"></div>
  </div>

  <!-- GRATITUDE -->

  <div class="tp" id="jt-gratitude">
    <div class="card" style="border-color:var(--gold);">
      <h4 style="color:var(--gold);">🌸 Sacred Blood Gratitude</h4>
      <p class="muted" style="font-size:13px;line-height:1.75;margin-bottom:0;">Daily gratitude for your sacred blood transforms shame into sanctity. Write what your blood has given you — its creative potency, healing essence, wisdom, and life force.</p>
    </div>
    <div class="card">
      <p class="label-sm" style="margin-bottom:12px;">Complete these sacred gratitude statements</p>
      <div class="grat-item">
        <div class="grat-num" id="g1-n" style="background:var(--rose-light);color:var(--rose);">1</div>
        <input type="text" id="g1" placeholder="Today I thank my blood for its…" style="margin-bottom:0;">
      </div>
      <div class="grat-item">
        <div class="grat-num" id="g2-n" style="background:var(--plum-light);color:var(--plum);">2</div>
        <input type="text" id="g2" placeholder="My cycle has taught me…" style="margin-bottom:0;">
      </div>
      <div class="grat-item">
        <div class="grat-num" id="g3-n" style="background:var(--gold-light);color:var(--gold);">3</div>
        <input type="text" id="g3" placeholder="I honour my body for…" style="margin-bottom:0;">
      </div>
      <div class="grat-item">
        <div class="grat-num" id="g4-n" style="background:var(--navy-light);color:var(--navy);">4</div>
        <input type="text" id="g4" placeholder="The goddess in me is grateful for…" style="margin-bottom:0;">
      </div>
      <div class="grat-item">
        <div class="grat-num" id="g5-n" style="background:#fce4ec;color:#c2185b;">5</div>
        <input type="text" id="g5" placeholder="My sacred blood wisdom says…" style="margin-bottom:0;">
      </div>
      <div class="btn-row" style="margin-top:12px;">
        <button class="btn btn-gold btn-sm" onclick="saveGratitude()">Save Gratitude ✦</button>
        <button class="btn btn-ghost btn-sm" style="border-color:var(--gold);color:var(--gold);" onclick="aiGratitudeExpansion()">Deepen with AI ✦</button>
      </div>
    </div>
    <div id="g-expand" style="display:none;" class="card card-gold"></div>
    <div id="g-entries"></div>
  </div>

  <!-- SHADOW WORK -->

  <div class="tp" id="jt-shadow">
    <div class="card" style="border-color:#1a0a2e;background:linear-gradient(135deg,#1a0a2e,#2d1b4e);color:#f9e4f5;">
      <h4 style="color:#d8a4ef;">🌑 Shadow Work — Kali's Temple</h4>
      <p style="font-size:13px;line-height:1.75;color:#d8c4e8;margin-bottom:0;">The Luteal and Menstrual phases thin the veil to your shadow self. Parvati and Kali invite you into the dark — not to be swallowed by it, but to integrate it with fierce love. What you resist persists. What you embrace transforms.</p>
    </div>
    <div class="card">
      <label>What is the shadow pattern showing up this cycle?</label>
      <textarea id="sh-pattern" rows="4" placeholder="The feeling / thought / behaviour I keep meeting is…"></textarea>
    </div>
    <div class="card">
      <label>Let your shadow speak — write from its voice without censoring</label>
      <textarea id="sh-shadow" rows="5" placeholder="Shadow voice: I am the part of you that… I feel… I want… I am afraid of… I have always believed…"></textarea>
    </div>
    <div class="card">
      <label>Now respond with goddess wisdom — fierce, loving, integrating</label>
      <textarea id="sh-goddess" rows="5" placeholder="Goddess response: I see you. I honour you. You have been protecting me by… The truth is… I choose to integrate you by…"></textarea>
    </div>
    <div class="card">
      <label>Integration vow</label>
      <textarea id="sh-vow" rows="3" placeholder="I commit to integrating this shadow by… I release the need to… I welcome the gift of…"></textarea>
      <div class="btn-row">
        <button class="btn btn-rose btn-sm" onclick="saveShadow()">Save Shadow Work ✦</button>
        <button class="btn btn-gold btn-sm" onclick="aiShadow()">Kali Speaks — AI Guidance ✦</button>
      </div>
    </div>
    <div id="sh-ai" style="display:none;" class="card" style="background:linear-gradient(135deg,#1a0a2e,#2d1b4e);color:#f9e4f5;"></div>
    <div id="sh-entries"></div>
  </div>

  <!-- BODY WISDOM -->

  <div class="tp" id="jt-body">
    <div class="card" style="border-color:var(--orange);">
      <h4 style="color:var(--orange);">🌺 Body Wisdom Map</h4>
      <p class="muted" style="font-size:13px;line-height:1.75;margin-bottom:0;">Your body speaks the language of the soul. Pain, sensation, and feeling in specific areas carry symbolic and energetic messages. Map your body's wisdom here.</p>
    </div>
    <div class="card">
      <label>Where are you holding sensation or tension?</label>
      <div class="bodymap-row" id="bm-areas">
        <button class="bodypart" onclick="this.classList.toggle('on')">Crown / Head</button>
        <button class="bodypart" onclick="this.classList.toggle('on')">Throat</button>
        <button class="bodypart" onclick="this.classList.toggle('on')">Heart / Chest</button>
        <button class="bodypart" onclick="this.classList.toggle('on')">Solar plexus</button>
        <button class="bodypart" onclick="this.classList.toggle('on')">Womb / Pelvis</button>
        <button class="bodypart" onclick="this.classList.toggle('on')">Lower back</button>
        <button class="bodypart" onclick="this.classList.toggle('on')">Hips</button>
        <button class="bodypart" onclick="this.classList.toggle('on')">Legs / Feet</button>
        <button class="bodypart" onclick="this.classList.toggle('on')">Shoulders</button>
        <button class="bodypart" onclick="this.classList.toggle('on')">Jaw / Teeth</button>
        <button class="bodypart" onclick="this.classList.toggle('on')">Breasts</button>
        <button class="bodypart" onclick="this.classList.toggle('on')">Whole body</button>
      </div>
    </div>
    <div class="card">
      <label>Describe what you feel and where</label>
      <textarea id="bm-feel" rows="4" placeholder="In my womb I feel… In my heart I sense… My body is asking me to…"></textarea>
    </div>
    <div class="card">
      <label>What emotion might this sensation be carrying?</label>
      <textarea id="bm-emotion" rows="3" placeholder="This physical sensation might be holding… The emotion here feels like… If this part of my body could speak it would say…"></textarea>
    </div>
    <div class="card">
      <label>What does your body need right now?</label>
      <textarea id="bm-need" rows="3" placeholder="My body is asking for… It needs me to… The most loving thing I can offer it today is…"></textarea>
    </div>
    <div class="btn-row" style="padding:0 0 4px;">
      <button class="btn btn-rose btn-sm" onclick="saveBodyWisdom()">Save Body Wisdom ✦</button>
      <button class="btn btn-gold btn-sm" onclick="aiBodyWisdom()">Receive Body Oracle ✦</button>
    </div>
    <div id="bm-ai" style="display:none;margin-top:14px;" class="card card-gold"></div>
    <div id="bm-entries" style="margin-top:14px;"></div>
  </div>

  <!-- PAST ENTRIES -->

  <div class="tp" id="jt-entries">
    <div id="j-entries-list">
      <p class="muted italic center" style="padding:28px;">Your past entries will appear here.</p>
    </div>
  </div>

  <!-- PATTERNS -->

  <div class="tp" id="jt-patterns">
    <div class="card card-gold">
      <h4>✦ AI Pattern Reading</h4>
      <p class="muted" style="font-size:13px;margin-bottom:14px;">After several entries, the Oracle can reveal patterns in your energy, emotions, and spiritual experience across your cycles.</p>
      <button class="btn btn-gold btn-full" onclick="analysePatterns()">Analyse My Sacred Patterns ✦</button>
    </div>
    <div id="j-patterns-result"></div>
    <div class="card">
      <h4>Daily Log History</h4>
      <div id="j-log-hist"></div>
    </div>
  </div>
</div>

<!-- ===== BREATHWORK ===== -->

<div class="screen" id="screen-breathwork">
  <h2>Sacred Breathwork</h2>
  <div class="tabs">
    <button class="tab active" onclick="btab('ojas',this)">Ojas Rising</button>
    <button class="tab" onclick="btab('nadi',this)">Nadi Shodhana</button>
    <button class="tab" onclick="btab('mantra',this)">Mantra Timer</button>
  </div>

  <!-- OJAS -->

  <div class="tp active" id="bt-ojas">
    <div class="card" style="border-color:var(--rose);">
      <h4 style="color:var(--rose);">Ojas Urdhva Gamana</h4>
      <p style="font-size:13px;line-height:1.8;color:#5a3048;margin-bottom:14px;">The Upward Movement of Vital Essence. Your menstrual blood carries concentrated ojas — vital life-force. This practice consciously redirects it upward through the sushumna nadi to nourish the brain and spiritual centres.</p>
      <div style="background:var(--rose-light);border-radius:10px;padding:12px;margin-bottom:14px;border-left:3px solid var(--rose);">
        <p style="font-size:12px;font-style:italic;color:#5a3048;line-height:1.75;margin:0;">"The menstrual blood carries ojas. When this ojas flows downward and is released, the body must constantly rebuild. When redirected upward, it nourishes the brain directly, awakens the pineal and pituitary glands, and creates a constant state of heightened awareness."</p>
      </div>
      <button class="btn btn-rose btn-full" onclick="startOjas()" id="ojas-start-btn">Begin Ojas Practice ✦</button>
    </div>
    <div class="card" id="ojas-card" style="display:none;text-align:center;">
      <div class="orb go" id="ojas-orb" style="background:linear-gradient(135deg,#c2185b,#7b1fa2);">
        <span id="ojas-orb-txt" style="white-space:pre-line;"></span>
      </div>
      <p style="font-size:13px;font-style:italic;color:var(--rose);margin-bottom:14px;" id="ojas-instr"></p>
      <div style="margin-bottom:14px;">
        <span style="font-size:36px;font-weight:300;color:var(--rose);" id="ojas-count">1</span>
        <span class="muted"> / 21 breaths</span>
      </div>
      <div class="pbar" style="margin-bottom:16px;"><div class="pfill" id="ojas-prog" style="background:var(--rose);width:0%;"></div></div>
      <div class="btn-row" style="justify-content:center;">
        <button class="btn btn-ghost btn-sm" style="border-color:var(--rose);color:var(--rose);" onclick="pauseOjas()" id="ojas-pause-btn">Pause</button>
        <button class="btn btn-ghost btn-sm" style="border-color:var(--muted);color:var(--muted);" onclick="stopOjas()">End</button>
      </div>
    </div>
    <div class="card">
      <h4>Step-by-Step Guide</h4>
      <div class="rstep"><div class="rcheck done" style="background:var(--rose);border-color:var(--rose);">1</div><p class="step-text">Lie down on your back in a clean, quiet, sacred space.</p></div>
      <div class="rstep"><div class="rcheck done" style="background:var(--rose);border-color:var(--rose);">2</div><p class="step-text">Left hand on your womb. Right hand on your heart. Close your eyes.</p></div>
      <div class="rstep"><div class="rcheck done" style="background:var(--rose);border-color:var(--rose);">3</div><p class="step-text">Speak: "I recognise the sacred energy within me. This is liquid light. This is divine nectar."</p></div>
      <div class="rstep"><div class="rcheck done" style="background:var(--rose);border-color:var(--rose);">4</div><p class="step-text">Visualise your body as a hollow tube of golden light from spine base to crown.</p></div>
      <div class="rstep"><div class="rcheck done" style="background:var(--rose);border-color:var(--rose);">5</div><p class="step-text">Chant internally: Om Hreem Shreem. Begin the 21 breaths using the timer above.</p></div>
      <div class="rstep"><div class="rcheck done" style="background:var(--rose);border-color:var(--rose);">6</div><p class="step-text">After 21 breaths: Yoni Mudra (interlace fingers, index fingers down) at womb. Hold 3 minutes.</p></div>
      <div class="rstep"><div class="rcheck done" style="background:var(--rose);border-color:var(--rose);">7</div><p class="step-text">Speak the transmutation sankalpa: "The energy that would flow downward now rises upward. I am the vessel of divine transmutation."</p></div>
    </div>
  </div>

  <!-- NADI -->

  <div class="tp" id="bt-nadi">
    <div class="card">
      <h4>Nadi Shodhana — Alternate Nostril Breathing</h4>
      <p class="muted" style="font-size:13px;margin-bottom:14px;line-height:1.75;">Purifies the sushumna nadi — the central energy channel. Practice 3–5 days before your period to prepare the channels for Ojas transmutation.</p>
      <div class="orb nadi" id="nadi-orb" style="background:linear-gradient(135deg,#7b1fa2,#1a237e);">
        <span id="nadi-orb-txt">Ready</span>
      </div>
      <p style="font-size:13px;font-style:italic;color:var(--plum);text-align:center;margin-bottom:14px;" id="nadi-instr">Set rounds and press start</p>
      <div style="text-align:center;margin-bottom:14px;">
        <span style="font-size:30px;color:var(--plum);font-weight:300;" id="nadi-cnt">0</span>
        <span class="muted"> / <span id="nadi-tgt">15</span> rounds</span>
      </div>
      <label>Rounds — <span id="nadi-tgt-lbl">15</span></label>
      <input type="range" min="5" max="30" value="15" oninput="document.getElementById('nadi-tgt').textContent=this.value;document.getElementById('nadi-tgt-lbl').textContent=this.value" style="margin-bottom:14px;">
      <div class="btn-row" style="justify-content:center;">
        <button class="btn btn-rose btn-sm" onclick="startNadi()" id="nadi-start">Begin ✦</button>
        <button class="btn btn-ghost btn-sm" style="display:none;border-color:var(--muted);color:var(--muted);" onclick="stopNadi()" id="nadi-stop">End</button>
      </div>
    </div>
  </div>

  <!-- MANTRA -->

  <div class="tp" id="bt-mantra">
    <div class="card">
      <h4>Mantra Counter — 108 Sacred Repetitions</h4>
      <p class="muted" style="font-size:13px;margin-bottom:14px;">108 is the sacred number of completion in Vedic tradition. Tap once per mantra repetition.</p>
      <div class="field">
        <label>Choose mantra</label>
        <select id="mantra-sel" onchange="updMantra()">
          <option value="Om Raktam Shakti Namah">Om Raktam Shakti Namah — Blood Power</option>
          <option value="Om Aim Hrim Klim Chamundayai Vicche">Om Aim Hrim Klim Chamundayai Vicche — Kali</option>
          <option value="Om Hreem Shreem">Om Hreem Shreem — Ojas Rising</option>
          <option value="Om Aim Saraswatyai Namah">Om Aim Saraswatyai Namah — Saraswati</option>
          <option value="Om Shreem Mahalakshmyai Namah">Om Shreem Mahalakshmyai Namah — Lakshmi</option>
          <option value="Om Hrim Parvati Devyai Namah">Om Hrim Parvati Devyai Namah — Parvati</option>
          <option value="Om Yoni Devi Namah">Om Yoni Devi Namah — Womb Goddess</option>
        </select>
      </div>
      <p style="text-align:center;font-size:17px;font-style:italic;color:var(--plum);margin-bottom:18px;" id="mantra-disp">Om Raktam Shakti Namah</p>
      <div class="mring">
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle class="ring-bg" cx="80" cy="80" r="68"/>
          <circle class="ring-p" cx="80" cy="80" r="68" stroke-dasharray="427" stroke-dashoffset="427" id="mantra-ring"/>
        </svg>
        <div class="mring-inner">
          <div id="mantra-cnt" style="font-size:36px;font-weight:300;color:var(--rose);">0</div>
          <div class="muted" style="font-size:11px;">/ 108</div>
        </div>
      </div>
      <div class="btn-row" style="justify-content:center;margin-top:8px;">
        <button class="btn btn-gold" onclick="tapMantra()" id="mantra-tap" style="font-size:16px;padding:14px 32px;">Tap — Om ✦</button>
        <button class="btn btn-ghost btn-sm" style="border-color:var(--muted);color:var(--muted);" onclick="resetMantra()">Reset</button>
      </div>
      <div id="mantra-done" style="display:none;text-align:center;margin-top:14px;">
        <p style="color:var(--rose);font-size:14px;font-style:italic;">✦ 108 mantras complete. The goddess has received your prayer. ✦</p>
      </div>
    </div>
  </div>
</div>

<!-- ===== ORACLE ===== -->

<div class="screen" id="screen-oracle">
  <div class="center" style="padding:10px 0 20px;">
    <div style="font-size:40px;margin-bottom:8px;">🔮</div>
    <h2 style="margin-bottom:4px;">The Sacred Oracle</h2>
    <p class="muted italic" style="font-size:13px;">Goddess <span id="or-goddess">Kali</span> speaks</p>
  </div>

  <div class="card card-gradient" id="or-response-card" style="min-height:110px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
      <span id="or-moon-e" style="font-size:28px;"></span>
      <div>
        <p class="label-sm" id="or-ctx"></p>
        <p style="font-size:13px;" id="or-phase-lbl"></p>
      </div>
    </div>
    <div id="or-response">
      <p class="muted italic" style="font-size:14px;">Ask the goddess anything, or receive your daily sacred transmission below.</p>
    </div>
  </div>

  <div class="card">
    <label>Ask the goddess</label>
    <textarea id="or-input" rows="3" placeholder="e.g. 'Guide me through my menstrual phase today' or 'What is Kali asking me to release?' or 'How do I begin the Ojas practice?'"></textarea>
    <div class="btn-row">
      <button class="btn btn-gold" onclick="askOracle()">Ask the Oracle ✦</button>
      <button class="btn btn-ghost btn-sm" style="border-color:var(--rose);color:var(--rose);" onclick="fetchDaily()">Daily Transmission</button>
    </div>
  </div>

  <p class="label-sm" style="margin-bottom:10px;">Quick questions</p>
  <div style="margin-bottom:14px;" id="or-quick"></div>

  <div class="card">
    <h4>Phase Mantra &amp; Wisdom</h4>
    <p style="font-size:17px;font-style:italic;margin-bottom:10px;" id="or-mantra"></p>
    <p style="font-size:14px;line-height:1.85;color:#5a3048;font-style:italic;" id="or-wisdom"></p>
  </div>

  <div class="card card-gold">
    <h4>Blood Wisdom Oracle</h4>
    <p class="muted" style="font-size:13px;margin-bottom:14px;">Your menstrual blood is Shakti's direct manifestation — receive its specific wisdom for today.</p>
    <button class="btn btn-gold btn-sm" onclick="bloodWisdom()">Receive Blood Wisdom ✦</button>
    <div id="or-blood" style="display:none;margin-top:12px;font-size:14px;line-height:1.85;color:#5a3048;font-style:italic;"></div>
  </div>
</div>

<!-- ===== INSIGHTS ===== -->

<div class="screen" id="screen-insights">
  <h2>Sacred Insights</h2>
  <div class="g2" id="ins-stats" style="margin-bottom:14px;"></div>

  <div class="card">
    <h4>Phase Energy This Cycle</h4>
    <div id="ins-phase-bars"></div>
  </div>

  <div class="card card-gold">
    <h4>✦ AI Sacred Cycle Analysis</h4>
    <p class="muted" style="font-size:13px;margin-bottom:14px;">Receive a personalised reading of your cycle energies, moon-cycle alignment, and sacred practice recommendations.</p>
    <button class="btn btn-gold btn-full" onclick="cycleAnalysis()">Generate My Cycle Reading ✦</button>
    <div id="ins-analysis" style="display:none;margin-top:14px;font-size:14px;line-height:1.85;color:#5a3048;font-style:italic;"></div>
  </div>

  <div class="card">
    <h4>Goddess Archetypes</h4>
    <div id="ins-goddesses"></div>
  </div>

  <div class="card">
    <h4>Blood Wisdom Library</h4>
    <div id="ins-blood-lib"></div>
  </div>
</div>

<script>
// =========================================================
// DATA
// =========================================================
const PHASES=[
  {name:"Menstrual",days:[1,5],color:"#c2185b",light:"#fce4ec",goddess:"Kali",element:"Water",chakra:"Root",direction:"North",mantra:"Om Raktam Shakti Namah",archetype:"The Dark Goddess — Destroyer & Liberator",wisdom:"This is your sacred descent into the cave of the self. Blood flows as Shakti's direct manifestation — Raktam, the sacred fluid of life. Rest, release, and let what no longer serves you dissolve into the fertile darkness. Kali dances in the cremation ground of your old self, clearing space for the resurrection that is coming.",affirmation:"I am safe. I am grounded. I am held by the Great Mother. My blood is sacred nectar — not waste, but divinity in liquid form.",practices:[
    {name:"Blood Gratitude Practice",icon:"🩸",desc:"Transform shame into sanctity through daily sacred gratitude for your blood.",step:"Sit with one hand on your womb. Write freely: 'Today I thank my blood for its creative potency, healing essence, wisdom carrying, and life force.' Let the words be your prayer. Even two sentences carries power. Repeat daily through your bleed."},
    {name:"Blood Dream Incubation",icon:"🌙",desc:"Set sacred intention for your blood to speak through your dreams.",step:"Before sleep, light a candle if safe. Place hands on womb and speak aloud: 'Great Mother, show me the wisdom in my blood tonight.' Visualise drinking your blood as golden wisdom nectar. Keep your journal bedside. Record any red liquids, sacred waters, or feminine figures that appear."},
    {name:"Earth Offering",icon:"🌱",desc:"Return your sacred blood to the earth as an ancient act of feminine devotion.",step:"Collect blood on natural cotton. Go to your garden or potted plant. Dig a small, intentional hole. Lower the offering: 'Mother Earth, receive my essence. May your fertility increase. May all life flourish through this gift.' Cover with soil, press palms to earth in gratitude."},
    {name:"Hydromancy Divination",icon:"💧",desc:"Use menstrual blood as the sacred medium for water scrying and intuitive guidance.",step:"Fill a dark bowl with purified water. Light a candle. Formulate one clear question (not yes/no). Add one drop of blood to the centre. Cover with dark cloth for exactly 3 minutes. Uncover. Observe shapes, movements, and colours without judgment. Journal immediately at four levels: immediate impression, symbolic analysis, intuitive download, and life application."},
    {name:"Ojas Transmutation Breath",icon:"⬆️",desc:"Consciously redirect menstrual life-force upward to nourish the brain and spiritual centres.",step:"Lie down. Left hand on womb, right on heart. Visualise your body as a hollow tube of golden light. Chant internally: Om Hreem Shreem. 21 breaths: inhale pulling golden light from womb to crown, exhale hold it in higher centres. Complete with Yoni Mudra at womb for 3 minutes. Affirm: 'The energy that would flow downward now rises upward.'"},
  ]},
  {name:"Follicular",days:[6,13],color:"#7b1fa2",light:"#f3e5f5",goddess:"Saraswati",element:"Air",chakra:"Sacral",direction:"East",mantra:"Om Aim Saraswatyai Namah",archetype:"The Maiden — Awakening & Creation",wisdom:"Saraswati stirs in the depths of you — goddess of art, wisdom, music, and new beginnings. Your energy rises like the waxing moon, fresh and luminous with possibility. This is the time for vision, for planting the seeds of your most sacred desires. The void has ended. Creation reaches toward you.",affirmation:"My creativity flows like a sacred river. New life stirs within me. I am ready to begin. Saraswati guides my hand, my voice, my vision.",practices:[
    {name:"Blood Intention Setting",icon:"📜",desc:"Charge your deepest cycle intention with the potency of your sacred blood.",step:"Write your intention in positive present tense, first person: 'I am powerfully manifesting my sacred art studio.' Remove all vowels and repeating consonants. Place the paper beneath your menstrual cup for 24 hours. Remove and burn safely, scattering ashes to wind: 'My blood empowers this. May it manifest for highest good.'"},
    {name:"Blood Art Creation",icon:"🎨",desc:"Create sacred geometry and goddess forms using menstrual blood as paint.",step:"Collect blood in your cup. Mix 1:1 with egg white or gum arabic. Using a fine brush on black paper, paint sacred designs — Sri Yantra, lotus, goddess forms, or abstract flow patterns — with complete intention. Let dry naturally. Display in your altar space, never in your bedroom. Meditate before it monthly."},
    {name:"Sacral Chakra Charging",icon:"🧡",desc:"Direct blood energy to your creative centre to amplify imagination and desire.",step:"Sit or lie with hands on lower abdomen. Breathe deeply into your sacral space. Visualise orange light at your womb centre pulsing outward with each breath. Affirm: 'My creativity flows. My pleasure is sacred. Saraswati moves through me.' Chant your mantra 21 times. Feel the warmth of creative activation building."},
    {name:"Sigil Magic",icon:"✦",desc:"Create personal power symbols from your intentions, charged with blood potency.",step:"Write your intention. Remove vowels and repeating consonants. Place remaining letters randomly on paper, connect with intuitive lines, simplify to clean abstract design. Paint sigil with blood-binder mixture on black paper using one continuous stroke. Charge under waxing moon for 3 nights minimum. Activate by holding near red candle flame: 'By blood and fire, I activate this sigil.'"},
    {name:"Dream Seed Planting",icon:"🌱",desc:"Plant your cycle intention into your subconscious through sacred pre-sleep ritual.",step:"Write your cycle intention on paper before sleep. Fold and place under pillow. Sit with hands on heart and womb. Breathe deeply and repeat your intention as a gentle internal mantra as you drift into sleep. Keep journal beside bed to record morning visions. Seeds planted in this liminal space take root in the fertile dark."},
  ]},
  {name:"Ovulatory",days:[14,17],color:"#e65100",light:"#fff3e0",goddess:"Lakshmi",element:"Fire",chakra:"Heart",direction:"South",mantra:"Om Shreem Mahalakshmyai Namah",archetype:"The Mother — Abundance & Radiance",wisdom:"Lakshmi blesses you with her golden abundance. You are at peak radiance — magnetic, creative, overflowing with life force. The divine feminine reaches her fullest expression through you right now. Speak your truth, connect deeply, manifest boldly. The universe is conspiring to receive everything you offer.",affirmation:"I give and receive love freely. I am magnetic. My radiance attracts all that is for my highest good. Lakshmi flows through me as golden abundance.",practices:[
    {name:"Heart Chakra Blood Anointing",icon:"💚",desc:"Apply blood essence to your heart centre as sacred medicine and activation.",step:"Apply a small amount of blood to your chest centre. Massage gently clockwise with intention: 'Mahashakti fire essence, awaken my heart.' Sit in meditation for 20 minutes visualising green and gold light expanding from your heart to encompass all you love. Wipe gently after 20 minutes. Affirm: 'I give and receive love freely.'"},
    {name:"Blood Sound Practice",icon:"🔔",desc:"Charge your sacred blood with mantra vibration to amplify its power.",step:"Place your menstrual cup or pad on your altar. Sit before it in meditation. Chant each mantra 21 times clearly: 'Om Raktam Shakti Namah, Om Yoni Devi Namah, Om Purna Kriya Namah.' Between mantras, breathe and visualise golden sound waves infusing the blood with divine frequency. Complete with a moment of deep silent gratitude."},
    {name:"Blood Yantra Creation",icon:"🔱",desc:"Complete the Sri Yantra — supreme cosmic diagram — with your sacred blood.",step:"Create or print a Sri Yantra outline. Fill the downward-pointing triangles with blood-binder mixture using a fine brush. Place on your altar under your menstrual cup (nearby, not touching) and under full moonlight for 3 nights. Meditate before it asking: 'What cosmic patterns does my blood reveal?' Dispose with gratitude when the intention completes."},
    {name:"Crystal &amp; Object Charging",icon:"💎",desc:"Create deeply personalised sacred objects charged with your blood essence.",step:"Select your crystal or talisman with clear intention. Speak to it: 'I charge you with my sacred essence for [purpose].' Place one drop of blood on it. Wrap in red cloth for 24 hours. Place on your altar. Unwrap, rinse with water, hold in morning light. Carry as your empowered ally through the cycle."},
    {name:"Celestial Portal Opening",icon:"⭐",desc:"Advanced practice — opening a portal for cosmic feminine wisdom to flow through.",step:"Cast protective circle (walk clockwise, visualise blue light). Call four directions. Place Sri Yantra at centre. Anoint central Bindu with blood: 'By my sacred blood, I activate this portal.' State your purpose and boundaries clearly. Ring bell 3 times. Sit in open reception for 20 minutes. Ring bell 7 times to close. Walk counter-clockwise to release. Ground with food immediately."},
  ]},
  {name:"Luteal",days:[18,28],color:"#1a237e",light:"#e8eaf6",goddess:"Parvati",element:"Earth",chakra:"Third Eye",direction:"West",mantra:"Om Hrim Parvati Devyai Namah",archetype:"The Wise Woman — Discernment & Completion",wisdom:"Parvati in her fierce and loving wisdom asks you to complete, discern, and prepare for the sacred descent. Your veil between worlds grows thin and your intuition sharpens to a blade. Turn inward. Trust what must be released. The harvest always requires the ending of summer — and it is from that ending that the winter's wisdom grows.",affirmation:"I see clearly. I know deeply. My inner wisdom is my compass. I trust what is completing, and I honour what must end with fierce love.",practices:[
    {name:"Third Eye Blood Anointing",icon:"👁️",desc:"Apply blood to your third eye to activate deep inner vision and Parvati's sight.",step:"Collect a tiny amount of blood on your fingertip. In meditation, apply gently to the centre of your forehead. Close your eyes. Ask Parvati: 'Show me what my inner vision holds. What do I need to see?' Sit in stillness for 20 minutes. Journal immediately — do not wait. All impressions, however subtle, carry wisdom."},
    {name:"Luteal Hydromancy",icon:"🌊",desc:"Water scrying for questions of discernment, completion, and truth-telling.",step:"Prepare dark bowl, candle, journal. Formulate one question of discernment: 'What needs to complete before my next bleeding? What truth am I avoiding? What is my body telling me?' Add blood to bowl. Cover 3 minutes. Uncover and interpret at four levels: immediate impression, symbolic analysis, intuitive download, and practical application. Sacred disposal: pour at base of a plant."},
    {name:"Ancestral Sigil Work",icon:"🌳",desc:"Create a sigil for lineage healing, charged with blood as the ancestral medicine.",step:"Set up your ancestral altar. Write your lineage healing intention. Create sigil from reduced letters. Paint with blood. Sit at the altar and speak to your female ancestors: 'Through my blood I connect to you. What healing completes in me completes for our entire lineage.' Sit in open reception for 30 minutes. Journal everything without censoring."},
    {name:"Shadow Integration Journal",icon:"🌑",desc:"Invite your shadow self to speak and receive it with Parvati's fierce love.",step:"Light a candle. Write: 'My shadow speaks:' — then write freely for 10 unedited minutes from the voice of what you have been resisting, avoiding, or judging in yourself. Then write: 'My goddess wisdom responds:' — offer fierce, loving integration to this part. Complete: 'I honour and integrate all of myself. The shadow becomes my power.'"},
    {name:"Temporal Portal Meditation",icon:"⏳",desc:"Access past life or ancestral wisdom seeking to heal and complete through you.",step:"Privacy and 30+ minutes required. Cast protective circle. Enter deep meditation. Visualise a door before you. Set clear intention and boundaries: 'I ask to be shown only what is ready to heal and integrate now.' Simply observe without attachment. Close portal: 'I honour this wisdom. I integrate with grace.' Ground immediately with food, rest, and earth contact."},
  ]},
];

const MOON_PHASES=[
  {name:"New Moon",emoji:"🌑",energy:"Beginnings",teaching:"New beginnings and hidden potentials. In Tantra, when the new moon and menstruation align, it creates the powerful White Moon cycle — the cycle of the mother and creatrix. Plant your deepest seeds in this double fertile dark."},
  {name:"Waxing Crescent",emoji:"🌒",energy:"Growth",teaching:"Your intentions take their first breath and stretch toward the light. Nurture what you have seeded with consistent devotion. The goddess energy rises — feel her building in your blood and breath."},
  {name:"First Quarter",emoji:"🌓",energy:"Action",teaching:"The feminine force rises to meet her purpose. Step boldly toward what you have envisioned. Resistance now is simply the old self making space for the new you that is emerging."},
  {name:"Waxing Gibbous",emoji:"🌔",energy:"Refinement",teaching:"You are almost full. Refine, trust the ripening process within you. The goddess gathers her full power. Feel how close the fullness is — do not rush the sacred becoming."},
  {name:"Full Moon",emoji:"🌕",energy:"Fullness",teaching:"Peak illumination and power. When menstruation aligns with the full moon, you carry the Red Moon cycle — the cycle of the healer, priestess, and tantrika. Your power is at its absolute apex."},
  {name:"Waning Gibbous",emoji:"🌖",energy:"Gratitude",teaching:"The goddess begins her descent with gifts. What have you learned, created, and become? This is the time for sharing what has ripened within you with the world that needs your wisdom."},
  {name:"Last Quarter",emoji:"🌗",energy:"Release",teaching:"Release what this cycle has shown you must surrender. Your blood and the waning moon conspire in sacred dissolution. Trust the letting go — it is making room for something truer."},
  {name:"Waning Crescent",emoji:"🌘",energy:"Surrender",teaching:"The dark goddess awaits in the approaching darkness. Prepare for the sacred descent. Honour your deepest need for stillness, solitude, and surrender. The cycle of creation is completing here."},
];

const BLOOD_PRACTICES=[
  {name:"Blood Art — Sacred Geometry",desc:"Create Sri Yantra, lotus flowers, or goddess forms using menstrual blood mixed with natural binder. Display in sacred space as an act of worship — your essence made visible, your power given form.",full:"Mix collected blood 1:1 with egg white or gum arabic. Use fine brush on black paper. Create sacred designs with full intention. Let dry naturally. Display in altar space (not bedroom). Meditate before it monthly. Intention: 'My blood becomes art. My power becomes visible. My essence becomes worship.'"},
  {name:"Earth Offering — Sacred Return",desc:"Return sacred blood to the earth in prayer and gratitude — one of the most ancient feminine spiritual practices on earth, practiced across cultures for thousands of years.",full:"Collect blood on cotton pad. Go to your garden or plant. Dig a small intentional hole. Lower offering: 'Mother Earth, receive my essence. May your fertility increase. May life flourish through this gift.' Plant seeds over the spot. Plants that appreciate blood offering: roses (feminine energy), jasmine (divine love), tulsi (sacred plant), fruit trees (fertility)."},
  {name:"Blood Medicine — Topical Healing",desc:"Your own blood contains your unique healing essence — the Ayurvedic understanding is that your blood carries your individual ojas and healing intelligence to wherever it is applied with intention.",full:"Clean skin area thoroughly. Apply fresh blood directly. Massage gently clockwise with intention: 'My blood heals my body. My essence renews my cells. My power repairs my form.' Leave 20–30 minutes. For scars: repeat daily for one full cycle (28 days). For chronic pain: apply blood compress using blood-soaked cotton beneath warm cloth over affected area."},
  {name:"Crystal Charging with Blood",desc:"Charge crystals, jewellery, yoni eggs, or sacred talismans with a drop of menstrual blood to create deeply personalised sacred objects vibrating with your unique frequency.",full:"Choose object with clear intention. Speak to it: 'I charge you with my sacred essence for [purpose].' Place one drop of blood on it. Wrap in red cloth for 24 hours. Unwrap and cleanse with water. Best crystals for blood charging: ruby or garnet (power), rose quartz (love and healing), clear quartz (amplification), black tourmaline (protection), obsidian (shadow work)."},
  {name:"Blood Yantra — Sri Yantra Completion",desc:"Complete the Sri Yantra — the supreme cosmic diagram of the divine feminine — with your menstrual blood to create a living mandala of feminine power and manifestation.",full:"Create or print Sri Yantra outline. Fill the downward-pointing triangles with blood-binder mixture. Charge under your bleeding period (nearby) and under full moonlight for 3 nights. Meditate before it during menstruation asking: 'What cosmic patterns does my blood reveal?' Dispose with gratitude when intention completes by burying or burning with prayer."},
  {name:"Sigil Magic — Complete System",desc:"Create personalised power symbols from your intentions and charge them with menstrual blood — one of the most powerful forms of Tantric sympathetic magic available to the feminine practitioner.",full:"1. Write intention: positive, present tense, first person, emotionally charged. 2. Remove vowels and repeating consonants. 3. Arrange remaining letters into abstract design by geometric connection, overlay method, or automatic drawing. 4. Paint sigil with blood-binder mixture on black paper in one continuous stroke — accept all imperfections. 5. Charge under moonlight for 3 nights or breathe 108 times into it. 6. Activate with red candle. 7. Deactivate when intention manifests: thank, burn, scatter ashes."},
  {name:"Hydromancy — Blood Water Divination",desc:"Use menstrual blood as the sacred medium for water scrying — ancient priestess practice for accessing deep intuitive wisdom and answering life's most sacred questions.",full:"Materials: dark bowl (black, blue, or obsidian), purified or moon water, candle, journal. Formulate one clear question (not yes/no). Add one drop of blood to water centre. Cover with dark cloth for 3 minutes. Uncover. Observe shapes, movements, colours. Interpret at 4 levels: (1) immediate impression, (2) symbolic analysis, (3) intuitive download, (4) life application. Sacred disposal: pour at base of tree or plant with prayer."},
];

const TANTRIC_PRACTICES=[
  {name:"Ojas Urdhva Gamana",desc:"The secret practice of the ancient Tantric lineages — consciously redirecting menstrual ojas upward through the sushumna nadi to nourish the brain and activate higher spiritual centres.",full:"Preparation (3–5 days before): Nadi Shodhana 15 min morning and evening. Sattvic diet only. Limited social contact. Day 1 of Flow: Lie down. Hands on womb and heart. Speak recognition affirmation. Visualise hollow golden channel. Chant Om Hreem Shreem. 21 breaths: inhale light from womb to crown, exhale hold in higher centres. Yoni Mudra 3 minutes. Speak transmutation sankalpa. Signs of progress: lighter flow, mental clarity, skin radiance, deeper meditation, prophetic dreams, spontaneous samadhi in practice."},
  {name:"Blood Portal Opening",desc:"Advanced Tantric practice of opening dimensional or elemental portals using the Sri Yantra and menstrual blood as the sacred activating key — for experienced practitioners only.",full:"Preparation (3 days): clarify intention completely. Prepare sacred space with red cloth, protection crystals (black tourmaline, smoky quartz), 4 direction representations. Day of ritual: sattvic diet, sexual abstinence, increased meditation. Ritual: cast protective circle, call 4 directions, anoint Sri Yantra Bindu with blood, state clear portal purpose and firm boundaries, ring bell 3 times, sit in open reception, record all impressions, ring bell 7 times to close, walk counter-clockwise, ground thoroughly with food and water. ESSENTIAL: Never open when emotionally unstable. ALWAYS close completely."},
  {name:"Chakra Blood Medicine System",desc:"Systematic application of menstrual blood essence to each chakra centre as healing medicine — working through the entire subtle body over one complete menstrual cycle.",full:"Root Chakra (Days 1–2 of menstruation): base of spine and feet. Raktam (earth essence). 'I am safe. I am grounded. I am supported.' Sacral (Days 3–4): lower abdomen. Shonita (water essence). 'My creativity flows. My pleasure is sacred.' Solar Plexus: stomach. 'I claim my power. I act with confidence.' Heart: chest centre. Mahashakti (fire essence). 'I give and receive love freely.' Third Eye: forehead. 'I see clearly. I know deeply.' Crown: top of head. All essences. 'I am connected to Divine source.'"},
  {name:"Ancestral Blood Healing",desc:"Using menstrual blood to consciously connect with and heal the feminine ancestral lineage — completing what was wounded in the grandmothers so it is not passed to the daughters.",full:"Set up ancestral altar with photographs or meaningful objects of matrilineal ancestors. Create a lineage healing sigil. During waning moon, sit at your altar. Offer a small drop of blood as sacred offering. Speak aloud: 'Through my blood I connect to you. What has wounded the women of our lineage? What healing completes through me, completing for all?' Sit in open reception for 30 minutes. Journal without censoring. Repeat for 3 consecutive cycles for deep lineage transformation."},
  {name:"Deha Siddhi — Embodied Goddess Practice",desc:"The ultimate practice described in the Tantric lineages — through sustained Ojas transmutation and devotion, entering the state where the body becomes luminous and the cycle itself transforms.",full:"This is a way of living, not a single technique. It requires sustained commitment over many cycles. Daily: Nadi Shodhana twice daily. Sattvic diet aligned to cycle phase. Sexual energy conservation during menstruation. Monthly: Full Ojas transmutation practice for the complete duration of menstruation. Signs of progression across cycles: flow becomes gradually lighter and shorter. Mental clarity sharpens dramatically. Intuition becomes constant. Meditation deepens spontaneously. Dreams become prophetic. Body feels lighter. Skin develops inner radiance. The practitioner of the lineage: 'She lived like a goddess with amazing power but was humble and pious.'"},
];

const RITUALS=[
  {name:"Menstrual Welcome Ritual",phase:"Menstrual",color:"#c2185b",dur:"20–30 min",desc:"A complete opening ritual to honour the arrival of your sacred blood and enter the Menstrual phase with conscious intention.",steps:["Cleanse your sacred space with incense or sound (bell or singing bowl). Light a red candle on your altar.","Prepare a warm space — draw a bath with rose petals and sea salt if possible, or create a comfortable nest of blankets and pillows.","Sit or lie in your prepared space. Place left hand on your womb, right hand on your heart.","Feel the first signs of your bleeding. Acknowledge it aloud: 'I recognise the sacred energy within me. This is not blood — this is liquid light. This is divine nectar. This is not loss — this is the source of all power.'","Visualise your body as a hollow tube of golden light from the base of your spine to the crown of your head.","Chant internally: Om Hreem Shreem — the bija mantra that awakens the upward flow. Let your whole body receive the vibration.","Complete 21 slow, conscious breaths drawing golden light upward from womb to crown with each inhale.","Perform Yoni Mudra — interlace fingers, index fingers touching pointing downward — at your womb for 3 minutes.","Journal whatever arises — visions, emotions, messages, body sensations. Rest as long as your body needs. This is sacred time."]},
  {name:"Earth Offering Ritual",phase:"Menstrual",color:"#c2185b",dur:"15–20 min",desc:"Sacred offering of menstrual blood to the earth mother — one of the oldest feminine spiritual practices in human history.",steps:["Collect blood on a natural cotton pad or in a menstrual cup.","If possible, go outdoors to your garden, a potted plant, or a natural space. Choose a plant that feels sacred to you.","Clear a small area with intention and dig a shallow hole. Hold the offering and breathe your gratitude into it.","Speak aloud: 'Mother Earth, I return to you the sacred essence of my body. May your fertility increase. May all life flourish. I offer my power in service of the living earth and all her children.'","Lower the offering into the hole with complete reverence.","Cover with soil, pressing both palms into the earth in deep gratitude. Feel the earth receive your gift.","If you wish, plant flower seeds or a small plant in the blessed spot as an act of co-creation with the earth.","Water the spot and return periodically to tend this sacred space throughout your cycle."]},
  {name:"Sigil Creation Ritual",phase:"Follicular",color:"#7b1fa2",dur:"45–60 min",desc:"Complete Tantric sigil creation using blood magic — from intention to activation.",steps:["Write your intention: positive, present tense, first person, emotionally charged. Example: 'I am powerfully creating my sacred art studio.' Read it aloud three times with full conviction.","Remove all vowels. Then remove all repeating consonants — keeping only the first instance of each. Write the remaining letters.","Place the remaining letters randomly on paper. Connect them with intuitive lines. Simplify the design to its essential abstract shape. Refine until it feels complete.","Prepare your blood medium: mix 1 part menstrual blood with 1 part gum arabic or egg white. Stir clockwise exactly 13 times while holding your intention.","Cleanse your space with incense. Cast a protective circle by walking clockwise, visualising brilliant blue light encircling and protecting the entire space.","Using a fine brush, paint your sigil on black paper in one single continuous stroke. Do not correct mistakes — the imperfections are sacred. Blow gently to dry.","Charge the sigil: place under moonlight for 3 nights minimum, chant your chosen mantra 108 times over it, or breathe your intention into it 108 times.","Activate: light a red candle, hold sigil near (never in) the flame, say: 'By blood and fire, I activate this sigil. It is done.' Deactivate by burning when the intention manifests."]},
  {name:"Hydromancy Divination Ritual",phase:"All phases",color:"#1a237e",dur:"30–45 min",desc:"Complete water scrying ritual using menstrual blood as the sacred medium for accessing deep priestess wisdom.",steps:["Gather materials: dark bowl (black, blue, or obsidian), purified or moon water, a candle (white or blue), dark cloth, and your journal.","Cleanse your space with sound — a bell or singing bowl works beautifully. Arrange your altar facing north if possible.","Formulate your question with complete care: one question only, not yes/no, focused on guidance not prediction. 'What do I need to understand about my current [situation/relationship/path]?'","Hold your hands over the bowl and charge the water: 'Water, mirror of truth, reveal what I need to see. Sacred vessel, receive my question and return its wisdom.'","Centre yourself completely with 5 minutes of breath meditation. Release all expectations about what you will see.","Prepare one drop of fresh blood. Drop it into the exact centre of the water. Observe the immediate dispersal pattern without judgment — this is your first message.","Cover the bowl with the dark cloth. Hold your question gently in your awareness for exactly 3 minutes without peeking.","Uncover with reverence. Observe everything: shapes, movements, colours, and the feelings in your body as you look.","Journal at four levels: (1) Immediate impression — what your gut says, (2) Symbolic analysis — what symbols and archetypes appear, (3) Intuitive download — what information comes beyond the visual, (4) Life application — what action this guidance calls for.","Dispose of the water at the base of a plant with prayer: 'Water Mother, carry this wisdom back to the great cycle of knowing.'"]},
  {name:"Full Moon Blood Ceremony",phase:"Ovulatory/Red Moon",color:"#b8860b",dur:"40–60 min",desc:"Sacred ceremony for those whose menstruation aligns with the full moon — the powerful Red Moon cycle of the healer and priestess.",steps:["Prepare your space, outdoors or facing a window where you can feel the full moon's light. Arrange altar with red and gold cloths, candles in red, white, and gold, and your charged crystals.","Place a vessel of clean water where it can receive the full moon's light. This becomes your ceremony moon water.","Open with deep gratitude: 'Great Mother, I enter your full light. I am the Red Moon priestess. I carry the ancient wisdom of the bleeding women of all time in my body right now.'","Anoint your crown, third eye, throat, heart, and womb with a tiny amount of blood essence, affirming each centre as you do: 'My [chakra] awakens and opens to the full moon's power.'","Add one drop of blood and a clear quartz crystal to your moon water. Breathe your intention into it three times. This becomes your healing elixir for anointing throughout the ceremony.","Chant your Ovulatory mantra 108 times facing the full moon: Om Shreem Mahalakshmyai Namah. Let the sound fill your entire body.","Sit in open meditation for 20 minutes, receiving the full moon's amplified transmission through your body. This is your most potent divination and download time of the cycle.","Journal all visions, messages, and wisdom received immediately while they are fresh. Do not filter or edit.","Close the ceremony: 'I seal this sacred work. I carry this wisdom and power into the waning cycle. The Red Moon priestess walks in the world. So it is. Iti. Iti. Iti.'"]},
  {name:"Shadow Integration Ceremony",phase:"Luteal",color:"#1a237e",dur:"40–50 min",desc:"A complete ceremony for meeting and integrating your shadow self — guided by Kali and Parvati's fierce, loving wisdom.",steps:["Create privacy for this ceremony — close the door, silence your phone, light a dark candle (black or deep purple if available). This is Kali's temple.",
  "Sit comfortably and breathe deeply three times. Set your intention: 'I am willing to meet all parts of myself tonight. I welcome what I have been avoiding. I am safe in my own fierce love.'","Write the shadow pattern that has been appearing this cycle at the top of a page. Name it honestly — the emotion, the behaviour, the belief, or the voice.",
  "Write from the shadow's voice without any censoring for 10 full minutes: 'I am the part of you that… I feel… I have always believed… I want you to know… I am afraid of…'","Read what you have written aloud if you can. Feel the feelings that arise without judgment. This shadow has been living in the dark — it needs to be witnessed.","Now write your Goddess response with fierce, loving wisdom: 'I see you completely. I honour the protection you have been offering. The truth beneath you is… I choose to integrate you by… Your gift to me is…'","Write your integration vow: 'I commit to… I release the need to… I welcome the gift of… The shadow becomes my power by…'","Complete the ceremony by sitting in stillness for 5 minutes with your hands on your heart. Feel the integration. Breathe the shadow home into the whole of who you are.","Burn or tear the shadow pages if you wish as an act of sacred release. The wisdom is now integrated — the form can return to the great cycle."]},
];

// =========================================================
// STATE
// =========================================================
let S={cycleDay:1,cycleStart:'',cycleLen:28,entries:[],dreams:[],gratitudes:[],shadows:[],bodyWisdoms:[],cycleLogs:[],ritSteps:{},mantraCnt:0,curPrompt:'',curMood:''};
try{const d=localStorage.getItem('scs_v2');if(d)S={...S,...JSON.parse(d)};}catch(e){}
function save(){try{localStorage.setItem('scs_v2',JSON.stringify(S));}catch(e){}}

// =========================================================
// HELPERS
// =========================================================
function moon(){
  const known=new Date(2000,0,6),diff=Date.now()-known.getTime(),days=diff/86400000,cyc=29.53058867,phase=((days%cyc)+cyc)%cyc;
  return{...MOON_PHASES[Math.floor((phase/cyc)*8)%8],dayInCycle:Math.round(phase)};
}
function phase(){return PHASES.find(p=>S.cycleDay>=p.days[0]&&S.cycleDay<=p.days[1])||PHASES[0];}
function phaseForDay(d){return PHASES.find(p=>d>=p.days[0]&&d<=p.days[1])||PHASES[0];}
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600);}
function go(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('active'));
  document.getElementById('screen-'+id).classList.add('active');
  const map={home:'Altar',tracker:'Cycle',practices:'Practices',rituals:'Rituals',journal:'Journal',breathwork:'Breathwork',oracle:'Oracle',insights:'Insights'};
  document.querySelectorAll('.nb').forEach(b=>{if(b.textContent===map[id])b.classList.add('active');});
  render();window.scrollTo(0,0);
}
function openModal(html){document.getElementById('modal-body').innerHTML=html;document.getElementById('modal').classList.add('open');}
function closeModal(){document.getElementById('modal').classList.remove('open');}

// =========================================================
// RENDER
// =========================================================
function render(){
  const ph=phase(),mn=moon();
  renderHome(ph,mn);renderTracker(ph,mn);renderPractices(ph);renderRituals();
  renderJournal(ph);renderOracle(ph,mn);renderInsights(ph);
}

function renderHome(ph,mn){
  const $=id=>document.getElementById(id);
  $('h-phase-card').style.cssText=`border-color:${ph.color};background:linear-gradient(135deg,${ph.light},rgba(255,255,255,0.95));`;
  $('h-day-lbl').textContent=`Today — Cycle Day ${S.cycleDay}`;
  $('h-phase-name').textContent=ph.name+' Phase';$('h-phase-name').style.color=ph.color;
  $('h-goddess').textContent=`Goddess: ${ph.goddess} · ${ph.archetype}`;
  $('h-tags').innerHTML=`<span class="tag tag-rose">${ph.element}</span><span class="tag tag-plum">${ph.chakra} Chakra</span><span class="tag tag-gold">${ph.direction}</span>`;
  $('h-circle').style.background=ph.color;$('h-circle-txt').textContent=`Day\n${S.cycleDay}`;
  $('h-wisdom').textContent='"'+ph.wisdom+'"';
  $('h-moon-e').textContent=mn.emoji;$('h-moon-name').textContent=mn.name;$('h-moon-energy').textContent=mn.energy;$('h-moon-teach').textContent=mn.teaching;
  $('h-aff').textContent='"'+ph.affirmation+'"';$('h-mantra').textContent=ph.mantra;
  $('h-aff-card').style.background=`linear-gradient(135deg,${ph.color},#c2185b)`;
  $('s-day').textContent=S.cycleDay;$('s-phase-day').textContent=S.cycleDay-ph.days[0]+1;
  $('h-prac-lbl').textContent=ph.name+' Practices';$('h-log-btn').style.background=ph.color;
}

function renderTracker(ph,mn){
  document.getElementById('tr-title').textContent=`My Sacred Cycle · ${ph.name}`;
  document.getElementById('tr-title').style.color=ph.color;
  if(S.cycleStart)document.getElementById('tr-start').value=S.cycleStart;
  document.getElementById('tr-len').value=S.cycleLen;
  document.getElementById('tr-len-lbl').textContent=S.cycleLen;
  renderDayGrid();renderWheel(ph);renderMoonRow(mn);renderUpcoming();
}

function renderDayGrid(){
  const g=document.getElementById('daygrid');g.innerHTML='';
  for(let d=1;d<=S.cycleLen;d++){
    const p=phaseForDay(d),btn=document.createElement('button');
    btn.className='dd';btn.textContent=d;
    btn.style.cssText=`background:${d===S.cycleDay?p.color:d<S.cycleDay?p.light:'rgba(255,255,255,0.6)'};border-color:${d===S.cycleDay?p.color:d<S.cycleDay?p.color+'60':'#f0d6e0'};color:${d===S.cycleDay?'#fff':d<S.cycleDay?p.color:'#8d4e6c'};font-weight:${d===S.cycleDay?600:400};`;
    btn.onclick=()=>selectDay(d);g.appendChild(btn);
  }
}

function selectDay(d){
  S.cycleDay=d;save();
  const p=phaseForDay(d);
  const di=document.getElementById('day-info');di.style.display='block';
  document.getElementById('di-title').textContent=`Day ${d} — ${p.name} · ${p.goddess}`;
  document.getElementById('di-title').style.color=p.color;
  document.getElementById('di-desc').textContent=p.wisdom.substring(0,160)+'...';
  render();
}

function renderWheel(ph){
  const seg=document.getElementById('wsegs');seg.innerHTML='';
  const cx=160,cy=160,r=148,inner=62;let start=-Math.PI/2;
  PHASES.forEach(p=>{
    const pct=(p.days[1]-p.days[0]+1)/S.cycleLen,end=start+pct*2*Math.PI;
    const x1=cx+r*Math.cos(start),y1=cy+r*Math.sin(start),x2=cx+r*Math.cos(end),y2=cy+r*Math.sin(end);
    const ix1=cx+inner*Math.cos(start),iy1=cy+inner*Math.sin(start),ix2=cx+inner*Math.cos(end),iy2=cy+inner*Math.sin(end);
    const lg=pct>0.5?1:0;
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d',`M${ix1},${iy1} L${x1},${y1} A${r},${r} 0 ${lg} 1 ${x2},${y2} L${ix2},${iy2} A${inner},${inner} 0 ${lg} 0 ${ix1},${iy1}Z`);
    path.setAttribute('fill',ph.name===p.name?p.color:p.light);
    path.setAttribute('stroke',p.color);path.setAttribute('stroke-width',ph.name===p.name?2:1);
    path.setAttribute('class','wseg');
    path.onclick=()=>{document.getElementById('w-cp').textContent=p.name;document.getElementById('w-cp').setAttribute('fill',p.color);document.getElementById('w-cd').textContent=`Days ${p.days[0]}–${p.days[1]}`};
    const mid=start+(end-start)/2,lr=(r+inner)/2;
    const txt=document.createElementNS('http://www.w3.org/2000/svg','text');
    txt.setAttribute('x',cx+lr*Math.cos(mid));txt.setAttribute('y',cy+lr*Math.sin(mid));
    txt.setAttribute('text-anchor','middle');txt.setAttribute('dominant-baseline','middle');
    txt.setAttribute('font-family','Georgia');txt.setAttribute('font-size','11');
    txt.setAttribute('fill',ph.name===p.name?'#fff':p.color);txt.textContent=p.name.substring(0,3);
    seg.appendChild(path);seg.appendChild(txt);start=end;
  });
  document.getElementById('w-cp').textContent=ph.name;document.getElementById('w-cp').setAttribute('fill',ph.color);
  document.getElementById('w-cd').textContent=`Day ${S.cycleDay}`;
  document.getElementById('w-legend').innerHTML=PHASES.map(p=>`<div style="text-align:center;padding:6px;"><div style="width:10px;height:10px;border-radius:50%;background:${p.color};margin:0 auto 3px;"></div><div style="font-size:10px;color:${p.color};font-weight:600;">${p.name.substring(0,3)}</div></div>`).join('');
}

function renderMoonRow(mn){
  const row=document.getElementById('moonrow');row.innerHTML='';
  MOON_PHASES.forEach(m=>{
    const d=document.createElement('div');d.className='mphase'+(m.name===mn.name?' cur':'');
    d.innerHTML=`<span class="me">${m.emoji}</span><div class="md"></div>`;
    d.title=m.name;d.onclick=()=>{document.getElementById('moon-detail').textContent=m.teaching;};
    row.appendChild(d);
  });
  document.getElementById('moon-detail').textContent=mn.teaching;
}

function renderUpcoming(){
  document.getElementById('upcoming').innerHTML=PHASES.map(p=>{
    const active=S.cycleDay>=p.days[0]&&S.cycleDay<=p.days[1];
    const daysUntil=p.days[0]-S.cycleDay;
    return`<div class="irow"><div class="iicon" style="background:${p.light};color:${p.color};font-size:10px;font-weight:700;">${p.name.substring(0,3).toUpperCase()}</div><div style="flex:1;"><p style="font-size:13px;font-weight:600;color:${p.color};margin:0 0 2px;">${p.name} — ${p.goddess}</p><p class="muted" style="font-size:12px;margin:0;">Days ${p.days[0]}–${p.days[1]} · ${active?'<strong style="color:'+p.color+'">Active now</strong>':(daysUntil>0?`In ${daysUntil} days`:'Completed this cycle')}</p></div><button class="btn btn-ghost btn-xs" style="border-color:${p.color};color:${p.color};" onclick="openModal('<h3 style=&quot;color:${p.color}&quot;>${p.name} — ${p.goddess}</h3><p style=&quot;font-style:italic;color:#5a3048;margin:8px 0;&quot;>${p.archetype}</p><p style=&quot;font-size:14px;line-height:1.8;margin-bottom:12px;&quot;>${p.wisdom.replace(/'/g,&quot;\'&quot;)}</p><p style=&quot;color:${p.color};font-style:italic;&quot;>${p.mantra}</p>')">View</button></div>`;
  }).join('');
}

function renderPractices(ph){
  document.getElementById('pr-title').textContent=`Sacred Practices · ${ph.name}`;
  document.getElementById('pr-title').style.color=ph.color;
  document.getElementById('pr-intro-txt').textContent=`In the ${ph.name} phase, Goddess ${ph.goddess} (${ph.archetype}) guides these sacred acts. The element of ${ph.element} charges your practice. Go deep with one practice rather than sampling all.`;

  document.getElementById('pr-list').innerHTML=ph.practices.map((p,i)=>`
    <div class="pi" id="pi${i}" onclick="togglePi(${i},'pi${i}','pb${i}','${ph.color}')">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="display:flex;align-items:center;gap:10px;flex:1;">
          <span style="font-size:20px;">${p.icon}</span>
          <span style="font-weight:600;font-size:14px;color:${ph.color};">${p.name}</span>
        </div>
        <span style="color:var(--subtle);font-size:13px;">▼</span>
      </div>
      <p style="font-size:13px;color:var(--muted);margin:6px 0 0 30px;line-height:1.65;">${p.desc}</p>
      <div class="pi-body" id="pb${i}">
        <p style="font-size:14px;line-height:1.85;color:#5a3048;margin-bottom:14px;">${p.step}</p>
        <div class="btn-row">
          <button class="btn btn-gold btn-sm" onclick="event.stopPropagation();askAbout('${p.name}')">Ask Oracle ✦</button>
          <button class="btn btn-ghost btn-sm" style="border-color:${ph.color};color:${ph.color};" onclick="event.stopPropagation();go('rituals')">Full Ritual ↗</button>
        </div>
      </div>
    </div>`).join('');

  document.getElementById('pr-all').innerHTML=PHASES.map(p=>`
    <div style="margin-bottom:20px;">
      <h4 style="color:${p.color};margin-bottom:10px;">${p.name} — ${p.goddess}</h4>
      ${p.practices.map(pr=>`<div style="display:flex;gap:10px;margin-bottom:8px;padding:10px;background:${p.light};border-radius:10px;border-left:3px solid ${p.color};">
        <span style="font-size:18px;">${pr.icon}</span>
        <div><p style="font-size:13px;font-weight:600;color:${p.color};margin:0 0 3px;">${pr.name}</p><p style="font-size:12px;color:var(--muted);margin:0;line-height:1.5;">${pr.desc.substring(0,90)}...</p></div>
      </div>`).join('')}
    </div>`).join('');

  document.getElementById('pr-blood').innerHTML=BLOOD_PRACTICES.map((p,i)=>`
    <div class="pi" id="bpi${i}" onclick="togglePi('b'+${i},'bpi${i}','bpb${i}','#c2185b')">
      <p style="font-weight:600;font-size:14px;color:#c2185b;margin-bottom:4px;">${p.name}</p>
      <p style="font-size:13px;color:var(--muted);margin:0;">${p.desc}</p>
      <div class="pi-body" id="bpb${i}">
        <p style="font-size:14px;line-height:1.85;color:#5a3048;margin-bottom:12px;">${p.full}</p>
        <button class="btn btn-gold btn-sm" onclick="event.stopPropagation();askAbout('${p.name}')">Ask Oracle ✦</button>
      </div>
    </div>`).join('');

  document.getElementById('pr-tant').innerHTML=TANTRIC_PRACTICES.map((p,i)=>`
    <div class="pi" id="tpi${i}" onclick="togglePi('t'+${i},'tpi${i}','tpb${i}','#7b1fa2')">
      <p style="font-weight:600;font-size:14px;color:#7b1fa2;margin-bottom:4px;">${p.name}</p>
      <p style="font-size:13px;color:var(--muted);margin:0;">${p.desc}</p>
      <div class="pi-body" id="tpb${i}">
        <p style="font-size:14px;line-height:1.85;color:#5a3048;margin-bottom:12px;">${p.full}</p>
        <button class="btn btn-gold btn-sm" onclick="event.stopPropagation();askAbout('${p.name}')">Ask Oracle ✦</button>
      </div>
    </div>`).join('');
}

function togglePi(id,cardId,bodyId,color){
  const body=document.getElementById(bodyId),card=document.getElementById(cardId);
  const open=body.classList.toggle('show');
  if(open){card.classList.add('open');card.style.borderColor=color;card.style.background=color+'12';}
  else{card.classList.remove('open');card.style.borderColor='';card.style.background='';}
}

function renderRituals(){
  document.getElementById('ritual-list').innerHTML=RITUALS.map((r,ri)=>{
    if(!S.ritSteps[ri])S.ritSteps[ri]=new Array(r.steps.length).fill(false);
    const done=S.ritSteps[ri].filter(Boolean).length;
    return`<div class="card" style="border-color:${r.color}30;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
        <div>
          <span class="label-sm" style="color:${r.color};">${r.phase} · ${r.dur}</span>
          <h3 style="color:${r.color};margin:4px 0;">${r.name}</h3>
          <p style="font-size:13px;color:var(--muted);margin:0;">${r.desc}</p>
        </div>
        <span class="tag" style="background:${r.color}20;color:${r.color};flex-shrink:0;margin-left:8px;">${done}/${r.steps.length}</span>
      </div>
      <div class="pbar" style="margin-bottom:14px;"><div class="pfill" style="background:${r.color};width:${(done/r.steps.length*100).toFixed(0)}%;"></div></div>
      ${r.steps.map((s,si)=>`<div class="rstep">
        <div class="rcheck ${S.ritSteps[ri][si]?'done':''}" style="${S.ritSteps[ri][si]?`background:${r.color};border-color:${r.color};`:`border-color:${r.color}60;`}" onclick="toggleStep(${ri},${si})">${S.ritSteps[ri][si]?'✓':si+1}</div>
        <p class="step-text" style="${S.ritSteps[ri][si]?'text-decoration:line-through;color:var(--muted);':''}font-size:14px;line-height:1.7;">${s}</p>
      </div>`).join('')}
      <div class="btn-row" style="margin-top:10px;">
        <button class="btn btn-sm" style="background:${r.color};color:#fff;" onclick="resetRitual(${ri})">Reset</button>
        <button class="btn btn-gold btn-sm" onclick="askAbout('${r.name} ritual')">Oracle Guidance ✦</button>
      </div>
    </div>`;
  }).join('');
}

function toggleStep(ri,si){
  if(!S.ritSteps[ri])S.ritSteps[ri]=[];
  S.ritSteps[ri][si]=!S.ritSteps[ri][si];save();
  const r=RITUALS[ri],done=S.ritSteps[ri].filter(Boolean).length;
  if(done===r.steps.length)toast('✦ '+r.name+' complete! Blessed be.');
  renderRituals();
}
function resetRitual(ri){S.ritSteps[ri]=new Array(RITUALS[ri].steps.length).fill(false);save();renderRituals();}

function renderJournal(ph){
  document.getElementById('j-phase-lbl').textContent=`${ph.name} Phase · ${ph.goddess}`;
  document.getElementById('j-aff').textContent='"'+ph.affirmation+'"';
  document.getElementById('j-aff').style.color=ph.color;
  document.getElementById('j-banner').style.borderColor=ph.color;
  document.getElementById('j-prompts').innerHTML=ph.journal_prompts.map(p=>`<button class="prbtn" onclick="selPrompt(this,'${p.replace(/'/g,"\\'")}')">${p}</button>`).join('');
  document.getElementById('j-save-btn').style.background=ph.color;
  renderJEntries();renderLogHistory();renderGEntries();renderShadowEntries();renderBodyEntries();renderDreamEntries();
}

function selPrompt(btn,p){
  document.querySelectorAll('.prbtn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');S.curPrompt=p;
  const d=document.getElementById('j-prompt-disp'),t=document.getElementById('j-prompt-txt');
  if(p){d.style.display='block';t.textContent=p;}else d.style.display='none';
}

function selMood(el,mood){document.querySelectorAll('.moodopt').forEach(m=>m.classList.remove('sel'));el.classList.add('sel');S.curMood=mood;}

function saveEntry(){
  const text=document.getElementById('j-text').value.trim();
  if(!text){toast('Write something sacred first 🌸');return;}
  const ph=phase(),mn=moon();
  const syms=[...document.querySelectorAll('#j-syms .sym.on')].map(b=>b.textContent);
  S.entries.unshift({date:new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}),phase:ph.name,goddess:ph.goddess,moon:mn.name,day:S.cycleDay,prompt:S.curPrompt,text,symptoms:syms,flow:document.getElementById('j-flow').value,flowColor:document.getElementById('j-flow-col').value,energy:document.getElementById('j-e').value,mood:S.curMood});
  save();document.getElementById('j-text').value='';
  document.querySelectorAll('#j-syms .sym').forEach(b=>b.classList.remove('on'));
  toast('✦ Sacred entry saved');renderJEntries();
}

function renderJEntries(){
  const el=document.getElementById('j-entries-list');
  if(!S.entries.length){el.innerHTML='<p class="muted italic center" style="padding:28px;">Your past entries will appear here.</p>';return;}
  el.innerHTML=S.entries.map(e=>{
    const ph=PHASES.find(p=>p.name===e.phase)||PHASES[0];
    return`<div class="logentry" style="border-color:${ph.color};">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;flex-wrap:wrap;gap:4px;">
        <span style="font-size:12px;color:var(--muted);font-weight:600;">${e.date} · Day ${e.day}</span>
        <div><span class="tag tag-rose" style="font-size:11px;">${e.phase}</span><span class="tag tag-plum" style="font-size:11px;">${e.moon}</span>${e.energy?`<span class="tag tag-gold" style="font-size:11px;">⚡${e.energy}/10</span>`:''}</div>
      </div>
      ${e.prompt?`<p style="font-size:12px;font-style:italic;color:var(--muted);margin-bottom:6px;">"${e.prompt}"</p>`:''}
      <p style="font-size:14px;line-height:1.75;">${e.text}</p>
      ${e.symptoms?.length?`<div style="margin-top:8px;">${e.symptoms.map(s=>`<span class="tag tag-rose" style="font-size:11px;">${s}</span>`).join('')}</div>`:''}
      ${e.flowColor?`<p style="font-size:11px;color:var(--muted);margin-top:6px;">🩸 ${e.flowColor}</p>`:''}
    </div>`;
  }).join('');
}

function renderLogHistory(){
  const el=document.getElementById('j-log-hist');
  if(!S.cycleLogs.length){el.innerHTML='<p class="muted italic">Use the Quick Daily Log on the Altar to begin tracking.</p>';return;}
  el.innerHTML=S.cycleLogs.slice(0,10).map(l=>`<div style="display:flex;gap:8px;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);"><span style="font-size:11px;color:var(--muted);min-width:65px;">${l.date}</span><span class="tag tag-rose" style="font-size:11px;">${l.phase}</span>${l.symptoms.map(s=>`<span class="tag" style="background:#f0d6e0;color:var(--muted);font-size:11px;">${s}</span>`).join('')}<span style="font-size:11px;color:var(--gold);margin-left:auto;">⚡${l.energy}/10</span></div>`).join('');
}

// DREAM LOG
function saveDream(){
  const text=document.getElementById('dr-text').value.trim();
  if(!text){toast('Describe your dream first 🌙');return;}
  const ph=phase(),mn=moon();
  const syms=[...document.querySelectorAll('#dr-syms .dsym.on')].map(b=>b.textContent);
  S.dreams.unshift({date:new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long'}),phase:ph.name,moon:mn.name,day:S.cycleDay,text,symbols:syms,feeling:document.getElementById('dr-feel').value});
  save();document.getElementById('dr-text').value='';
  document.querySelectorAll('#dr-syms .dsym').forEach(b=>b.classList.remove('on'));
  toast('✦ Dream recorded');renderDreamEntries();
}

function renderDreamEntries(){
  const el=document.getElementById('dr-entries');
  if(!S.dreams.length){el.innerHTML='';return;}
  el.innerHTML='<h4 style="margin-bottom:10px;">Past Dream Logs</h4>'+S.dreams.map(d=>`<div class="logentry" style="border-color:#7b1fa2;">
    <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span style="font-size:12px;color:var(--muted);">${d.date} · ${d.phase} · ${d.moon}</span></div>
    <p style="font-size:14px;line-height:1.75;">${d.text}</p>
    ${d.symbols.length?`<div style="margin-top:6px;">${d.symbols.map(s=>`<span class="tag tag-plum" style="font-size:11px;">${s}</span>`).join('')}</div>`:''}
    ${d.feeling?`<p style="font-size:11px;color:var(--muted);margin-top:4px;">Feeling: ${d.feeling}</p>`:''}
  </div>`).join('');
}

async function interpretDream(){
  const text=document.getElementById('dr-text').value.trim();
  if(!text){toast('Write your dream first 🌙');return;}
  const ph=phase(),mn=moon();
  const syms=[...document.querySelectorAll('#dr-syms .dsym.on')].map(b=>b.textContent).join(', ');
  const el=document.getElementById('dr-interp');el.style.display='block';
  el.innerHTML='<p class="muted italic ldots">The goddess interprets your dream</p>';
  const prompt=`You are a sacred Vedic tantric dream interpreter and priestess. A woman in her ${ph.name} phase (cycle day ${S.cycleDay}) under the ${mn.name} moon has had this dream: "${text}". Sacred symbols present: ${syms||'none noted'}. Interpret this dream through the lens of Vedic feminine wisdom, the goddess energy of ${ph.goddess} (${ph.archetype}), and menstrual cycle consciousness. What is her blood wisdom communicating through this dream? What symbols carry what messages? What action or integration does the dream call for? 4–5 sentences, deeply personal, poetic, and Vedic in tone.`;
  try{const r=await oracle(prompt,500);el.innerHTML=`<h4 style="color:var(--plum);margin-bottom:10px;">🌙 Dream Oracle Reading</h4><p style="font-size:14px;line-height:1.85;color:#5a3048;font-style:italic;">"${r}"</p>`;}
  catch(e){el.innerHTML='<p class="muted">Oracle connection interrupted. Try again.</p>';}
}

// GRATITUDE
function saveGratitude(){
  const vals=[1,2,3,4,5].map(i=>document.getElementById('g'+i).value.trim()).filter(Boolean);
  if(!vals.length){toast('Write at least one gratitude ✦');return;}
  const ph=phase();
  S.gratitudes.unshift({date:new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long'}),phase:ph.name,day:S.cycleDay,vals});
  save();[1,2,3,4,5].forEach(i=>document.getElementById('g'+i).value='');
  toast('✦ Gratitude saved');renderGEntries();
}

function renderGEntries(){
  const el=document.getElementById('g-entries');
  if(!S.gratitudes.length){el.innerHTML='';return;}
  el.innerHTML='<h4 style="margin-bottom:10px;">Past Gratitudes</h4>'+S.gratitudes.slice(0,5).map(g=>`<div class="logentry" style="border-color:var(--gold);">
    <p style="font-size:12px;color:var(--muted);margin-bottom:8px;">${g.date} · ${g.phase}</p>
    ${g.vals.map((v,i)=>`<p style="font-size:13px;line-height:1.65;margin-bottom:4px;"><span style="color:var(--gold);font-weight:600;">${i+1}.</span> ${v}</p>`).join('')}
  </div>`).join('');
}

async function aiGratitudeExpansion(){
  const vals=[1,2,3,4,5].map(i=>document.getElementById('g'+i).value.trim()).filter(Boolean);
  if(!vals.length){toast('Write your gratitudes first ✦');return;}
  const ph=phase();
  const el=document.getElementById('g-expand');el.style.display='block';
  el.innerHTML='<p class="muted italic ldots">The goddess expands your gratitude</p>';
  const prompt=`You are a sacred Vedic tantric guide. A woman in her ${ph.name} phase with goddess ${ph.goddess} has written these blood gratitudes: ${vals.join(' | ')}. Offer her a beautiful, deeply personal Vedic blessing that expands and honours what she has written — weaving in the specific goddess energy, mantra (${ph.mantra}), and the sacred Tantric understanding of menstrual blood as Raktam (divine essence). 3–4 sentences, warm, poetic, nourishing.`;
  try{const r=await oracle(prompt,400);el.innerHTML=`<h4 style="color:var(--gold);margin-bottom:10px;">✦ Goddess Blessing</h4><p style="font-size:14px;line-height:1.85;color:#5a3048;font-style:italic;">"${r}"</p>`;}
  catch(e){el.innerHTML='<p class="muted">Oracle connection interrupted.</p>';}
}

// SHADOW
function saveShadow(){
  const pattern=document.getElementById('sh-pattern').value.trim();
  if(!pattern){toast('Describe the shadow pattern first 🌑');return;}
  const ph=phase();
  S.shadows.unshift({date:new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long'}),phase:ph.name,day:S.cycleDay,pattern,shadow:document.getElementById('sh-shadow').value,goddess:document.getElementById('sh-goddess').value,vow:document.getElementById('sh-vow').value});
  save();['sh-pattern','sh-shadow','sh-goddess','sh-vow'].forEach(id=>document.getElementById(id).value='');
  toast('✦ Shadow work saved');renderShadowEntries();
}

function renderShadowEntries(){
  const el=document.getElementById('sh-entries');
  if(!S.shadows.length){el.innerHTML='';return;}
  el.innerHTML='<h4 style="margin-bottom:10px;margin-top:14px;">Past Shadow Work</h4>'+S.shadows.slice(0,3).map(s=>`<div class="logentry" style="border-color:#1a0a2e;">
    <p style="font-size:12px;color:var(--muted);margin-bottom:6px;">${s.date} · ${s.phase}</p>
    <p style="font-size:13px;font-weight:600;margin-bottom:4px;">${s.pattern}</p>
    ${s.vow?`<p style="font-size:13px;font-style:italic;color:#5a3048;">${s.vow}</p>`:''}
  </div>`).join('');
}

async function aiShadow(){
  const pattern=document.getElementById('sh-pattern').value.trim()||S.shadows[0]?.pattern;
  if(!pattern){toast('Describe the shadow pattern first 🌑');return;}
  const shadow=document.getElementById('sh-shadow').value.trim();
  const ph=phase();
  const el=document.getElementById('sh-ai');el.style.display='block';
  el.innerHTML='<p style="color:#d8c4e8;" class="ldots">Kali speaks from the dark temple</p>';
  const prompt=`You are the fierce and loving energy of Kali — Dark Goddess, Destroyer and Liberator — speaking to a woman in her ${ph.name} phase. She is in shadow work. The pattern she is meeting: "${pattern}". ${shadow?`Her shadow voice wrote: "${shadow.substring(0,200)}".`:''}. Speak as Kali — fierce, direct, deeply loving, cutting through illusion. What is the gift hidden in this shadow? What does this pattern actually protect? How does she integrate rather than fight it? What is the power waiting inside it? 4–5 sentences of Kali's wisdom — no bypassing, no false comfort, only fierce truth and love.`;
  try{const r=await oracle(prompt,500);el.innerHTML=`<h4 style="color:#d8a4ef;margin-bottom:10px;">🌑 Kali Speaks</h4><p style="font-size:14px;line-height:1.85;color:#d8c4e8;font-style:italic;">"${r}"</p>`;}
  catch(e){el.innerHTML='<p style="color:#d8c4e8;">Oracle connection interrupted. Kali waits in the silence.</p>';}
}

// BODY WISDOM
function saveBodyWisdom(){
  const feel=document.getElementById('bm-feel').value.trim();
  if(!feel){toast('Describe what you feel first ✦');return;}
  const ph=phase();
  const areas=[...document.querySelectorAll('#bm-areas .bodypart.on')].map(b=>b.textContent);
  S.bodyWisdoms.unshift({date:new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long'}),phase:ph.name,day:S.cycleDay,areas,feel,emotion:document.getElementById('bm-emotion').value,need:document.getElementById('bm-need').value});
  save();['bm-feel','bm-emotion','bm-need'].forEach(id=>document.getElementById(id).value='');
  document.querySelectorAll('#bm-areas .bodypart').forEach(b=>b.classList.remove('on'));
  toast('✦ Body wisdom saved');renderBodyEntries();
}

function renderBodyEntries(){
  const el=document.getElementById('bm-entries');
  if(!S.bodyWisdoms.length){el.innerHTML='';return;}
  el.innerHTML='<h4 style="margin-bottom:10px;">Past Body Wisdom</h4>'+S.bodyWisdoms.slice(0,3).map(b=>`<div class="logentry" style="border-color:var(--orange);">
    <p style="font-size:12px;color:var(--muted);margin-bottom:6px;">${b.date} · ${b.phase}</p>
    ${b.areas.length?`<div style="margin-bottom:6px;">${b.areas.map(a=>`<span class="tag" style="background:#fff3e0;color:var(--orange);font-size:11px;">${a}</span>`).join('')}</div>`:''}
    <p style="font-size:13px;line-height:1.65;">${b.feel}</p>
    ${b.need?`<p style="font-size:12px;color:var(--muted);margin-top:4px;font-style:italic;">Needs: ${b.need}</p>`:''}
  </div>`).join('');
}

async function aiBodyWisdom(){
  const feel=document.getElementById('bm-feel').value.trim();
  if(!feel){toast('Describe what you feel first ✦');return;}
  const areas=[...document.querySelectorAll('#bm-areas .bodypart.on')].map(b=>b.textContent).join(', ');
  const emotion=document.getElementById('bm-emotion').value;
  const ph=phase();
  const el=document.getElementById('bm-ai');el.style.display='block';
  el.innerHTML='<p class="muted italic ldots">The body oracle speaks</p>';
  const prompt=`You are a sacred Vedic body wisdom guide, Ayurvedic practitioner, and tantric priestess. A woman in her ${ph.name} phase (cycle day ${S.cycleDay}) with Goddess ${ph.goddess} energy describes these body sensations: "${feel}". Areas of sensation: ${areas||'not specified'}. Emotional correlation: "${emotion||'not specified'}". Offer deep body-wisdom interpretation through the lens of Vedic and Tantric understanding — the chakra correlations, the emotional intelligence the body is demonstrating, the ojas and prana movement happening, and what sacred action or rest the body is calling for. 4–5 sentences, deeply personal, specific, and Vedic in tone.`;
  try{const r=await oracle(prompt,500);el.innerHTML=`<h4 style="color:var(--orange);margin-bottom:10px;">🌺 Body Oracle Reading</h4><p style="font-size:14px;line-height:1.85;color:#5a3048;font-style:italic;">"${r}"</p>`;}
  catch(e){el.innerHTML='<p class="muted">Oracle connection interrupted. Your body speaks — listen quietly.</p>';}
}

function renderOracle(ph,mn){
  document.getElementById('or-goddess').textContent=ph.goddess;
  document.getElementById('or-moon-e').textContent=mn.emoji;
  document.getElementById('or-ctx').textContent=`${ph.name} Phase · Day ${S.cycleDay} · ${mn.name}`;
  document.getElementById('or-phase-lbl').textContent=`Goddess ${ph.goddess} — ${ph.archetype}`;
  document.getElementById('or-response-card').style.borderColor=ph.color;
  document.getElementById('or-mantra').textContent=ph.mantra;document.getElementById('or-mantra').style.color=ph.color;
  document.getElementById('or-wisdom').textContent='"'+ph.wisdom+'"';
  const qs=['Guide me through today\'s practice','What does my blood wisdom say today?',`How do I work with ${mn.name}?`,`What is ${ph.goddess} asking of me?`,'How do I begin Ojas transmutation?','What shadow needs integration?','Guide me through hydromancy','How do I create a blood sigil?','What does my body need today?','Speak to me about my lineage'];
  document.getElementById('or-quick').innerHTML=qs.map(q=>`<button class="btn btn-ghost btn-xs" style="border-color:var(--rose);color:var(--rose);" onclick="document.getElementById('or-input').value='${q}';askOracle()">${q}</button>`).join('');
}

async function askOracle(){
  const input=document.getElementById('or-input').value.trim();
  const ph=phase(),mn=moon();
  const el=document.getElementById('or-response');
  el.innerHTML='<p class="muted italic ldots">The goddess weaves your transmission</p>';
  const prompt=`You are a sacred Vedic tantric guide, oracle, and priestess speaking as the energy of Goddess ${ph.goddess} (${ph.archetype}). The woman before you is in her ${ph.name} phase (cycle day ${S.cycleDay}). The moon is in ${mn.name} (${mn.energy} energy). Her mantra is ${ph.mantra}. Her element is ${ph.element}. ${input?`She asks: "${input}"`:'Offer her today\'s sacred transmission.'} Speak in 4–5 sentences with warm, devotional, poetic Vedic tantric wisdom. Be intimate, specific to her phase and lunar position, and deeply encouraging. Speak directly as the goddess would — with fierce love and ancient knowing.`;
  try{const r=await oracle(prompt,600);el.innerHTML=`<p style="font-size:15px;line-height:1.9;color:#5a3048;font-style:italic;">"${r}"</p>`;}
  catch(e){el.innerHTML='<p class="muted italic">The divine feminine whispers: return to your breath, your blood, your body. The answer is already within.</p>';}
}

async function fetchDaily(){document.getElementById('or-input').value='';await askOracle();}

async function bloodWisdom(){
  const ph=phase();const el=document.getElementById('or-blood');el.style.display='block';
  el.innerHTML='<span class="ldots">Blood wisdom arising</span>';
  const prompt=`You are a sacred Tantric priestess and Vedic blood wisdom teacher. A woman in her ${ph.name} phase (cycle day ${S.cycleDay}) seeks blood wisdom. Share deep, specific, reverent Vedic Tantric understanding of working with menstrual blood — Raktam (sacred fluid of life), Shakti's direct manifestation — specifically for her current phase and goddess energy of ${ph.goddess}. Reference relevant practices, mantras, and the deeper spiritual significance of her blood right now. 4–5 sentences, poetic and sacred.`;
  try{const r=await oracle(prompt,400);el.textContent='"'+r+'"';}
  catch(e){el.innerHTML='<p class="muted">Oracle connection interrupted. Return and try again.</p>';}
}

function askAbout(topic){go('oracle');document.getElementById('or-input').value=`Guide me through the practice of ${topic}. Give me detailed Vedic tantric wisdom and sacred instruction.`;askOracle();}

function renderInsights(ph){
  document.getElementById('ins-stats').innerHTML=`
    <div class="stat"><div class="stat-n" style="color:${ph.color};">${S.cycleDay}</div><div class="stat-l">Cycle Day</div></div>
    <div class="stat"><div class="stat-n" style="color:var(--plum);">${S.entries.length}</div><div class="stat-l">Journal Entries</div></div>
    <div class="stat"><div class="stat-n" style="color:var(--gold);">${S.mantraCnt}</div><div class="stat-l">Mantras</div></div>
    <div class="stat"><div class="stat-n" style="color:var(--navy);">${S.dreams.length}</div><div class="stat-l">Dream Logs</div></div>`;
  document.getElementById('ins-phase-bars').innerHTML=PHASES.map(p=>{
    const active=p.name===ph.name;
    return`<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
      <span style="font-size:12px;font-weight:600;color:${p.color};min-width:82px;">${p.name}</span>
      <div style="flex:1;background:${p.light};border-radius:6px;height:8px;overflow:hidden;">
        <div style="background:${p.color};height:8px;border-radius:6px;width:${active?'100%':p.name==='Follicular'?'65%':p.name==='Ovulatory'?'85%':'45%'};opacity:${active?1:0.4};"></div>
      </div>
      ${active?`<span class="tag" style="background:${p.color};color:#fff;font-size:10px;">Now</span>`:''}
    </div>`;
  }).join('');
  document.getElementById('ins-goddesses').innerHTML=PHASES.map(p=>`<div class="irow">
    <div class="iicon" style="background:${p.light};"><span style="font-size:10px;color:${p.color};font-weight:700;">${p.goddess.substring(0,3).toUpperCase()}</span></div>
    <div><p style="font-size:13px;font-weight:600;color:${p.color};margin:0 0 2px;">${p.goddess} · Days ${p.days[0]}–${p.days[1]}</p><p class="muted" style="font-size:12px;margin:0;">${p.archetype}</p></div>
    ${p.name===ph.name?`<span class="tag" style="background:${p.color};color:#fff;">Active</span>`:''}
  </div>`).join('');
  document.getElementById('ins-blood-lib').innerHTML=[
    {t:'Raktam — Sacred Blood',d:'In Tantra, menstrual blood is Raktam — the sacred fluid of life, Shakti\'s nectar, creative potency, healing essence, and wisdom carrier. Not waste. Not impurity. Divinity in liquid form.'},
    {t:'Ojas — Vital Life Force',d:'Your blood contains concentrated ojas. When redirected upward through Ojas Urdhva Gamana, it nourishes the brain, awakens the spiritual centres, and transforms the cycle itself over time.'},
    {t:'Red Moon & White Moon',d:'When menstruation aligns with the full moon: the Red Moon cycle — cycle of the healer and priestess. Aligned with new moon: the White Moon cycle — cycle of the mother and creatrix.'},
    {t:'Sacred Disposal',d:'Blood returned to earth as offering, to water with prayer, or transformed through fire visualisation — never discarded without intention. Every drop of sacred blood deserves a sacred return.'},
  ].map(b=>`<div style="padding:12px 0;border-bottom:1px solid var(--border);"><h4 style="color:var(--rose);margin-bottom:4px;">${b.t}</h4><p style="font-size:13px;color:#5a3048;line-height:1.7;margin:0;">${b.d}</p></div>`).join('');
}

async function cycleAnalysis(){
  const ph=phase(),mn=moon();
  const el=document.getElementById('ins-analysis');el.style.display='block';
  el.innerHTML='<span class="ldots">Weaving your sacred cycle reading</span>';
  const prompt=`You are a sacred Vedic tantric cycle guide and priestess. Offer a deeply personal sacred cycle analysis for a woman currently in her ${ph.name} phase (cycle day ${S.cycleDay}), ${mn.name} moon (${mn.energy} energy), Goddess ${ph.goddess} (${ph.archetype}), mantra ${ph.mantra}. She has ${S.entries.length} journal entries, ${S.dreams.length} dream logs, and ${S.gratitudes.length} gratitude practices. Offer: (1) a reading of her current phase and moon energies combined, (2) what this specific moon-cycle combination means for her practice this week, (3) 3 specific sacred recommendations for deepening her Tantric cycle practice right now. 5–6 sentences, warm, deeply Vedic, priestess-voiced, personally relevant.`;
  try{const r=await oracle(prompt,700);el.innerHTML=`<p style="font-size:14px;line-height:1.9;color:#5a3048;font-style:italic;">"${r}"</p>`;}
  catch(e){el.innerHTML='<p class="muted">Oracle connection interrupted. Please try again.</p>';}
}

async function analysePatterns(){
  const el=document.getElementById('j-patterns-result');el.innerHTML='<div class="card"><p class="muted italic ldots">Analysing your sacred patterns</p></div>';
  if(S.entries.length<2){el.innerHTML='<div class="card"><p class="muted italic">Write at least a few journal entries to receive pattern insights.</p></div>';return;}
  const summary=S.entries.slice(0,8).map(e=>`Day ${e.day} (${e.phase}): energy ${e.energy}/10, mood ${e.mood||'unrecorded'}, symptoms: ${e.symptoms?.join(',')||'none'}, "${e.text.substring(0,80)}..."`).join('\n');
  const prompt=`You are a sacred Vedic tantric cycle wisdom teacher. Analyse these journal entries from a woman's menstrual cycle practice and identify meaningful patterns in her energy, emotions, and spiritual experience across phases. Be specific, personally insightful, and frame everything through Vedic feminine wisdom and goddess archetypes. Offer 3 key pattern observations and 2 sacred suggestions for deepening practice. Warm priestess tone, 5–6 sentences.\n\nEntries:\n${summary}`;
  try{const r=await oracle(prompt,600);el.innerHTML=`<div class="card" style="border-color:var(--rose);"><h4 style="color:var(--rose);margin-bottom:10px;">✦ Your Sacred Pattern Reading</h4><p style="font-size:14px;line-height:1.9;color:#5a3048;font-style:italic;">"${r}"</p></div>`;}
  catch(e){el.innerHTML='<div class="card"><p class="muted">Oracle connection interrupted. Try again.</p></div>';}
}

async function aiExpandEntry(){
  const text=document.getElementById('j-text').value.trim();
  if(!text){toast('Write something first ✦');return;}
  const ph=phase(),mn=moon();
  const prompt=`You are a sacred Vedic tantric guide. A woman in her ${ph.name} phase (cycle day ${S.cycleDay}), ${mn.name} moon, Goddess ${ph.goddess} energy has written this sacred journal entry: "${text}". Deepen and expand her writing in her own voice — preserve her words, deepen the spiritual insight, weave in Vedic wisdom and goddess energy. Write 2–3 additional sentences in first person that feel like her own deeper knowing emerging. Do not introduce yourself or explain what you are doing — simply write the expansion.`;
  try{const r=await oracle(prompt,400);document.getElementById('j-text').value=text+'\n\n'+r;toast('✦ Deepened by the goddess');}
  catch(e){toast('Oracle connection interrupted');}
}

function j2oracle(){const t=document.getElementById('j-text').value.trim();if(!t){toast('Write something first ✦');return;}go('oracle');document.getElementById('or-input').value=`I have written in my sacred journal: "${t.substring(0,200)}..." Please offer me Vedic tantric wisdom in response.`;askOracle();}

// =========================================================
// BREATHWORK
// =========================================================
let ojasT=null,ojasPhase=0,ojasBreaths=0,ojasRun=false,ojasPause=false;
const OJAS=[
  {t:"Inhale\nrising",ins:"Breathe in deeply… draw the golden light from your womb upward through your spine…",dur:4000},
  {t:"Hold\nat crown",ins:"Hold the light at your crown chakra… feel it nourishing your spiritual centres…",dur:2000},
  {t:"Exhale\nsealing",ins:"Exhale gently… seal the light within the higher centres…",dur:4000},
  {t:"Rest\nreceiving",ins:"Rest in the stillness… feel the ojas nourishing your brain and third eye…",dur:2000},
];
function startOjas(){
  document.getElementById('ojas-card').style.display='block';
  document.getElementById('ojas-start-btn').textContent='Practice Active ✦';
  document.getElementById('ojas-start-btn').disabled=true;
  ojasRun=true;ojasPause=false;ojasBreaths=0;ojasPhase=0;runOjas();
}
function runOjas(){
  if(!ojasRun||ojasPause)return;
  const p=OJAS[ojasPhase%4];
  document.getElementById('ojas-orb-txt').textContent=p.t;
  document.getElementById('ojas-instr').textContent=p.ins;
  if(ojasPhase%4===0){ojasBreaths++;document.getElementById('ojas-count').textContent=Math.min(ojasBreaths,21);document.getElementById('ojas-prog').style.width=Math.min(ojasBreaths/21*100,100)+'%';}
  ojasPhase++;
  if(ojasBreaths>21){stopOjas();toast('✦ 21 breaths complete — Ojas has risen!');return;}
  ojasT=setTimeout(runOjas,p.dur);
}
function pauseOjas(){ojasPause=!ojasPause;document.getElementById('ojas-pause-btn').textContent=ojasPause?'Resume':'Pause';if(!ojasPause)runOjas();}
function stopOjas(){ojasRun=false;clearTimeout(ojasT);document.getElementById('ojas-card').style.display='none';document.getElementById('ojas-start-btn').textContent='Begin Ojas Practice ✦';document.getElementById('ojas-start-btn').disabled=false;document.getElementById('ojas-prog').style.width='0%';}

let nadiT=null,nadiPhase=0,nadiRounds=0,nadiRun=false;
const NADI=[
  {t:"Close right\nInhale left",c:"#7b1fa2",dur:4000},{t:"Close both\nHold",c:"#1a237e",dur:4000},
  {t:"Close left\nExhale right",c:"#7b1fa2",dur:4000},{t:"Inhale right",c:"#c2185b",dur:4000},
  {t:"Close both\nHold",c:"#1a237e",dur:4000},{t:"Exhale left",c:"#7b1fa2",dur:4000},
];
function startNadi(){
  nadiRounds=0;nadiPhase=0;nadiRun=true;
  document.getElementById('nadi-start').style.display='none';
  document.getElementById('nadi-stop').style.display='inline-block';
  runNadi();
}
function runNadi(){
  if(!nadiRun)return;
  const tgt=parseInt(document.getElementById('nadi-tgt').textContent);
  if(nadiRounds>=tgt){stopNadi();toast(`✦ ${tgt} rounds complete!`);return;}
  const p=NADI[nadiPhase%6];
  document.getElementById('nadi-orb-txt').textContent=p.t;
  document.getElementById('nadi-orb').style.background=`linear-gradient(135deg,${p.c},${p.c}aa)`;
  document.getElementById('nadi-instr').textContent=`Round ${nadiRounds+1} of ${tgt} — breathe with full awareness`;
  if(nadiPhase%6===0&&nadiPhase>0){nadiRounds++;document.getElementById('nadi-cnt').textContent=nadiRounds;}
  nadiPhase++;nadiT=setTimeout(runNadi,p.dur);
}
function stopNadi(){nadiRun=false;clearTimeout(nadiT);document.getElementById('nadi-start').style.display='inline-block';document.getElementById('nadi-stop').style.display='none';document.getElementById('nadi-orb-txt').textContent='Ready';document.getElementById('nadi-instr').textContent='Set rounds and press start';}

function tapMantra(){
  S.mantraCnt++;
  document.getElementById('mantra-cnt').textContent=Math.min(S.mantraCnt,108);
  document.getElementById('mantra-ring').style.strokeDashoffset=427*(1-Math.min(S.mantraCnt/108,1));
  if(S.mantraCnt>=108){document.getElementById('mantra-done').style.display='block';document.getElementById('mantra-tap').disabled=true;document.getElementById('mantra-tap').style.opacity='.5';}
  save();
}
function resetMantra(){S.mantraCnt=0;document.getElementById('mantra-cnt').textContent='0';document.getElementById('mantra-ring').style.strokeDashoffset=427;document.getElementById('mantra-done').style.display='none';document.getElementById('mantra-tap').disabled=false;document.getElementById('mantra-tap').style.opacity='1';save();}
function updMantra(){document.getElementById('mantra-disp').textContent=document.getElementById('mantra-sel').value;}

// =========================================================
// TABS
// =========================================================
function ptab(id,btn){switchTab('#screen-practices .tp','#screen-practices .tab','pt-'+id,btn);}
function jtab(id,btn){switchTab('#screen-journal .tp','#screen-journal .tab','jt-'+id,btn);}
function btab(id,btn){switchTab('#screen-breathwork .tp','#screen-breathwork .tab','bt-'+id,btn);}
function switchTab(panes,tabs,activeId,activeBtn){
  document.querySelectorAll(panes).forEach(p=>p.classList.remove('active'));
  document.querySelectorAll(tabs).forEach(b=>b.classList.remove('active'));
  document.getElementById(activeId).classList.add('active');
  activeBtn.classList.add('active');
}

// =========================================================
// CYCLE UPDATE
// =========================================================
function updateCycle(){
  const start=document.getElementById('tr-start').value;
  const len=parseInt(document.getElementById('tr-len').value);
  S.cycleLen=len;
  if(start){
    S.cycleStart=start;
    const diff=Math.floor((Date.now()-new Date(start).getTime())/86400000)+1;
    S.cycleDay=Math.max(1,Math.min(len,diff));
  }
  save();render();
}

function saveQuickLog(){
  const syms=[...document.querySelectorAll('#h-syms .sym.on')].map(b=>b.textContent);
  const ph=phase();
  S.cycleLogs.unshift({date:new Date().toLocaleDateString('en-GB',{day:'numeric',month:'short'}),phase:ph.name,symptoms:syms,energy:document.getElementById('h-e').value});
  save();document.querySelectorAll('#h-syms .sym').forEach(b=>b.classList.remove('on'));
  toast('✦ Daily log saved');
}

// =========================================================
// ORACLE API — calls Netlify function
// =========================================================
async function oracle(prompt,maxTokens=600){
  const res=await fetch('/api/oracle',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt,maxTokens})});
  const data=await res.json();
  return data.text||'The goddess speaks in silence today.';
}

// =========================================================
// INIT
// =========================================================
window.addEventListener('DOMContentLoaded',()=>{
  if(S.cycleStart){document.getElementById('tr-start').value=S.cycleStart;updateCycle();}
  render();
});
</script>

</body>
</html>
