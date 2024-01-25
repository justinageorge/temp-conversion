var text="samplequestons"
//most frequent character
var wc={}
text.split("").map(ch=>ch in wc?wc[ch]+=1:wc[ch]=1)
console.log(wc);
console.log(Object.entries(wc).reduce((o1,o2)=>o1[1]>o2[1]?o1:o2))
// entries convert an object to array
