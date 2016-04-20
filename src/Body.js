class Body extends Vector {
  constructor(x, y, z) {
    super(x, y, z);
    this.children = [];
    // uses itself as the parent position
    // given that we're overriding the update method
    // this shouldn't cause any problems...
    // also worth noting that JS is fine with
    // circular self references. SO confirmed ;)
    this.left = {};
    this.right = {};

    this.neck = this.addChild(30, Vector.down);
    this.head = this.neck.addChild(30, Vector.down);
    this.waist = this.addChild(20, Vector.up);

    this.left.shoulder = this.neck.addChild(15, {x: -1, y: 0.1, z: 0});
    this.left.elbow = this.left.shoulder.addChild(35, {x: -1, y: 1.8, z: 0});
    this.left.wrist = this.left.elbow.addChild(35, {x: -0.5, y: 4, z: 0});

    this.left.hip = this.waist.addChild(12, {x: -1, y: 0, z: 0});
    this.left.knee = this.left.hip.addChild(40, {x: -0.5, y: 3, z: 0});
    this.left.foot = this.left.knee.addChild(40, {x: 0, y: 3, z: 0});

    this.right.shoulder = this.neck.addChild(15, {x: 1, y: 0.1, z: 0});
    this.right.elbow = this.right.shoulder.addChild(35, {x: 1, y: 1.8, z: 0});
    this.right.wrist = this.right.elbow.addChild(35, {x: 0.5, y: 4, z: 0});

    this.right.hip = this.waist.addChild(12, {x: 1, y: 0, z: 0});
    this.right.knee = this.right.hip.addChild(40, {x: 0.5, y: 3, z: 0});
    this.right.foot = this.right.knee.addChild(40, {x: 0, y: 3, z: 0});

    this.update();
  }
  traverse (fn) {
    for (let child of this.children)
      child.traverse(fn);
  }
  addChild (l, v) {
    const BONE = new Bone(this, l);
    BONE.copyDirection(v);
    this.children.push(BONE);
    return BONE;
  }
  update() {
    for (let child of this.children)
      child.update();
  }
  render(C) {
    for (let child of this.children)
      child.render(C);
  }
}