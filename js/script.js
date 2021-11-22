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
