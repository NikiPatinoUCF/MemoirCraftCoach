// Memoir Remix Studio - Main Application Logic
// Handles scene selection, genre filtering, format selection, and visualization

// ============================================
// Application State
// ============================================

const appState = {
    currentScene: 0,           // 0, 1, 2, or 'custom'
    currentGenre: 'original',  // original, thriller, noir, literary, hero, scifi, horror, interactive
    currentFormat: 'prose',    // prose, comic, photo, vignettes
    customText: '',
    isCustomMode: false
};

// ============================================
// P5.js Global Variables
// ============================================

let p5Instance;
let currentText = '';
let animationProgress = 0;
let targetProgress = 1;

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    loadContent();
    updateAnnotations();
    initializeP5();
});

// ============================================
// Event Listeners
// ============================================

function initializeEventListeners() {
    // Scene selection
    document.querySelectorAll('.scene-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const scene = e.target.dataset.scene;

            // Update button states
            document.querySelectorAll('.scene-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Handle custom mode
            if (scene === 'custom') {
                appState.isCustomMode = true;
                document.querySelector('.custom-input-container').classList.remove('hidden');
            } else {
                appState.isCustomMode = false;
                appState.currentScene = parseInt(scene);
                document.querySelector('.custom-input-container').classList.add('hidden');
                loadContent();
            }
        });
    });

    // Apply custom text
    document.getElementById('applyCustom').addEventListener('click', () => {
        appState.customText = document.getElementById('customText').value.trim();
        if (appState.customText) {
            appState.currentScene = 'custom';
            loadContent();
        }
    });

    // Genre filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            appState.currentGenre = e.target.dataset.genre;
            loadContent();
            updateAnnotations();
        });
    });

    // Format selection
    document.querySelectorAll('.format-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.format-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            appState.currentFormat = e.target.dataset.format;
            triggerFormatTransition();
        });
    });

    // Download button
    document.getElementById('downloadBtn').addEventListener('click', downloadHTML);
}

// ============================================
// Content Loading
// ============================================

function loadContent() {
    // Determine which text to display
    if (appState.currentScene === 'custom') {
        currentText = appState.customText;
    } else {
        // Load from scene data
        if (appState.currentGenre === 'original') {
            currentText = SCENES[appState.currentScene].text;
        } else {
            // Load genre variation
            currentText = GENRE_VARIATIONS[appState.currentScene][appState.currentGenre];
        }
    }

    // Trigger animated transition
    triggerContentTransition();
}

function triggerContentTransition() {
    animationProgress = 0;
    targetProgress = 1;
}

function triggerFormatTransition() {
    // Reset animation for format change
    animationProgress = 0;
    targetProgress = 1;
}

// ============================================
// Annotations Update
// ============================================

function updateAnnotations() {
    const annotationsContent = document.getElementById('annotationsContent');
    const annotation = ANNOTATIONS[appState.currentGenre];

    if (annotation) {
        annotationsContent.innerHTML = `
            <h4>${annotation.title}</h4>
            ${annotation.content}
        `;
    }
}

// ============================================
// P5.js Visualization
// ============================================

function initializeP5() {
    const sketch = (p) => {
        p.setup = function() {
            const container = document.getElementById('p5-container');
            const canvas = p.createCanvas(container.offsetWidth - 40, 600);
            canvas.parent('p5-container');
            p.textFont('Courier Prime');
        };

        p.draw = function() {
            p.background(247, 245, 240); // Cream color

            // Animate content transition
            if (animationProgress < targetProgress) {
                animationProgress += 0.02;
            }

            // Render based on current format
            switch(appState.currentFormat) {
                case 'prose':
                    renderProse(p);
                    break;
                case 'comic':
                    renderComic(p);
                    break;
                case 'photo':
                    renderPhotoEssay(p);
                    break;
                case 'vignettes':
                    renderVignettes(p);
                    break;
            }
        };

        p.windowResized = function() {
            const container = document.getElementById('p5-container');
            p.resizeCanvas(container.offsetWidth - 40, 600);
        };
    };

    p5Instance = new p5(sketch);
}

// ============================================
// Format Rendering Functions
// ============================================

function renderProse(p) {
    const margin = 40;
    const lineHeight = 20;
    const maxWidth = p.width - (margin * 2);

    p.fill(43, 45, 46); // Charcoal
    p.textSize(14);
    p.textAlign(p.LEFT, p.TOP);

    // Split text into words and wrap
    const words = currentText.split(' ');
    let line = '';
    let y = margin;

    // Calculate visible text based on animation progress
    const visibleWords = Math.floor(words.length * animationProgress);

    for (let i = 0; i < visibleWords; i++) {
        const testLine = line + words[i] + ' ';
        const testWidth = p.textWidth(testLine);

        if (testWidth > maxWidth && line.length > 0) {
            p.text(line, margin, y);
            line = words[i] + ' ';
            y += lineHeight;

            if (y > p.height - margin) break;
        } else {
            line = testLine;
        }
    }

    if (y <= p.height - margin && line.length > 0) {
        p.text(line, margin, y);
    }
}

