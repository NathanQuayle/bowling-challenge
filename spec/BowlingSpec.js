describe('Bowling', () => {
    beforeEach(() => {
        this.bowling = new Bowling;
    });

    describe('.setScore', () => {
        it('should add numbers in the first frame', () => {
            bowling.setScore(0, 0, 1);
            expect(this.bowling.frames[0].rolls[0]).toBe(1);
        });

        it('should throw error if number is greater than 10', () => {
            expect(() => { bowling.setScore(0, 0, 11) }).toThrow('Number too high!');
        });

        it('should throw error if number is less than 0', () => {
            expect(() => { bowling.setScore(0, 0, -1) }).toThrow('Number too low!');
        });
    });

    describe('.calculateTotalScore', () => {
        it('should calculate the score', () => {
            bowling.frames[0].rolls[0] = 3;
            bowling.frames[0].rolls[1] = 7;
            bowling.frames[1].rolls[0] = 7;
            bowling.calculateTotalScore();
            expect(bowling.totalScore).toBe(17);
        });
    });

    describe('.getFrameScore', () => {
        it('should return one frames score', () => {
            bowling.frames[0].score = 3;
            expect(bowling.getFrameScore(0)).toBe(3);
        });
    });
});