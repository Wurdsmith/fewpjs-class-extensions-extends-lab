class Polygon {
    constructor(sidesArray){
        this.sidesArray = sidesArray;
    }

    get countSides(){
        return this.sidesArray.length;
    }

    get perimeter(){
       const sum = this.sidesArray.reduce((acc, val) => acc + val);
       return sum
    }
}

class Triangle extends Polygon {

    get isValid(){
        if (!Array.isArray(this.sidesArray)) return;
        if (this.sidesArray.length !== 3) return;
        
        let a = this.sidesArray[0];
        let b = this.sidesArray[1];
        let c = this.sidesArray[2];
       
        if (a + b <= c || a + c <= b || b + c <= a) return false;
        else return true;
    }
}

class Square extends Polygon {

    get isValid(){

        if (!Array.isArray(this.sidesArray)) return;
        if (this.sidesArray.length !== 4) return;
        if (this.sidesArray.every(val => val === this.sidesArray[0])) return true;
        else return false;
    }

    get area() {
        if (!Array.isArray(this.sidesArray)) return;
        if (this.sidesArray.length !== 4) return;
        return this.sidesArray[0] * this.sidesArray[1]
      }
}

