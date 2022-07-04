let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];

const plus1 = x => x + 1;

const square = x => x * x;

let y = 3;

plus1(y);

square(plus1(y));

//------------------------------------

let a = [];

a.push(1,2,3);

a.reverse();

points.dist = function() {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a*a + b*b);
};

points.dist();


