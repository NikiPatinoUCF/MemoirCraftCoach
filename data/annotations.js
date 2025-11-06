// Craft annotations explaining genre transformations
// Structure: ANNOTATIONS[genre] = explanation of craft choices

const ANNOTATIONS = {
    original: {
        title: "Original Memoir",
        content: `<p>This is the base memoir form, written with the core elements of personal narrative:</p>

        <p><strong>Sensory Details:</strong> Notice the specific, concrete details—the smell of jasmine tea mixing with raw meat, the taste of garlic, the sound of train tracks.</p>

        <p><strong>Emotional Honesty:</strong> The narrator reflects truthfully on complex feelings without forcing resolution or artificial epiphanies.</p>

        <p><strong>Present-Tense Reflection:</strong> Even though these are past events, they're rendered with immediacy and the perspective of the person experiencing them.</p>

        <p><strong>Universal Through Specific:</strong> Personal details create emotional resonance that readers can connect to their own experiences.</p>`
    },

    thriller: {
        title: "Thriller Transformation",
        content: `<p><strong>Heightened Stakes:</strong> Personal moments become <em>urgent</em>. The piano lesson isn't just challenging—it's a countdown. The dinner isn't sad—it's dangerous.</p>

        <p><strong>Foreshadowing & Tension:</strong> Details that were merely atmospheric now hint at hidden threats. Notice how "the metronome ticks like a countdown" or "footsteps on the stairs" create anticipation.</p>

        <p><strong>External Danger:</strong> Internal emotional conflict is externalized into physical threat. Mrs. Chen isn't just a teacher—she's hiding something. Dad isn't just leaving—he's escaping.</p>

        <p><strong>Pacing:</strong> Shorter sentences. Clipped rhythm. Information revealed in strategic bursts. Each paragraph propels forward momentum.</p>

        <p><em>Notice: The emotional core remains, but it's now driven by suspense rather than contemplation.</em></p>`
    },

    noir: {
        title: "Noir Transformation",
        content: `<p><strong>Cynicism & Fatalism:</strong> Hope is replaced by resignation. "I'd been on the wrong train my whole life, so what was one more?" This is the noir worldview—everything is already lost.</p>

        <p><strong>Atmospheric Mood:</strong> Details become symbolic of decay and disappointment. The piano has "teeth," dinners are "crime scenes," landscapes are "honest ugliness."</p>

        <p><strong>Hardboiled Voice:</strong> The narrator speaks in clipped, world-weary metaphors. "Her needles clicked like a detective's typewriter, writing a story only she knew the ending to."</p>

        <p><strong>Moral Ambiguity:</strong> There are no clear heroes. The narrator is "victim or perpetrator or both." Everyone is compromised, everyone is guilty.</p>

        <p><em>Notice: The same events become investigations into the nature of disappointment and the lies we tell ourselves.</em></p>`
    },

    literary: {
        title: "Literary Fiction Transformation",
        content: `<p><strong>Elevated Language:</strong> Precise, complex vocabulary and sentence structures. "Liminal space," "dialectic of adolescence," "olfactory ghosts." Language itself becomes art.</p>

        <p><strong>Philosophical Depth:</strong> Events are examined for their larger meaning. The piano isn't just an instrument—it's "an archive." A train ride becomes "the geography of becoming."</p>

        <p><strong>Metaphorical Layers:</strong> Everything signifies something beyond itself. Origami cranes represent transformation. Metronomes become mechanical hearts. Food becomes communion.</p>

        <p><strong>Narrative Distance:</strong> The prose maintains intellectual remove while still conveying emotion. "I was twelve, which is to say I was caught in that liminal space..."</p>

        <p><em>Notice: The focus shifts from what happens to what it means—examining the internal landscape through carefully constructed prose.</em></p>`
    },

    hero: {
        title: "Hero's Journey Transformation",
        content: `<p><strong>Mythic Structure:</strong> Personal events become steps in the classic hero's journey. Mrs. Chen is "the mentor," the failed engagement is "departure from the ordinary world."</p>

        <p><strong>Archetypal Characters:</strong> Real people are recast as universal figures—guides, donors, threshold guardians. "She'd walked this path before" signals the wise mentor archetype.</p>

        <p><strong>Transformational Arc:</strong> Every challenge is framed as character-building. "This was my calling." "The hero must stand alone." Obstacles become opportunities for growth.</p>

        <p><strong>Inspirational Tone:</strong> Language emphasizes empowerment and destiny. "You have the power within you, waiting to be claimed."</p>

        <p><em>Notice: The memoir becomes a quest narrative where the protagonist discovers their true self through trials and guidance.</em></p>`
    },

    scifi: {
        title: "Sci-Fi Dystopia Transformation",
        content: `<p><strong>Technological World-Building:</strong> Contemporary details become futuristic equivalents. A metronome becomes "quartz crystal oscillation." Piano lessons become "acoustic interface" training.</p>

        <p><strong>Dystopian Context:</strong> Personal struggles reflect systemic oppression. "Universal Basic Income cut by 40%." "Great Data Loss." "Mandarin Evacuation of 2089."</p>

        <p><strong>Dehumanizing Language:</strong> Emotional experiences are described in clinical, technical terms. "Cortisol spike." "Designation: Student-7743." "Translation implant."</p>

        <p><strong>Resistance Through Humanity:</strong> The organic, analog, and human become acts of rebellion. Breathing is "the last purely analog human function." Real music in a digital world.</p>

        <p><em>Notice: The memoir explores how personal identity persists even in a world that tries to quantify and control all human experience.</em></p>`
    },

    horror: {
        title: "Horror Transformation",
        content: `<p><strong>Familiar Made Uncanny:</strong> Everyday details become unsettling. Piano keys are "yellowed like old bone." Tomatoes are "blood-bright." Shadows "don't match movements."</p>

        <p><strong>Escalating Dread:</strong> Tension builds through accumulating wrongness. Small details compound—photographs face-down, too many teeth, impossible architecture.</p>

        <p><strong>Body Horror & Violation:</strong> Physical boundaries are threatened. "Something transfers from him to me." "I felt something move behind his teeth." The self becomes permeable.</p>

        <p><strong>Ambiguous Threat:</strong> The danger is never fully explained, keeping readers unsettled. What escaped? What lives in the piano? What's waiting in the walls?</p>

        <p><em>Notice: The emotional vulnerability of memoir becomes literal vulnerability—memories that haunt you become entities that hunt you.</em></p>`
    },

    interactive: {
        title: "Interactive Fiction Transformation",
        content: `<p><strong>Player Agency:</strong> The reader becomes an active participant through choices. "PLAY THE PIANO" or "EXAMINE THE ROOM"—you decide how to engage with the narrative.</p>

        <p><strong>Exploration Over Linear Narrative:</strong> The story unfolds through investigation. You can examine objects, ask questions, or choose different emotional responses.</p>

        <p><strong>Game Mechanics:</strong> Memoir elements become stats and achievements. "MUSIC SKILL increases to Apprentice." "Achievement unlocked: Observer." Progress is quantified.</p>

        <p><strong>Branching Possibilities:</strong> The same scene can be experienced multiple ways depending on choices. "SAVE PROGRESS?" suggests you might return and try different paths.</p>

        <p><em>Notice: The memoir becomes a space to explore rather than a text to read—turning memory into interactive world-building.</em></p>`
    }
};
