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