class Vector {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  set(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }
  multiplyScalar(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }
  normalise() {
    const l = 1 / this.length();
    this.multiplyScalar(l);
    return this;
  }
  length() {
    return Math.sqrt(this.lengthSq());
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  distanceTo(v) {
    return Math.sqrt(this.distanceToSq(v));
  }
  distanceToSq(v) {
    const dx = v.x - this.x;
    const dy = v.y - this.y;
    const dz = v.z - this.z;
    return dx * dx + dy * dy + dz * dz;
  }
}
Vector.origin = new Vector(0, 0, 0);
Vector.up = new Vector(0, 1, 0);
Vector.down = new Vector(0, -1, 0);