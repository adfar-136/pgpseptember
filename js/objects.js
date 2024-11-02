// var obj = {
//     name:"Adfar",
//     age:26,
//     salary:2000,
//     skills:["HTML","CSS","JS"],
//     interest:{
//        interest1:"Music",
//        interest2:"COding"
//     },
//     teach:function(){
//         console.log("I am best instructor")
//     }
// }
// console.log(obj["interest"]["interest1"])
// console.log(obj.skills[1])

// var user1 = {
//     firstname :"Adfar",
//     age:34,
//     displayInfo : function(){
//         return `My name is ${user1.firstname} and my age is ${user1.age}`
//     }
// }
// var user2 = {
//     firstname :"Rohit",
//     age:24,
//     displayInfo : function(){
//         return `My name is ${user2.firstname} and my age is ${user2.age}`
//     }
// }
// console.log(user2.displayInfo())

function createUser(name,age){
    var user = {
        name:name,
        age:age,
        displayInfo : function(){
            return `My name is ${this.name} and my age is ${this.age}`
    }
    }
    return user
}
var user1 = createUser("Adfar",26);
var user2 = createUser("rohit",22)
console.log(user1.displayInfo())
console.log(user2.displayInfo())