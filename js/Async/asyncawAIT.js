
async function greet(){
    return "Good Morning"
}
 var x  = greet();
console.log("1")
async function extract(){
    
    console.log("3")
    var data = await x;
    console.log(data)
    console.log("4")
 }
extract()
 console.log("2")
