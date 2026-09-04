/* =====================================================================
   STARTING DATA
   ---------------------------------------------------------------------
   Games are the source of truth now: each game has a date, opponent,
   score, and a box score (per-player line for that game). Season
   totals, win-loss record, and career leaders are all calculated from
   these games automatically. This starter data is just illustrative —
   replace it with real games using "Edit Data" in the UI.
===================================================================== */
const STARTER_DATA = {
  teamName: "Wildcats",
  seasons: [
    {
      year: 2023,
      games: [
        { id:"g1", date:"2023-04-15", opponent:"Cedar Creek", teamScore:11, oppScore:6,
          playerStats:[
            {name:"M. Alvarez",ab:4,h:2,hr:0,rbi:2,r:2,bb:0,sb:1},
            {name:"J. Chen",ab:3,h:1,hr:0,rbi:1,r:1,bb:1,sb:0},
            {name:"D. Osei",ab:4,h:2,hr:1,rbi:3,r:2,bb:0,sb:0},
            {name:"T. Nguyen",ab:3,h:1,hr:0,rbi:0,r:1,bb:0,sb:1},
            {name:"R. Palmer",ab:3,h:1,hr:0,rbi:1,r:1,bb:1,sb:0}
          ]},
        { id:"g2", date:"2023-05-06", opponent:"Maple Grove", teamScore:7, oppScore:9,
          playerStats:[
            {name:"M. Alvarez",ab:4,h:1,hr:0,rbi:1,r:1,bb:0,sb:0},
            {name:"J. Chen",ab:4,h:2,hr:0,rbi:1,r:1,bb:0,sb:1},
            {name:"D. Osei",ab:4,h:2,hr:1,rbi:2,r:2,bb:0,sb:0},
            {name:"T. Nguyen",ab:3,h:0,hr:0,rbi:0,r:0,bb:1,sb:0},
            {name:"R. Palmer",ab:3,h:1,hr:0,rbi:1,r:1,bb:0,sb:1}
          ]},
        { id:"g3", date:"2023-06-10", opponent:"Lakeside", teamScore:10, oppScore:4,
          playerStats:[
            {name:"M. Alvarez",ab:4,h:2,hr:0,rbi:2,r:2,bb:1,sb:1},
            {name:"J. Chen",ab:3,h:1,hr:0,rbi:0,r:1,bb:1,sb:0},
            {name:"D. Osei",ab:4,h:3,hr:1,rbi:4,r:2,bb:0,sb:0},
            {name:"T. Nguyen",ab:3,h:1,hr:0,rbi:1,r:1,bb:0,sb:2},
            {name:"R. Palmer",ab:3,h:2,hr:0,rbi:1,r:2,bb:0,sb:0}
          ]}
      ]
    },
    {
      year: 2024,
      games: [
        { id:"g4", date:"2024-04-13", opponent:"Cedar Creek", teamScore:9, oppScore:5,
          playerStats:[
            {name:"M. Alvarez",ab:4,h:2,hr:1,rbi:2,r:2,bb:0,sb:1},
            {name:"J. Chen",ab:4,h:2,hr:0,rbi:1,r:1,bb:1,sb:0},
            {name:"D. Osei",ab:4,h:2,hr:1,rbi:3,r:2,bb:0,sb:0},
            {name:"K. Brooks",ab:3,h:1,hr:0,rbi:0,r:1,bb:0,sb:0}
          ]},
        { id:"g5", date:"2024-05-18", opponent:"Maple Grove", teamScore:14, oppScore:8,
          playerStats:[
            {name:"M. Alvarez",ab:4,h:2,hr:0,rbi:2,r:2,bb:1,sb:1},
            {name:"J. Chen",ab:4,h:3,hr:1,rbi:3,r:2,bb:0,sb:0},
            {name:"D. Osei",ab:4,h:3,hr:2,rbi:5,r:3,bb:0,sb:0},
            {name:"T. Nguyen",ab:3,h:1,hr:0,rbi:0,r:1,bb:1,sb:2},
            {name:"R. Palmer",ab:3,h:1,hr:0,rbi:1,r:1,bb:0,sb:0},
            {name:"K. Brooks",ab:3,h:1,hr:0,rbi:1,r:1,bb:0,sb:0}
          ]},
        { id:"g6", date:"2024-07-01", opponent:"Lakeside", teamScore:6, oppScore:7,
          playerStats:[
            {name:"M. Alvarez",ab:4,h:1,hr:0,rbi:1,r:1,bb:0,sb:0},
            {name:"J. Chen",ab:4,h:1,hr:0,rbi:0,r:1,bb:1,sb:1},
            {name:"D. Osei",ab:4,h:2,hr:1,rbi:2,r:1,bb:0,sb:0},
            {name:"R. Palmer",ab:3,h:1,hr:0,rbi:1,r:1,bb:1,sb:1},
            {name:"K. Brooks",ab:3,h:0,hr:0,rbi:0,r:0,bb:0,sb:0}
          ]}
      ]
    },
    {
      year: 2025,
      roster: ["A. Kim"],
      games: [
        { id:"g7", date:"2025-04-12", opponent:"Cedar Creek", teamScore:8, oppScore:3,
          playerStats:[
            {name:"M. Alvarez",ab:4,h:2,hr:1,rbi:2,r:2,bb:0,sb:0},
            {name:"J. Chen",ab:4,h:1,hr:0,rbi:1,r:1,bb:1,sb:0},
            {name:"D. Osei",ab:4,h:2,hr:1,rbi:2,r:2,bb:0,sb:1},
            {name:"R. Palmer",ab:3,h:2,hr:0,rbi:1,r:1,bb:0,sb:0},
            {name:"K. Brooks",ab:3,h:1,hr:0,rbi:1,r:1,bb:0,sb:0},
            {name:"S. Rivera",ab:3,h:1,hr:0,rbi:0,r:1,bb:0,sb:1}
          ]},
        { id:"g8", date:"2025-05-24", opponent:"Maple Grove", teamScore:12, oppScore:9,
          playerStats:[
            {name:"M. Alvarez",ab:4,h:2,hr:1,rbi:3,r:2,bb:1,sb:1},
            {name:"J. Chen",ab:4,h:2,hr:0,rbi:1,r:2,bb:0,sb:0},
            {name:"D. Osei",ab:4,h:3,hr:1,rbi:3,r:2,bb:0,sb:0},
            {name:"R. Palmer",ab:3,h:1,hr:0,rbi:1,r:1,bb:1,sb:1},
            {name:"K. Brooks",ab:3,h:1,hr:1,rbi:2,r:1,bb:0,sb:0},
            {name:"S. Rivera",ab:3,h:1,hr:0,rbi:0,r:1,bb:0,sb:0}
          ]},
        { id:"g9", date:"2025-07-19", opponent:"Lakeside", teamScore:7, oppScore:5,
          playerStats:[
            {name:"M. Alvarez",ab:4,h:1,hr:0,rbi:1,r:1,bb:1,sb:0},
            {name:"J. Chen",ab:4,h:2,hr:0,rbi:1,r:1,bb:0,sb:1},
            {name:"D. Osei",ab:4,h:2,hr:0,rbi:1,r:2,bb:0,sb:0},
            {name:"R. Palmer",ab:3,h:1,hr:0,rbi:0,r:1,bb:0,sb:1},
            {name:"K. Brooks",ab:3,h:1,hr:0,rbi:1,r:1,bb:0,sb:0},
            {name:"S. Rivera",ab:3,h:1,hr:0,rbi:0,r:0,bb:0,sb:1}
          ]}
      ]
    }
  ]
};
/* ===================================================================== */

