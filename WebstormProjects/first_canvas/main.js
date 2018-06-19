function deg2rad(degree) {
    return degree * Math.PI / 180;
}

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

// strokeの色を指定
context.strokeStyle = "rgb(0, 255, 0)";

// 先の太さを指定（幅）
context.lineWidth = 3;

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
context.lineTo(100, 60);
context.stroke();

context.moveTo(60, 100);
context.lineTo(100, 100);
context.stroke();

// 長方形２個目
context.beginPath();
context.moveTo(250, 20);
context.lineTo(450, 20);
context.lineTo(450, 220);
context.lineTo(250, 220);
context.lineTo(250, 20);

// 長方形３個目
context.moveTo(270, 40);
context.lineTo(270, 240);
context.lineTo(470, 240);
context.lineTo(470, 40);
context.lineTo(270, 40);


context.closePath();

context.fillStyle = "rgb(0, 128, 255)";
context.fill();

context.lineWidth = 1;
context.strokeStyle = "rgb(0, 0, 0)";
context.stroke();

// rectを使った短刑
context.beginPath();
context.moveTo(500, 20);
context.rect(500, 20, 200, 150);
context.rect(580, 20, 200, 150);

context.fillStyle = "rgb(255, 128, 0)";
context.fill();
context.stroke();

// arcを使って円弧
context.beginPath();
context.moveTo(70, 300);
context.arc(70, 300, 50, deg2rad(270), deg2rad(90));
context.fillStyle = "rgb(255, 128, 0)";
context.fill();
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(70, 420);
context.arc(70, 420, 50, 0, deg2rad(90), true);
context.fillStyle = "rgb(255, 128, 0)";
context.fill();
context.stroke();
context.closePath();