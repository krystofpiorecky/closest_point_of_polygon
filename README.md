# Closest point of a polygon

* Calculating position of the closest point on a polygon.

* Js canvas demo

## Closest point to a line

```javascript
let k = (_x*this.vector.x - this.vector.y*this.a.y + this.vector.y*_y - this.vector.x*this.a.x) / 
	(this.vector.x*this.vector.x + this.vector.y*this.vector.y);

let p = new Point(
	this.x1 + this.vector.x * k,
	this.y1 + this.vector.y * k
);
```

## Closest point to a line (between two points)

```javascript
let k = (_x*this.vector.x - this.vector.y*this.a.y + this.vector.y*_y - this.vector.x*this.a.x) / 
	(this.vector.x*this.vector.x + this.vector.y*this.vector.y);

let p = new Point(
	this.x1 + this.vector.x * k,
	this.y1 + this.vector.y * k
);

if(k <= 0) return this.a;
if(k >= 1) return this.b;
```
