var num1=12
var num2=18
var gcd=1
var minimum= num1<num2?num1:num2
for(let i=2 ;i<=minimum; i++){
    if(num1%i==0 && num2%i==0){
        gcd=i
    }
}
console.log(gcd)