const STORAGE_KEY = "team-roster-data-v2";
const PLAYER_FIELDS = ["ab","h","hr","rbi","r","bb","sb"];
const COLS = [
  { key:"name", label:"Player" }, { key:"ab", label:"AB" }, { key:"h", label:"H" },
  { key:"avg", label:"AVG" }, { key:"hr", label:"HR" }, { key:"rbi", label:"RBI" },
  { key:"r", label:"R" }, { key:"bb", label:"BB" }, { key:"obp", label:"OBP" }, { key:"sb", label:"SB" }
];

let rawData = null;
let seasons = [];
let activeYear = null;
let sortKey = "avg";
let sortDir = -1;
let expandedPlayer = null;
let playerChart = null;
let teamChart = null;

let editMode = false;
let seasonFormMode = null;    // null | "new"
let gameFormMode = null;      // null | "new" | "edit"
let gameFormEditingId = null;
let expandedGameId = null;
let boxRowEditing = null;     // player name being edited within a box score, or "__new__"
let statRowEditing = null;    // player name being edited directly in the season roster table
let recordEditing = false;    // editing the season's manual win-loss record

function computeDerived(p){
  const avg = p.ab > 0 ? p.h / p.ab : 0;
  const obp = (p.ab + p.bb) > 0 ? (p.h + p.bb) / (p.ab + p.bb) : 0;
  return { ...p, avg, obp };
}
function fmtAvg(x){ if (!isFinite(x)) return ".000"; return x.toFixed(3).replace(/^0/, ""); }
function genId(){ return "g" + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
function gameResult(g){ return g.teamScore > g.oppScore ? "W" : g.teamScore < g.oppScore ? "L" : "T"; }

function aggregateSeason(games, roster, manualTotals, manualRecord){
  manualTotals = manualTotals || {};
  manualRecord = manualRecord || { wins:0, losses:0, ties:0 };
  let wins = manualRecord.wins||0, losses = manualRecord.losses||0, ties = manualRecord.ties||0;
  const totals = {};
  (roster||[]).forEach(name => {
    totals[name] = { name, ab:0,h:0,hr:0,rbi:0,r:0,bb:0,sb:0 };
  });
  Object.keys(manualTotals).forEach(name => {
    if (!totals[name]) totals[name] = { name, ab:0,h:0,hr:0,rbi:0,r:0,bb:0,sb:0 };
    PLAYER_FIELDS.forEach(f => totals[name][f] += (manualTotals[name][f]||0));
  });
  games.forEach(g => {
    const r = gameResult(g);
    if (r === "W") wins++; else if (r === "L") losses++; else ties++;
    (g.playerStats||[]).forEach(p => {
      if (!totals[p.name]) totals[p.name] = { name:p.name, ab:0,h:0,hr:0,rbi:0,r:0,bb:0,sb:0 };
      PLAYER_FIELDS.forEach(f => totals[p.name][f] += (p[f]||0));
    });
  });
  return { wins, losses, ties, players: Object.values(totals).map(computeDerived) };
}

function rebuildSeasons(){
  seasons = rawData.seasons
    .slice()
    .sort((a,b) => a.year - b.year)
    .map(s => {
      const roster = s.roster || [];
      const manualTotals = s.manualTotals || {};
      const manualRecord = s.manualRecord || { wins:0, losses:0, ties:0 };
      const gamesSorted = s.games.slice().sort((a,b) => b.date.localeCompare(a.date));
      const agg = aggregateSeason(s.games, roster, manualTotals, manualRecord);
      return { year: s.year, games: gamesSorted, roster, manualTotals, manualRecord, ...agg };
    });
  if (!seasons.find(s => s.year === activeYear)) {
    activeYear = seasons.length ? seasons[seasons.length - 1].year : null;
  }
}

/* ---------- Persistence (localStorage — data stays in this browser) ---------- */
async function loadState(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) { rawData = JSON.parse(raw); return; }
  } catch (e) { /* nothing saved yet, or storage unavailable */ }
  rawData = JSON.parse(JSON.stringify(STARTER_DATA));
  await saveState(true);
}
let saveTimer = null;
async function saveState(silent){
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rawData));
    if (!silent) {
      const note = document.getElementById("saveNote");
      note.textContent = "Saved just now.";
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => { note.textContent = ""; }, 2000);
    }
  } catch (e) {
    document.getElementById("saveNote").textContent = "Couldn't save — your change is only kept for this session.";
  }
}

