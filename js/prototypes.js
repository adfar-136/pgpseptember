// let user1 = {
//     firstName : "Adfar",
//     lastName : "Rasheed",
//     age:26,
//     getFullName : function(){
//         return this.firstName + " " + this.lastName
//     },
//     getDoy : function(){
//         return new Date().getFullYear()-this.age
//     }
// }
// let user2 = {
//     firstName : "Saloni",
//     lastName : "Sharma",
//     age:22,
//     getFullName : function(){
//         return this.firstName + " " + this.lastName
//     },
//     getDoy : function(){
//         return new Date().getFullYear()-this.age
//     }
// }

//Factory function
// function createUser(firstName,lastName,age){
//     let user = {
//         firstName : firstName,
//         lastName : lastName,
//         age:age,
//         getFullName : function(){
//             return this.firstName + " " + this.lastName
//         },
//         getDoy : function(){
//             return new Date().getFullYear()-this.age
//         }
//     }
//     return user
// }
// const user1 = createUser("Adfar","Rasheed",26)
// const user2 = createUser("Saloni","sharma",22)
// function getFullName(){
//     return this.firstName+" "+this.lastName
// }
// function getDoy(){
//     return new Date().getFullYear()-this.age
// }
// function createUser(firstName,lastName,age){
//     let user = {
//         firstName,
//         lastName,
//         age,
//         getFullName,
//         getDoy,
//     }
//     return user
// }
// const user1 = createUser("Adfar","Rasheed",26)
// const user2 = createUser("Saloni","sharma",22)


// function createUser(firstName,lastName,age){
//     let user = {
//         firstName,
//         lastName,
//         age,
//         getFullName:createUser.commonMethods.getFullName,
//         getDoy:createUser.commonMethods.getDoy,
//     }
//     return user
// }
// createUser.commonMethods={
//     getFullName : function (){
//         return this.firstName+" "+this.lastName
//     },
//     getDoy :function (){
//         return new Date().getFullYear()-this.age
//     }
// }
// const user1 = createUser("Adfar","Rasheed",26)
// const user2 = createUser("Saloni","sharma",22)


// function createUser(firstName,lastName,age){
//     let user = {
//         firstName,
//         lastName,
//         age,
//         getFullName:createUser.prototype.getFullName,
//     }
//     return user
// }
// createUser.prototype.getFullName = function (){
//         return this.firstName+" "+this.lastName
//     }
   
// const user1 = createUser("Adfar","Rasheed",26)
// const user2 = createUser("Saloni","sharma",22)


//constructor

// function createUser(firstName,lastName,age){
//   this.firstName = firstName;
//   this.lastName=lastName;
//   this.age = age
// }
// createUser.prototype.getFullName = function(){
//     return this.firstName+" "+this.lastName
// }
// const user1 =new createUser("Adfar","Rasheed",26)
// const user2 = new createUser("Saloni","Sharma",22)


class createUser{
    constructor(a,b,c){
        this.a = a;
        this.b =b;
        this.c=c
        console.log(this) 
    }
    getFullName(){
        return this.a
    }
}
const user1 = new createUser("Adfar","Arsheed","24")