class Polygon
{
	constructor(_points)
	{
		this.points = _points;
		this.lines = [];
	}

	draw(_canvas)
	{
		this.lines.forEach(
			line => line.draw(_canvas)
		);
	}

	random(_count)
	{
		if(!_count || _count < 3) _count = 10;

		this.points = [];

		for(let i = 0; i < _count; i++)
		{
			let distance = Math.random() * 400 + 50;
			let angle = i / _count * Math.PI * 2;

			let x = Math.cos(angle) * distance + 500;
			let y = Math.sin(angle) * distance + 500;

			this.points.push({x, y});
		}

		this.createLines();
	}

	createLines()
	{
		this.lines = [];

		for(let i = 0; i < this.points.length; i++)
		{
			let point_a = this.points[i];
			let point_b = this.points[(i+1)%this.points.length];

			this.lines.push(new Line(point_a.x, point_a.y, point_b.x, point_b.y));
		}
	}

	closestPoint(_x, _y)
	{
		return this.lines.sort(
			(a, b) => a.closestPoint(_x, _y).distanceTo(_x, _y) < b.closestPoint(_x, _y).distanceTo(_x, _y) ? -1 : 1
		)[0].closestPoint(_x, _y);
	}
}