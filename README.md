# Wildcats — Team Stats

A single-page site for tracking the Wildcats' softball stats, season by
season and game by game. Log a game's score and box score, and player
totals, win-loss records, and career leaders all update automatically.

## Two links: one for you, one for the team

The site has no login system, so "who can edit" is controlled by which
link you use:

- **`index.html`** (or your plain GitHub Pages URL) — no "Edit Data"
  button appears at all. This is the link to send teammates.
- **`index.html?edit=1`** (append `?edit=1` to the URL) — unlocks the
  "Edit Data" button and everything under it (adding games, entering
  stats, exporting/importing backups). This is your link — bookmark it.

Worth knowing: this only hides the button in the interface. It's not
real access control — there's no server checking who's allowed to do
what, so someone determined enough to read the page's source code could
still find `?edit=1`. For a team stats page that's a reasonable
trade-off, but if you'd rather have a password prompt on top of this,
that's a quick addition — just ask.

## Running it locally

No build step, no dependencies to install. Just open `index.html` in a
browser, either by double-clicking it or serving the folder:

```bash
# optional, but avoids any browser quirks with file:// links
python3 -m http.server 8000
# then visit http://localhost:8000?edit=1
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
- **Important:** if you send the site's link to teammates, they will
  *not* see your stats. Their browser has nothing saved, so they'll see
  the site's built-in default data instead. See "Publishing updates for
  teammates to see" below for how to fix that.

## Backing up your data (recommended)

Use the **Export Backup** button (top of the page) any time you've
finished entering a season or a batch of games. It downloads a
`wildcats-stats-YYYY-MM-DD.json` file with everything: seasons, rosters,
games, and box scores.

A simple workflow that keeps things tidy in git:

1. Enter your games/stats for the season in the app.
2. Click **Export Backup**, save the file into the `backups/` folder in
   this repo.
3. `git add backups/ && git commit -m "Add 2026 season through game 5"`
   and push.

That gives you a real version history of the team's stats over time, and
a way to restore everything (via **Import Backup**) on a new browser,
device, or after clearing local storage — just pick the most recent file
in `backups/`.

## Publishing updates for teammates to see

You're the only one entering data — teammates just need to view it. The
site shows a built-in "starter" dataset to anyone whose browser doesn't
have data saved yet (which is everyone except you, on your own browser).
So to update what teammates see, you publish your latest export as that
starter dataset:

1. In the site, click **Export Backup** to download your current data.
2. Run the publish script, pointing at that file:
   ```bash
   node scripts/publish-data.js ~/Downloads/wildcats-stats-2026-04-10.json
   ```
   This rewrites the built-in data inside `js/app.js` to match your
   export. It only needs Node.js installed — no other setup.
3. Commit and push:
   ```bash
   git add -A && git commit -m "Publish updated stats" && git push
   ```
4. Give GitHub Pages a minute to redeploy, then the link you send
   teammates will show your latest numbers.

Repeat this any time you want to push a fresh update out — after each
game, weekly, whenever works for you. Your own browser is unaffected by
any of this; it keeps using whatever's in its `localStorage` regardless.

Use your `?edit=1` link (see "Two links" above) to keep entering and
editing stats — the plain link you hand out to teammates never shows the
"Edit Data" button, so there's no risk of anyone assuming they can edit.

## Project structure

```
wildcats-stats/
├── index.html            the page structure
├── css/
│   └── styles.css         all styling
├── js/
│   └── app.js               app logic: rendering, editing, persistence
├── scripts/
│   └── publish-data.js       publishes an export as the site's default data
├── backups/                your exported JSON snapshots go here
└── README.md
```


## Editing the starting sample data

The first time the app runs with nothing saved yet, it loads a small set
of sample seasons/games so you can see how everything works. That lives
in `js/app.js` in a constant called `STARTER_DATA` near the top of the
file — once you've entered real data (or imported a backup), this is
never touched again, so you can leave it as-is or trim it down.
