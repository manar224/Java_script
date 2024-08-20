//Data Types:
//String
//Object
//null
//undefined
//number
//bigint
//boolean

//Let ,const :block scope , function scope
//var: global scope , function scope
//examples:

let x=12;
console.log(x);   // global scope
function add(){     
    let x=10;      
    console.log(x);
}
add();
console.log(x);

var y =7;
console.log(y);    //global scope
function sub (){   
    var y=5;       
    console.log(y);
}
sub();
console.log(y);
//javascript variables have 3 types of scope:
//global scope  var
//block scope  let,const
//function scope
let b=13;
console.log(b);
{
b=11;
console.log(b);
}
console.log(b);

{
    let z=22;      //block scope
}
//console.log(z);

{
    var m=88;   //global scope
}
console.log(m);

{
    const n=55;   //block scope
}
//console.log(n);
//console.log(k);
function h(){     //function scope
    let k=44;
    console.log(k);
}
h();
//console.log(k);
function g(){
    j=66;
}
g();     //global scope
console.log(j);

carname="volvo";
var carname;     //hoisting
 
//typeof operator returns the type of variables or an expression


//array is a special variable can hold more than one value
const arr=["volvo","bmw","saab"];
//array ia a special kind of object
//type of array is an object
console.log(typeof(arr));
//array can hold different types of variables in the same array
//arrays use numbers(indexes) to access its elements


//Objects
const car={type:"fiat", model:"500",color:"white" };  //type is a key  ,  fiat is a value
//objects use names(keys) to access its elements


//sets
const letters=new Set (["a"],["b"],["c"]);
console.log(typeof(letters));

//Maps
const fruits=new Map([
    ["apples",500],
    ["banans",300],
 ["oranges",200]
]);
console.log(typeof( fruits));
