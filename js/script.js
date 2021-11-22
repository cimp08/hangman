const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popupContainer = document.getElementById("popup-container");
const popup = document.getElementById("popup");
const finalMessage = document.getElementById("final-message");
const hangmanPicture = document.getElementById("hangman-picture");
const buttonContainer = document.querySelector(".buttons__container");
const maxGuess = document.getElementById("max-guess");
const guesses = document.getElementById("life");

const wordList = [
  "ideology",
  "reflect",
  "confusion",
  "eliminate",
  "sandwich",
  "performer",
  "evolution",
  "zebra",
  "difficult",
  "skeleton",
  "injury",
  "java",
];

let correctLetters = [];
let wrongLetters = [];
let randomWord = "";
const lifes = 6;

// Generates a randomWord from wordList
function generateRandomWord() {
  randomWord = wordList[Math.floor(Math.random() * wordList.length)].split("");
}

// Generates the buttons from a-z
function generateKeyButtons() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < letters.length; i++) {
    const btn = document.createElement("button");
    btn.id = letters[i];
    btn.innerHTML = letters[i];
    btn.classList.add("buttons");
    btn.addEventListener("click", handleGuess);
    buttonContainer.appendChild(btn);
  }
}

function handleGuess() {
  console.log("test");
}

generateRandomWord();
generateKeyButtons();
