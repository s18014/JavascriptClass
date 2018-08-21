class Effect {
    constructor(x, y, w, h, end_time) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.end_time = Date.now() + end_time;
        this.exist = true;
    }

    explode_rect(ctx) {
        if (!this.exist) {
            return
        }
        ctx.save();

        ctx.beginPath();
        ctx.rect(this.x - this.w, this.y - this.h, this.w * 2, this.h * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();

        ctx.restore();
    }

    isExist() {
        if (this.end_time > Date.now()) {
            this.exist = false
        }
    }
}