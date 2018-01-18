$(document).ready(() => {
	
//button Home configuration
	$('.btn').on('click', () => {
		if ($('.head').is(':visible')){ //checking if the background img is already hidden or not
			$('.head').fadeOut('1000');
			$('.nav').addClass('navAnimation');
		}
	
	});
	// HIDE/SHOW SECTION
	$('.btnHome').on('click', (event) => {
		if ($('.head').is(':visible')){ //Checking if the nav is already in the upper area of the page by analysing if the head is visible or not
			$('.Home').delay('3000').slideDown('slow');
		
		}
		else{
			$('.Home').siblings().hide(); // The .sibling is used to erase any section that is open
			$('.Home').slideDown('slow');

			
		}
		
	});
			/*Here I'm repeating exactly 
			what I did for the home button
			but for the other buttons*/
			
	$('.btnHistory').on('click', () => {
		if ($('.head').is(':visible')){
			$('.History').delay('3000').slideDown('slow');
			
		}
		else{
			$('.History').siblings().hide();
			$('.History').slideDown('slow');
			
			
		}
		
	});
	
	$('.btnPeople').on('click', () => {
		if ($('.head').is(':visible')){
			$('.People').delay('3000').slideDown('slow');
			
		}
		else{
			$('.People').siblings().hide();
			$('.People').slideDown('slow');
			
			
		}
		
	});	
	
	$('.btnMore').on('click', () => {
		if ($('.head').is(':visible')){
			$('.More').delay('3000').slideDown('slow');
			
		}
		else{
			$('.More').siblings().hide();
			$('.More').slideDown('slow');
			
			
		}
		
	});	
	
		$('.btnMom').on('click', () => {
		if ($('.head').is(':visible')){
			$('.Mom').delay('3000').slideDown('slow');
			
		}
		else{
			$('.Mom').siblings().hide();
			$('.Mom').slideDown('slow');
			
			
		}
		
	});
});