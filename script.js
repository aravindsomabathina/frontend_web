/*var a=12;
var b=a;
console.log(a);
console.log(b+2);
var aravind=[1,2,3];
var vinay = [...aravind];
vinay.pop();
console.log(aravind);
console.log(vinay);
for(var a=3;a>=1;a--){
    console.log(a);

}
function simple(val){
    var i=12;
    console.log(i+val);
    /*for(var b=12;b<22;b++)
    {
        console.log("hello");
    }*/
/*var arr=[1,2,"3",function(){},[],4];
console.log(arr[2]);
var obj={
    name:"Aravind",
    age:22,
    mail:SpeechR,

};
console.log(obj.name);*/
/*let rectangle={
    length:20,
    width:10,
    area:function(){
        console.log(this.length*this.width);
        
    }
}*/
//String Slice
//------------------------------
//let str="apple";
//let ans=str.slice(0,4);
//console.log(ans);



//String Template literals(Backticks)
//------------------------------
//let a=`hello i am aravind${1+2}`;
////console.log(a);


//String Split
//------------------------------
//let b="hello world";
//let answ=b.split('d');
//console.log(answ)

//String Replace
//------------------------------
/*let string="hello world";
let answer=string.replace('w','y');
let answer1=string.replaceAll('w','an');
console.log(answer);
console.log(answer1);


//String Includes
//------------------------------
let strin="hello world!";
let sol=str.includes(" ");
console.log(sol);

//SWITCH
//------------------------------
/*switch(3){
    case 1:console.log("one");
            break;
    case 2:console.log("two");
            break;
    case 3:console.log("three");
            break;
    case 4:console.log("four");
            break;
    default:console.log("default")

}*/
// IIFE(Immediatley invoked function Expression)
//----------------------------------------------------
var flm=function flimlibrary(){
    return{
        imageEffect:function(){
            console.log("hello world");

        },
        mousefollow:function(){
            console.log("hello india");
        }
    }
}();
flm.mousefollow();
//----------------------------------------------------
function abcd(){
    console.log("Aravind");
}

abcd();
//---------------------------------------------------
//Higher order function
function aravind(){
    return function(){
        return function(){
            console.log("inside function");
        }
    }

}

aravind()()();
//-------------------------------------------------------
//Global Scope, Local Scope
function vinay(){
    let a=10;
    console.log(a);
}
vinay();

//---------------------------------------------------------
//first order function
function multiply(a,b){
    return(a*b);

}
let result=multiply(4,3);
console.log(result);





