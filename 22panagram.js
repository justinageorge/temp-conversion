var text="quick brown fox jumped over the lazy dogs"
// panagram means all alphabets from a to z present in it

var alphabets="abcdefghijklmnopqrstuvwxyz"
var isPanagram=true
for(let ch of alphabets){
    if (text.indexOf(ch)==-1){
        isPanagram=false
        break
    }
}
console.log(isPanagram)