/* ---------- Export / Import (JSON backups you can commit to the repo) ---------- */
function exportData(){
  const blob = new Blob([JSON.stringify(rawData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = new Date().toISOString().slice(0,10);
  a.href = url;
  a.download = `wildcats-stats-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importData(file){
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed || !Array.isArray(parsed.seasons)) throw new Error("bad shape");
      if (!confirm("Import this file? It will replace all data currently in the app.")) return;
      rawData = parsed;
      activeYear = rawData.seasons.length ? rawData.seasons[rawData.seasons.length - 1].year : null;
      rebuildSeasons();
      saveState();
      renderAll();
    } catch (e) {
      alert("That doesn't look like a valid Wildcats stats export file.");
    }
  };
  reader.readAsText(file);
}

/* ---------- Editing is gated behind ?edit=1 in the URL ----------
   This is a UI-level hide, not real security — there's no login system
   on a static site like this. It just keeps the "Edit Data" button from
   ever appearing (or doing anything) for anyone using the plain link. */
const EDIT_ENABLED = new URLSearchParams(window.location.search).get("edit") === "1";

document.getElementById("editToggleBtn").onclick = () => {
  if (!EDIT_ENABLED) return;
  editMode = !editMode;
  seasonFormMode = null; gameFormMode = null; gameFormEditingId = null; boxRowEditing = null;
  statRowEditing = null; recordEditing = false;
  renderAll();
};

/* ---------- Scoreboard ---------- */
function renderScoreboard(){
  const s = seasons.find(s => s.year === activeYear);
  const board = document.getElementById("scoreboardBoard");
  if (!s) { board.innerHTML = ""; return; }
  const totalGames = s.wins + s.losses + s.ties;
  const winPct = totalGames ? (s.wins / (s.wins + s.losses || 1)) : 0;
  board.innerHTML = `
    <div class="board-cell"><div class="board-label">Season</div><div class="board-value">${s.year}</div></div>
    <div class="board-cell"><div class="board-label">Wins</div><div class="board-value">${s.wins}</div></div>
    <div class="board-cell"><div class="board-label">Losses</div><div class="board-value">${s.losses}</div></div>
    <div class="board-cell"><div class="board-label">Win %</div><div class="board-value">${fmtAvg(winPct)}</div></div>
  `;
}

/* ---------- Year tabs ---------- */
function renderYearTabs(){
  const wrap = document.getElementById("yearTabs");
  wrap.innerHTML = "";
  seasons.forEach(s => {
    const tabWrap = document.createElement("span");
    tabWrap.className = "year-tab-wrap";
    const btn = document.createElement("button");
    btn.className = "year-tab" + (s.year === activeYear ? " active" : "");
    btn.textContent = s.year;
    btn.onclick = () => {
      activeYear = s.year; expandedPlayer = null; expandedGameId = null;
      seasonFormMode = null; gameFormMode = null; boxRowEditing = null;
      statRowEditing = null; recordEditing = false;
      renderAll();
    };
    tabWrap.appendChild(btn);
    if (editMode) {
      const del = document.createElement("button");
      del.className = "tab-delete";
      del.title = "Delete " + s.year + " season";
      del.textContent = "×";
      del.onclick = (e) => {
        e.stopPropagation();
        if (confirm(`Delete the entire ${s.year} season, including all games and stats? This can't be undone.`)) {
          rawData.seasons = rawData.seasons.filter(x => x.year !== s.year);
          if (activeYear === s.year) activeYear = null;
          rebuildSeasons(); saveState(); renderAll();
        }
      };
      tabWrap.appendChild(del);
    }
    wrap.appendChild(tabWrap);
  });
  if (editMode) {
    const addBtn = document.createElement("button");
    addBtn.className = "year-tab-add";
    addBtn.textContent = "+ Season";
    addBtn.onclick = () => { seasonFormMode = seasonFormMode === "new" ? null : "new"; renderSeasonForm(); };
    wrap.appendChild(addBtn);
  }
}

function renderSeasonForm(){
  const slot = document.getElementById("seasonFormSlot");
  if (seasonFormMode !== "new") { slot.innerHTML = ""; return; }
  const suggestedYear = seasons.length ? seasons[seasons.length - 1].year + 1 : new Date().getFullYear();
  slot.innerHTML = `
    <div class="inline-form">
      <div><label>Year</label><input class="field" id="newSeasonYear" type="number" value="${suggestedYear}"></div>
      <div class="btn-row">
        <button class="btn primary" id="newSeasonSave">Add Season</button>
        <button class="btn" id="newSeasonCancel">Cancel</button>
      </div>
    </div>`;
  document.getElementById("newSeasonSave").onclick = () => {
    const year = parseInt(document.getElementById("newSeasonYear").value, 10);
    if (!year) { alert("Enter a valid year."); return; }
    if (rawData.seasons.find(s => s.year === year)) { alert("That season already exists."); return; }
    rawData.seasons.push({ year, games: [] });
    activeYear = year; seasonFormMode = null;
    rebuildSeasons(); saveState(); renderAll();
  };
  document.getElementById("newSeasonCancel").onclick = () => { seasonFormMode = null; renderSeasonForm(); };
}

