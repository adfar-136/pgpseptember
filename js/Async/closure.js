function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
};
let c = counter()
console.log(c())
console.log(c())
console.log(c())
//operators
//string
//array methods
//objects
//spread operator , rest,
//asynchrnous javascript,
//polyfills,
//localstorage
//webapis
//dom methods
//json
//axios
//xhr