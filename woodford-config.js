// ════════════════════════════════════════════════════════════════
//  WOODFORD RFC — config.js
//  Last updated: April 2026
//  ── WEEKLY sections marked with 🔁
//  ── Setup sections marked with 🔧 (rarely change)
// ════════════════════════════════════════════════════════════════

const CLUB = {

  // ── 🔧 BRANDING ───────────────────────────────────────────────
  name:            "Woodford RFC",
  subtitle:        "Set Piece Guide",
  badge:           "WRFC",
  primaryColor:    "#6b2fa0",       // purple — buttons, headings, highlights
  accentColor:     "#f0f0f0",       // white — secondary accent
  dangerColor:     "#d94040",       // red — warnings, hinge markers
  bgColor:         "#1e2422",       // dark charcoal background
  surfaceColor:    "#252e2b",       // card background
  borderColor:     "#2e3a36",       // card borders


  // ── 🔁 MATCH INFO (update every week) ────────────────────────
  opposition:      "Bristol RFC",
  matchDate:       "2026-04-12",
  matchVenue:      "Away",
  matchNotes:      "Bristol like to attack the front of the lineout early — watch their T position.",


  // ── 🔁 STARTING FORWARDS (update every week) ─────────────────
  starting: [
    { number: 1,  name: "TOM HARRIS",    position: "Loosehead Prop",    caller: null },
    { number: 2,  name: "JAMES KELLY",   position: "Hooker",            caller: "A", callerColor: "gold" },
    { number: 3,  name: "RORY FINN",     position: "Tighthead Prop",    caller: null },
    { number: 4,  name: "SEAN MURPHY",   position: "Lock",              caller: "B", callerColor: "green" },
    { number: 5,  name: "DAVE O'BRIEN",  position: "Lock",              caller: null },
    { number: 6,  name: "CIAN WALSH",    position: "Blindside Flanker", caller: null },
    { number: 7,  name: "PATRICK RYAN",  position: "Openside Flanker",  caller: null },
    { number: 8,  name: "LUKE DOYLE",    position: "Number 8",          caller: null },
  ],


  // ── 🔁 BENCH FORWARDS (update every week) ────────────────────
  bench: [
    { number: 16, name: "CONOR WHITE",   position: "Prop",              caller: null },
    { number: 17, name: "MARK HUGHES",   position: "Hooker",            caller: null },
    { number: 18, name: "ALAN SCOTT",    position: "Prop",              caller: null },
    { number: 19, name: "JACK BRENNAN",  position: "Second Row",        caller: "C", callerColor: "blue" },
    { number: 20, name: "NIALL DALY",    position: "Back Row",          caller: null },
  ],


  // ── 🔁 LINEOUT POSITIONS (update every week) ──────────────────
  lineout: {
    sevenMan: {
      starting: {
        throw:  "KELLY",
        pos:    ["HARRIS", "MURPHY", "WALSH", "O'BRIEN", "RYAN", "FINN", "DOYLE"],
        jumper: 3,
      },
      cover1: {
        throw:  "HUGHES",
        pos:    ["HARRIS", "BRENNAN", "WALSH", "O'BRIEN", "RYAN", "FINN", "DOYLE"],
        jumper: 3,
        changes: "Hughes for Kelly · Brennan for Murphy",
      },
      finishers: {
        throw:  "WHITE",
        pos:    ["SCOTT", "MURPHY", "WALSH", "O'BRIEN", "RYAN", "FINN", "DOYLE"],
        jumper: 3,
        changes: "White throws · Scott for Harris",
      },
    },
    sixMan: {
      starting: {
        throw:  "KELLY",
        pos:    ["HARRIS", "MURPHY", "WALSH", "O'BRIEN", "RYAN", "FINN"],
        jumper: 3,
      },
      cover1: {
        throw:  "HUGHES",
        pos:    ["HARRIS", "BRENNAN", "WALSH", "O'BRIEN", "RYAN", "FINN"],
        jumper: 3,
        changes: "Hughes for Kelly · Brennan for Murphy",
      },
      finishers: {
        throw:  "WHITE",
        pos:    ["SCOTT", "MURPHY", "WALSH", "O'BRIEN", "RYAN", "FINN"],
        jumper: 3,
        changes: "White throws · Scott for Harris",
      },
    },
    fiveMan: {
      starting: {
        throw:  "KELLY",
        pos:    ["HARRIS", "MURPHY", "WALSH", "O'BRIEN", "RYAN"],
        jumper: 3,
      },
      cover1: {
        throw:  "HUGHES",
        pos:    ["HARRIS", "BRENNAN", "WALSH", "O'BRIEN", "RYAN"],
        jumper: 3,
        changes: "Hughes for Kelly · Brennan for Murphy",
      },
      finishers: {
        throw:  "WHITE",
        pos:    ["SCOTT", "MURPHY", "WALSH", "O'BRIEN", "RYAN"],
        jumper: 3,
        changes: "White throws · Scott for Harris",
      },
    },
  },


  // ── 🔧 DEFENSIVE LINEOUT ──────────────────────────────────────
  defensiveLineout: {
    hooker: { name: "HOO", color: "blue" },
    positions: [
      { name: "1",  color: "blue"  },
      { name: "T",  color: "green" },
      { name: "E",  color: "red"   },
      { name: "M",  color: "red"   },
      { name: "P",  color: "green" },
      { name: "O",  color: "blue"  },
      { name: "7",  color: "blue"  },
    ],
  },


  // ── 🔧 CALLS & STARTERS ───────────────────────────────────────
  tempoCode: "TEMPO",
  calls: {
    starters: [
      { trigger: "Last man in (on LO caller)",   call: "TRIP WIRE"  },
      { trigger: "On a jumper's call",            call: "ON CALL"    },
      { trigger: "Immediate movement on call",    call: "CHECK CALL" },
      { trigger: "Recall / Restart (ref issue)",  call: "SET"        },
    ],
    checkCalls: ["T", "E", "M", "P", "O"],
    jumperCalls: [
      { trigger: "Off the top",     call: "SKY"           },
      { trigger: "Down and pop",    call: "BOUNCE"        },
      { trigger: "Drive / maul",    call: "PRE CALL/CLUB" },
      { trigger: "9 as a Forward",  call: "PLUS 1"        },
    ],
  },


  // ── 🔧 TABS ───────────────────────────────────────────────────
  tabs: [
    { id: "gameday",    label: "Game Day",    number: 1, enabled: true  },
    { id: "principles", label: "Principles",  number: 2, enabled: true  },
    { id: "calls",      label: "Calls",       number: 3, enabled: true  },
    { id: "maul",       label: "Maul Attack", number: 4, enabled: true  },
    { id: "formations", label: "Formations",  number: 5, enabled: true  },
    { id: "defence",    label: "Defence",     number: 6, enabled: true  },
    { id: "scrum",      label: "Scrum",       number: 7, enabled: true  },
    { id: "restarts",   label: "Restarts",    number: 8, enabled: false },
    { id: "opposition", label: "Opposition",  number: 9, enabled: false },
  ],


  // ── 🔧 PRINCIPLES ─────────────────────────────────────────────
  principles: [
    { letter: "P", title: "Process",  body: "Pre Call early, Know your role. Vary the Picture. Tails in Early to tell Hooker. Check if easier!", tag: "FIRST PRIORITY" },
    { letter: "M", title: "Movement", body: "Win the Race / Win the Space. Be detailed, sell your Dummy. WOTB.", tag: "WIN THE RACE" },
    { letter: "T", title: "Throw",    body: "Effective throw and hit the target — but always ETU. Check call or ZERO option.", tag: "EXECUTION / BE SMARTER" },
    { letter: "J", title: "Jump",     body: "Full extension in the air. Elbows tucked. Commit to the ball.", tag: "FULL EXTENSION" },
    { letter: "L", title: "Lift",     body: "Meet the jumper off the floor. Stay close until the end. Full extension throughout.", tag: "STAY CLOSE · CHEST-CHEST" },
    { letter: "F", title: "Finish",   body: "Drive, Sky or Bounce. Finish all aspects with purpose and intent. Ends when the backs have the ball.", tag: "INTENT / GET BIG" },
  ],


  // ── 🔧 SCRUM ──────────────────────────────────────────────────
  scrumPillars: [
    { icon: "⬇", title: "Lower Position",     body: "100% of our scrums — lower position. No exceptions. Dominate the height battle." },
    { icon: "🏉", title: "Own Ball — In & Out", body: "Clean strike on 2, not on 9's choice. Fast, decisive. Ball in, ball out on our terms." },
    { icon: "💥", title: "Defensive Fight",    body: "Stay in the fight defensively. Collective drive on strike through TightHead." },
    { icon: "🤝", title: "Bind & Lock",        body: "Full arm bind. Lock the hips. Drive from the legs — not the back." },
  ],
  scrumCalls: [
    { phase: "Engagement", call: "CROUCH · BIND · SET" },
    { phase: "Strike",     call: "ON 2"                },
    { phase: "Drive",      call: "PUSH ON 9"           },
  ],
  scrumMantras: [
    "Low Man Wins",
    "Collective Drive — Together",
    "First to Dominate · First to Score",
  ],


  // ── 🔧 MAUL ATTACK ────────────────────────────────────────────
  maul: {
    roles: [
      { icon: "🎯", name: "TARGET",   body: "The Jumper. Triple extension on landing. Low and spread feet. Establish the anchor of the maul." },
      { icon: "⬆️", name: "POINTERS", body: "The Lifters. Slightly turn on the way down. Stay engaged, protect and attack forward — Point / Spear." },
      { icon: "🏉", name: "BALLERS",  body: "+1 or first receiver. Gets the ball — set the height right to receive cleanly and distribute." },
      { icon: "🔩", name: "SCREWS",   body: "Protect the Baller and add positive support to Pointers. Screws shoulder on to bums or into gaps to create distance between opposition." },
      { icon: "⚙️", name: "BACKERS",  body: "Fill space first. Effect change. Anticipate changes of direction, bodies and breakaway." },
    ],
    note: "Attacking Maul — Screws closer to the touchline head inside, further from the touchline head out.\n* Hooker becomes a Screw when throwing to the front of the LO instead of a Backer, for speed and safety.",
    mantras: [
      "Patience to Build Pressure · Find the Leak · \"Be Water\"",
      "Expect the Unexpected · Effect Change & Change the Effect",
    ],
  },

};
// ════════════════════════════════════════════════════════════════
//  END OF CONFIG
// ════════════════════════════════════════════════════════════════
