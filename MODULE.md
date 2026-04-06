# Module 6: Chrome Extension (Skool Notifications)

## What You'll Build

A Chrome extension that adds an "Open All" button to the Skool notification dropdown, letting you open every unread notification in a new tab with a single click and automatically mark them all as read.

## What It Does

- **One-click open** -- opens all unread notification links in new tabs
- **Auto mark as read** -- clicks "Mark all as read" after opening
- **Filters noise** -- skips `(following)` and `(admin)` notifications so you only see community posts
- **Lightweight** -- no special permissions, runs only on skool.com
- **Visual button** -- injects a styled purple "Open All" button right next to "Mark all as read"

## Get It Running (5 minutes)

1. Clone the repo:
   ```
   git clone https://github.com/your-username/skool-open-all-notifications.git
   ```
2. Open Chrome and go to `chrome://extensions`
3. Toggle **Developer mode** on (top-right corner)
4. Click **Load unpacked**
5. Select the `skool-open-all-notifications` folder
6. Go to [skool.com](https://www.skool.com) and log in
7. Click the notification bell -- you should see the purple **"Open All"** button next to "Mark all as read"

That's it. Click the button and every unread notification opens in a new tab.

## Make It Yours (15 minutes)

### Change the target site

In `manifest.json`, update the `matches` array to target a different site:

```json
"content_scripts": [
  {
    "matches": ["https://www.example.com/*"],
    "js": ["content.js"],
    "css": ["style.css"]
  }
]
```

Also update `background.js` to change which site lights up the extension icon:

```js
pageUrlFilters: [{ hostEquals: "www.example.com" }],
```

### Change the button style

Edit `style.css` to change colors, size, or shape. The button uses the ID `#skool-open-all-btn`:

```css
#skool-open-all-btn {
  background: #4f46e5;   /* Change this for a different color */
  border-radius: 6px;    /* Make it rounder or square */
  font-size: 13px;       /* Bigger or smaller text */
}
```

### Change the notification filters

In `content.js`, find the `SKIP` array on line 33:

```js
const SKIP = ["(following)", "(admin)"];
```

Add or remove tags to filter different notification types.

### Key files at a glance

| File | What it does |
|------|-------------|
| `manifest.json` | Extension config -- name, permissions, which sites to run on |
| `content.js` | Main logic -- finds notifications, injects the button, opens tabs |
| `style.css` | Button styling |
| `background.js` | Controls when the extension icon is active |

## Change It With Claude Code

Here are prompts you can paste straight into Claude Code to modify the extension:

- `"Make this extension work on LinkedIn notifications instead of Skool"`
- `"Add a keyboard shortcut (Ctrl+Shift+O) that opens all notifications without clicking the button"`
- `"Add a counter badge on the button showing how many unread notifications will be opened"`
- `"Change the filter so it only opens notifications from the last 24 hours"`
- `"Add a popup that lets users toggle which notification types to skip"`
- `"Publish this extension to the Chrome Web Store -- walk me through every step"`

## Put It Online (10 minutes)

To publish on the Chrome Web Store:

1. **Zip the extension folder** -- select all files (not the parent folder) and compress
2. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
3. **Pay the one-time $5 registration fee** (if you haven't already)
4. Click **New Item** and upload your zip file
5. Fill in the listing: name, description, screenshots, category (Productivity)
6. Add a **privacy policy** -- the repo already includes `PRIVACY.md`, host it or paste the text
7. Submit for review -- typically takes 1-3 business days

Tip: Take a screenshot of the "Open All" button in the notification dropdown for your store listing.

## Video

**YouTube title ideas:**
- "I Made a Chrome Extension in 5 Minutes with AI"
- "Build Your First Chrome Extension with Claude Code"

**Video structure (5-8 min):**

1. **Show the extension working** (30 sec) -- Open Skool, click the bell, click "Open All", watch tabs fly open
2. **Load it in Chrome** (1 min) -- `chrome://extensions` > Developer mode > Load unpacked > done
3. **Walk through the code briefly** (1 min) -- Show `manifest.json` (config), `content.js` (logic), `style.css` (look). Only three files that matter
4. **Ask Claude Code to modify it** (2 min) -- Ask it to add a notification counter badge or change the color scheme. Show the code changing in real time
5. **Show it working on a different site** (1 min) -- Ask Claude Code to adapt it for another site's notifications, reload the extension, demo it
6. **CTA** (30 sec) -- Link to the repo, link to Claude Code, remind them the whole thing is under 120 lines of code
