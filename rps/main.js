document.getElementById("guu").addEventListener("click", handSelect);
document.getElementById("choki").addEventListener("click", handSelect);
document.getElementById("paa").addEventListener("click", handSelect);

const playerHands = [
    document.getElementById("p0"),
    document.getElementById("p1"),
    document.getElementById("p2"),
    document.getElementById("p3")
];

const computerHands = [
    document.getElementById("c0"),
    document.getElementById("c1"),
    document.getElementById("c2"),
    document.getElementById("c3")
];

const message = document.getElementById("message");

function handSelect(event) {
    console.log("button clicked")
    let playerSelect = 0;
    const buttonId = event.currentTarget.getAttribute("id");
    if (buttonId === "choki") {
        playerSelect = 1;
    } else if (buttonId === "paa") {
        playerSelect = 2;
    }

    for (let h of playerHands) {
        h.classList.remove("on")
    }

    playerHands[playerSelect].classList.add("on");

    const computerSelect = Math.floor(Math.random() * 3);
    const judge = (playerSelect - computerSelect + 3) % 3;

    for (let hand of computerHands) {
        hand.classList.remove("on");
    }

    computerHands[computerSelect].classList.add("on");

    if (judge === 0) {
        message.innerText = "あいこ"
    } else if (judge === 1) {
        message.innerText = "まけ"
        setTimeout("funing(0)", 1000)
    } else {
        message.innerText = "かち"
        setTimeout("funing(1)", 1000)
    }
}

function funing(lose) {

    if (lose === 0) {
        for (let hand of playerHands) {
            hand.classList.remove("on");
        }
        playerHands[3].classList.add("on")
    } else {
        for (let hand of computerHands) {
            hand.classList.remove("on");
        }
        computerHands[3].classList.add("on")
    }
}
