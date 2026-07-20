const openButton = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const surpriseButton = document.getElementById("surpriseButton");
const finalMessage = document.getElementById("finalMessage");

openButton.addEventListener("click", () => {
  letter.classList.remove("hidden");
  letter.scrollIntoView({
    behavior: "smooth"
  });
});

surpriseButton.addEventListener("click", () => {
  finalMessage.classList.remove("hidden");

  finalMessage.scrollIntoView({
    behavior: "smooth"
  });

  createHearts();
});

function createHearts() {

  for(let i = 0; i < 40; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random()*20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "3s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.top = "-100px";
      heart.style.opacity = "0";
    },100);

    setTimeout(() => {
      heart.remove();
    },3200);

  }

}
