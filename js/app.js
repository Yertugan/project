window.onload = function(){


	let button = document.querySelector('.em');
	console.log(button);
	let modal = document.querySelector('.modal');
	console.log(modal);
	button.addEventListener('click', function(e){
		modal.style.visibility = 'visible';
	});
	let buttonto = document.querySelector('.to');
	console.log(buttonto);
	let modalto = document.querySelector('.modalto');
	console.log(modalto);
	buttonto.addEventListener('click', function(e){
		modalto.style.visibility = 'visible';
	});
	
};