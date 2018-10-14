function updateAllFrames() {
    $('.grid-item').each(function() {
        frame = $(this).data('frame');
        
        if (frame == undefined) return;

        $(this).find('.frame-score > p').text(bowling.getFrameScore(frame));
    });
}

$(document).ready(function() {
    bowling = new Bowling;

    $('input').on('change', function() {
        // reset to 10 if val is over 10
        if ($(this).val() > 10) $(this).val(10);
        // reset to 0 if val is negative
        if ($(this).val() < 0) $(this).val(0);
        
        frame = $(this).closest('.grid-item').data('frame')
        roll = $(this).data('roll')
        knockedDownPins = Number($(this).val())

        bowling.setScore(frame, roll, knockedDownPins);
        bowling.calculateTotalScore();
        updateAllFrames();
    });
});