# Closest point of a polygon

* Calculating position of the closest point on a polygon.

* Js canvas demo

## Closest point to a line

```javascript
let k = (_x*n.y + n.x*this.a.y - n.x*_y - n.y*this.a.x) / 
	(this.vector.x*n.y - this.vector.y*n.x);

let p = new Point(
	this.x1 + this.vector.x * k,
	this.y1 + this.vector.y * k
);
```

## Closest point to a line (between two points)

```javascript
let k = (_x*n.y + n.x*this.a.y - n.x*_y - n.y*this.a.x) / 
	(this.vector.x*n.y - this.vector.y*n.x);

let p = new Point(
	this.x1 + this.vector.x * k,
	this.y1 + this.vector.y * k
);

if(k <= 0) return this.a;
if(k >= 1) return this.b;
```
