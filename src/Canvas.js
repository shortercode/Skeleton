class Canvas {
  constructor () {
    this.element = document.createElement('canvas');
    this._width = this.element.width;
    this._height = this.element.height;
    this.context = this.element.getContext('2d');
    this.main = null;
    const DRAW = t => requestAnimationFrame(DRAW) && this.main && this.main(t);
    DRAW();
  }
  beginPath(v) {
    this.context.beginPath();
    this.moveTo(v);
  }
  moveTo(v) {
    this.context.moveTo(v.x, v.y);
  }
  lineTo(v) {
    this.context.lineTo(v.x, v.y);
  }
  fill(c) {
    this.context.fillStyle = c;
    this.fill();
  }
  rect(v, width, height, color) {
    this.context.fillStyle = color;
    this.context.fillRect(v.x - width / 2, v.y - height / 2, width, height);
  }
  stroke(c) {
    this.context.strokeStyle = c;
    this.context.stroke();
  }
  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }
  set width(v) {
    this._width = v;
    this.element.width = v;
  }
  get width() {
    return this._width;
  }
  set height(v) {
    this._height = v;
    this.element.height = v;
  }
  get height() {
    return this._height;
  }
}