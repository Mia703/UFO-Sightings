$(document).ready(function () {
	/* =================== plays music =================== */
	// original audio: https://youtu.be/NbsJv9wX8tk
	const myAudio = document.getElementById("sound");
	myAudio.play();
	
	/* =================== floating dots animation =================== */
	// original link: https://codepen.io/Naszos/pen/eWXwmj
	const dotsNumber = [1, 1, 1, 1, 1, 3, 2, 1, 3, 7, 6, 25, 6, 14, 16, 11, 32, 21, 32, 20, 33, 53, 36, 40, 46, 39, 49, 56, 69, 145, 144, 138, 157, 114, 96, 88, 107, 166, 200, 228, 206, 190, 231, 170, 179, 123, 122, 105, 131, 153, 134, 156, 163, 180, 170, 165, 168, 204, 283, 378, 396, 856, 1191, 1924, 2012, 2295, 2298, 2782, 3067, 3046, 2749, 3338, 3867, 3502, 3423, 4215, 6096, 5862, 1894];
	const months = ["1910", "1920", "1931", "1936", "1937", "1939", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949", "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"];
	// const dotsNumberLenght = dotsNumber.length;
	var count_index = 0;

	let canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d')
	dots = [];
	dotsCount = dotsNumber[0],
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

		for (let i = 0; i < dotsCount; i++) {
			dots[i] = {
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: Math.random() * dotSpeed,
				vy: Math.random() * dotSpeed
			};
		}

		setInterval(() => {
			dotsCount = dotsNumber[count_index % dotsNumber.length];

			dots = [];
			for (let i = 0; i < dotsCount; i++) {
				dots[i] = {
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					vx: Math.random() * dotSpeed,
					vy: Math.random() * dotSpeed
				};
				let currentMonthIndex = months.indexOf(document.title) + 1;
				if (currentMonthIndex === months.length) {
					currentMonthIndex = 0;
				}
				const subtitle = document.getElementsByClassName("subtitle");
				subtitle[0].innerHTML = months[count_index % dotsNumber.length];

			}
			count_index += 1;
		}, 1000);


		update();
	}

	init();
});