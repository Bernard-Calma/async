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
// let myPromise = new Promise((resovle, reject)=>{
//     // resovle("Done!");
//     reject("Error");
// })

// myPromise
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// const doFirst = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("<br/> I was first....")
//             // reject("<br/> Error...")
//         }, 2000);
//     });
// };

// doFirst()
// .then(data => {
//     el.innerHTML += data;
//     el.innerHTML += "<br/>And I am second!!!"
// })
// .catch(err => console.log(err));

// ASYNC
// const showMessages = async () => {
//     let firstMessage = await doFirst();
//     el.innerHTML += firstMessage + "<br/>And I am second!!!";
// }

// showMessages()

// ERROR HANDLING
// const showMessages = async () => {
//     try {
//         let firstMessage = await doFirst();
//         el.innerHTML += firstMessage + "<br/>And I am second!!!";
//     } catch (err) {
//         el.innerHTML = err
//     }
// }

// showMessages()

// doFirst()
// .then(data => el.innerHTML += data)
// .catch(err => el.innerHTML += err + "<br/> Check with Admin")

// doFirst()
// .then(
//     resolve => {
//         el.innerHTML += resolve + "<br/>And I am second!!!"
//     },
//     reject => {
//         el.innerHTML += "<p style='color:red;'>" + reject + "<br/> Check with Admin"
//     }
// )

// FETCH
const showData = async () => {
    console.log("Get Data")
}