/* ---------- Table head (roster) ---------- */
function renderTableHead(){
  const head = document.getElementById("tableHead");
  head.innerHTML = "";
  COLS.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col.label;
    if (col.key === sortKey) th.classList.add("sorted");
    th.onclick = () => {
      if (sortKey === col.key) sortDir *= -1; else { sortKey = col.key; sortDir = -1; }
      renderRoster(); renderTableHead();
    };
    head.appendChild(th);
  });
  if (editMode) {
    const th = document.createElement("th");
    th.className = "actions-col";
    th.textContent = "Actions";
    head.appendChild(th);
  }
}

/* ---------- Add-to-roster form ---------- */
function renderRosterForm(){
  const slot = document.getElementById("rosterFormSlot");
  const s = seasons.find(s => s.year === activeYear);
  if (!editMode || !s) { slot.innerHTML = ""; return; }
  slot.innerHTML = `
    <div class="btn-row" style="margin-bottom:0.9rem;">
      <button class="btn primary" id="addPlayerBtn">+ Add Player to ${s.year} Roster</button>
    </div>
    <div id="addPlayerFormBox"></div>
  `;
  document.getElementById("addPlayerBtn").onclick = () => {
    const box = document.getElementById("addPlayerFormBox");
    box.innerHTML = `
      <div class="inline-form">
        <div><label>Player Name</label><input class="field" id="newRosterName" type="text" placeholder="First initial and last name"></div>
        <div class="btn-row">
          <button class="btn primary" id="rosterAddSave">Add to Roster</button>
          <button class="btn" id="rosterAddCancel">Cancel</button>
        </div>
      </div>`;
    document.getElementById("rosterAddSave").onclick = () => {
      const name = document.getElementById("newRosterName").value.trim();
      if (!name) { alert("Enter a player name."); return; }
      const target = rawData.seasons.find(x => x.year === s.year);
      if (!target.roster) target.roster = [];
      if (target.roster.includes(name) || s.players.find(p => p.name === name)) {
        alert("That player is already on the roster."); return;
      }
      target.roster.push(name);
      rebuildSeasons(); saveState(); renderAll();
    };
    document.getElementById("rosterAddCancel").onclick = () => { box.innerHTML = ""; };
  };
}

/* ---------- Season summary ---------- */
function renderSeasonSummary(){
  const s = seasons.find(s => s.year === activeYear);
  const box = document.getElementById("seasonSummary");
  if (!s) { box.innerHTML = "No seasons yet — use \u201cEdit Data\u201d to add one."; return; }

  if (recordEditing) {
    const mr = s.manualRecord || { wins:0, losses:0 };
    box.innerHTML = `
      <b>${s.year} record</b>
      <span class="record-edit">
        W <input class="field" id="editWins" type="number" min="0" value="${mr.wins||0}">
        L <input class="field" id="editLosses" type="number" min="0" value="${mr.losses||0}">
        <button class="btn small primary" id="saveRecordBtn">Save</button>
        <button class="btn small" id="cancelRecordBtn">Cancel</button>
      </span>
      <span class="section-note">plus any wins/losses from logged games (${s.games.length} logged)</span>
    `;
    document.getElementById("saveRecordBtn").onclick = () => {
      const wins = parseInt(document.getElementById("editWins").value, 10) || 0;
      const losses = parseInt(document.getElementById("editLosses").value, 10) || 0;
      const target = rawData.seasons.find(x => x.year === s.year);
      target.manualRecord = { wins, losses, ties: (target.manualRecord && target.manualRecord.ties) || 0 };
      recordEditing = false;
      rebuildSeasons(); saveState(); renderAll();
    };
    document.getElementById("cancelRecordBtn").onclick = () => { recordEditing = false; renderSeasonSummary(); };
    return;
  }

  const totalAB = s.players.reduce((a,p) => a + p.ab, 0);
  const totalH = s.players.reduce((a,p) => a + p.h, 0);
  const teamAvg = totalAB ? totalH/totalAB : 0;
  const record = s.ties ? `${s.wins}-${s.losses}-${s.ties}` : `${s.wins}-${s.losses}`;
  box.innerHTML = `<b>${s.year}</b> &middot; ${record} &middot; team AVG <b>${fmtAvg(teamAvg)}</b> &middot; ${s.players.length} players &middot; ${s.games.length} games logged` +
    (editMode ? ` <button class="btn small" id="editRecordBtn">Edit Record</button>` : "");
  if (editMode) {
    document.getElementById("editRecordBtn").onclick = () => { recordEditing = true; renderSeasonSummary(); };
  }
}

/* ---------- Direct season-stat input row (no game required) ---------- */
function seasonStatInputRow(v){
  return `
    <td style="font-family:'Source Serif 4', serif; font-weight:600; color:var(--navy);">${v.name}</td>
    <td><input class="field" data-f="ab" type="number" min="0" value="${v.ab}"></td>
    <td><input class="field" data-f="h" type="number" min="0" value="${v.h}"></td>
    <td>—</td>
    <td><input class="field" data-f="hr" type="number" min="0" value="${v.hr}"></td>
    <td><input class="field" data-f="rbi" type="number" min="0" value="${v.rbi}"></td>
    <td><input class="field" data-f="r" type="number" min="0" value="${v.r}"></td>
    <td><input class="field" data-f="bb" type="number" min="0" value="${v.bb}"></td>
    <td>—</td>
    <td><input class="field" data-f="sb" type="number" min="0" value="${v.sb}"></td>
  `;
}
function readSeasonStatInputs(tr){
  const get = f => tr.querySelector(`[data-f="${f}"]`);
  const obj = {};
  PLAYER_FIELDS.forEach(f => { obj[f] = parseInt(get(f).value, 10) || 0; });
  return obj;
}

