let el = document.querySelector("#response")

const a = () => {
    console.log("A");
};

const b = (cb) => {
    // A > C > B (after 2 seconds)
        setTimeout(()=>{
            console.log("B");
            cb(); // Pass c inside b(c) to be A > (2 secs) > B > C
        }, 2000)
    //
};

const c = () => console.log("C");

a();
b(c);
// c()