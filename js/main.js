const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => observer.observe(element));

const form = document.querySelector(".cta-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  form.querySelector("button").textContent = "Obrigado!";
  setTimeout(() => {
    form.querySelector("button").textContent = "Comecar agora";
  }, 2200);
});
