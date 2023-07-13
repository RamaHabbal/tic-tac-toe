let finalscoreX = 0;
let finalscoreO = 0;
let gameActive = true;

let winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let start_btn = document.getElementById("start");
start_btn.addEventListener("click", startgame);

let player1 = "X";
let box = ["", "", "", "", "", "", "", "", ""];

function startgame() {
  let boxgame = document.getElementById("box");
  boxgame.addEventListener("click", clickplay);

  let playerx = document.getElementById("player1").value;
  let playero = document.getElementById("player2").value;
  document.getElementById("scoreXname").innerText = playerx;
  document.getElementById("scoreOname").innerText = playero;
  document.getElementById("scoreX").innerText = finalscoreX;
  document.getElementById("scoreO").innerText = finalscoreO;


  box = ["", "", "", "", "", "", "", "", ""];
  let cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }

  document.getElementById("winner").innerHTML = "";
  gameActive = true;
}

function clickplay(e) {
  if (!gameActive) return; 
  let check = e.target;
  let div = check.id;
  if (box[div] === "") {
    check.innerText = player1;
    box[div] = player1;
  }
  if (winscore(player1)) {
    if (player1 === "X") {
      finalscoreX++;
      document.getElementById("scoreX").innerText = finalscoreX;
    } else {
      finalscoreO++;
      document.getElementById("scoreO").innerText = finalscoreO;
    }
    let winnerName = player1 === "X" ? document.getElementById("player1").value : document.getElementById("player2").value;
    document.getElementById("winner").innerText = winnerName + " wins";
    gameActive = false;
  } else if(isGameOver()){
    document.getElementById("winner").innerText = "Game Over";
    gameActive = false;
  }
  player1 = player1 === "X" ? "O" : "X";
}

function winscore(winner) {
  for (let i = 0; i < winCombinations.length; i++) {
    if (
      box[winCombinations[i][0]] == winner &&
      box[winCombinations[i][1]] == winner &&
      box[winCombinations[i][2]] == winner
    ) {
      return true;
    }
  }
  return false;
}
function isGameOver(){
  for(let cell of box){
    if(cell === ""){
      return false;
    }
  }
  return true;
}
let reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", clickReset);

function clickReset() {
  box = ["", "", "", "", "", "", "", "", ""];
  let cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  document.getElementById("player1").value = "";
  document.getElementById("player2").value = "";
  document.getElementById("winner").innerHTML = "";
  document.getElementById("scoreOname").innerHTML = "";
  document.getElementById("scoreXname").innerHTML = "";
  finalscoreX = 0;
  finalscoreO = 0;
  document.getElementById("scoreX").innerText = finalscoreX;
  document.getElementById("scoreO").innerText = finalscoreO;
  gameActive = true;
}
