####Arrow function and normal function diff :-
Argument objects are available in arrow functions
Regular functions created using function declarations or expressions are constructible and callable.
 function add(x,y){
    console.log(arguments)
    return(x+y)
 }
add(10, 15); recognise arguments 

 const add= (x,y)=> {
    console.log(arguments)
    return x+y;
 }
 add(10, 15) explain arguments 
 ##type of null => object
##type of nan => number
undefined means a variable has not been defined or declared 
null- null is a special value that represents an empty or unknown value. For example, let number = null;
== in JavaScript is used for comparing two variables, but it ignores the datatype of variable.
=== is used for comparing two variables, but this operator also checks datatype and compares two values. 
##Checks the equality of two operands without considering their type
##
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)
##
An array is a special variable, which can hold more than one value:
## Objects:-
In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects

##Hoisting:- hoisting is a phenomenon in javascript by which 
you can access these variables and functions even before you
have initialized it and you have put same value in it you can
access it without any error

var x=7;
function getName(){
   console.log("Yashika");
}
getName();
console.log(x);
output:-
Yashika
undefined

#Scoping:- 3 types of scope:-
block(let and const), function and global

## Promises:-



