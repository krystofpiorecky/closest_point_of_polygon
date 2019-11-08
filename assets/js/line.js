class Line
{
	constructor(_x1, _y1, _x2, _y2)
	{
		this.x1 = _x1;
		this.y1 = _y1;
		this.x2 = _x2;
		this.y2 = _y2;

		this.a = new Point(_x1, _y1);
		this.b = new Point(_x2, _y2);
	}

	draw(_canvas)
	{
		_canvas.moveTo(this.x1, this.y1);
		_canvas.lineTo(this.x2, this.y2);
		_canvas.stroke(); 
	}

	closestPoint(_x, _y)
	{
		let n = {
			x: -this.vector.y,
			y: this.vector.x
		};

		let k = (-this.vector.y*this.x1 + this.vector.y*_y - this.vector.x*this.y1 + _x*this.vector.x) / 
				(this.vector.x*this.vector.x + this.vector.y*this.vector.y);

		k = (_x*n.y + n.x*this.a.y - n.x*_y - n.y*this.a.x) / 
			(this.vector.x*n.y - this.vector.y*n.x);

		let p = new Point(
			this.x1 + this.vector.x * k,
			this.y1 + this.vector.y * k
		);

		// console.log(k)

		if(k <= 0) return this.a;
		if(k >= 1) return this.b;

		return p;
	}

	get vector()
	{
		return {
			x: this.x2 - this.x1,
			y: this.y2 - this.y1
		};
	}
}