function renderComic(p) {
    const cols = 2;
    const rows = 3;
    const panelMargin = 20;
    const panelWidth = (p.width - panelMargin * (cols + 1)) / cols;
    const panelHeight = (p.height - panelMargin * (rows + 1)) / rows;

    // Split text into panels
    const sentences = currentText.match(/[^.!?]+[.!?]+/g) || [currentText];
    const visiblePanels = Math.floor(6 * animationProgress);

    for (let i = 0; i < Math.min(6, visiblePanels); i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = panelMargin + col * (panelWidth + panelMargin);
        const y = panelMargin + row * (panelHeight + panelMargin);

        // Draw panel border
        p.stroke(30, 110, 90); // Emerald
        p.strokeWeight(3);
        p.fill(255);
        p.rect(x, y, panelWidth, panelHeight);

        // Draw placeholder illustration area
        p.fill(232, 230, 224); // Pearl
        p.noStroke();
        p.rect(x + 10, y + 10, panelWidth - 20, panelHeight * 0.6);

        // Draw text caption
        if (sentences[i]) {
            p.fill(43, 45, 46);
            p.textSize(11);
            p.textAlign(p.CENTER, p.CENTER);
            const captionY = y + panelHeight * 0.7 + 10;
            drawWrappedText(p, sentences[i].trim(), x + panelWidth/2, captionY, panelWidth - 20);
        }
    }
}

function renderPhotoEssay(p) {
    const cols = 3;
    const rows = 2;
    const photoMargin = 15;
    const photoWidth = (p.width - photoMargin * (cols + 1)) / cols;
    const photoHeight = (p.height - photoMargin * (rows + 1)) / rows;

    const paragraphs = currentText.split('\n\n');
    const visiblePhotos = Math.floor(6 * animationProgress);

    for (let i = 0; i < Math.min(6, visiblePhotos); i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = photoMargin + col * (photoWidth + photoMargin);
        const y = photoMargin + row * (photoHeight + photoMargin);

        // Draw photo placeholder
        p.noStroke();
        p.fill(155, 40, 71); // Ruby with opacity
        p.rect(x, y, photoWidth, photoHeight * 0.75);

        // Polaroid-style white border
        p.stroke(255);
        p.strokeWeight(2);
        p.noFill();
        p.rect(x-3, y-3, photoWidth+6, photoHeight+6);

        // Draw caption
        if (paragraphs[i]) {
            p.noStroke();
            p.fill(43, 45, 46);
            p.textSize(10);
            p.textAlign(p.CENTER, p.TOP);
            const captionText = paragraphs[i].substring(0, 80) + '...';
            drawWrappedText(p, captionText, x + photoWidth/2, y + photoHeight * 0.78, photoWidth - 10);
        }
    }
}

function renderVignettes(p) {
    const fragments = currentText.split('\n\n');
    const visibleFragments = Math.floor(fragments.length * animationProgress);

    p.push();
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < visibleFragments; i++) {
        const angle = (i / fragments.length) * p.TWO_PI;
        const radius = 150 + (i * 30) % 100;
        const x = p.cos(angle) * radius;
        const y = p.sin(angle) * radius;

        p.push();
        p.translate(x, y);
        p.rotate(angle + p.PI / 2);

        // Draw fragment box
        const boxWidth = 180;
        const boxHeight = 120;

        // Shadow
        p.fill(0, 0, 0, 30);
        p.noStroke();
        p.rect(-boxWidth/2 + 3, -boxHeight/2 + 3, boxWidth, boxHeight, 5);

        // Box
        p.fill(255, 255, 255, 240);
        p.stroke(107, 76, 124); // Amethyst
        p.strokeWeight(2);
        p.rect(-boxWidth/2, -boxHeight/2, boxWidth, boxHeight, 5);

        // Text
        p.fill(43, 45, 46);
        p.noStroke();
        p.textSize(9);
        p.textAlign(p.CENTER, p.CENTER);
        const snippet = fragments[i].substring(0, 100) + '...';
        drawWrappedText(p, snippet, 0, 0, boxWidth - 20);

        p.pop();
    }

    p.pop();
}

// ============================================
// Helper Functions
// ============================================

function drawWrappedText(p, text, x, y, maxWidth) {
    const words = text.split(' ');
    let line = '';
    let lineY = y;
    const lineHeight = p.textSize() * 1.3;

    for (let word of words) {
        const testLine = line + word + ' ';
        const testWidth = p.textWidth(testLine);

        if (testWidth > maxWidth && line.length > 0) {
            p.text(line, x, lineY);
            line = word + ' ';
            lineY += lineHeight;
        } else {
            line = testLine;
        }
    }
    if (line.length > 0) {
        p.text(line, x, lineY);
    }
}

// ============================================
// Download Functionality
// ============================================

function downloadHTML() {
    const annotation = ANNOTATIONS[appState.currentGenre];
    const sceneTitle = appState.currentScene === 'custom'
        ? 'Custom Scene'
        : SCENES[appState.currentScene].title;

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memoir Remix - ${sceneTitle} (${appState.currentGenre})</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #f7f5f0;
            color: #2b2d2e;
            line-height: 1.8;
        }
        h1 {
            font-family: 'Special Elite', monospace;
            color: #1e4d7b;
            border-bottom: 3px solid #2d6e5a;
            padding-bottom: 10px;
        }
        .metadata {
            background: white;
            padding: 15px;
            border-left: 4px solid #d4af37;
            margin: 20px 0;
        }
        .content {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            white-space: pre-wrap;
        }
        .annotations {
            margin-top: 30px;
            padding: 20px;
            background: #e8e6e0;
            border-left: 4px solid #9b2847;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            color: #666;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <h1>${sceneTitle}</h1>

    <div class="metadata">
        <strong>Genre:</strong> ${appState.currentGenre}<br>
        <strong>Format:</strong> ${appState.currentFormat}<br>
        <strong>Generated from:</strong> Memoir Remix Studio
    </div>

    <div class="content">${currentText}</div>

    <div class="annotations">
        <h2>Craft Notes</h2>
        ${annotation.content}
    </div>

    <div class="footer">
        Generated by Memoir Remix Studio | An educational tool for exploring memoir craft
    </div>
</body>
</html>`;

    // Create download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `memoir-remix-${appState.currentGenre}-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
