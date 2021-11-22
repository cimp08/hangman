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

function resetValues() {
  console.log("test");
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
    const test = wordEl.innerText.replaceAll("\n", "");
    if (test.split("").length === randomWord.length) {
      popupContainer.style.display = "flex";
      popup.style.backgroundColor = "green";
      finalMessage.textContent = `You won! Secret word: ${randomWord.join("")}`;
      document
        .getElementById("play-again")
        .addEventListener("click", resetValues);
    }
  }
  // If guessed letter is not correct it pushes the letter in wrongLetters, updates guesses and updates the hangman picture.
  else {
    wrongLetters.push(event.target.id);
    document.getElementById(
      "hangman-picture"
    ).src = `images/h${wrongLetters.length}.png`;

    // Then see if player have lost
    if (wrongLetters.length === lifes) {
      popupContainer.style.display = "flex";
      popup.style.backgroundColor = "red";
      finalMessage.textContent = `You lost! Secret word: ${randomWord.join(
        ""
      )}`;
      document
        .getElementById("play-again")
        .addEventListener("click", resetValues);
    }
  }
}

function displayBoard() {
  // Show the hidden word and empty underlines
  wordEl.innerHTML = "";
  for (const letter of randomWord) {
    const span = document.createElement("span");
    span.classList.add("letter");
    span.innerHTML = correctLetters.includes(letter) ? letter : "";
    wordEl.appendChild(span);
  }
}

generateRandomWord();
generateKeyButtons();
displayBoard();
