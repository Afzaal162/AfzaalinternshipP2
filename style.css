:root {
  --bg: #ffffff;
  --text: #0b1940;
  --muted: #7b8aa4;
  --accent: #ff7a59;
  --accent-2: #f9b24b;
  --card: #ffffff;
  --shadow: 0 16px 40px rgba(17, 24, 39, 0.08);
  --radius: 28px;
}

* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, Arial;
  color: var(--text);
  background: linear-gradient(180deg, #fff 0%, #fff 100%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Default Navbar Layout */
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 40px;
  background: transparent;
  position: relative;
  z-index: 999;
}
.logo {
  color: #050505;
  font-size: 24px;
  font-weight: bold;
}

.brand-name {
  color: #0e0e0e;
}

.brand-dot {
  color: #fad609;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 25px;
  transition: all 0.4s ease;
}

.nav-links li a {
  text-decoration: none;
  color: #181e4b;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #f1a501;
}

.login {
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
}

.signup {
  padding: 7px 15px;
  border-radius: 12px;
  border: 1px solid #070707;
  text-decoration: none;
  color: var(--text);
  background: #fff;
  transition: 0.3s ease;
}

.signup:hover {
  background: #e98d16;
  color: #fff;
}
/* Toggle Button (hamburger) */
.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: #181e4b;
  border-radius: 5px;
  transition: all 0.4s ease;
}

/* When active (X icon effect) */
.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
}

/* Mobile Menu */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: #ffffff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 20px 0;
  }

  .nav-links.show {
    display: flex;
    animation: slideDown 0.3s ease;
  }

  .auth-mobile {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }

  .auth-mobile .login,
  .auth-mobile .signup {
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
  }

  .auth-mobile .login {
    color: #181e4b;
  }

  .auth-mobile .signup {
    background: #f1a501;
    color: #fff;
    transition: 0.3s ease;
  }

  .auth-mobile .signup:hover {
    background: #fdbb2d;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* HERO layout */
.hero {
  max-width: 1200px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 1fr 520px;
  gap: 40px;
  align-items: center;
  padding: 40px;
  position: relative;
  z-index: 1;
}
.kicker {
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: 1px;
  font-size: 13px;
}

/* Hero heading lines */
.hero-heading {
  margin: 0;
  font-family: "Volkhov", "Poppins", serif;
  color: var(--text);
  font-size: 64px;
  line-height: 1;
  letter-spacing: -1px;
}
.hero-heading .line {
  overflow: hidden;
}
.hero-heading .word {
  display: inline-block;
  transform: translateY(24px);
  opacity: 0;
}

/* Highlighted word style + animated underline pseudo-element */
.highlight {
  position: relative;
  display: inline-block;
  color: var(--accent);
  font-weight: 700;
  padding-bottom: 6px;
}
.highlight::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  transform-origin: left center;
  transform: scaleX(0);
  border-radius: 6px;
  transition: transform 550ms cubic-bezier(0.2, 0.9, 0.3, 1);
}

/* Subtext */
.sub {
  color: var(--muted);
  max-width: 520px;
  margin-top: 20px;
  font-size: 15px;
}

/* Stats */
.stats {
  display: flex;
  gap: 12px;
  margin-top: 26px;
  flex-wrap: wrap;
}
.stat-card {
  background: #fff;
  padding: 14px;
  border-radius: 12px;
  box-shadow: var(--shadow);
  min-width: 120px;
  text-align: center;
}
.stat-card strong {
  display: block;
  font-size: 18px;
  color: var(--text);
}
.stat-card span {
  display: block;
  color: var(--muted);
  font-size: 13px;
  margin-top: 6px;
}

/* Right image panel */
.hero-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-wrap {
  width: 100%;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: var(--shadow);
}
.hero-img {
  width: 100%;
  height: auto;
  display: block;
  max-height: 420px;
  object-fit: cover;
}

/* badges */
.badge {
  position: absolute;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px 14px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
  min-width: 120px;
}
.badge-left {
  left: 18%;
  top: 18%;
}
.badge-right {
  right: 6%;
  bottom: 10%;
}
.badge small {
  display: block;
  font-size: 12px;
  color: var(--muted);
}
.badge strong {
  display: block;
  font-size: 16px;
}
.star {
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  color: #fff;
  padding: 8px;
  border-radius: 10px;
}
.people {
  background: #7c6bff;
  padding: 8px;
  border-radius: 10px;
  color: #fff;
}

