var string1="race"
var string2="care"

arr1=string1.split("")
arr2=string2.split("")
var srt1=arr1.sort().join("")
var srt2=arr2.sort().join("")
anagram=srt1==srt2?"anagram":"not anagram"
console.log(anagram);

