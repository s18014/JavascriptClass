document.getElementById("guu").addEventListener("click", handSelect);
document.getElementById("choki").addEventListener("click", handSelect);
document.getElementById("paa").addEventListener("click", handSelect);

const playerHands = [
    document.getElementById("p0"),
    document.getElementById("p1"),
    document.getElementById("p2"),
];

const computerHands = [
    document.getElementById("c0"),
    document.getElementById("c1"),
    document.getElementById("c2"),
];

const message = document.getElementById("message");

let winCount = 0;
let loseCount = 0;

function handSelect(event) {
    console.log("button clicked");
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

    // 勝ち負け判定
    let judge = 0;
    const lot = Math.floor(Math.random() * 12);
    if (lot < 4) {
        judge = 1;
        winCount += 1
        message.innerText = "勝ち";
    } else if (lot < 10) {
        judge = 2;
        loseCount += 1
        message.innerText = "まけ";
    } else {
        message.innerText = "あいこ";
    }

    const rate = Math.floor(winCount / (winCount + loseCount) * 1000) / 10;
    message.innerText += " (" + rate + "%[" + (winCount + loseCount) + "])";

    // コンピュータの手を全部非表示
    for (let hand of computerHands) {
        hand.classList.remove("on")
    }
    // 計算でコンピュータの手を決定
    const computerSelect = (playerSelect + judge) % 3;
    computerHands[computerSelect].classList.add("on");

}

for ( var i = 0; i < 10000; i++ ) {
    document.getElementById("guu").click()
}