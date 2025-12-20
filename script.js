/* ============================
   1. TYPING TEXT ANIMATION
============================= */

const roles = [
  "Software Developer",
  "Java Developer",
  "Python Programmer",
  "Backend Developer",
  "DSA Enthusiast",
  "Problem Solver",
  "Quick Learner"
];

let roleIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent =
      roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();


/* ============================
   2. SCROLL REVEAL ANIMATION
============================= */

const revealElements = document.querySelectorAll(
  ".about, .skills, .projects, .contact, .project-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach(el => observer.observe(el));


/* ============================
   3. ACTIVE NAVBAR ON SCROLL
============================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


/* ============================
   4. RESUME CLICK TRACKER
============================= */

const resumeButtons = document.querySelectorAll(".resume-btn");

resumeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Resume downloaded");
    alert("Thanks for downloading my resume!");
  });
});
