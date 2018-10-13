function updateAllFrames() {
    $('.grid-item').each(function() {
        frame = $(this).data('frame');

        if (frame == undefined) {
            return;
        }
        $(this).find('.frame-score > p').text(bowling.getFrameScore(frame));
    });
}

$(document).ready(function() {
    bowling = new Bowling;

    $('input').on('change', function() {
        frame = $(this).closest('.grid-item').data('frame')
        roll = $(this).data('roll')
        knockedDownPins = Number($(this).val())

        bowling.setScore(frame, roll, knockedDownPins);
        bowling.calculateTotalScore();
        updateAllFrames();
    });
});