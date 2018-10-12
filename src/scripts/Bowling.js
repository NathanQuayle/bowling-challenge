class Bowling {
    constructor() {
        this.totalScore = 0;
        this.currentFrame = 0;
        this.currentBowl = 0;
        this.liveGame = true;
        this.frames = [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0, 0]
        ];
    }

    add(roll) {
        this.frames[this.currentFrame][this.currentBowl] = roll;
        if (this.currentFrame < 10 && this.currentBowl == 1) {
            this.nextFrame();
        }

        if (this.currentFrame < 10 && this.currentBowl < 2) {
            this.nextBowl();
        }
    }

    nextBowl() {
        this.currentBowl++;
    }

    nextFrame() {
        this.currentFrame++;
        this.currentBowl = 0;
    }
}