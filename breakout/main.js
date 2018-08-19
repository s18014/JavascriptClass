const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");
const WINDOW_WIDTH = canvas.width;
const WINDOW_HEIGHT = canvas.height;
const SPF = 1000 / 60;
const PADDLE_SPEED = 10;
const BLOCK_WIDTH = 50;
const BLOCK_HEIGHT = 20;
const MASS_X = Math.floor(WINDOW_WIDTH / BLOCK_WIDTH);
const MASS_y = Math.floor(WINDOW_HEIGHT / BLOCK_HEIGHT);

const input = new Input();
const ball = new Ball(400, 300, 10, 'red');
const paddle = new Paddle(400, 550, 80, 10, 'deepskyblue');
const score = new Score(WINDOW_WIDTH - 150, 24);
const blocks = [];

for (x=3; x<MASS_X-3; x++) {
    for (y=5; y<MASS_y-12; y++) {
        blocks.push(new Block(x*BLOCK_WIDTH, y*BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT, "green"))
    }
}

window.setInterval(game_tick, SPF);

function game_tick() {
    // 入力状況に応じた呼び出し
    if (input.space && !ball.isStart) {
        ball.start(5);
    }
    if (!ball.isStart) {
        ball.x = paddle.x;
        ball.y = paddle.y - ball.radius - paddle.half_height;
    }
    if (input.left) {
        paddle.move(-PADDLE_SPEED);
    }
    if (input.right) {
        paddle.move(PADDLE_SPEED);
    }


    // ボールの移動
    ball.move();

    // ボールとブロックの当たり判定
    paddle.collide(ball);
    // ボールとブロックの当たり判定
    blocks_collide();

    // 各種オブジェクトの描画
    ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    paddle.draw(ctx);
    ball.draw(ctx);
    blocks.forEach((block) => block.draw(ctx));
    score.draw(ctx);
    game_over();
    game_clear();
}

function blocks_collide() {
    blocks.forEach(function(block) {
        if (block.collide(ball)) {
            score.score += block.point;
            block.exist = false;
        }
    });
}

function game_over() {
    if (ball.y > WINDOW_HEIGHT) {
        ctx.save();
        ctx.font = "42px serif";
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.fillText('game over', WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2);
        ctx.restore();
        ball.vx = 0;
        ball.vy = 0;
    }
}

function game_clear() {
    var isGame_clear = false;
    blocks.forEach(function (block) {
        if (block.exist) {
            isGame_clear = true;
        }
    });
    if (isGame_clear) {
        return
    }
    ctx.save();
    ctx.font = "42px serif";
    ctx.textAlign = 'center';
    ctx.fillStyle = '#fff';
    ctx.fillText('game clear', WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2);
    ctx.restore();
    ball.vx = 0;
    ball.vy = 0;
}