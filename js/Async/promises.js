//promise 
//two friends 
//A friend gives 1000 rupees to B friend
//B friend made a promise that i will return these 1000 rupess on next monday.
// scenario 1 : Friend A is thinking
// On monday friend B will return the money : promise is fulfilled; 1000 rupees
// if scenario 1 happens, i am going to give a party of 1000 rupees
// scenario 2
// On monday friend B will not return the money : promise is rejected;
// if scenario 2 happens, i will call the police;

// operation : fetch an API:application programming interface;
// API is a service that allows software systems to interact with each other;

// Dhanush and Adfar;
// singham again;
// Adfar ==> paytm;
// Dhanush ==> Bookmyshow;

// fetch(api) = > data or error;
//data = > fulfilled = > we have display on our webpage =>what we will do withour data
//associate asyncronus task to our promise;
//error=>how i will deal with that=> associate a ASYNC TASK

let promise = new Promise((resolve,reject)=>{
    reject("error message")
})
promise.then((result)=>{
    console.log(result)
})
promise.catch((error)=>{
    console.log(error)
})