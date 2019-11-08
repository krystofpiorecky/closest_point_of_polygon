class Point
{
	constructor(_x, _y)
	{
		this.x = _x;
		this.y = _y;
	}

	draw(_canvas)
	{
		c.beginPath();
		c.arc(p.x, p.y, 9, 0, 2 * Math.PI, true);
		c.stroke();
	}

	distanceTo(_x, _y)
	{
		return Math.sqrt(
			Math.pow(_x - this.x, 2) + Math.pow(_y - this.y, 2)
		);
	}
}