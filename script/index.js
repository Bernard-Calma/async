let el = document.querySelector("#response")

// const a = () => {
//     console.log("A");
// };

// const b = (cb) => {
//     // A > C > B (after 2 seconds)
//         setTimeout(()=>{
//             console.log("B");
//             cb(); // Pass c inside b(c) to be A > (2 secs) > B > C
//         }, 2000)
//     //
// };

// const c = () => console.log("C");

// a();
// b(c);
// // c()

// PROMISE
// When creating a promise you should add a function inside the promise paramenter always
// resovle = success
// reject = fail
let myPromise = new Promise((resovle, reject)=>{
    // resovle("Done!");
    reject("Error");
})

myPromise
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
// const doFirst = () => {
//     setTimeout(() => {
//         el.innerHTML = el.innerHTML + "<br/> I was first...."
//     }, 2000);
// }

// doFirst()

// el.innerHTML = el.innerHTML + "<br/>And I am second!!!"