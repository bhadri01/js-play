## svg tutorial

## **style property**

> rect style property

```
x - position  of the svg
y - position  of the svg
rx - radius  of the svg
ry - radius  of the svg
width - width of the svg
height - height of the svg
fill - fill color to the element
fill-opacity - opacity of the element
strock - border fo the element
strock-width - border width of the element
strock-dasharray - break the boreder position in it's regular
atrock-opacity - border opacity
```

> circle style property

```
same this followed by the rect some additional addon
cx - center of the circle
cy - center of the circle
r - radius of the circle
```

> ellipse style property

```
same this followed by the rect some additional addon
cx - center of the circle
cy - center of the circle
rx - radius of the circle
ry - radius of the circle
```

> line style property

```
x1-x2
y1-y2
```

> polyline style property

```
points
```

> path style property

```
M	x,y	moveto	Moves pen to specified point x,y without drawing.
m	x,y	moveto	Moves pen to specified point x,y relative to current pen location, without drawing.

L	x,y	lineto	Draws a line from current pen location to specified point x,y .
l	x,y	lineto	Draws a line from current pen location to specified point x,y relative to current pen location.

H	x	horizontal lineto	Draws a horizontal line to the point defined by
(specified x, pens current y).

h	x	horizontal lineto	Draws a horizontal line to the point defined by
(pens current x + specified x, pens current y). The x is relative to the current pens x position.

V	y	vertical lineto	Draws a vertical line to the point defined by
(pens current x, specified y).

v	y	vertical lineto	Draws a vertical line to the point defined by
(pens current x, pens current y + specified y). The y is relative to the pens current y-position.

C	x1,y1 x2,y2 x,y	curveto	Draws a cubic Bezier curve from current pen point to x,y. x1,y1 and x2,y2 are start and end control points of the curve, controlling how it bends.

c	x1,y1 x2,y2 x,y	curveto	Same as C, but interprets coordinates relative to current pen point.

S	x2,y2 x,y	shorthand /
smooth curveto	Draws a cubic Bezier curve from current pen point to x,y. x2,y2 is the end control point. The start control point is is assumed to be the same as the end control point of the previous curve.

s	x2,y2 x,y	shorthand /
smooth curveto	Same as S, but interprets coordinates relative to current pen point.

Q	x1,y1 x,y	quadratic Bezier curveto	Draws a quadratic Bezier curve from current pen point to x,y. x1,y1 is the control point controlling how the curve bends.

q	x1,y1 x,y	quadratic Bezier curveto	Same as Q, but interprets coordinates relative to current pen point.

T	x,y	shorthand / smooth quadratic Bezier curveto	Draws a quadratic Bezier curve from current pen point to x,y. The control point is assumed to be the same as the last control point used.

t	x,y	shorthand / smooth quadratic Bezier curveto	Same as T, but interprets coordinates relative to current pen point.

A	rx,ry
x-axis-rotation
large-arc-flag,
sweepflag
x,y	elliptical arc	Draws an elliptical arc from the current point to the point x,y. rx and ry are the elliptical radius in x and y direction.
The x-rotation determines how much the arc is to be rotated around the x-axis. It only seems to have an effect when rx and ry have different values.
The large-arc-flag doesn't seem to be used (can be either 0 or 1). Neither value (0 or 1) changes the arc.
The sweep-flag determines the direction to draw the arc in.

a	rx,ry
x-axis-rotation
large-arc-flag,
sweepflag
x,y	elliptical arc	Same as A, but interprets coordinates relative to current pen point.

Z	 	closepath	Closes the path by drawing a line from current point to first point.
z	 	closepath	Closes the path by drawing a line from current point to first point.
```