/* ---------- Roster table (derived stats, with roster add/remove/edit) ---------- */
function renderRoster(){
  const s = seasons.find(s => s.year === activeYear);
  const body = document.getElementById("rosterBody");
  body.innerHTML = "";
  if (!s) return;
  const rows = s.players.slice();
  rows.sort((a,b) => {
    const av = a[sortKey], bv = b[sortKey];
    if (typeof av === "string") return sortDir === -1 ? av.localeCompare(bv) : bv.localeCompare(av);
    return sortDir === -1 ? bv - av : av - bv;
  });
  const withAB = rows.filter(p => p.ab > 0);
  const maxAvg = withAB.length ? Math.max(...withAB.map(p => p.avg)) : 0;
  const maxHr = rows.length ? Math.max(...rows.map(p => p.hr)) : 0;

  if (!rows.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="${COLS.length + (editMode?1:0)}" style="text-align:center;color:var(--ink-soft);">No players on the ${s.year} roster yet</td>`;
    body.appendChild(tr);
  }

  rows.forEach(p => {
    const tr = document.createElement("tr");
    if (expandedPlayer === p.name) tr.classList.add("expanded-row");

    if (editMode && statRowEditing === p.name) {
      const current = (s.manualTotals || {})[p.name] || { ab:0,h:0,hr:0,rbi:0,r:0,bb:0,sb:0 };
      tr.innerHTML = seasonStatInputRow({ name: p.name, ...current }) + `<td class="actions-cell">
        <button class="btn small primary" data-act="save">Save</button>
        <button class="btn small" data-act="cancel">Cancel</button></td>`;
      tr.querySelector('[data-act="save"]').onclick = () => {
        const updated = readSeasonStatInputs(tr);
        const target = rawData.seasons.find(x => x.year === s.year);
        if (!target.manualTotals) target.manualTotals = {};
        target.manualTotals[p.name] = updated;
        statRowEditing = null;
        rebuildSeasons(); saveState(); renderAll();
      };
      tr.querySelector('[data-act="cancel"]').onclick = () => { statRowEditing = null; renderRoster(); };
      body.appendChild(tr);
      return;
    }

    tr.innerHTML = `
      <td class="clickable">${p.name}</td>
      <td>${p.ab}</td><td>${p.h}</td>
      <td class="${p.avg === maxAvg && p.ab > 0 ? 'hl' : ''}">${fmtAvg(p.avg)}</td>
      <td class="${p.hr === maxHr && p.hr > 0 ? 'hl' : ''}">${p.hr}</td>
      <td>${p.rbi}</td><td>${p.r}</td><td>${p.bb}</td><td>${fmtAvg(p.obp)}</td><td>${p.sb}</td>
    `;
    tr.querySelector("td:first-child").onclick = () => {
      expandedPlayer = expandedPlayer === p.name ? null : p.name;
      renderRoster(); renderPlayerPanel();
    };
    if (editMode) {
      const td = document.createElement("td");
      td.className = "actions-cell";
      td.innerHTML = `<button class="btn small" data-act="stats">Edit Stats</button><button class="btn small danger" data-act="del">Remove</button>`;
      td.querySelector('[data-act="stats"]').onclick = () => {
        statRowEditing = p.name;
        expandedPlayer = null;
        renderRoster();
      };
      td.querySelector('[data-act="del"]').onclick = () => {
        const hasStats = p.ab > 0 || p.h > 0 || p.hr > 0 || p.rbi > 0 || p.r > 0 || p.bb > 0 || p.sb > 0;
        const msg = hasStats
          ? `Remove ${p.name} from the ${s.year} season? This deletes their stats from every game and any directly-entered totals — that can't be undone.`
          : `Remove ${p.name} from the ${s.year} roster?`;
        if (confirm(msg)) {
          const target = rawData.seasons.find(x => x.year === s.year);
          target.roster = (target.roster||[]).filter(n => n !== p.name);
          target.games.forEach(g => {
            g.playerStats = (g.playerStats||[]).filter(pl => pl.name !== p.name);
          });
          if (target.manualTotals) delete target.manualTotals[p.name];
          if (expandedPlayer === p.name) expandedPlayer = null;
          rebuildSeasons(); saveState(); renderAll();
        }
      };
      tr.appendChild(td);
    }
    body.appendChild(tr);
  });
  renderPlayerPanel();
}

function renderPlayerPanel(){
  let panel = document.getElementById("playerPanel");
  if (panel) panel.remove();
  if (!expandedPlayer) return;
  panel = document.createElement("div");
  panel.id = "playerPanel";
  panel.className = "player-panel open";
  const history = seasons.map(s => ({ year: s.year, p: s.players.find(pl => pl.name === expandedPlayer) })).filter(x => x.p);
  panel.innerHTML = `<h3>${expandedPlayer} — year by year</h3><div class="chart-box"><canvas id="playerTrendCanvas"></canvas></div>`;
  document.querySelector("#season-section .table-wrap").insertAdjacentElement("afterend", panel);
  const ctx = document.getElementById("playerTrendCanvas");
  if (playerChart) playerChart.destroy();
  playerChart = new Chart(ctx, {
    type: "line",
    data: { labels: history.map(x => x.year), datasets: [
      { label:"AVG", data:history.map(x=>x.p.avg), borderColor:"#1D3F91", backgroundColor:"rgba(29,63,145,0.08)", yAxisID:"y", tension:0.25, pointRadius:4 },
      { label:"HR", data:history.map(x=>x.p.hr), borderColor:"#3B5BDB", backgroundColor:"rgba(59,91,219,0.08)", yAxisID:"y1", tension:0.25, pointRadius:4 }
    ]},
    options: { responsive:true, maintainAspectRatio:false, interaction:{mode:"index",intersect:false},
      plugins:{legend:{labels:{font:{family:"Roboto Mono",size:11}}}},
      scales:{ y:{position:"left",title:{display:true,text:"AVG"},ticks:{callback:v=>fmtAvg(v)}},
        y1:{position:"right",title:{display:true,text:"HR"},grid:{drawOnChartArea:false},ticks:{stepSize:1}} } }
  });
}

