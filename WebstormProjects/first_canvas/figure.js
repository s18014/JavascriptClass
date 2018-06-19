function deg2rad(degree) {
    return degree * Math.PI / 180;
}

const canvas = document.getElementById("display");
const context = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
DD = new Date();
millisec = DD.getMilliseconds();

// 逆スウェーデン
context.beginPath();
context.rect(20, 20, 200, 200);
context.stroke();

context.beginPath();
context.rect(20, 20, 80, 80);
context.fillStyle = "blue";
context.fill();
context.stroke();

context.beginPath();
context.rect(140, 20, 80, 80);
context.fillStyle = "blue";
context.fill();
context.stroke();

context.beginPath();
context.rect(20, 140, 80, 80);
context.fillStyle = "blue";
context.fill();
context.stroke();

context.beginPath();
context.rect(140, 140, 80, 80);
context.fillStyle = "blue";
context.fill();
context.stroke();
context.closePath();

// ドーナッツ
context.beginPath();
context.moveTo(600, 150);
context.arc(600, 150, 50, 0,  deg2rad(360),true);
context.stroke();

context.moveTo(600, 150);
context.arc(600, 150, 100, 0,  deg2rad(360));
context.fillStyle = "blue";
context.fill();
context.stroke();
context.closePath();

const root3 = Math.sqrt(3);
const triangleBottom = 100;
const triangleHeight = triangleBottom * root3;
const triangleHeightHalf = triangleHeight / 2;

context.beginPath();
context.moveTo(300, 500);
context.lineTo(400, 500 - triangleHeight);
context.lineTo(450, 500 - triangleHeightHalf);
context.lineTo(350, 500 - triangleHeightHalf);
context.lineTo(400, 500);
context.lineTo(500, 500);
context.lineTo(450, 500 - triangleHeightHalf);
context.lineTo(400, 500);
context.closePath();

context.fill();
context.stroke();

// 三角いっぱい
context.beginPath();
context.moveTo(600, 300);
context.lineTo(500, 500);
context.lineTo(700, 500);
context.lineTo(600, 300);
context.lineTo(550, 400);
context.lineTo(650, 400);
context.lineTo(600, 500);
context.lineTo(550, 400);
context.fillStyle = "blue";
context.fill();
context.stroke();
context.closePath();

const arcRight = 0;
const arcBottom = 90 * Math.PI / 180;
const arcLeft =  Math.PI;
const arcTop = 270 * Math.PI / 180;

context.beginPath();
context.rect(20, 300, 200, 200);
context.stroke();

context.beginPath();
context.arc(20, 400, 100, deg2rad(90), deg2rad(270), true);
context.stroke();

context.arc(120, 300, 100, deg2rad(180), deg2rad(0), true);
context.stroke();

context.arc(220, 400, 100, deg2rad(270), deg2rad(90), true);
context.stroke();

context.arc(120, 500, 100, deg2rad(0), deg2rad(180), true);
context.stroke();

context.fillStyle = "blue";
context.fill();
context.closePath();
/*
context.beginPath();
context.rect(240, 300, 200, 200);
context.stroke();

context.beginPath();
context.moveTo(240, 300);
context.quadraticCurveTo(540, 300, 240, 500);
context.stroke();
*/