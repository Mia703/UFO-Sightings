$(document).ready(function () {
	
	/* =================== page load animation =================== */
	const container = document.getElementById('a');
	const text = document.getElementById('w');

	// console.log("Hello!");
	console.log(window.screen.availHeight)
	console.log(window.screen.availWidth)



	function justforfun() {
		// text.innerHTML = "The Visualization Part...";
		$(container).hide();
		$(".main-grid").show();
	}

	function pop() {
		var x = Math.floor(Math.random() * window.screen.availHeight * 0.75);
		var y = Math.floor(Math.random() * window.screen.availHeight * 0.75);
		for (let i = 0; i < 30; i++) {
			createParticle(x, y);
		}
	}

	function createParticle(x, y) {
		const particle = document.createElement('div');
		container.appendChild(particle);
		particle.classList.add('d');
		particle.style.opacity = "0";
		const size = Math.floor(Math.random() * 30 + 5);
		particle.style.width = `${size}px`;
		particle.style.height = `${size}px`;
		particle.style.borderRadius = `${Math.floor(Math.random() * 90)}%`;
		particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
		const destinationX = x + (Math.random() - 0.5) * 2 * 750;
		const destinationY = y + (Math.random() - 0.5) * 2 * 750;
		const animation = particle.animate([
			{
				transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
				opacity: 1
			},
			{
				transform: `translate(${destinationX}px, ${destinationY}px)`,
				opacity: 0.70
			}
		], {
			duration: Math.random() * 1000 + 500,
			easing: 'cubic-bezier(0, .9, .57, 1)',
			delay: Math.random() * 200
		});

		animation.onfinish = () => {
			particle.remove();
		};

		particle.addEventListener('mouseover', () => {
			// console.log("Hey! you clicked it!");
			text.innerHTML = "Hey! You got one! Now loading your page...";
			setTimeout(justforfun, 3000); // 3 seconds
			clearInterval(intervalId);
		})
	}

	const intervalId = window.setInterval(function () {
		pop();
	}, 2000);

	var divElement = document.getElementById('viz1677358977286');
	var vizElement = divElement.getElementsByTagName('object')[0];
	if (divElement.offsetWidth > 800) {
		vizElement.style.width = '800px';
		vizElement.style.height = '827px';
	} 
	else if (divElement.offsetWidth > 500) {
		vizElement.style.width = '800px';
		vizElement.style.height = '827px';
	} 
	else {
		vizElement.style.width = '100%';
		vizElement.style.height = '777px';
	}
	
	var scriptElement = document.createElement('script');
	scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
	vizElement.parentNode.insertBefore(scriptElement, vizElement);
});