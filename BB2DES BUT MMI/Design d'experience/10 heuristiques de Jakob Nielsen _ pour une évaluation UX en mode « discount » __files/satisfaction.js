jQuery(document).ready(function() {
    var number = jQuery('.radial-progress').data('number');
    var fill_rotation = 180 * (number / 100);
    jQuery('.circle .fill, .circle .mask.full').css('transform', 'rotate(' + fill_rotation + 'deg)');

});