/* Animation classes (applied by JS) */
.is-visible {
  transform: none;
  opacity: 1;
}

/* per-word animation (stagger via JS) */
[word-animated] {
  transition: transform 700ms cubic-bezier(0.2, 0.9, 0.3, 1), opacity 700ms ease;
}
[word-animated].is-visible {
  transform: translateY(0);
  opacity: 1;
}

/* Responsive */
@media (max-width: 1100px) {
  .hero {
    grid-template-columns: 1fr 420px;
    padding: 28px;
  }
  .hero-heading {
    font-size: 56px;
  }
}
@media (max-width: 820px) {
  .nav-inner {
    padding: 0 12px;
  }
  .menu {
    display: none;
  }
  .hero {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 20px;
  }
  .hero-heading {
    font-size: 40px;
  }
  .hero-right {
    order: -1;
  }
  .badge-left {
    left: 6%;
    top: 8%;
  }
  .badge-right {
    right: 6%;
    bottom: 6%;
  }
}
@media (max-width: 420px) {
  .hero-heading {
    font-size: 34px;
  }
  .kicker {
    font-size: 12px;
  }
  .sub {
    font-size: 14px;
  }
  .stat-card {
    min-width: 100px;
  }
}

/* small utilities */
.hidden {
  display: none;
}
/* CTA Section */
.cta-section {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  text-align: center;
}

/* Primary CTA Button */
.btn-main {
  background: linear-gradient(135deg, #f1a501 0%, #fdbb2d 100%);
  border: none;
  color: #fff;
  padding: 15px 36px;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0px 8px 18px rgba(241, 165, 1, 0.35);
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}

/* Hover Animation */
.btn-main::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  transform: skewX(-25deg);
  transition: left 0.5s ease;
}

.btn-main:hover::before {
  left: 150%;
}

.btn-main:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0px 12px 28px rgba(241, 165, 1, 0.45);
}

/* Play Button */
.btn-play {
  background: none;
  border: none;
  color: #5e6282;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-play:hover {
  color: #df6951;
  transform: translateY(-3px);
}

.play-icon {
  background: #df6951;
  color: #fff;
  border-radius: 50%;
  padding: 11px 13px;
  font-size: 0.9rem;
  box-shadow: 0px 8px 16px rgba(223, 105, 81, 0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-play:hover .play-icon {
  transform: scale(1.15);
  box-shadow: 0px 10px 20px rgba(223, 105, 81, 0.45);
}

.btn-play {
  background: none;
  border: none;
  color: #5e6282;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.play-icon {
  background: #df6951;
  color: #fff;
  border-radius: 50%;
  padding: 10px 12px;
  font-size: 0.9rem;
  box-shadow: 0px 10px 20px rgba(223, 105, 81, 0.3);
  transition: transform 0.3s ease;
}

.btn-play:hover .play-icon {
  transform: scale(1.1);
}

.services {
  text-align: center;
  padding: 80px 8%;
  background-color: #fff;
  font-family: "Poppins", sans-serif;
}

.section-title {
  font-size: 2.3rem;
  color: #181e4b;
  margin-bottom: 60px;
  font-weight: 700;
}
.card-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 25px; /* More modern gap instead of manual margins */
  margin-top: 80px;
  padding: 0 5%;
}

/* Card */
.card {
  flex: 1 1 calc(25% - 25px);
  background: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 250px;
  min-width: 200px;
  height: 260px; /* 👈 Set desired card height */
  padding: 15px 10px; /* 👈 Reduce inner padding to make it more compact */
}

/* Card Image */
.card img {
  height: 120px; /* reduce image height */
  object-fit: cover;
}

/* Card Content */
.card-content {
  padding: 20px;
  text-align: center;
}

.card-content h3 {
  font-size: 18px;
}

.card-content p {
  font-size: 14px;
  line-height: 1.4;
}

/* Hover Animation */
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}
.icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #f1a501 0%, #fdbb2d 100%);
  color: #fff;
  font-size: 32px;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px auto;
  box-shadow: 0 8px 20px rgba(241, 165, 1, 0.3);
  transition: all 0.4s ease;
}

.card:hover .icon {
  transform: rotate(15deg) scale(1.1);
  box-shadow: 0 15px 25px rgba(241, 165, 1, 0.4);
}

