//
var num=1634
var original=num
var digitCount=String(num).length
var sum=0
while(num!=0){
    let digit=num%10
    let pow=digit**digitCount
    sum=sum+pow
    num=Math.floor(num/10)
}

if(sum==original){
    console.log('armstrong')
}else{
    console.log("not armstrong")
}