jQuery('li.mail a, ul.society-information_contact li:nth-child(2) a').click(function(e){
	e.preventDefault();
	console.log('tr');
	var m = jQuery(this).attr('href');
	ga('send','event','Prise de contact','contact@usabilis.com','click email');
	window.location.href = m;
});

jQuery('#gform_1').submit(function(e){
	ga('send','event','Formulaire de contact','Envoi de formulaire','click envoi');
	return true;
	
});
jQuery('.newsletter-form').submit(function(e){
	ga('send','event','Newsletter','inscription','click envoi');
	return true;
	
});