/* ---------- Game log ---------- */
function renderGameActionsHead(){
  document.getElementById("gameActionsHead").style.display = editMode ? "" : "none";
}

function renderGameForm(){
  const slot = document.getElementById("gameFormSlot");
  if (gameFormMode !== "new" && gameFormMode !== "edit") { slot.innerHTML = ""; return; }
  const s = seasons.find(s => s.year === activeYear);
  let existing = null;
  if (gameFormMode === "edit" && gameFormEditingId) {
    existing = s.games.find(g => g.id === gameFormEditingId);
  }
  const v = existing || { date:"", opponent:"", teamScore:0, oppScore:0 };
  slot.innerHTML = `
    <div class="inline-form">
      <div><label>Date</label><input class="field" id="gfDate" type="date" value="${v.date}"></div>
      <div><label>Opponent</label><input class="field" id="gfOpponent" type="text" value="${v.opponent}" placeholder="Opponent name"></div>
      <div><label>Our Score</label><input class="field" id="gfTeamScore" type="number" min="0" value="${v.teamScore}"></div>
      <div><label>Their Score</label><input class="field" id="gfOppScore" type="number" min="0" value="${v.oppScore}"></div>
      <div class="btn-row">
        <button class="btn primary" id="gfSave">${existing ? "Save Game" : "Add Game"}</button>
        <button class="btn" id="gfCancel">Cancel</button>
      </div>
    </div>`;
  document.getElementById("gfSave").onclick = () => {
    const date = document.getElementById("gfDate").value;
    const opponent = document.getElementById("gfOpponent").value.trim();
    const teamScore = parseInt(document.getElementById("gfTeamScore").value, 10) || 0;
    const oppScore = parseInt(document.getElementById("gfOppScore").value, 10) || 0;
    if (!date || !opponent) { alert("Enter a date and opponent."); return; }
    const target = rawData.seasons.find(x => x.year === s.year);
    if (existing) {
      const g = target.games.find(x => x.id === existing.id);
      g.date = date; g.opponent = opponent; g.teamScore = teamScore; g.oppScore = oppScore;
    } else {
      const newGame = { id: genId(), date, opponent, teamScore, oppScore, playerStats: [] };
      target.games.push(newGame);
      expandedGameId = newGame.id;
    }
    gameFormMode = null; gameFormEditingId = null;
    rebuildSeasons(); saveState(); renderAll();
  };
  document.getElementById("gfCancel").onclick = () => { gameFormMode = null; gameFormEditingId = null; renderGameForm(); };
}

