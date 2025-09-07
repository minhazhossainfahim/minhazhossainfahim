// Typewriter Effect
const typewriter = document.getElementById('typewriter');
const texts = ["Web Developer", "Frontend Designer", "JavaScript Learner"];
let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[index].length) {
    typewriter.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});

// Mobile Menu Toggle
document.getElementById("menu-toggle").onclick = () => {
  document.getElementById("navbar").classList.toggle("show");
};

// Dynamic Project Loader
const projectData = [
  { title: "Todo App", description: "A simple task manager app using JavaScript." },
  { title: "Portfolio Website", description: "Responsive personal website." },
  { title: "Calculator", description: "Basic calculator using vanilla JS." },
];

const projectList = document.getElementById('project-list');

projectData.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>`;
  projectList.appendChild(card);
});

