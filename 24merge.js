var firstString="ABC"
var secondString="PQRST"
var smallestString=firstString.length<secondString.length?firstString:secondString
var mergedString=""
for(let i=0; i<smallestString.length;i++){
    let sub=firstString[i]+secondString[i]
    mergedString+=sub

}
if(firstString.length>secondString.length){
    let balance=firstString.slice(smallestString.length)
    mergedString=mergedString+balance
}else{
    let balance=secondString.slice(smallestString.length)
    mergedString=mergedString+balance
}


