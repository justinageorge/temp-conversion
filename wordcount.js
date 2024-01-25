var text="hello hai hello hello hai"
// wc={}
// words=text.split(" ")
// for(let ch of words){
//     if( ch in wc){
// wc[ch]+=1
//  }else{
//     wc[ch]=1
//  }

// }
// console.log(wc)
 


//another method
wc={}
text.split(" ").map(w=> w in wc? wc[w]+=1:wc[w]=1)
console.log(wc)