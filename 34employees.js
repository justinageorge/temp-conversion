var employee=[
    {"empcode":1000,"name":"hari","department":"hr","salary":35000,"location":"ekm"},
    {"empcode":1001,"name":"vijay","department":"hr","salary":45000,"location":"ekm"},
    {"empcode":1002,"name":"tom","department":"qa","salary":55000,"location":"tvm"},
    {"empcode":1003,"name":"tini","department":"qa","salary":15000,"location":"tvm"},
    {"empcode":1004,"name":"james","department":"ba","salary":65000,"location":"tvm"},
    {"empcode":1005,"name":"jibin","department":"ba","salary":75000,"location":"ekm"},
    {"empcode":1005,"name":"vipin","department":"devops","salary":15000,"location":"bnglr"},
    {"empcode":1006,"name":"vinu","department":"devops","salary":65000,"location":"bnglr"},
    {"empcode":1007,"name":"ram","department":"it","salary":85000,"location":"bnglr"},
    {"empcode":1008,"name":"zaheer","department":"it","salary":65000,"location":"ekm"}
    
]

//array of objects
//print all employee name
// employee.map(o=>o.name)
// console.log(employee.map(o=>o.name));

// //employees with highest salary
// console.log(employee.reduce((o1,o2)=>o1.salary>o2.salary?o1:o2));

//employees with lowest salary
// console.log(employee.reduce((o1,o2)=>o1.salary<o2.salary?o1:o2));
//employes with location tvm
// console.log(employee.filter(o=>o.location=="tvm").map(o=>o.name));
//sort employees by the salary in descending order
// employee.sort((o1,o2)=>o2.salary-o1.salary)
// console.log(employee);

//employee name whose loction is banglore and department is it
// employee.filter(o=>o.location=="bnglr"&&o.name=="tvm")
// console.log(employee.filter(o=>o.location=="bnglr"&&o.department=="it").map(o=>o.name));
//find department with highest employees and their name
dept_count={}
// all_dept=employee.map(o=>o.department)
// for(let d of all_dept){
//     if (d in dept_count){
//         dept_count[d]+=1

//     }else{
//         dept_count[d]=1
//     }
// }

// console.log(dept_count);

employee.map(o=>o.department).map(d=>d in dept_count?dept_count[d]+=1:dept_count[d]=1)
console.log(dept_count);
