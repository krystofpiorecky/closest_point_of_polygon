let canvas,
	c,
	p;

let mouse = {
	x: 0,
	y: 0
}

window.onload = e => 
{
	mouse.x = e.clientX;
	mouse.y = e.clientY;
	
	canvas = document.querySelector("canvas");
	c = canvas.getContext("2d");

	canvas.width = 1000;
	canvas.height = 1000;
	c.fillStyle = "#fff";
	c.lineWidth = 3;

	p = new Polygon();
	p.random(30);

	draw();

	setInterval(draw, 20);
};

window.onmousemove = e => {
	mouse.x = e.clientX;
	mouse.y = e.clientY;
};

function draw()
{
	c.clearRect(0, 0, canvas.width, canvas.height);

	c.strokeStyle = "#999";

	p.draw(c);

	let m = {
		x: (mouse.x - canvas.offsetLeft + 200) * 2.5,
		y: (mouse.y - canvas.offsetTop + 200) * 2.5
	}

	let pt = p.closestPoint(m.x, m.y); 

	c.strokeStyle = "#fff";

	c.beginPath();
	c.arc(pt.x, pt.y, 9, 0, 2 * Math.PI, true);
	c.fill();

	c.moveTo(m.x, m.y);
	c.lineTo(pt.x, pt.y);
	c.stroke(); 
}