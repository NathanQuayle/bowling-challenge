class Bowling {
    constructor() {
        this.liveGame = true;
        this.frames = [
            { rolls: [0, 0], score: 0 },
            { rolls: [0, 0], score: 0 },
            { rolls: [0, 0], score: 0 },
            { rolls: [0, 0], score: 0 },
            { rolls: [0, 0], score: 0 },
            { rolls: [0, 0], score: 0 },
            { rolls: [0, 0], score: 0 },
            { rolls: [0, 0], score: 0 },
            { rolls: [0, 0], score: 0 },
            { rolls: [0, 0, 0], score: 0 },
        ];
        this.totalScore = 0;
    }

    setScore(frame, bowl, knockedDownPins) {
        if (knockedDownPins > 10) throw('Number too high!');
        if (knockedDownPins < 0) throw('Number too low!');
        if (bowl > 0 && this.isStrike(frame)) throw('Already scored a strike!');
        
        // Resets second bowl to 0 if first bowl is a strike
        if(bowl == 0 && knockedDownPins == 10) this.frames[frame].rolls[1] = 0;

        this.frames[frame].rolls[bowl] = knockedDownPins;
    }

    isStrike(frame) {
        return this.frames[frame].rolls[0] == 10;
    }

    calculateTotalScore() {
        let score = 0;

        this.frames.forEach((frame, frameIndex) => {
            if(this.isStrike(frameIndex)) {
                let bonusRolls = this.frames[frameIndex + 1].rolls;
                score = bonusRolls[0] + bonusRolls[1] + 10;
            } else {
                frame.rolls.forEach((roll) => {
                    score += roll;
                });
            }
            frame.score = score;
        });
        this.totalScore = score;
    }

    getFrameScore(frame) {
        return this.frames[frame].score
    }

}