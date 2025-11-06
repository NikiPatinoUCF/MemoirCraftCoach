# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Memoir Remix Studio** is an educational web application that teaches memoir craft through interactive filtering and visualization. Users can see how the same memoir content transforms across different genres and visual formats, with annotations explaining the craft choices.

## Technology Stack

- **Frontend**: Pure HTML, CSS, JavaScript (no build process)
- **Visualization**: P5.js for animated transitions and dynamic layouts
- **Deployment**: GitHub Pages (static site)
- **Content**: Pre-written memoir scenes with genre variations stored in JavaScript data files

## Development Workflow

This is a static site with no build process. To develop:

```bash
# Serve locally with any static server
python -m http.server 8000
# or
npx serve
```

Open `index.html` in a browser to test changes.

## Architecture

### File Structure

```
/
├── index.html              # Main application page
├── styles.css              # Gem-tone palette, script fonts, responsive layout
├── app.js                  # Core application logic, filter handling
├── data/
│   ├── scenes.js           # 3 base memoir scenes
│   ├── genre-variations.js # 21 genre variations (7 genres × 3 scenes)
│   └── annotations.js      # Craft explanations for each genre
└── README.md
```

### Core Components

1. **Genre Filters**: 7 options (Thriller, Noir, Literary Fiction, Hero's Journey, Sci-Fi Dystopia, Horror, Interactive Fiction)
2. **Style Formats**: 4 visual layouts (Comic Panels, Photo Essay, Fragmented Vignettes, Traditional Prose)
3. **Content Display**: P5.js canvas for dynamic visual rendering
4. **Annotations Panel**: Context-aware craft explanations
5. **User Input**: Textarea for custom scenes (layout-only transformations)
6. **Download**: Export current view as standalone HTML

### Data Flow

1. User selects genre filter + style format
2. App loads pre-written variation from `genre-variations.js` (for default scenes) or uses original text (for user input)
3. P5.js renders content in selected visual format with animated transitions
4. Annotations display craft choices specific to selected genre
5. Download button generates standalone HTML file with current view

## Branch Strategy

Development work should be done on feature branches starting with `claude/` followed by a descriptive name and session ID.

## Getting Started

For new contributors or Claude Code instances:

1. Consult existing code structure first
2. Check for README.md for project-specific setup instructions
3. Review any package.json, requirements.txt, or dependency files
4. Ask the user about their immediate goals if unclear