function renderGamesList(){
  const s = seasons.find(s => s.year === activeYear);
  const body = document.getElementById("gamesBody");
  body.innerHTML = "";
  renderGameActionsHead();

  if (!s) return;

  if (editMode) {
    const addRow = document.createElement("tr");
    addRow.className = "add-row";
    const colspan = 4 + (editMode ? 1 : 0);
    addRow.innerHTML = `<td colspan="${colspan}" style="text-align:center;padding:0.6rem;">
      <button class="btn primary" id="addGameBtn">+ Add Game</button></td>`;
    body.appendChild(addRow);
    addRow.querySelector("#addGameBtn").onclick = () => {
      gameFormMode = "new"; gameFormEditingId = null; renderGameForm();
    };
  }

  if (!s.games.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="${4 + (editMode?1:0)}" style="text-align:center;color:var(--ink-soft);padding:0.8rem;">No games logged for ${s.year} yet</td>`;
    body.appendChild(tr);
    return;
  }

  s.games.forEach(g => {
    const tr = document.createElement("tr");
    tr.className = "game-row";
    const r = gameResult(g);
    tr.innerHTML = `
      <td style="text-align:left;">${g.date}</td>
      <td style="text-align:left;">${g.opponent}</td>
      <td>${g.teamScore}-${g.oppScore}</td>
      <td style="text-align:center;"><span class="result-badge ${r}">${r}</span></td>
    `;
    tr.onclick = (e) => {
      if (e.target.closest("button")) return;
      expandedGameId = expandedGameId === g.id ? null : g.id;
      boxRowEditing = null;
      renderGamesList();
    };
    if (editMode) {
      const td = document.createElement("td");
      td.className = "actions-cell";
      td.innerHTML = `<button class="btn small" data-act="edit">Edit</button><button class="btn small danger" data-act="del">Delete</button>`;
      td.querySelector('[data-act="edit"]').onclick = (e) => {
        e.stopPropagation();
        gameFormMode = "edit"; gameFormEditingId = g.id; renderGameForm();
      };
      td.querySelector('[data-act="del"]').onclick = (e) => {
        e.stopPropagation();
        if (confirm(`Delete the ${g.date} game vs ${g.opponent}? This removes its box score too.`)) {
          const target = rawData.seasons.find(x => x.year === s.year);
          target.games = target.games.filter(x => x.id !== g.id);
          if (expandedGameId === g.id) expandedGameId = null;
          rebuildSeasons(); saveState(); renderAll();
        }
      };
      tr.appendChild(td);
    }
    body.appendChild(tr);
  });

  renderBoxScore();
}

/* ---------- Box score panel ---------- */
function boxInputRow(existing, rosterNames){
  const v = existing || { name:"", ab:0,h:0,hr:0,rbi:0,r:0,bb:0,sb:0 };
  const listId = "rosterNamesList";
  const datalist = rosterNames && rosterNames.length
    ? `<datalist id="${listId}">${rosterNames.map(n => `<option value="${n}">`).join("")}</datalist>` : "";
  return `
    <td>${datalist}<input class="field" data-f="name" value="${v.name}" placeholder="Player name" ${rosterNames && rosterNames.length ? `list="${listId}"` : ""}></td>
    <td><input class="field" data-f="ab" type="number" min="0" value="${v.ab}"></td>
    <td><input class="field" data-f="h" type="number" min="0" value="${v.h}"></td>
    <td>—</td>
    <td><input class="field" data-f="hr" type="number" min="0" value="${v.hr}"></td>
    <td><input class="field" data-f="rbi" type="number" min="0" value="${v.rbi}"></td>
    <td><input class="field" data-f="r" type="number" min="0" value="${v.r}"></td>
    <td><input class="field" data-f="bb" type="number" min="0" value="${v.bb}"></td>
    <td>—</td>
    <td><input class="field" data-f="sb" type="number" min="0" value="${v.sb}"></td>
  `;
}
function readBoxInputs(tr){
  const get = f => tr.querySelector(`[data-f="${f}"]`);
  const obj = { name: get("name").value.trim() };
  PLAYER_FIELDS.forEach(f => { obj[f] = parseInt(get(f).value, 10) || 0; });
  return obj;
}

function renderBoxScore(){
  const slot = document.getElementById("boxScoreSlot");
  slot.innerHTML = "";
  if (!expandedGameId) return;
  const s = seasons.find(s => s.year === activeYear);
  const game = s.games.find(g => g.id === expandedGameId);
  if (!game) return;

  const panel = document.createElement("div");
  panel.className = "box-score-panel open";
  const r = gameResult(game);
  panel.innerHTML = `
    <div class="box-score-head">
      <h3>${game.date} vs ${game.opponent} — <span class="result-badge ${r}">${r}</span> ${game.teamScore}-${game.oppScore}</h3>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr>
          <th style="text-align:left;">Player</th><th>AB</th><th>H</th><th>AVG</th><th>HR</th><th>RBI</th><th>R</th><th>BB</th><th>OBP</th><th>SB</th>
          ${editMode ? '<th class="actions-col">Actions</th>' : ''}
        </tr></thead>
        <tbody id="boxBody"></tbody>
      </table>
    </div>
  `;
  slot.appendChild(panel);

  const body = panel.querySelector("#boxBody");
  const players = (game.playerStats||[]).map(computeDerived);
  const rosterNames = s.roster || [];

  if (!players.length && boxRowEditing !== "__new__") {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="${editMode?11:10}" style="text-align:center;color:var(--ink-soft);">No player stats entered for this game yet</td>`;
    body.appendChild(tr);
  }

  players.forEach(p => {
    const tr = document.createElement("tr");
    if (editMode && boxRowEditing === p.name) {
      tr.innerHTML = boxInputRow(p, rosterNames) + `<td class="actions-cell">
        <button class="btn small primary" data-act="save">Save</button>
        <button class="btn small" data-act="cancel">Cancel</button></td>`;
      tr.querySelector('[data-act="save"]').onclick = () => {
        const updated = readBoxInputs(tr);
        if (!updated.name) { alert("Player needs a name."); return; }
        const target = rawData.seasons.find(x => x.year === s.year).games.find(g => g.id === game.id);
        const idx = target.playerStats.findIndex(pl => pl.name === p.name);
        target.playerStats[idx] = updated;
        boxRowEditing = null;
        rebuildSeasons(); saveState(); renderAll();
      };
      tr.querySelector('[data-act="cancel"]').onclick = () => { boxRowEditing = null; renderBoxScore(); };
    } else {
      tr.innerHTML = `
        <td style="text-align:left;font-family:'Source Serif 4', serif;font-weight:600;color:var(--navy);">${p.name}</td>
        <td>${p.ab}</td><td>${p.h}</td><td>${fmtAvg(p.avg)}</td><td>${p.hr}</td>
        <td>${p.rbi}</td><td>${p.r}</td><td>${p.bb}</td><td>${fmtAvg(p.obp)}</td><td>${p.sb}</td>
      `;
      if (editMode) {
        const td = document.createElement("td");
        td.className = "actions-cell";
        td.innerHTML = `<button class="btn small" data-act="edit">Edit</button><button class="btn small danger" data-act="del">Delete</button>`;
        td.querySelector('[data-act="edit"]').onclick = () => { boxRowEditing = p.name; renderBoxScore(); };
        td.querySelector('[data-act="del"]').onclick = () => {
          if (confirm(`Remove ${p.name} from this game's box score?`)) {
            const target = rawData.seasons.find(x => x.year === s.year).games.find(g => g.id === game.id);
            target.playerStats = target.playerStats.filter(pl => pl.name !== p.name);
            rebuildSeasons(); saveState(); renderAll();
          }
        };
        tr.appendChild(td);
      }
    }
    body.appendChild(tr);
  });

  if (editMode) {
    const addTr = document.createElement("tr");
    addTr.className = "add-row";
    if (boxRowEditing === "__new__") {
      addTr.innerHTML = boxInputRow(null, rosterNames) + `<td class="actions-cell">
        <button class="btn small primary" data-act="save">Add Line</button>
        <button class="btn small" data-act="cancel">Cancel</button></td>`;
      addTr.querySelector('[data-act="save"]').onclick = () => {
        const newLine = readBoxInputs(addTr);
        if (!newLine.name) { alert("Player needs a name."); return; }
        const target = rawData.seasons.find(x => x.year === s.year).games.find(g => g.id === game.id);
        if (!target.playerStats) target.playerStats = [];
        if (target.playerStats.find(pl => pl.name === newLine.name)) { alert("That player already has a line for this game."); return; }
        target.playerStats.push(newLine);
        boxRowEditing = null;
        rebuildSeasons(); saveState(); renderAll();
      };
      addTr.querySelector('[data-act="cancel"]').onclick = () => { boxRowEditing = null; renderBoxScore(); };
    } else {
      const td = document.createElement("td");
      td.colSpan = 11;
      td.style.textAlign = "center"; td.style.padding = "0.6rem";
      const btn = document.createElement("button");
      btn.className = "btn primary";
      btn.textContent = "+ Add Player Line";
      btn.onclick = () => { boxRowEditing = "__new__"; renderBoxScore(); };
      td.appendChild(btn);
      addTr.appendChild(td);
    }
    body.appendChild(addTr);
  }
}

