const quest = document.querySelectorAll(".quest");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");
const operation = document.querySelector(".operation");
const tags = document.querySelectorAll(".tags");
const slide = document.querySelectorAll(".slider .slide");
const ham = document.querySelector(".ham");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const links = overlay.querySelectorAll("a");

quest.forEach((q) => {
  const answer = q.querySelector(".answer");
  const img = q.querySelector(".arrow");

  q.addEventListener("click", () => {
    answers.forEach((a) => a.classList.remove("active"));
    arrows.forEach((a) => (a.style.transform = "rotate(0deg)"));

    answer.classList.toggle("active");
    img.style.transform = "rotate(180deg)";
  });
});

let count;

tags.forEach((t) => {
  t.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.dataset.tab;
    count = +target;

    tags.forEach((t) => t.classList.remove("active"));
    e.target.classList.add("active");

    slide.forEach((s) => s.classList.remove("active"));
    slide[count - 1].classList.add("active");
  });
});

ham.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

close.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.add("hidden");
    console.log(link.textContent);
  });
});
