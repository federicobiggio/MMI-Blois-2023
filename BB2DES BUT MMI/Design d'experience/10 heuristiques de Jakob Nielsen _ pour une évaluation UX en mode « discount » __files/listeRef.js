
jQuery(document).ready(function() {
	// Affichage mobile (690px)
	if (jQuery(window).width() < 690) {
		// Suppression de la redirection vers la meme page
		jQuery('ul.tri li.active a').removeAttr('href').append('<i class="fleche-menuMobileRef fa fa-angle-down"></i>');

		// Pour montrer ou cacher le menu
		var compt_visibility = 0;

		jQuery('ul.tri li.active').on('click', function(e) {

			// Amene l'element actif en premiere position de la liste
			e.preventDefault();
			jQuery(this).parent().prepend(this);

			// Si menu deja visible
			// montrer
			if (compt_visibility == 0) {
				jQuery("ul.tri li").removeClass('cacher-listeMobile');
				compt_visibility++;

				//cache
				} else {
				jQuery("ul.tri li").addClass('cacher-listeMobile');
				compt_visibility = 0;
			}
		});
	}
});