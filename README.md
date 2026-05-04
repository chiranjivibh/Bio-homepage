# Academic Portfolio — R Markdown + GitHub Pages

Dark-themed multi-page portfolio with browser-based interactive coding
for **R**, **Python**, and **SQL** — no server, no installation needed.

---

## File Structure

```
portfolio/
│
├── _config.yml              ← GitHub Pages / Jekyll config
├── _site.yml                ← R Markdown site config (navbar, output, shared includes)
├── render.R                 ← Build script: Rscript render.R
│
├── _includes/               ← Shared HTML fragments (auto-injected by rmarkdown)
│   ├── head.html            ← <head> extras: fonts, favicon, viewport
│   ├── sidebar.html         ← Sidebar nav  (injected before body)
│   └── footer.html          ← nav.js script (injected after body)
│
├── css/
│   └── style.css            ← Complete dark-theme stylesheet
│
├── js/
│   └── nav.js               ← Mobile sidebar toggle + active-link highlight
│
├── index.Rmd                ← About / Home page
├── projects.Rmd             ← Research projects & talks
├── teaching-r.Rmd           ← Interactive R  (WebR WASM)
├── teaching-python.Rmd      ← Interactive Python  (Pyodide WASM)
├── teaching-sql.Rmd         ← Interactive SQL  (sql.js WASM)
│
└── cv.pdf                   ← Add your CV here (linked from hero button)
```

> **After running `render.R`**, each `.Rmd` produces a matching `.html` file.
> Upload the entire folder (including `css/`, `js/`, `_includes/`, `.html` files)
> to GitHub Pages.

---

## Quick Start

### Step 1 — Install R package

```r
install.packages("rmarkdown")
```

### Step 2 — Build the site

```bash
Rscript render.R
```

Or from inside R:

```r
source("render.R")
```

This produces:
`index.html`, `projects.html`, `teaching-r.html`,
`teaching-python.html`, `teaching-sql.html`

### Step 3 — Deploy to GitHub Pages

1. Create a GitHub repo named `yourusername.github.io`
2. Upload **all files** (keeping folder structure)
3. Go to **Settings → Pages → Source: main / (root)** → Save

Live at `https://yourusername.github.io` in ~60 seconds.

---

## Personalise

### Global changes (edit once in `_includes/sidebar.html`)

| Element | What to change |
|---|---|
| `YN` | Your initials |
| `Your Name` | Your full name |
| `// statistician & educator` | Your role/tagline |
| GitHub / LinkedIn / email links | Your social links |

### Page-by-page changes

| File | What to edit |
|---|---|
| `index.Rmd` | Stats numbers, research interests, education, skills data frame, publications list |
| `projects.Rmd` | `projects` list and `talks` data frame |
| `teaching-r.Rmd` | `lessons` list — add/remove list items |
| `teaching-python.Rmd` | `lessons` list — set `plot=TRUE` for matplotlib lessons |
| `teaching-sql.Rmd` | `lessons` list — add/remove SQL exercises |

### Adding a new lesson (R example)

Open `teaching-r.Rmd` and add a new `list()` to the `lessons` object:

```r
list(
  id    = "r6",             # unique short ID
  num   = "LESSON 06",      # displayed number
  tag   = "tag-r",          # tag-r / tag-py / tag-sq / tag-st / tag-ml
  level = "Intermediate",   # text shown in tag
  title = "Your Lesson Title",
  desc  = "Short description shown above the REPL.",
  code  = 'cat("Hello, R!\\n")'
)
```

### Changing colours

All colours are CSS custom properties at the top of `css/style.css`:

```css
:root {
  --blue:   #58a6ff;   /* accent / links */
  --green:  #3fb950;   /* run button / output */
  --orange: #e3b341;   /* loading dot */
  --purple: #bc8cff;   /* avatar gradient end */
  ...
}
```

---

## Interactive Runtimes

| Language | Engine | First-load time | Packages |
|---|---|---|---|
| R | [WebR](https://webr.r-wasm.org) | ~15 s (cached after) | All base R |
| Python | [Pyodide](https://pyodide.org) | ~30 s (cached after) | numpy, pandas, matplotlib, scipy |
| SQL | [sql.js](https://sql.js.org) | < 1 s | SQLite (full) |

All runtimes run 100% in the browser — no data leaves the user's device.
