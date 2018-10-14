function updateAllFrames() {
    $('.grid-item').each(function() {
        frame = $(this).data('frame');
        
        if (frame == undefined) return;

        $(this).find('.frame-score > p').text(bowling.calculateFrameScore(frame));
    });
}

$(document).ready(function() {
    bowling = new Bowling;

    $('input').on('change', function() {
        frame = $(this).closest('.grid-item').data('frame')
        roll = $(this).data('roll')
        knockedDownPins = Number($(this).val())
        bowling.setScore(frame, roll, 0);

        // reset to 10 if val is over 10
        if (knockedDownPins > 10) $(this).val(10);
        // reset to 0 if val is negative
        if (knockedDownPins < 0) $(this).val(0);
        if (bowling.isOver10(frame, knockedDownPins)) {
            knockedDownPins = 10 - bowling.calculateFrameScore(frame);
            $(this).val(knockedDownPins);
        }     

        bowling.setScore(frame, roll, knockedDownPins);
        bowling.calculateTotalScore();
        updateAllFrames();
    });
});