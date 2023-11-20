import { getPlayers } from "./server-request.js";

const players = await getPlayers();

const tiles = document.querySelectorAll(".tile");
const PLAYER_X = "X";
const PLAYER_O = "O";
let turn = PLAYER_X;

const boardState = Array(tiles.length);

console.log(boardState);
boardState.fill(null);

//Element
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", startNewGame);

//Ljud
const gameOverSound = new Audio('Audio/end.wav');
const clickSound = new Audio('Audio/pop.mp3');

tiles.forEach((tile) => tile.addEventListener("click", tileClick));

function setHoverText() {
  // Tar bort all "hover-text"
  tiles.forEach(tile => {
    tile.classList.remove("x-hover");
    tile.classList.remove("o-hover");
  });

  const hoverClass = `${turn.toLowerCase()}-hover`;

  tiles.forEach((tile) => {
    if (tile.innerText == "")
      tile.classList.add(hoverClass);
  });
}

setHoverText();

function tileClick(event) {
  if (gameOverArea.classList.contains("visible")) {
    return;
  }

  const tile = event.target;
  const tileNumber = tile.id; //.dataset.index
  if (tile.innerText != "") {
    return;
  }

  if (turn === PLAYER_X) {
    tile.innerText = PLAYER_X;
    boardState[tileNumber - 1] = PLAYER_X
    turn = PLAYER_O;
  }
  else {
    tile.innerText = PLAYER_O;
    boardState[tileNumber - 1] = PLAYER_O;
    turn = PLAYER_X
  }
  clickSound.play();

  setHoverText();
  checkWinner();
}

function checkWinner() {
  //Leta efter en vinnare
  for (const winningCombination of winningCombinations) {
    const { combinations, strikeClass } = winningCombination;
    let tileValue1 = boardState[combinations[0] - 1];
    const tileValue2 = boardState[combinations[1] - 1];
    const tileValue3 = boardState[combinations[2] - 1];

    if (
      tileValue1 != null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      strike.classList.add(strikeClass);
      console.log(typeof tileValue1);
      if (tileValue1 === "X") { 
        tileValue1 = players[0].name
      }
      if (tileValue1 === "O") {
        tileValue1 = players[1].name
      }
      console.log("tileValue1 - ", tileValue1);

      gameOverScreen(tileValue1);
      return;
    }
  }

  //Leta efter oavgort
  const allTileFilledIn = boardState.every((tile) => tile !== null);
  if (allTileFilledIn) {
    gameOverScreen(null);
  }
}

function gameOverScreen(winnerText) {
  
  let text = 'Oavgjort!';
  if (winnerText != null) {
    text = `Grattis ${winnerText}, du vann!`;
  }
  gameOverArea.className = "visible";
  gameOverText.innerText = text;
  gameOverSound.play();
}

// Startar om spelet:
function startNewGame() {
  strike.className = "strike";
  gameOverArea.className = "hidden";
  boardState.fill(null);
  tiles.forEach((tile) => (tile.innerText = ""));
  turn = PLAYER_X;
  setHoverText();

  window.location.href = "./index.html"
}


const winningCombinations = [
  //rader som vinner
  { combinations: [1, 2, 3], strikeClass: "strike-row-1" },
  { combinations: [4, 5, 6], strikeClass: "strike-row-2" },
  { combinations: [7, 8, 9], strikeClass: "strike-row-3" },

  { combinations: [1, 4, 7], strikeClass: "strike-column-1" },
  { combinations: [2, 5, 8], strikeClass: "strike-column-2" },
  { combinations: [3, 6, 9], strikeClass: "strike-column-3" },

  { combinations: [1, 5, 9], strikeClass: "strike-diagonal-1" },
  { combinations: [3, 5, 7], strikeClass: "strike-diagonal-2" },
]; 