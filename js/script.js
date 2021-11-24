// DOM

const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popupContainer = document.getElementById("popup-container");
const popup = document.getElementById("popup");
const finalMessage = document.getElementById("final-message");
const displayWordEl = document.getElementById("display-secretword");
const hangmanPicture = document.getElementById("hangman-picture");
const buttonContainer = document.querySelector(".buttons__container");
const maxGuess = document.getElementById("max-guess");
const guesses = document.getElementById("life");

// Array with strings of words
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

let correctLetters = []; // Correct guessed letters stores here
let wrongLetters = []; // Wrong guessed letters stores here
let randomWord = []; // Stores the random word / secret word
const lifes = 6; // Max guesses the player have. Change to make it easier or more difficult

maxGuess.innerText = lifes;
guesses.innerText = wrongLetters.length;

// Generates a randomWord from wordList.
function generateRandomWord() {
  randomWord = wordList[Math.floor(Math.random() * wordList.length)].split("");
}

// Generates the buttons from a-z.
function generateKeyButtons() {
  buttonContainer.innerHTML = "";
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  letters.forEach((letter) => {
    const btn = document.createElement("button");
    btn.id = letter;
    btn.innerHTML = letter;
    btn.classList.add("buttons");
    btn.addEventListener("click", handleGuess);
    buttonContainer.appendChild(btn);
  });
}

// Reset all the values.
function resetValues() {
  popupContainer.style.display = "none";
  correctLetters = [];
  wrongLetters = [];
  randomWord = [];
  guesses.innerText = wrongLetters.length;
  hangmanPicture.src = `images/h${wrongLetters.length}.png`;
  generateRandomWord();
  generateKeyButtons();
  displayBoard();
}

function handleGuess(event) {
  const btn = document.getElementById(event.target.id);
  btn.removeEventListener("click", handleGuess);
  btn.classList.add("clicked");

  // If guessed letter is correct it pushes the letter in correctLetters and runs displayBoard.
  if (randomWord.includes(event.target.id)) {
    correctLetters.push(event.target.id);
    displayBoard();

    // Then see if player have won
    const randomWordCheck = wordEl.innerText.replaceAll("\n", "");
    if (randomWordCheck.split("").length === randomWord.length) {
      popupContainer.style.display = "flex";
      popup.style.backgroundColor = "#9bff96";
      finalMessage.textContent = `YOU WIN! 🎉 `;
      displayWordEl.textContent = `Secret word: ${randomWord.join("")}`;
      playAgainBtn.addEventListener("click", resetValues);
    }
  }
  // If guessed letter is not correct it pushes the letter in wrongLetters, updates guesses and updates the hangman picture.
  else {
    wrongLetters.push(event.target.id);
    guesses.innerText = wrongLetters.length;
    hangmanPicture.src = `images/h${wrongLetters.length}.png`;

    // Then see if player have lost
    if (wrongLetters.length === lifes) {
      popupContainer.style.display = "flex";
      popup.style.backgroundColor = "#ff5555";
      finalMessage.textContent = `YOU LOST! 💣 `;
      displayWordEl.textContent = `Secret word: ${randomWord.join("")}`;
      playAgainBtn.addEventListener("click", resetValues);
    }
  }
}

function displayBoard() {
  // Show the hidden word and/or empty underlines
  wordEl.innerHTML = "";
  randomWord.forEach((letter) => {
    const span = document.createElement("span");
    span.classList.add("letter");
    span.innerHTML = correctLetters.includes(letter) ? letter : "";
    wordEl.appendChild(span);
  });
}

// runs when the page loaded
generateRandomWord();
generateKeyButtons();
displayBoard();
