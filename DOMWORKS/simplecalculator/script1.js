function performAddition(){
    let num1=document.querySelector("#box1").value
    let num2=document.querySelector("#box2").value
    let result=Number(num1)+Number(num2)
    document.querySelector("#resultbox").innerHTML=`the result of ${num1}+ ${num2}=${result}`
}

function performSubtraction(){
    let num1=document.querySelector("#box1").value
    let num2=document.querySelector("#box2").value
    let result=Number(num1)-Number(num2)
    document.querySelector("#resultbox").innerHTML=`the result of ${num1}-${num2}=${result}`
}

function performMultiplication(){
    let num1=document.querySelector("#box1").value
    let num2=document.querySelector("#box2").value
    let result=Number(num1)*Number(num2)
    document.querySelector("#resultbox").innerHTML=`the result of ${num1}*${num2} is ${result}`

}
function performDivision(){
    let num1=document.querySelector("#box1").value
    let num2=document.querySelector("#box2").value
    let result=Number(num1)/Number(num2)
    document.querySelector("#resultbox").innerHTML=`the result of ${num1}/${num2} is ${result}`
}