/* ---------- Career leaders ---------- */
function renderLeaders(){
  const totals = {};
  seasons.forEach(s => s.players.forEach(p => {
    if (!totals[p.name]) totals[p.name] = { name:p.name, ab:0,h:0,hr:0,rbi:0,bb:0 };
    totals[p.name].ab += p.ab; totals[p.name].h += p.h; totals[p.name].hr += p.hr;
    totals[p.name].rbi += p.rbi; totals[p.name].bb += p.bb;
  }));
  const all = Object.values(totals).map(t => ({ ...t, avg: t.ab ? t.h/t.ab : 0 }));
  const byAvg = all.filter(p => p.ab >= 20).sort((a,b) => b.avg - a.avg).slice(0,5);
  const byHr = all.slice().sort((a,b) => b.hr - a.hr).slice(0,5);
  const byRbi = all.slice().sort((a,b) => b.rbi - a.rbi).slice(0,5);
  const makeCard = (title, list, valFn) => `
    <div class="leader-card"><h3>${title}</h3>
      ${list.length ? list.map((p,i) => `<div class="leader-row"><span><span class="leader-rank">${i+1}</span>${p.name}</span><span class="leader-val">${valFn(p)}</span></div>`).join("")
        : '<div class="leader-row">No qualifying players yet</div>'}
    </div>`;
  document.getElementById("leadersGrid").innerHTML =
    makeCard("Career Batting Average", byAvg, p => fmtAvg(p.avg)) +
    makeCard("Career Home Runs", byHr, p => p.hr) +
    makeCard("Career RBI", byRbi, p => p.rbi);
}

/* ---------- Team trend chart ---------- */
function renderTeamTrend(){
  const ctx = document.getElementById("teamTrendChart");
  const labels = seasons.map(s => s.year);
  const winPct = seasons.map(s => (s.wins + s.losses) ? s.wins/(s.wins+s.losses) : 0);
  if (teamChart) teamChart.destroy();
  teamChart = new Chart(ctx, {
    data: { labels, datasets: [
      { type:"bar", label:"Wins", data:seasons.map(s=>s.wins), backgroundColor:"#1D3F91", yAxisID:"y" },
      { type:"bar", label:"Losses", data:seasons.map(s=>s.losses), backgroundColor:"#CBD8F2", yAxisID:"y" },
      { type:"line", label:"Win %", data:winPct, borderColor:"#3B5BDB", backgroundColor:"#3B5BDB", yAxisID:"y1", tension:0.25, pointRadius:4 }
    ]},
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{legend:{labels:{font:{family:"Roboto Mono",size:11}}}},
      scales:{ y:{stacked:true,position:"left",title:{display:true,text:"Games"}},
        y1:{position:"right",min:0,max:1,title:{display:true,text:"Win %"},grid:{drawOnChartArea:false},ticks:{callback:v=>fmtAvg(v)}} } }
  });
}

function renderAll(){
  document.getElementById("editToggleBtn").textContent = editMode ? "Done Editing" : "Edit Data";
  document.getElementById("editToggleBtn").classList.toggle("on", editMode);

  renderScoreboard();
  renderYearTabs();
  renderSeasonForm();
  renderSeasonSummary();
  renderRosterForm();
  renderTableHead();
  renderRoster();
  renderGameForm();
  renderGamesList();
  renderLeaders();
  renderTeamTrend();
}

async function init(){
  await loadState();
  if (rawData.teamName !== "Wildcats") {
    rawData.teamName = "Wildcats";
    saveState(true);
  }
  document.getElementById("teamNameDisplay").textContent = rawData.teamName;
  activeYear = rawData.seasons.length ? rawData.seasons[rawData.seasons.length - 1].year : null;
  rebuildSeasons();
  renderAll();

  if (!EDIT_ENABLED) {
    document.getElementById("editToggleBtn").style.display = "none";
    const backupBar = document.querySelector(".backup-bar");
    if (backupBar) backupBar.style.display = "none";
  } else {
    document.getElementById("exportBtn").onclick = exportData;
    document.getElementById("importInput").onchange = (e) => {
      const file = e.target.files[0];
      if (file) importData(file);
      e.target.value = "";
    };
  }
}
init();
