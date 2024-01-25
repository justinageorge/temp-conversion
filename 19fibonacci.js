function fibonacci(num1){

let i=1
let prev=0
let curr=1
let next;
let series=[]
while(i<=num1){
     next=prev+curr
     series.push(next)
    
   
    prev=curr
    curr=next
    i+=1
}
return series
}

console.log(fibonacci(10))


function isFibonacci(num){
   
    let isFibonacci=false
    while(fibonacci(i)<=num){
    if (fibonacci(i)===num){
         isFibonacci=true
         break
         
       
         
    }
    i++
   
}
return isFibonacci
}
console.log(isFibonacci(2))