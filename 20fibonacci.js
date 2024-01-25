function isfibonacci(num,a=0,b=1){
    if(num===0||num===1){
        return true;
    }
    let nextnumber=a+b;
    while(nextnumber<=num){
        if(num===nextnumber){
            return true
        }
        nextnumber=a+b
        
       a=b
       b=nextnumber
   
    }
        return false
    }




function nextFibonacci(num){
    let nextNum=num+1
    while(!isfibonacci(nextNum)){
        nextNum++
    }
    return nextNum
}
console.log(nextFibonacci(5))