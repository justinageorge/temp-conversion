var arr=[10,2,3,14,15]
// var squares=arr.map((n)=>n**2)
// console.log(squares)

// var cube=arr.map((n)=>n**3)
// console.log(cube);

// var evens=arr.filter((n)=>n%2==0)
// console.log(evens)

// var numGtFIVE=arr.filter((num=>num>5))
// console.log(numGtFIVE);


// var sum=arr.reduce((n1,n2)=>n1+n2)
// console.log(sum);

// var product=arr.reduce((n1,n2)=>n1*n2)
// console.log(product);
// var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max)

var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min)

//srt
//ascending order
var arr=[10,2,3,14,15,200]
var srt=arr.sort((obj1,obj2)=>obj1-obj2)
console.log(srt)
//descending order
var arr=[10,2,3,14,15,200]
var srt=arr.sort((obj1,obj2)=>obj2-obj1)
console.log(srt)
