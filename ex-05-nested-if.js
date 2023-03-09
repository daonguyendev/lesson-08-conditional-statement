let a = 11;
let b = 10;
let c = 12;

if (a > b) {
    if (a > c) {
        console.log("Greatest number is a = " + a);
    } else {
        console.log("Greatest number is c = " + c);
    }
} else {
    if (b > c) {
        console.log("Greatest number is b = " + b);
    } else {
        console.log("Greatest number is c = " + c);
    }
}