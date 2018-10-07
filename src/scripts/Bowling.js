class Bowling {
    constructor() {
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
            [0, 0]
        ];
    }

    update(frame, roll, score) {
        this.frames[frame][roll] = score; 
    }
}