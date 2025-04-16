//****************************  MAP  *****************************************
var arr = [1,2,3,4];
var ans = arr.map(function(value){
    return 12;
})
console.log(ans);



//*****************************  FILTER **************************************

var arr = [1,2,3,4];
var ans = arr.filter(function(value){
    return value>2;
})
console.log(ans);


//*****************************  REDUCE   ***********************************

var arr = [1,2,3,4];
var ans = arr.reduce(function(accumulator, key){
    return accumulator+key;
}, 0);
console.log(ans);


//Remove duplicate elements from the array
//-----------------------------------------------------------------------------------

var arr=[1,1,2,2,3,3,4,5,6,7];
var ans=[...new Set(arr)];
console.log(ans);


//second largest element in an array
//---------------------------------------------------------------------------------------------


var arr=[1,1,2,2,3,3,4,5,6,7];
var ans=[...new Set(arr)];
var newarr= ans.sort(function(a,b){
    return b-a;

});
console.log(newarr[1]);

