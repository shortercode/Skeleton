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
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }
  cross(a) {
    const ax = a.x;
    const ay = a.y;
    const az = a.z;
    const bx = this.x;
    const by = this.y;
    const bz = this.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  }
  crossVectors(a, b) {
    const ax = a.x;
    const ay = a.y;
    const az = a.z;
    const bx = b.x;
    const by = b.y;
    const bz = b.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;

  }
  applyQuaternion(q) {
    const x = this.x;
    const y = this.y;
    const z = this.z;
    // calculate quat * vector
    const ix =  q.w * x + q.y * z - q.z * y;
    const iy =  q.w * y + q.z * x - q.x * z;
    const iz =  q.w * z + q.x * y - q.y * x;
    const iw = -q.x * x - q.y * y - q.z * z;
    // calculate result * inverse quat
    this.x = ix * q.w + iw * - q.x + iy * - q.z - iz * - q.y;
    this.y = iy * q.w + iw * - q.y + iz * - q.x - ix * - q.z;
    this.z = iz * q.w + iw * - q.z + ix * - q.y - iy * - q.x;
    return this;
  }
  angleTo(v) {
    const theta = this.dot(v) / Math.sqrt(this.lengthSq() * v.lengthSq());
    return Math.acos(Math.min(Math.max(theta, -1),1));
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