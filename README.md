# Wildcats — Team Stats

A single-page site for tracking the Wildcats' softball stats, season by
season and game by game. Log a game's score and box score, and player
totals, win-loss records, and career leaders all update automatically.

## Running it locally

No build step, no dependencies to install. Just open `index.html` in a
browser, either by double-clicking it or serving the folder:

```bash
# optional, but avoids any browser quirks with file:// links
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch",
   pick your default branch (e.g. `main`) and the `/ (root)` folder.
4. Save. GitHub will give you a URL like
   `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## How data is saved

Stats are stored in your browser's `localStorage` — edits made through
"Edit Data" save automatically, and they'll still be there next time you
open the page, even after a refresh. A few things worth knowing:

- **It's per-browser, not per-repo.** Editing stats on the live GitHub
  Pages site saves to that browser only. It won't show up if you open the
  same site on your phone, or push changes back to GitHub by itself.
- **Clearing your browser's site data will erase it.** So will switching
  browsers or devices.

## Backing up your data (recommended)

Use the **Export Backup** button (top of the page) any time you've
finished entering a season or a batch of games. It downloads a
`wildcats-stats-YYYY-MM-DD.json` file with everything: seasons, rosters,
games, and box scores.

A simple workflow that keeps things tidy in git:

1. Enter your games for the season in the app.
2. Click **Export Backup**, save the file into the `backups/` folder in
   this repo.
3. `git add backups/ && git commit -m "Add 2026 season through game 5"`
   and push.

That gives you a real version history of the team's stats over time, and
a way to restore everything (via **Import Backup**) on a new browser,
device, or after clearing local storage — just pick the most recent file
in `backups/`.

## Project structure

```
wildcats-stats/
├── index.html        the page structure
├── css/
│   └── styles.css     all styling
├── js/
│   └── app.js          app logic: rendering, editing, persistence
├── backups/            your exported JSON snapshots go here
└── README.md
```

## Editing the starting sample data

The first time the app runs with nothing saved yet, it loads a small set
of sample seasons/games so you can see how everything works. That lives
in `js/app.js` in a constant called `STARTER_DATA` near the top of the
file — once you've entered real data (or imported a backup), this is
never touched again, so you can leave it as-is or trim it down.
