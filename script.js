let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-button");
let chance = true;
let winnerstatement = document.querySelector(".winner");
let startbtn = document.querySelector(".start-game");
let msgContainer = document.querySelector(".msg-container");
let count = 0;

let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (chance === true) {
            box.innerHTML = "X";
            chance = false;
        } else {
            box.innerHTML = "0";
            chance = true;
        }
        count++;
        box.disabled = true;
        checkWinner();
        if (count === 9 && !checkWinner()) {
            winnerstatement.innerText = "It's a Draw!";
            msgContainer.classList.remove("hide");
            resetBtn.classList.add("hide");
        }
    });
});

const reset = () => {
    chance = true;
    count = 0;
    enableboxes();
    msgContainer.classList.add("hide");
    resetBtn.classList.remove("hide");
};

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    winnerstatement.innerText = `Congratulations!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
    resetBtn.classList.add("hide");
};

const checkWinner = () => {
    for (let pattern of winner) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return true;
            }
        }
    }
    return false;
};

startbtn.addEventListener("click", reset);
resetBtn.addEventListener("click", reset);