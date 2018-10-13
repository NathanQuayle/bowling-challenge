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

        this.frames[frame].rolls[bowl] = knockedDownPins;
    }

    calculateTotalScore() {
        let score = 0;

        this.frames.forEach(function(frame) {
            frame.rolls.forEach(function(roll) {
                score += roll;
            });
            frame.score = score;
        });
        this.totalScore = score;
    }

    getFrameScore(frame) {
        return this.frames[frame].score
    }

}