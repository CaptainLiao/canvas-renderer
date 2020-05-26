class Point {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Polygon {
  public x: number;
  public y: number;
  public radius: number;
  public sides: number;
  public startAngle: number;
  public endAngle: number;
  public strokeStyle: string;
  public fillStyle: string;

  constructor(centerX: number, centerY: number, radius: number, sides: number, startAngle: number, strokeStyle: string, fillStyle: string) {
    this.x = centerX;
    this.y = centerY;
    this.radius = radius;
    this.sides = sides;
    this.startAngle = startAngle;
    this.strokeStyle = strokeStyle;
    this.fillStyle = fillStyle;
  }

  public getPoints() {
    const points = []
    let angle = this.startAngle || 0;

    for (var i = 0; i < this.sides; ++i) {
      points.push(new Point(this.x + this.radius * Math.sin(angle), this.y - this.radius * Math.cos(angle)));
      angle += 2 * Math.PI / this.sides;
    }
    return points;
  }

  public createPath(context: CanvasRenderingContext2D) {
    const points = this.getPoints();

    context.beginPath();

    context.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < this.sides; ++i) {
      context.lineTo(points[i].x, points[i].y);
    }

    context.closePath();
  }

  public stroke(context: CanvasRenderingContext2D) {
    context.save();
    this.createPath(context);
    context.strokeStyle = this.strokeStyle;
    context.stroke();
    context.restore();
  }

  public fill(context: CanvasRenderingContext2D) {
    context.save();
    this.createPath(context);
    context.fillStyle = this.fillStyle;
    context.fill();
    context.restore();
  }
}

