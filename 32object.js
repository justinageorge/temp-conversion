// var friends={
//     id:1000,
//     name:"virg",
//     course:"bsc",
//     gender:"male"



// }
// console.log(friends.course)
// console.log(friends["course"])

// //adding a new attribute
// //dictioary_name["key]=value";
// //objectName["attribute"]=value;
// friends["email"]="kevin@gmail.com";
// console.log(friends);

// //how to check an attribute exist in an object or not
// //"key" in dictionary=>True|False
// //"attribute" in an object
// console.log("name" in friends);

var product={code:"sk",
            title:"oreo",
            category:"food"

        }

console.log(product.title)        


if("price" in product){
    console.log("found");
}else{
    console.log("unfound")
}

product["price"]=4000
console.log(product)