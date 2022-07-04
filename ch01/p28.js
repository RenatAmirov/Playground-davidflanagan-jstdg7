let x;
x = 0;

let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
]

console.log(points);
console.log(points[1].x - points[0].x);

//-----------------------------------

y = 3;

function plus1(x) {
    return x + 1;
}

plus1(y);

let square = function(x) {
    return x * x;
}

square(plus1(y))


