class Limb extends Vector {
  constructor (start, end, position) {
    this.position = position;
    this.direction = new Vector();
    this.start = start;
    this.end = end;
  }
  update () {
    // Delta vector a -> b
    this.direction.copy(this.end)
      .sub(this.start);
    // Distance to the center
    const HALF_LENGTH = this.direction.length() / 2;
    // Unit vector of the delta
    this.direction.normalise();
    // If using an absolutePosition just copy it
    if (this.position) {
      this.copy(this.position);
    // else use the center point ( start + half length )
    } else {
      this.copy(this.direction)
        .multiplyScalar(HALF_LENGTH)
        .add(this.start);
    }
  }
}