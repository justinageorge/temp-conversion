function degreetoFarenheit(){
    let temp=document.querySelector("#box1").value
    let result=(temp)*(9/5)+32
    document.querySelector("#resultbox").innerHTML=`the result is ${result} Farenheit`
}

function farenheitToDegree(){
    let temp1=document.querySelector("#box2").value
    let result=(temp1-32)*5/9
    document.querySelector("#resultbox").innerHTML=`the result is ${result} celscious`
}