/* Responsive */
@media (max-width: 992px) {
  .card {
    flex: 1 1 calc(45% - 25px); /* 2 cards per row */
  }
}

@media (max-width: 600px) {
  .card {
    flex: 1 1 100%; /* 1 card per row */
  }
}
.card-content p {
  color: #666;
  font-size: 15px;
  line-height: 1.3;
}
.top-destinations {
  background: #fff;
  padding: 100px 10%;
  text-align: center;
}

.section-subtitle {
  color: #777;
  letter-spacing: 2px;
  font-weight: 500;
  text-transform: uppercase;
}

.section-title {
  font-size: 48px;
  color: #1b1c57;
  margin: 10px 0 50px;
}

/* --- Cards Layout --- */
/* Cards container */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px; /* space between cards */
  justify-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; /* centers the grid */
  padding: 20px;
}

/* Individual card */
.card-2 {
  background: #ffffff;
  border-radius: 25px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 350px;
  height: 420px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-2 img {
  width: 100%;
  height: 65%;
  object-fit: cover;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.card-2 .card-content {
  flex: 1;
  padding: 15px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-2:hover {
  transform: translateY(-8px);
  box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.15);
}

/* --- Responsive adjustments --- */
@media (min-width: 992px) {
  .cards {
    grid-template-columns: repeat(3, 1fr); /* 3 cards per row on desktop */
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .cards {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row on tablet */
  }
}

@media (max-width: 767px) {
  .cards {
    grid-template-columns: 1fr; /* 1 card per row on mobile */
  }
}

.booking-section {
  padding: 100px 8%;
  background: #fff;
  font-family: "Poppins", sans-serif;
}

.booking-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}

/* LEFT SIDE */
.booking-text {
  flex: 1 1 45%;
}

.small-title {
  color: #5e6282;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 0.9rem;
}

.main-title {
  font-size: 2.5rem;
  color: #14183e;
  margin: 10px 0 40px;
  font-weight: 700;
}

.step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  gap: 20px;
}

.icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.3rem;
}
.icon.yellow {
  background: #f1a501;
}
.icon.red {
  background: #df6951;
}
.icon.blue {
  background: #006380;
}

.step-text h3 {
  font-size: 1.2rem;
  color: #14183e;
  margin-bottom: 5px;
}
.step-text p {
  font-size: 0.9rem;
  color: #5e6282;
  line-height: 1.6;
}

/* RIGHT SIDE CARD */
.booking-card {
  background: #fff;
  border-radius: 25px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 450px;
  height: 500px;
  position: relative;
  transition: transform 0.4s ease;
}
.booking-card:hover {
  transform: translateY(-10px);
}

.card-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  color: #14183e;
  font-size: 1.2rem;
}
.card-content p {
  color: #5e6282;
  font-size: 0.9rem;
  margin-top: 5px;
}
.people {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
  color: #5e6282;
}

/* ONGOING FLOATING CARD */
.ongoing {
  position: absolute;
  bottom: -35px;
  right: -30px;
  background: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 15px 25px;
  font-size: 0.85rem;
  color: #5e6282;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* ANIMATIONS */
.animate-left {
  opacity: 0;
  transform: translateX(-60px);
  animation: slideLeft 1.2s ease forwards;
}
.animate-right {
  opacity: 0;
  transform: translateX(60px);
  animation: slideRight 1.2s ease forwards;
  animation-delay: 0.3s;
}

@keyframes slideLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .booking-container {
    flex-direction: column;
    text-align: center;
  }
  .booking-card {
    width: 100%;
    max-width: 400px;
  }
}
/* Testimonials Section */
.testimonials {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 100px 10%;
  background: #fff;
  overflow: hidden;
  flex-wrap: wrap;
}

/* Left content */
.testimonials-content {
  flex: 1;
  animation: slideLeft 1s ease forwards;
  opacity: 0;
}

.testimonials-content h4 {
  color: #777;
  letter-spacing: 2px;
  font-weight: 500;
}

.testimonials-content h2 {
  font-size: 48px;
  color: #1b1c57;
  margin: 20px 0;
}

.dots {
  display: flex;
  gap: 8px;
  margin-top: 20px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
}

.dot.active {
  background: #444;
}

/* Testimonial card */
.testimonial-card {
  flex: 1;
  background: #ffffff;
  border-radius: 25px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  max-width: 480px;
  position: relative;
  animation: slideRight 1s ease forwards;
  opacity: 0;
}

