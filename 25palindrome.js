var text="madam"
var len= text.length-1
reverse=""
for (let i=len;i>=0;i--){
    let char=text[i]
    reverse+=char

}

console.log(reverse==text?"palindrome":"not palindrome")