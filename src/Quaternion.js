class Quaternion {
  constructor (x, y, z, w = 1) {
    this.unit = new Vector(x, y, z);
    this.w = w;
  }
  get x() {
    return this.unit.x;
  }
  get y() {
    return this.unit.y;
  }
  get z() {
    return this.unit.z;
  }
  fromUnitVectors (v, w) {
    this.unit.crossVectors(v, w);
    this.w = Math.sqrt(Math.pow(v.length(), 2) * Math.pow(w.length(), 2)) + v.dot(w);
    this.normalise();
    return this;
  }
  normalise () {
    let L = Math.sqrt(this.unit.lengthSq() + this.w * this.w);
    if (l === 0) {
      this.unit.set();
      this.w = 1;
    } else {
      l = 1 / l;
      this.unit.multiplyScalar(l);
      this.w * l;
    }
    return this;
  }
}