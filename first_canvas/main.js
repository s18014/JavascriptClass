// canvasを取得
const canvas = document.getElementById("display");

// contextを取得
const context = canvas.getContext("2d");

// canvasのサイズを取得
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

// 動いているか確認のため色を塗る
// context.fillStyle = "rgb(255, 0, 0)";
// context.fillRect(0, 0, WIDTH, HEIGHT);

// パスの開始
context.beginPath();

// 最初の地点へ
context.moveTo(20, 20);

// 2点目へ
context.lineTo(120, 20);

// 3点目まで直線的に
context.lineTo(120, 120);

context.lineTo(70, 160);

// 4点目まで直線的に
context.lineTo(20, 120);

// パスを閉じる
context.closePath();

// パスの通り線を引く
context.stroke();

context.moveTo(40, 60);
context.lineTo(60, 60);
context.stroke();

context.moveTo(80, 60);
context.lineTo(100, 60)
context.stroke();

context.moveTo(60, 100);
context.lineTo(100, 100);
context.stroke();