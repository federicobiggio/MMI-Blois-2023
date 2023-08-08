jQuery(document).ready(function() {
  if (jQuery(window).width() > 1000) {
    jQuery('.biseau-rouge').find('.row-bg-wrap').find('.row-bg.using-image').append('<div style="background-color: rgba(230, 58, 66, 0.74); width: 100%; height: 100%; -webkit-transform: skew(-15deg); margin-left : -48%; -moz-transform: skew(20deg); -o-transform: skew(20deg); "></div>');
  }

  // var $ronds = jQuery('.rond');

  jQuery(document).on('mouseenter', '.round-image-hover', function() {
    $rondHover = jQuery(this).parent().find('.round-image-hover');
    $rondHover.stop(true, true).fadeTo(300, 0.5);
  });

  jQuery(document).on('mouseleave', '.round-image-hover', function() {
    $rondHover = jQuery(this);
    $rondHover.stop(true, true).fadeTo(300, 0);

  });

  jQuery('.title-ci').parents('.wpb_wrapper').find('a img').one('mouseenter', function() {
    $rond = jQuery(this);
    $hoverDiv = jQuery('<div/>', {
      height: $rond.height(),
      width: $rond.width(),
      class: "round-image-hover",
      css: {
        "margin-left": $rond.css('margin-left'),
        "margin-right": $rond.css('margin-right'),
      }
    });

    $hoverDiv.append(jQuery('<i/>', {
      class: "fa-angle-right"
    }));

    $rond.before($hoverDiv);
  });

});
