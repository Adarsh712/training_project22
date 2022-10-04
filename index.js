var a = Number(prompt("Enter first side of Triangle"));
var b = Number(prompt("Enter second side of Triangle"));
var c = Number(prompt("Enter third side of Triangle"));
var d = prompt("Enter Filename");

var e = Number(prompt("Enter first Number"));
var f = Number(prompt("Enter second Number"));
var s = (a + b + c) / 2;
var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(a);
console.log(b);
console.log(c);
console.log(s);
console.log(area);

$("h1").text("Area of Triangle is : " + area);
$("h2").text("File Extention name is : " + d.slice(-4));
$("h3").text("Triple of sum is : " + 3 * (e + f));
