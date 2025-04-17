//******************************closure functions********************** */

function abcd() {
    let a=12;
    return function(){
        console.log(a);
    }
}
abcd()();


//create a function that takes anoter function as an argument and calls it after 5 seconds
//----------------------------------------------------------------------------------------------------

function callerfunc(Aravind){
    setTimeout(Aravind,5000);
}

callerfunc(function(){
    console.log("hello");
})


// write a function that uses closures to create a counter
//----------------------------------------------------------------------------------------------

function counter(){
    let counter = 0;
    return function(){
        counter++;
        console.log(counter);

    }
}
var fn=counter();
fn();
fn();
fn();


//implement a function that limits how many times another function can be called
//---------------------------------------------------------------------------------------------


function fnlimiter(fn, limit){
    let totalcalled=0;
    return function(){
        if(totalcalled < limit){
            totalcalled++;
            fn();
        }
    }
}
let limiter = fnlimiter(function(){
    console.log("hey")
},3);

