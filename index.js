const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', function () {
    menu.classList.toggle('show');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.remove('show');
        menuToggle.classList.remove('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Collect the .line elements inside the hero heading
    const lines = Array.from(document.querySelectorAll('.hero-heading .line'));
    // For accessibility we will apply word-level animation:
    lines.forEach((line, idx) => {
        // Wrap each visible text node/word in a span for animation control
        const text = line.textContent.trim();
        line.innerHTML = ''; // clear
        // split by space but keep original spacing visually
        const words = text.split(' ').filter(Boolean);
        words.forEach((w, wi) => {
            const span = document.createElement('span');
            span.textContent = w + (wi === words.length - 1 ? '' : '\u00A0'); // non-breaking space
            span.setAttribute('word-animated', '');
            span.style.display = 'inline-block';
            // start off translated down and transparent (matches CSS)
            span.style.transform = 'translateY(24px)';
            span.style.opacity = '0';
            // small delay for each word will be applied on reveal
            line.appendChild(span);
        });
    });

    // IntersectionObserver to reveal hero words with stagger
    const hero = document.querySelector('.hero-left');
    if (hero) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // reveal words line by line with stagger per-word
                    const lines = Array.from(document.querySelectorAll('.hero-heading .line'));
                    lines.forEach((line, i) => {
                        const children = Array.from(line.querySelectorAll('[word-animated]'));
                        children.forEach((w, wi) => {
                            const delay = (i * 120) + (wi * 60); // ms
                            setTimeout(() => {
                                w.style.transition = 'transform 720ms cubic-bezier(.2,.9,.3,1), opacity 480ms ease';
                                w.style.transform = 'translateY(0)';
                                w.style.opacity = '1';
                                w.classList.add('is-visible');
                            }, delay);
                        });
                    });

                    // animate the highlight underline shortly after main text
                    const highlight = document.querySelector('.highlight');
                    if (highlight) {
                        setTimeout(() => {
                            highlight.classList.add('underline-visible');
                            highlight.style.setProperty('--dummy', ''); // no-op to force style recalculation
                            // We animate via ::after scaleX: simply set transform on pseudo via class toggle
                            highlight.style.transition = 'none';
                            // Use a tiny timeout to allow CSS to pick up class change and animate
                            highlight.classList.add('animate-underline');
                            // Directly set transform on pseudo-element isn't possible; we use a CSS trick:
                            highlight.style.setProperty('--scale', '1');
                            // Instead, toggle class to let CSS handle ::after transform
                            highlight.classList.add('reveal-underline');
                        }, 700);
                    }

                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        io.observe(hero);
    }

    // Because pseudo-element animation uses CSS, add corresponding class after a tick.
    // We will add CSS rules dynamically for the highlight ::after if not present.
    (function ensureHighlightCSS() {
        // create a small style block that transitions the .highlight::after transform
        const id = 'highlight-underline-css';
        if (!document.getElementById(id)) {
            const s = document.createElement('style');
            s.id = id;
            s.textContent = `
        .highlight.reveal-underline::after {
          transform: scaleX(1);
        }
        .highlight::after { transform: scaleX(0); transition: transform 520ms cubic-bezier(.2,.9,.3,1); }
      `;
            document.head.appendChild(s);
        }
    })();

    // Small enhancement: clicking a stat scrolls to deals (demo)
    document.querySelectorAll('.stat-card').forEach(card => {
        card.addEventListener('click', () => {
            alert('Open deals / destinations — demo');
        });
    });
});
// Smooth reveal on scroll
const cards = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));
