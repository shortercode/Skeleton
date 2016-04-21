class Limb extends Vector {
  constructor (start, end, position) {
    this.position = position;
    this.start = start;
    this.end = end;
    
    this.direction = new Vector();
    // rotation from UP to Limb.direction
    // used to calculate the absolute positions
    // of geometry positions
    this.rotation = new Quaternion();
    
    this.relativePoints = [];
    this.absolutePoints = [];
    
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
    // recalculate rotation
    this.rotation.fromUnitVector(this.direction, Vector.up);
    // recalculate absolute geometry
    for (let i = 0, l = this.relativePoints.length; i < l; i++) {
      const REL = this.relativePoints[i];
      const ABS = this.absolutePoints[i] || this.absolutePoints[i] = new Vector();
      
      ABS.copy(REL)
        .applyQuaternion(this.rotation)
        .add(this.position);
    }
    return this;
  }
  addPoint (v) {
    this.relativePoints.push(v);
    return this;
  }
}