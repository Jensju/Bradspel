import { getOnePlayer, updatePlayer } from "./server-request.js";
document.querySelector("#addPlayer").addEventListener("submit", regPlayer);

async function regPlayer(event) {
  event.preventDefault();

 //Fångar upp inmatatde spelarnamn

  const playerX = document.getElementById("playerX")
  const playerO = document.getElementById("playerO")
  console.log(playerX);
  console.log(playerO);

  const player1 = await getOnePlayer(1);
  const player2 = await getOnePlayer(2);

  player1.name = playerX.value
  player2.name = playerO.value

  updatePlayer(player1)
  updatePlayer(player2)

  //Omlokaliserar till spelsidan
  window.location.href = "./game.html"

}
