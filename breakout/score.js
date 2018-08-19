class Score {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.score = 0;
    }

    zeropadding() {
        return ('00000' + this.score).slice(-5)
    }

    draw(ctx) {
        const score = this.zeropadding();
        ctx.save();

        ctx.font = "24px serif";
        ctx.fillStyle = '#fff';
        ctx.fillText('score: ' + score, this.x, this.y);

        ctx.restore();
    }
}