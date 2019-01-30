// 1. Copy and paste your prototype in here and refactor into class syntax.

class cuboidMaker {
    constructor(cuboidObj) {
    this.length = cuboidObj.length;
    this.width = cuboidObj.width;
    this.height = cuboidObj.height;
}
    volume() { 
      return ( this.length * this.width * this.height );
    }
    surfaceArea() {
      return ( 2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
};
  
const cuboid = new cuboidMaker({
    length: 4, 
    width: 5, 
    height: 5,
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class cubeMaker extends cuboidMaker {
    constructor (cuboidObj) {
        super (cuboidObj);
        this.length = cuboidObj.length;
    }
    volume() { 
        return ( this.length ** 3 );
    }
    surfaceArea() {
        return ( 6 * ( this.length ** 2));
    }
}

const cube = new cubeMaker({
    length: 4, 
});

console.log(cube.volume()); // length ** 3 (cubed)
console.log(cube.surfaceArea()); // length ^2 * 6 