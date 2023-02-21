// circle mouse
const circle = document.getElementById("sphere");
const circleStyle = circle.style;

document.addEventListener("mousemove", (e) => {
  window.requestAnimationFrame(() => {
    circleStyle.top = `${e.clientY - circle.offsetHeight / 2}px`;
    circleStyle.left = `${e.clientX - circle.offsetWidth / 2}px`;
  });
});

/*
Original Code by:
https://github.com/Rajacharles/How-to-Make-Circle-Cursors-in-HTML-CSS
*/


// FIXME: add jq hove event