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
	let medium = document.querySelector('.medium');
	console.log(medium);
	let hidden = document.querySelector('.medium_hidden');
	console.log(hidden);
	let tool = document.querySelector('.tool_medium');
	console.log(tool);
	medium.addEventListener('click', function(e){
		hidden.style.visibility = 'visible';
		medium.style.opacity = '0.5';
		tool.style.visibility = 'visible';
	});
	tool.addEventListener('click', function(e){
		hidden.style.visibility = 'hidden';
		medium.style.opacity = '1';
		tool.style.visibility = 'hidden';
	});

	let medium2 = document.querySelector('.medium2');
	console.log(medium2);
	let hidden2 = document.querySelector('.medium_hidden2');
	console.log(hidden2);
	let tool2 = document.querySelector('.tool_medium2');
	console.log(tool2);
	medium2.addEventListener('click', function(e){
		hidden2.style.visibility = 'visible';
		medium2.style.opacity = '0.5';
		tool2.style.visibility = 'visible';
	});
	tool2.addEventListener('click', function(e){
		hidden2.style.visibility = 'hidden';
		medium2.style.opacity = '1';
		tool2.style.visibility = 'hidden';
	});

	let short = document.querySelector('.short');
	console.log(short);
	let hidden3 = document.querySelector('.short_hidden');
	console.log(hidden3);
	let tool_short = document.querySelector('.tool_short');
	console.log(tool_short);
	short.addEventListener('click', function(e){
		hidden3.style.visibility = 'visible';
		short.style.opacity = '0.5';
		tool_short.style.visibility = 'visible';
	});
	tool_short.addEventListener('click', function(e){
		hidden3.style.visibility = 'hidden';
		short.style.opacity = '1';
		tool_short.style.visibility = 'hidden';
	});

	let short2 = document.querySelector('.short2');
	console.log(short2);
	let hidden4 = document.querySelector('.short_hidden2');
	console.log(hidden4);
	let tool_short2 = document.querySelector('.tool_short2');
	console.log(tool_short2);
	short2.addEventListener('click', function(e){
		hidden4.style.visibility = 'visible';
		short2.style.opacity = '0.5';
		tool_short2.style.visibility = 'visible';
	});
	tool_short2.addEventListener('click', function(e){
		hidden4.style.visibility = 'hidden';
		short2.style.opacity = '1';
		tool_short2.style.visibility = 'hidden';
	});
};
