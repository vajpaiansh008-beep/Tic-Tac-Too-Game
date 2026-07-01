let Boxes = document.querySelectorAll(".Box");
let resetBtn = document.querySelector("#reset")
let newBtn = document.querySelector("#new")
let massage = document.querySelector("#msg")

let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [2, 4, 5],
    [6, 7, 8]
];

// for input of O and X
Boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            //Player is O
            box.textContent = "O"
            turn0 = false;
        } else {
            // Player is X
            box.textContent = "X"
            turn0 = true;
        }
        checkWiner();
        box.disabled = true;
    });
});

// ============================ for Check Winner Pattern ==============================================

const checkWiner = () => {
    for (pattern of winPattern) {
        let pos1 = Boxes[pattern[0]].innerHTML;
        let pos2 = Boxes[pattern[1]].innerHTML;
        let pos3 = Boxes[pattern[2]].innerHTML;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner", pos1);
                massage.textContent = `Winner - ${pos1}`
                disabledBox();
            }            
        }
    }
};



// ======================== for disable the button after winning =============================
const disabledBox = () => {
    for (box of Boxes) {
        box.disabled = true;
    }
}

//======================================= for resart new element in game.====================================

const enableBox = () => {
    for (box of Boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}


//=========================NewGame==================================
const newGame = () => {
    turn0 = true;
    enableBox();
    massage.textContent = "";
}

newBtn.addEventListener("click", newGame);