jQuery(document).ready(function() {
  
     // Affichage mobile (690px)
     if (jQuery(window).width() < 690) {

      // Deplacer l'image et lui ajouter une marge
      jQuery('.img1-forma-home').appendTo('.description-formation-etuUt').css('margin-top', '10px');
      jQuery('.img2-forma-home').appendTo('.descriptionFormatErgo').css('margin-top', '10px');
    }

    jQuery('.usabilis_programme .head').click(function(){
    if(jQuery(this).parents('.usabilis_programme').hasClass('open')){
        jQuery(this).parents('.usabilis_programme').removeClass('open');
    }else{
        jQuery(this).parents('.usabilis_programme').addClass('open');
    }
    return false;
  });

     /*

    
    
    
    
    
    jQuery('.usabilis_programme .head').click(function(){
        if(jQuery(this).parents('.usabilis_programme').hasClass('open')){
            jQuery(this).parents('.usabilis_programme').removeClass('open');
        }else{
            jQuery(this).parents('.usabilis_programme').addClass('open');
        }
        return false;
    });
     */
    jQuery('.faq').click(function(e){
        jQuery('.faq.open').not(this).removeClass('open');
        if(jQuery(this).hasClass('open')){
            jQuery(this).removeClass('open');
        }else{
            jQuery(this).addClass('open');
        }
        return false;
    });
    /*
    responsiveSideBar();
    
     jQuery(window).resize(function(){
         responsiveSideBar();
     });
    function responsiveSideBar(){
        if (jQuery(window).width() < 983) {
           jQuery('.sidebar_single-formation').insertBefore(".next-sessions");
           jQuery('.header-page .certif-logo').insertAfter(".feature-box .formation-item");
        }else{
            jQuery('.sidebar_single-formation').insertAfter(".vc_col-sm-8.title_single-formation");
            jQuery('.header-page .certif-logo').insertAfter(".header-page .header-text");
        }
        
        if(jQuery(".temoignages-div").length){
           
            jQuery(".temoignages-div > .wpb_wrapper").addClass('bxslider');
            slider = jQuery(".temoignages-div > .wpb_wrapper").bxSlider({
                slideMargin: 20,
                slideSelector: '.temoignage',
                pager: false,
                infiniteLoop: false,
                hideControlOnEnd: true,
                nextText:'<i class="fa fa-chevron-right"></i>',
                prevText:'<i class="fa fa-chevron-left"></i>',
            });

            var newWindowWidth = jQuery(window).width();
            if (newWindowWidth >= 481) {
                jQuery(".temoignages-div > .wpb_wrapper").removeClass('bxslider');
                // destroy slider
                slider.destroySlider();
            }
        }
    }

    if(jQuery("#gform_confirmation_message_6").length){
        jQuery(".usabilis_devis").addClass('open');
        jQuery(".usabilis_devis .button.demande_devis").hide();
        var tttop = jQuery("#gform_confirmation_message_6").offset().top - 250;
       // console.log(tttop);
          jQuery("HTML, BODY").animate({
            scrollTop: tttop
        }, 500);
        
    }
    
    var validate_email = function(email){
      var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var is_email_valid = false;
      if(email.match(pattern) != null){
        is_email_valid = true;
      }
      return is_email_valid;
    }

    jQuery(document).on("keyup", "#input_6_10", function(event){
      var keypressed = event.which;
      var input_val = jQuery(this).val();
      var is_success = true;
      if(keypressed == 9){
        is_success = validate_email(input_val);   
        if(!is_success){
          jQuery(this).focus();
            insertEmailError(jQuery(this));
        }else{
            jQuery(this).next('.email-error').remove();
        }
      }
    });

    jQuery(document).on("focusout", "#input_6_10", function(){
      var input_val = jQuery(this).val();
      var is_success = validate_email(input_val); 

      if(!is_success){
        jQuery("#input_6_10").focus();
          insertEmailError(jQuery(this));
      }else{
            jQuery(this).next('.email-error').remove();
        }
    });
 
    var insertEmailError = function($element){
          if(!$element.next('.email-error').length){
               $element.after( "<p class='email-error'>Veuillez saisir une adresse email valide !</p>" );
          }
    }
    
    jQuery('.progress').each(function(){
        var $this = jQuery(this);
         var value = $this.data('value')
          jQuery({ Counter: 0 }).animate({ Counter: value }, {
            duration: 3300,
            easing: 'swing',
            step: function () {
              $this.find('.progress-value').text(Math.ceil(this.Counter)+'%');
            },
            complete: function () {
                console.log('complete');
              $this.find('.progress-value').text(value+'%');
            }
          });
        $this.addClass('anime');
    });
    
    
  */
});
