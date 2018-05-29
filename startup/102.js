console.log(0.1 + 0.2);
console.log("hello".length);

const input_num = parseInt(prompt("please input a number 0-9"));

console.log(input_num);

if (isNaN(input_num)) {
    console.log("A value other than number was input");
} else if (input_num < 0) {
    console.log("A number is less than 0");
} else if (input_num > 9) {
    console.log("A number is bigger than 9");
} else {
    console.log("A number is in a range 0 to 9");
}

if (isNaN(input_num)) {
    console.log("A value other than number was input")
} else if (input_num >= 0 && input_num <= 9){
    console.log("A number is in a range 0 to 9")
} else {
    console.log("A number is over a range 0 to 9")
}

