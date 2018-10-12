describe('Bowling', () => {
    beforeEach(() => {
        this.bowling = new Bowling;
    });

    describe('.add', () => {
        it('should add numbers in the first frame', () => {
            bowling.add(1);
            expect(this.bowling.frames[0][0]).toBe(1);
        });

        it('should call .nextBowl() if frame is < 10 and bowl < 1', () => {
            spyOn(bowling, 'nextBowl');

            bowling.add(1);

            expect(bowling.nextBowl).toHaveBeenCalled();
        });

        it('should call .nextFrame() if frame is < 10 and bowl is 1', () => {
            spyOn(bowling, 'nextFrame');

            bowling.add(1);
            bowling.add(1);

            expect(bowling.nextFrame).toHaveBeenCalled();
        });
    });

    describe('.nextBowl', () => {
        it('should increment the current bowl', () => {
            bowling.nextBowl(1);
            expect(this.bowling.currentBowl).toBe(1);
        });
    });

    describe('.nextFrame', () => {  
        it('should increment the current frame', () => {
            bowling.nextFrame(1);
            expect(this.bowling.currentFrame).toBe(1);
        });

        it('should reset currentBowl to 0', () => {
            bowling.currentBowl = 1;
            bowling.nextFrame()
            expect(bowling.currentBowl).toBe(0);
        });
    });
});