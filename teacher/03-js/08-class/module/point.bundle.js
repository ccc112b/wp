class Point1 {
    length() {
        throw Error('Point.length() not implemented yet!');
    }
    sub(p2) {
        return this.add(p2.neg());
    }
    distance(p2) {
        return this.sub(p2).length();
    }
}
export { Point1 as Point };
class Point2D1 extends Point1 {
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
    }
    length() {
        let [x, y] = [
            this.x,
            this.y
        ];
        return Math.sqrt(x * x + y * y);
    }
    neg() {
        return new Point2D1(-this.x, -this.y);
    }
    add(p2) {
        return new Point2D1(this.x + p2.x, this.y + p2.y);
    }
    dot(p2) {
        return this.x * p2.x + this.y * p2.y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
export { Point2D1 as Point2D };
class Vector1 extends Point1 {
    constructor(array){
        if (!(array instanceof Array)) throw Error('Vector constorctor accept only array parameter!');
        super();
        this.a = array;
    }
    neg() {
        let a = [];
        let i = 0;
        while(i < this.a.length){
            a[i] = this.a[i] * -1;
            i++;
        }
        return new Vector1(a);
    }
    add(p2) {
        if (this.a.length != p2.a.length) throw Error('Vector:add() length different!');
        let a = [];
        for(let i = 0; i < this.a.length; i++){
            a[i] = this.a[i] + p2.a[i];
        }
        return new Vector1(a);
    }
    dot(p2) {
    }
    length() {
        let r = 0;
        for (let v of this.a){
            r += v * v;
        }
        return Math.sqrt(r);
    }
    toString() {
        return JSON.stringify(this.a);
    }
}
export { Vector1 as Vector };
