
// for(let i=0;i<=10;i++){
//    // console.log(i)
// }

// let i = 0;
// // while(i < 10){
// //    // console.log(i)
// //    // i++;
// // }

// // do {
// // console.log(i)
// // i++
// // } while(i < 10)

// let arr = ['123', 'qwrqwr', '1wewef']

// // for(const element of arr){
// //     console.log(element)
// // }

// // for(const element in arr){
// //     console.log(element)
// // }

// // if(element === 1){ console.log(element)}

// let obj = {
//     'a': '123',
//     b: 341234,
//     c: [2134134,234123],
//     d: {
//         one: 123
//     }
// }
// console.log(obj.a)
// console.log(obj["a"])
// obj.a=666
// console.log(obj.a)

// console.log('-------------------')

// delete obj.a
// console.log(obj.a)

// for(let key in obj){
//     console.log(key)
//     console.log(obj[key])
// }
//Декларотивная
// function add(a, b){
//     return Number(a) + Number(b);
// }


//анонимная
const add = function(a=1,b=3){
    return a+b
}

console.log(add())

const addd = (a,b) => a + b;
console.log(addd(1,2))