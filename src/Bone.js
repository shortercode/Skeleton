class Bone extends Vector {
	constructor (v, l) {
		super();
    this.parent = v;
    this.children = [];
		this.size = l;
		this.unit = new Vector(1, 0, 0);
    this.update();
	}
  addChild (l, v) {
    const BONE = new Bone(this, l);
    BONE.copyDirection(v);
    this.children.push(BONE);
    return BONE;
  }
  copyDirection (v) {
    return this.unit.copy(v).normalise();
  }
  pointAt (v) {
    this.unit.copy(v)
      .sub(this.parent)
      .normalise();
    this.update();
  }
  traverse (fn) {
    fn(this);
    for (let child of this.children)
      child.traverse(fn);
  }
  update () {
    this.copy(this.unit)
      .multiplyScalar(this.size)
      .add(this.parent);
    for (let child of this.children)
      child.update();
    return this;
  }
  render (C) {
    C.beginPath(this.parent);
    C.lineTo(this);
    C.stroke("rgba(120, 120, 120, 0.8)");
    C.rect(this, 4, 4, 'black');
    for (let child of this.children)
      child.render(C);
  }
}