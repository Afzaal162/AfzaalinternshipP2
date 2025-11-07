document.addEventListener("DOMContentLoaded", () => {
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  // --- Navbar toggle ---
  const menuToggle = $("#menu-toggle"), navLinks = $("#nav-links");
  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.classList.toggle("active");
  });
  navLinks?.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.classList.remove("active");
    })
  );

  // --- Hero heading animation ---
  const hero = $(".hero-left");
  if (hero) {
    $$(".hero-heading .line").forEach(line => {
      line.innerHTML = line.textContent.trim().split(" ")
        .map(w => `<span word-animated style="display:inline-block;transform:translateY(24px);opacity:0;">${w}&nbsp;</span>`)
        .join("");
    });

    const io = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      $$(".hero-heading .line").forEach((line, i) =>
        line.querySelectorAll("[word-animated]").forEach((w, wi) =>
          setTimeout(() => Object.assign(w.style, {
            transition: "transform 720ms cubic-bezier(.2,.9,.3,1), opacity 480ms ease",
            transform: "translateY(0)",
            opacity: "1"
          }), i * 120 + wi * 60)
        )
      );

      setTimeout(() => $(".highlight")?.classList.add("reveal-underline"), 700);
      io.disconnect();
    }, { threshold: 0.12 });
    io.observe(hero);

    // ensure highlight underline CSS
    if (!$("#highlight-underline-css")) {
      const s = document.createElement("style");
      s.id = "highlight-underline-css";
      s.textContent = `
        .highlight::after { transform: scaleX(0); transition: transform 520ms cubic-bezier(.2,.9,.3,1); }
        .highlight.reveal-underline::after { transform: scaleX(1); }`;
      document.head.appendChild(s);
    }
  }

  // --- Stat cards click demo ---
  $$(".stat-card").forEach(c => c.addEventListener("click", () => alert("Open deals / destinations — demo")));

  // --- Scroll reveal ---
  const observer = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  $$("[data-animate]").forEach(el => observer.observe(el));
});
