var a = Number(prompt("Enter first side of Triangle"));
var b = Number(prompt("Enter second side of Triangle"));
var c = Number(prompt("Enter third side of Triangle"));
var s = (a + b + c) / 2;
var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(a);
console.log(b);
console.log(c);
console.log(s);
console.log(area);

$("h1").text("Area of Triangle is : "+area)