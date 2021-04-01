// Theme
const boton = document.querySelector('#boton');
const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

boton.addEventListener('click', () => {
	console.log('diste click')
	console.log(prefresDarkScheme)
	if (prefresDarkScheme.matches) {
			document.body.classList.toggle('light-theme')
	} else {
			document.body.classList.toggle('dark-theme')
	}
})


// Notificacion
const element = document.querySelector('.notification');
element.classList.add('animate__animated', 'animate__fadeInUp');

element.addEventListener('animationend', () => {
	setTimeout(function(){
		element.classList.remove('animate__fadeInUp');
		element.classList.add('animate__fadeOut');
	}, 2000);
});