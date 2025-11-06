# Memoir Remix Studio

An educational web application that teaches memoir craft through interactive filtering and visualization. See how the same memoir content transforms across different genres and visual formats, with annotations explaining the craft choices.

![Memoir Remix Studio](https://img.shields.io/badge/status-active-success) ![HTML/CSS/JS](https://img.shields.io/badge/stack-HTML%2FCSS%2FJS-blue) ![P5.js](https://img.shields.io/badge/visualization-P5.js-pink)

## 🎨 Features

- **3 Pre-written Memoir Scenes**: Compelling base narratives that demonstrate effective memoir writing
- **7 Genre Transformations**: See how each scene changes in:
  - Thriller
  - Noir
  - Literary Fiction
  - Hero's Journey
  - Sci-Fi Dystopia
  - Horror
  - Interactive Fiction
- **4 Visual Formats**: Dynamic P5.js visualizations including:
  - Traditional Prose
  - Comic Panels
  - Photo Essay
  - Fragmented Vignettes
- **Craft Annotations**: Educational explanations of genre-specific writing techniques
- **Custom Scene Input**: Apply visual transformations to your own writing
- **Download Preview**: Export your remixed memoir as standalone HTML

## 🚀 Live Demo

Visit the live site: [Memoir Remix Studio](https://your-username.github.io/MemoirCraftCoach/)

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Visualization**: P5.js for animated transitions and dynamic layouts
- **Typography**: Google Fonts (Courier Prime, Special Elite)
- **Deployment**: GitHub Pages (no build process required)

## 📦 Installation & Usage

### Option 1: View Online
Simply visit the GitHub Pages URL (see above)

### Option 2: Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/NikiPatinoUCF/MemoirCraftCoach.git
   cd MemoirCraftCoach
   ```

2. Serve the files with any static server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve

   # Or simply open index.html in your browser
   ```

3. Open `http://localhost:8000` (or the appropriate URL) in your browser

## 🎓 Educational Use Cases

### For Writing Teachers
- Demonstrate genre conventions in memoir writing
- Show students how the same content can be transformed
- Teach visual storytelling techniques

### For Writers
- Experiment with different genre approaches to your own memoir
- Understand how format affects narrative presentation
- Learn craft techniques through practical examples

### For Creative Writing Students
- Study genre-specific writing conventions
- Analyze how narrative voice changes across genres
- Practice adapting personal stories to different formats

## 🏗️ Project Structure

```
MemoirCraftCoach/
├── index.html              # Main application page
├── styles.css              # Gem-tone palette & responsive design
├── app.js                  # Core logic & P5.js visualizations
├── data/
│   ├── scenes.js           # 3 base memoir scenes
│   ├── genre-variations.js # 21 genre-transformed versions
│   └── annotations.js      # Craft explanations for each genre
├── README.md               # This file
└── CLAUDE.md              # Developer guidance
```

## 🎨 Design Philosophy

**Gem-Tone Palette**: Inspired by precious stones (emerald, ruby, sapphire, amethyst), the color scheme creates a rich, literary atmosphere.

**Script Typography**: Courier Prime and Special Elite fonts evoke the typewriter aesthetic of classic memoir writing.

**Minimalist Interface**: Clean, uncluttered design keeps focus on the writing and transformations.

**Animated Transitions**: Smooth P5.js animations make format changes feel organic and engaging.

## 🔧 How It Works

1. **Base Scenes**: Three carefully crafted memoir scenes with strong sensory details, emotional depth, and narrative structure
2. **Genre Transformation**: Each scene has been rewritten in 7 different genres (21 variations total), demonstrating specific craft techniques
3. **Visual Format**: P5.js dynamically renders content in different layouts with smooth animated transitions
4. **Annotations**: Context-aware explanations highlight what changed and why
5. **Custom Input**: Users can input their own scenes (visual-only transformations)
6. **Export**: Download HTML files with the transformed content and craft notes

## 📚 Genre Transformation Examples

### Thriller
- Heightened stakes and external danger
- Foreshadowing and mounting tension
- Clipped pacing with strategic information reveals

### Noir
- Cynical worldview and moral ambiguity
- Atmospheric mood with symbolic details
- Hardboiled voice with world-weary metaphors

### Literary Fiction
- Elevated language and philosophical depth
- Metaphorical layers and narrative distance
- Focus on meaning rather than plot

### Hero's Journey
- Mythic structure with archetypal characters
- Transformational arc with inspirational tone
- Mentor-student relationships and trials

### Sci-Fi Dystopia
- Technological world-building
- Dehumanizing systems contrasted with organic humanity
- Futuristic equivalents of contemporary details

### Horror
- Familiar made uncanny and unsettling
- Escalating dread through accumulating wrongness
- Ambiguous threats and body horror

### Interactive Fiction
- Player agency through choice-driven narrative
- Game mechanics (stats, achievements, branching paths)
- Exploration-based storytelling

## 🤝 Contributing

This is an educational project. Contributions welcome!

### Ideas for Contribution
- Additional base memoir scenes
- New genre variations
- Alternative visual formats
- Improved annotations
- Accessibility enhancements
- Mobile experience improvements

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-genre`)
3. Commit your changes (`git commit -m 'Add romance genre variation'`)
4. Push to the branch (`git push origin feature/new-genre`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by classic memoir craft texts and creative writing pedagogy
- Built with [P5.js](https://p5js.org/) - a wonderful library for creative coding
- Typography by Google Fonts

## 📧 Contact

Questions or feedback? Open an issue or reach out!

---

**Memoir Remix Studio** - Where memory meets imagination across genres and formats.
