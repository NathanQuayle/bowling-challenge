const reducer = (accumulator, currentValue) => accumulator + currentValue;

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
        this.frames[frame].rolls[bowl] = 0;
        
        if (knockedDownPins > 10) throw('Number too high!');
        if (knockedDownPins < 0) throw('Number too low!');
        if (bowl > 0 && this.isStrike(frame)) throw('Already scored a strike!');
        if (this.isOver10(frame, knockedDownPins)) throw('Frame exceeds 10!');

        // Resets second bowl to 0 if first bowl is a strike
        if(bowl == 0 && knockedDownPins == 10) this.frames[frame].rolls[1] = 0;
        this.frames[frame].rolls[bowl] = knockedDownPins;

    }

    isOver10(frame, knockedDownPins) {
        return this.frames[frame].rolls.reduce(reducer) + knockedDownPins > 10
    }

    isStrike(frame) {
        return this.frames[frame].rolls[0] == 10;
    }

    calculateTotalScore() {
        let score = 0;

        this.frames.forEach((frame, frameIndex) => {
            if(this.isStrike(frameIndex)) {
                let bonusRolls = this.frames[frameIndex + 1].rolls;
                score += bonusRolls.reduce(reducer) + 10;
            } else {
                score += this.calculateFrameScore(frameIndex);
            }
            frame.score = score;
        });
        this.totalScore = score;
    }

    calculateFrameScore(frame) {
        return this.frames[frame].rolls.reduce(reducer);
    }

}