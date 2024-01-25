//create  a function nextprime

function isPrime(num){
    let isPrimeNumber=true
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrimeNumber=false
            break
        }
    }
    return isPrimeNumber
}


function nextPrime(num){
    let nextNum=num+1
    
    while(!isPrime(nextNum)){
        nextNum++
    }
    return nextNum
}
console.log(nextPrime(106))