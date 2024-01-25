var loanAmount=200000;
var tenure=20;
var interestRate=9;
var minterestRate=(interestRate)/12/100
var ytenure=20*12
var num=minterestRate*(1+minterestRate)**ytenure
var dm=(1+minterestRate)**ytenure-1
var emi=loanAmount*num/dm
console.log(Math.round(emi))

//operators
//arithametic(+,-,*,/,%,**)
//relational(<,>,>=,<= == !=)
//logical operators(&&,||,!)
//bitwize op(&,|,^)