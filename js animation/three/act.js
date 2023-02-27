$(document).ready(function () {
	const dotsArray = [81, 377, 337, 338, 412, 564, 549, 558, 490, 523, 590, 705, 511, 585, 713, 638, 340];

	let canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d')
	dots = [];

	/* 
		Initially dotsCount = dotsArray[0]. 
		After every 1 second, update dotsCount = the next element in dotsArray[]. 
		For example, 1 second later, dotsCount = [1], the animation restarts with the new dotsCount 
	*/

	dotsCount = dotsArray[0],
		dotsSize = 5,
		dotSpeed = 3;


	let clear = (color = "#000") => {
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	let resize = () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		clear();
	}

	let update = () => {
		for (let i = 0; i < dotsCount; i++) {
			dots[i].x += dots[i].vx;
			dots[i].y += dots[i].vy;
			if (dots[i].x < 0 || dots[i].x > canvas.width)
				dots[i].vx = -dots[i].vx;
			if (dots[i].y < 0 || dots[i].y > canvas.height)
				dots[i].vy = -dots[i].vy;
		}
		draw();
	}

	let draw = () => {
		clear("rgba(0, 0, 0, 0.3)");
		for (let i = 0; i < dotsCount; i++) {
			ctx.fillStyle = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
			ctx.fillRect(dots[i].x, dots[i].y, dotsSize, dotsSize);
		}
		setTimeout(update, 1000 / 60);
	}

	let init = () => {
		resize();
		window.onresize = resize;
		document.body.style.margin = 0;
		canvas.style.display = 'block';
		document.body.appendChild(canvas);
		// set up the initial dots
		for (let i = 0; i < dotsCount; i++) {
			dots[i] = {
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: Math.random() * dotSpeed,
				vy: Math.random() * dotSpeed
			};
		}

		// update dotsCount every 1 second
		setInterval(() => {
			dotsCount = dotsArray[(dotsArray.indexOf(dotsCount) + 1) % dotsArray.length];
			document.getElementById("sub").innerHTML = dotsCount;

			// reset dots array
			dots = [];
			for (let i = 0; i < dotsCount; i++) {
				dots[i] = {
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					vx: Math.random() * dotSpeed,
					vy: Math.random() * dotSpeed
				};
			}
		}, 4000);
		
		// 4000ms = 4s

		update();
	}
	init();
});