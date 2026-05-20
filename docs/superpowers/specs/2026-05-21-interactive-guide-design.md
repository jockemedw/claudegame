# Interactive Claude Guide — Design Spec
*2026-05-21*

## Overview

A web-based interactive guide that teaches users how to use Claude AI (and Claude Code at advanced levels) effectively, structured around the established six-level framework. The primary format is a **guide** users can explore at their own pace, with a personal tracking layer for marking progress.

**Tech stack:** React + Vite, React Router, localStorage for persistence (database layer added later), English UI (i18n-ready).

---

## Architecture

```
src/
  data/          ← Level and tip definitions as JS files (content lives here)
  components/    ← TipCard, LevelCard, ProgressBar, StepChecklist, ExampleViewer
  pages/         ← Home, Level, MyPages
  hooks/         ← useProgress (localStorage read/write)
```

**State:** All user progress is stored in `localStorage` as JSON. Each tip has a unique ID and a status: `none | want_to_learn | mastered`. Sub-steps are stored as an array of booleans per tip ID. A tip with sub-steps is auto-promoted to `mastered` when all steps are checked.

**Navigation:** React Router. Three routes: `/` (Home), `/level/:id` (Level), `/my-pages` (My Pages).

---

## Views

### Home (`/`)
- Six `LevelCard` components in a responsive grid
- Each card shows: level number, title, tagline, progress bar (X of Y must-knows mastered)
- Click navigates to the level

### Level (`/level/:id`)
- Level title and description at the top
- Two sections: **Must Know** and **Nice to Have**
- Each section contains `TipCard` components

### My Pages (`/my-pages`)
- **To Master** — all must-knows with status `none` or `want_to_learn` (i.e. not yet `mastered`), grouped by level, with a warning indicator if any exist
- **Want to Learn** — all tips marked `want_to_learn`, grouped by level

---

## TipCard

Three-layer structure:

1. **Collapsed row** — title + short summary always visible, status badge (none / want to learn / mastered)
2. **Sub-steps** — optional checklist revealed on expand. Individual steps are checked off. When all steps are checked, tip is auto-marked `mastered`. Without sub-steps, `mastered` is set manually via the status toggle.
3. **Interactive example** — optional, declared per tip. Rendered by `ExampleViewer` based on `example.type`.

Status toggle lives on the card: `Want to learn` ↔ `Mastered` ↔ reset. `Want to learn` can always be set manually, even on tips with sub-steps.

---

## Interactive Example Types

Each tip can optionally declare an `example` block. New types are added as components without touching existing content.

| Type | Description |
|------|-------------|
| `before_after` | Two prompts side by side — click to reveal the response difference |
| `reveal` | A question + hidden answer, click to show |
| `slider` | Adjust a parameter (e.g., context length) and see how output changes |

---

## Data Structure

Each level is a JS file in `src/data/`:

```js
// src/data/level1.js
export default {
  id: 1,
  title: "I Ask",
  tagline: "Mental model: AI = advanced search engine",
  tips: [
    {
      id: "l1-t1",
      type: "must_know",           // "must_know" | "nice_to_have"
      title: "Ask in natural language",
      summary: "AI responds to text, not buttons.",
      steps: [                     // optional — omit if no sub-steps
        "Try asking a simple question",
        "Notice that phrasing changes the answer"
      ],
      example: {                   // optional — omit if no example
        type: "before_after",
        before: { prompt: "weather", response: "Here is today's weather..." },
        after:  { prompt: "What's the weather like in Stockholm in May?", response: "May in Stockholm..." }
      }
    }
  ]
}
```

Adding new content = adding an object to the correct level file. No component changes required.

---

## Levels

Six levels as defined in the project framework:

| # | Title | Mental Model |
|---|-------|-------------|
| 1 | I Ask | AI = advanced search engine |
| 2 | I Communicate | AI = a conversation partner I can influence |
| 3 | I Direct | AI = a capable but junior employee needing clear instructions |
| 4 | I Think With AI | AI = a thought partner with strengths and weaknesses I actively manage |
| 5 | I Build With AI | AI = a component in a larger system |
| 6 | I Orchestrate AI | AI = infrastructure |

Claude Code is introduced at level 5–6. Additional levels or sub-levels can be added by extending the data files.

---

## Progress & My Pages Logic

- Must-knows with unmastered status show a warning indicator on My Pages
- My Pages groups everything by level for clarity
- No level-locking — users can freely jump between levels
- Progress bar on Home cards reflects must-knows only (cleaner signal of level completion)

---

## Extensibility

- **New tips:** Add to the relevant level's data file
- **New levels:** Add a new data file and register it in `src/data/index.js`
- **New example types:** Add a new component to `ExampleViewer`, no other changes
- **i18n:** Tip content and UI strings are kept separate; translation layer added later
- **Backend/auth:** `useProgress` hook abstracts storage — swap localStorage for API calls when ready

---

## Out of Scope (this iteration)

- Real authentication
- Backend/database
- User-generated content
- Multiplayer or social features
- Mobile-native app
