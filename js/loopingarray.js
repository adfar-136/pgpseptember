// var arr = [1,2,3,4,5,6];
// var sum = 0
// var x = arr.forEach((item,index)=>{
//     sum+=item
// })
// console.log(x)
// console.log(sum)
// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i])
// // }

//arr2 =[]
// var arr = [2,3,4,5,6,7,8]
// var arr2 = arr.map((item,index)=>{
//     return item>4
// })
// console.log(arr2)

// var arr = [4,5,6,7,8,9]
// var arr2 =arr.filter(function(x,i){
//   return x>6
// })
// console.log(arr2)
// var even = arr.filter(x=>x%2===0)
// console.log(even)

// var str = ["ad","za","pb","ca","be"]
// console.log(str.sort())

//a =40 b = -200, 40-(-200) =240
// var arr = [40,-200,-120,3.5,100,150,-1,50,5,2,9,7,1,0]
// arr.sort((a,b)=>{
//  return b-a
// })
// console.log(arr)


// var arr = [3,4,5,6,7,8]
// var x = arr.reduce((total,item,index)=>{
//   return total += item
// },0)
// console.log(x)

// var arr = [1,2,4,43,432,42]
// var x =arr.findIndex((item)=>{
//     return item>3
// })
// console.log(x)

// var arr1 = [1,2,3]
// var arr2 = [4,5,6]
// var arr3 = [7,8,9]
// var arr4 = arr2.concat(arr1,arr3)
// console.log(arr4)
// var arr = [3,4,5,8]
// function sum(x,y,z,a){
//     console.log(x+y+a+z)
// }
// sum(...arr)

var arr1 = [2,3,4]
var arr2 = [1,...arr1]
console.log(arr2)