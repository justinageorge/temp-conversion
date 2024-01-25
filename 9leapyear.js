year=2000

if((year%100==0 && year%400==0)||(year%100!=0 && year%4==0)){
    console.log(`${year} is a leapyear`)
}
else{
    console.log(`${year} is not a leapyear`)
}