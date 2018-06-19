
console.log("rcp.js loaded");

const player = parseInt(prompt("input a number 0:guu 1:choki 2:paa"));

const computer = Math.floor(Math.random() * 3);

let player_str
let computer_str

if (player == 0) {
    player_str = "guu";
} else if (player == 1){
    player_str = "choki";
} else if (player == 2){
    player_str = "paa";
}

if (computer == 0) {
    computer_str = "guu";
} else if (computer == 1){
    computer_str = "choki";
} else if (computer == 2){
    computer_str = "paa";
}

// check a value that was input
if (isNaN(player)) {
    alert("please input a number");
}else if (player < 0 || player > 2) {
        alert("please input a number 0,1,2");
    }
    // check victory or defeat
    if (player == computer) {
        alert("you:" + player_str + " vs " + "computer:" + computer_str + "\nit's draw");
    } else if (player - computer == -1 || player - computer == 2) {
        alert("you:" + player_str + " vs " + "computer:" + computer_str + "\nyou win");
    } else if (player - computer == -2 || player - computer == 1) {
        alert("you:" + player_str + " vs " + "computer:" + computer_str + "\nyou lose");
    }