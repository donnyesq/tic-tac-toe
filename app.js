const container = document.querySelector("#container");

container.style.gridTemplateRows = "repeat(3, 1fr)";
container.style.gridTemplateColumns = "repeat(3, 1fr)";

for (let i = 0; i < 9; i++) {
  let cell = document.createElement("div");
  cell.id = `cell-${i + 1}`;
  cell.classList.add("cell");
  container.appendChild(cell);
}

let played = false;
let xHasWon = false;
let oHasWon = false;
let clicked = 0;

let playXO = () => {
  clicked += 1;

  if (xHasWon || oHasWon || (clicked === 9 && !xHasWon && !oHasWon)) {
    console.log("in restart if statement");
    restartGame();
  }

  if (!played) {
    event.target.innerText = "X";
    played = true;
    event.target.removeEventListener("click", playXO);
    checkWin();
  } else {
    event.target.innerText = "O";
    played = false;
    event.target.removeEventListener("click", playXO);
    checkWin();
  }
};

const checkWin = () => {
  const cell1 = document.querySelector("#cell-1");
  const cell2 = document.querySelector("#cell-2");
  const cell3 = document.querySelector("#cell-3");
  const cell4 = document.querySelector("#cell-4");
  const cell5 = document.querySelector("#cell-5");
  const cell6 = document.querySelector("#cell-6");
  const cell7 = document.querySelector("#cell-7");
  const cell8 = document.querySelector("#cell-8");
  const cell9 = document.querySelector("#cell-9");

  // X WINS IF THE FOLLOWING IS TRUE
  if (
    cell1.innerText === "X" &&
    cell2.innerText === "X" &&
    cell3.innerText === "X"
  ) {
    xWins(cell1, cell2, cell3);
  }

  if (
    cell4.innerText === "X" &&
    cell5.innerText === "X" &&
    cell6.innerText === "X"
  ) {
    xWins(cell4, cell5, cell6);
  }

  if (
    cell7.innerText === "X" &&
    cell8.innerText === "X" &&
    cell9.innerText === "X"
  ) {
    xWins(cell7, cell8, cell9);
  }

  if (
    cell1.innerText === "X" &&
    cell4.innerText === "X" &&
    cell7.innerText === "X"
  ) {
    xWins(cell1, cell4, cell7);
  }

  if (
    cell2.innerText === "X" &&
    cell5.innerText === "X" &&
    cell8.innerText === "X"
  ) {
    xWins(cell2, cell5, cell8);
  }

  if (
    cell3.innerText === "X" &&
    cell6.innerText === "X" &&
    cell9.innerText === "X"
  ) {
    xWins(cell3, cell6, cell9);
  }

  if (
    cell1.innerText === "X" &&
    cell5.innerText === "X" &&
    cell9.innerText === "X"
  ) {
    xWins(cell1, cell5, cell9);
  }

  if (
    cell3.innerText === "X" &&
    cell5.innerText === "X" &&
    cell7.innerText === "X"
  ) {
    xWins(cell3, cell5, cell7);
  }

  // O WINS IF THE FOLLOWING IS TRUE
  if (
    cell1.innerText === "O" &&
    cell2.innerText === "O" &&
    cell3.innerText === "O"
  ) {
    oWins(cell1, cell2, cell3);
  }

  if (
    cell4.innerText === "O" &&
    cell5.innerText === "O" &&
    cell6.innerText === "O"
  ) {
    oWins(cell4, cell5, cell6);
  }

  if (
    cell7.innerText === "O" &&
    cell8.innerText === "O" &&
    cell9.innerText === "O"
  ) {
    oWins(cell7, cell8, cell9);
  }

  if (
    cell1.innerText === "O" &&
    cell4.innerText === "O" &&
    cell7.innerText === "O"
  ) {
    oWins(cell1, cell4, cell7);
  }

  if (
    cell2.innerText === "O" &&
    cell5.innerText === "O" &&
    cell8.innerText === "O"
  ) {
    oWins(cell2, cell5, cell8);
  }

  if (
    cell3.innerText === "O" &&
    cell6.innerText === "O" &&
    cell9.innerText === "O"
  ) {
    oWins(cell3, cell6, cell9);
  }

  if (
    cell1.innerText === "O" &&
    cell5.innerText === "O" &&
    cell9.innerText === "O"
  ) {
    oWins(cell1, cell5, cell9);
  }

  if (
    cell3.innerText === "O" &&
    cell5.innerText === "O" &&
    cell7.innerText === "O"
  ) {
    oWins(cell3, cell5, cell7);
  }
};

const xWins = (cellX, cellY, cellZ) => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((item) => {
    item.removeEventListener("click", playXO);
  });

  cellX.style.backgroundColor = "#006885";
  cellX.style.color = "#fff";
  cellX.style.border = "none";
  cellY.style.backgroundColor = "#006885";
  cellY.style.color = "#fff";
  cellY.style.border = "none";
  cellZ.style.backgroundColor = "#006885";
  cellZ.style.color = "#fff";
  cellZ.style.border = "none";

  let winMessage = document.querySelector("h1");
  winMessage.innerText = "The Xs win";

  xHasWon = true;
};

const oWins = (cellX, cellY, cellZ) => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((item) => {
    item.removeEventListener("click", playXO);
  });

  cellX.style.backgroundColor = "#006885";
  cellX.style.color = "#fff";
  cellX.style.border = "none";
  cellY.style.backgroundColor = "#006885";
  cellY.style.color = "#fff";
  cellY.style.border = "none";
  cellZ.style.backgroundColor = "#006885";
  cellZ.style.color = "#fff";
  cellZ.style.border = "none";

  let winMessage = document.querySelector("h1");
  winMessage.innerText = "The Os win";

  oHasWon = true;
};

const restartGame = () => {
  const restartButton = document.createElement("button");
  restartButton.id = "restart-button";
  restartButton.classList.add("restart-button");
  restartButton.innerText = "restart";
  document.body.appendChild(restartButton);

  restartButton.addEventListener("click", function () {
    location.reload();
  });
};

const cell = document.querySelectorAll(".cell");
cell.forEach((item) => {
  item.addEventListener("click", playXO);
});
