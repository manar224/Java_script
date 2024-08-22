//Conditional statements  if , else and else if ,switch
//Help to perform different actions for different decisions
let hour=12;
if (hour<18){
    gretting="good day !";
    console.log(gretting);
}
//console.log(gretting);

//if else statement
let k=18;
if(k>18){              //if(condition)
    console.log(" good day");
}
else{
console.log("good evening");
}

//else if statement    specify a new condition if the first condition is false
let time=15;
if (time < 10) {
    greeting = "Good morning";
console.log(greeting);
  } else if (time < 20) {
    greeting = "Good day";
console.log(gretting);
  } else {
    greeting = "Good evening";
console.log(gretting);
  }

//switch case statement           select one of many code blocks to be executed
/*switch(expression) {
    case x:
      // code block
      break;                   // used to "jump out" of a switch() statement.
    case y:
      // code block
      break;
    default:
      // code block
  }*/




  //loops     for , for each , while

  const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

    let text = "";
    for (let i = 0; i < cars.length; i++) {
      text += cars[i] + "\n";
      console.log(text);
    }

//forEach() calls a function for each element in an array
let txt = "";
const Fruits = ["apple", "orange", "cherry"];
Fruits.forEach(myFunction);
console.log(txt);
function myFunction(item, index) {
    txt += index + ": " + item + "\n"; 
  }

//whileloop
let i=0;
let t="";
while (i < 10) {
    t += " \n The number is " + i;
    i++;
    console.log(t);
  }
  
  //Functions
  /*function functionName(parameters) {
  // code to be executed
}*/
let q= myFunction(4, 3);  
console.log(q);
function myFunction(a, b) {
  return a*b}

  //If a function is called with missing argumentsthe, the missing values are set to undefined
  function myFunction(x, y) {  return x * y;
  }
console.log(myFunction(4));     //the result is a NaN(not a number) because y is undefined


/*The continue statement breaks one iteration 
 (in the loop), if a specified condition occurs
 and continues with the next iteration in the loop.*/
 //Example:
 let tex = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }     //A loopwill skip the step where i = 3
  tex += "The number is " + i + "\n";
}
console.log(tex);