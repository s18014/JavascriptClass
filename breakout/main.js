const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");
const WINDOW_WIDTH = canvas.width;
const WINDOW_HEIGHT = canvas.height;
const SPF = 1000 / 60;
const PADDLE_SPEED = 15;
const MASS_X = 15;
const MASS_Y = 25;
const MASS_WIDTH = WINDOW_WIDTH / MASS_X;
const MASS_HEIGHT = WINDOW_HEIGHT / MASS_Y;
const BLOCK_WIDTH = MASS_WIDTH;
const BLOCK_HEIGHT = MASS_HEIGHT;

const input = new Input();
const ball = new Ball(400, 300, 10, 5, 'red');
const paddle = new Paddle(400, 550, 200, 10, 'deepskyblue');
const score = new Score(WINDOW_WIDTH - 12, 24);
const blocks = [];

for (x=2; x<MASS_X-2; x++) {
    for (y=4; y<MASS_Y-10; y++) {
        var color = '#00f';
        if ((y + x) % 2 == 1) {
            color = '#0f0';
        }
        blocks.push(new Block(x*MASS_WIDTH + BLOCK_WIDTH / 2, y*MASS_HEIGHT + BLOCK_HEIGHT / 2, BLOCK_WIDTH, BLOCK_HEIGHT, color))
    }
}

window.setInterval(game_tick, SPF);

function game_tick() {
    // 入力状況に応じた呼び出し
    if (input.space) {
        ball.start();
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
    blocks_collide();
    ball.move();

    // ボールとブロックの当たり判定
    if (paddle.collide(ball)) {
        if (!(input.left || input.right) || (input.left && input.right)) {
            ball.changeAngle(0)
        } else if (input.left) {
            ball.changeAngle(-1)
        } else if (input.right) {
            ball.changeAngle(1)
        }
    };
    // ボールとブロックの当たり判定

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
        ctx.font = "64px serif";
        ctx.textAlign = 'center';
        ctx.fillStyle = '#f00';
        ctx.strokeStyle = '#000';
        ctx.fillText('GAME OVER', WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2);
        ctx.strokeText('GAME OVER', WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2);
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
    ctx.font = "64px serif";
    ctx.textAlign = 'center';
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#000';
    ctx.fillText('GAME CLEAR', WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2);
    ctx.strokeText('GAME CLEAR', WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2);
    ctx.restore();
    ball.vx = 0;
    ball.vy = 0;
}