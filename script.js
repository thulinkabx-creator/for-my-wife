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
  if (!heartsStarted) {
    heartsStarted = true;
    setInterval(createHeart, 500);
}
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
// Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "floating-heart";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

let heartsStarted = false;
const letter = `

My Wife,

If you're reading this, thank you for taking a moment to open something I made just for you.

This isn't just a website.

It's every memory.
Every laugh.
Every tear.
Every prayer.
Every dream.

You have become one of the greatest chapters of my life.

If tomorrow asked me to start over...
I'd still look for you.

I'd still choose you.

I'd still fall in love with you.

Thank you for loving me.
Thank you for believing in me.
Thank you for existing.

Forever yours.

❤️

`;

const letterElement = document.getElementById("letter");

if(letterElement){

let i = 0;

function typeLetter(){

if(i < letter.length){

letterElement.innerHTML += letter.charAt(i);

i++;

setTimeout(typeLetter,35);

}

}

typeLetter();

}
const foreverButton = document.getElementById("foreverButton");
const finalCard = document.getElementById("finalCard");

if(foreverButton){

foreverButton.onclick = ()=>{

finalCard.classList.remove("hidden");

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

};

}
