describe('Bowling', () => {
    beforeEach(() => {
        this.bowling = new Bowling();
    });

    describe('initialize', () => {
        it('should start with an empty scorecard', () => {
            expect(this.bowling.frames.length).toEqual(10);
        });
    });

    describe('update', () => {
        it('should update the correct .frames object', () => {
            // returns a random integer from 1 to 10
            let num = Math.floor(Math.random() * 10) + 1;
            expect(this.bowling.frames[3][1]).toEqual(0);
            this.bowling.update(3, 1, num);
            expect(this.bowling.frames[3][1]).toEqual(num);
        });
    });
});