.profile-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: -35px;
  left: 30px;
  border: 4px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.testimonial-text {
  color: #444;
  font-size: 16px;
  margin-top: 50px;
  line-height: 1.6;
}

.testimonial-card h3 {
  color: #1b1c57;
  margin-top: 15px;
  font-weight: 600;
}

/* ✨ Responsive Design ✨ */

/* Tablets */
@media (max-width: 992px) {
  .testimonials {
    flex-direction: column;
    padding: 80px 8%;
    gap: 40px;
    text-align: center;
  }

  .testimonials-content h2 {
    font-size: 36px;
  }

  .testimonial-card {
    max-width: 90%;
    margin: 0 auto;
  }
}

/* Mobile Phones */
@media (max-width: 600px) {
  .testimonials {
    padding: 60px 6%;
    gap: 30px;
  }

  .testimonials-content h2 {
    font-size: 28px;
  }

  .testimonials-content h4 {
    font-size: 14px;
  }

  .testimonial-card {
    padding: 30px 20px;
    border-radius: 20px;
  }

  .profile-img {
    width: 60px;
    height: 60px;
    top: -30px;
    left: 20px;
  }

  .testimonial-text {
    font-size: 14px;
  }

  .dots {
    justify-content: center;
  }
}

.location {
  color: #777;
  font-size: 14px;
}

/* Airlines Section */
.airlines {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 60px 10%;
  background: #fff;
  flex-wrap: wrap;
}

.airline {
  text-align: center;
  animation: fadeUp 1s ease forwards;
  opacity: 0;
}

.airline .icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin: 0 auto 10px;
  transition: transform 0.3s ease;
}

.airline:hover .icon {
  transform: scale(1.1);
}

.airline p {
  color: #444;
  font-weight: 500;
  margin-top: 5px;
}

/* Animations */
@keyframes slideLeft {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideRight {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.newsletter-section {
  max-width: 900px;
  margin: 0 auto 60px;
  background: linear-gradient(135deg, #e5d9f2 0%, #d4c5f9 100%);
  border-radius: 30px;
  padding: 60px 80px;
  position: relative;
  overflow: hidden;
}

.newsletter-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

.newsletter-content h2 {
  font-size: 2.2rem;
  color: #5a5a7d;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 40px;
}

.subscription-form {
  display: flex;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
  align-items: center;
}

.email-input-wrapper {
  flex: 1;
  position: relative;
}

.email-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

.email-input {
  width: 100%;
  padding: 18px 20px 18px 55px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
}

.email-input::placeholder {
  color: #aaa;
}

.subscribe-btn {
  padding: 18px 45px;
  background: linear-gradient(135deg, #ff9a76 0%, #ff8a6b 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  white-space: nowrap;
}

.subscribe-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 138, 107, 0.4);
}

.paper-plane {
  position: absolute;
  bottom: 40px;
  right: 60px;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #7b68ee 0%, #6a5acd 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(123, 104, 238, 0.3);
}

.paper-plane svg {
  width: 35px;
  height: 35px;
  fill: white;
  transform: rotate(45deg);
}

.monitor-icon {
  position: absolute;
  top: 40px;
  right: 80px;
  width: 60px;
  height: 50px;
  opacity: 0.3;
}

footer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 40px;
  border-top: 1px solid #e0e0e0;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  color: #ff8a6b;
  font-weight: 600;
}

.plane-icon {
  font-size: 1.8rem;
}

.brand-tagline {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-column h3 {
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 12px;
}

.footer-column ul li a {
  color: #666;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-column ul li a:hover {
  color: #ff8a6b;
}

.social-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: color 0.2s;
}

.social-icons a:hover {
  color: #ff8a6b;
}

.app-download {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.app-download p {
  color: #666;
  font-size: 0.95rem;
}

.app-platform {
  color: #999;
  font-size: 0.9rem;
}

.scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ff9a76 0%, #ff8a6b 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 138, 107, 0.3);
  transition: transform 0.2s;
}

.scroll-top:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .newsletter-section {
    padding: 40px 30px;
  }

  .newsletter-content h2 {
    font-size: 1.5rem;
  }

  .subscription-form {
    flex-direction: column;
  }

  .subscribe-btn {
    width: 100%;
  }

  footer {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .paper-plane {
    width: 60px;
    height: 60px;
    bottom: 20px;
    right: 30px;
  }
}
