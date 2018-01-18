$(document).ready(() => {
	

$('.btn').on('click', (event) => {
		if ($('.head').is(':visible')){ //checking if the background img is already hidden or not
			$('.head').fadeOut('1000');
			$('.nav').addClass('navAnimation');
		}
		switch(true){
			case $(event.currentTarget).hasClass('btnHome'):
				var $a = $('.btnHome');
				var $b = $('.Home');
				
			break;
			case $(event.currentTarget).hasClass('btnHistory'):
				var $a = $('.btnHistory');
				var $b = $('.History');
				
			break;
			case $(event.currentTarget).hasClass('btnPeople'):
				var $a = $('.btnPeople');
				var $b = $('.People');
				
			break;
			case $(event.currentTarget).hasClass('btnMore'):
				var $a = $('.btnMore');
				var $b = $('.More');
				
			break;
			case $(event.currentTarget).hasClass('btnMom'):
				var $a = $('.btnMom');
				var $b = $('.Mom');
				
			break;
			default:
				var $a = $('.btnHome');
				var $b = $('.Home');
				
		}
		if ($('.head').is(':visible')){ //Checking if the nav is already in the upper area of the page by analysing if the head is visible or not
			$b.delay('3000').slideDown('slow');
		
		}
		else{
			$b.siblings().hide(); // The .sibling is used to erase any section that is open
			$b.slideDown('slow');

			
		}
	});
	
});
	
	
	
	
