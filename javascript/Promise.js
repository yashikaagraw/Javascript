const cart = ["shoes", "pants", "kurta"]

createOrder(cart);

proccedToPayment(orderId);

createOrder and proccedToPayment are asynchronous and dependent to each other. 
We can only proccedToPayment once we created the order 
we were passing the callback function to another function

createOrder(cart, function(orderId){
    proccedToPayment(orderId);
});

const promise = createOrder(cart);
//it will return undefined(empty value)

promise.then(function (orderId){
    proccedToPayment(orderId)
})
we are attaching call back function to a promise object createOrder, it will create an order and it will fill the promise object with the data the order id wherever it wants to and as soon as the promise object it filled with that datait will automatically call our callback function back and we will have the control of our program with us. Promises gives us the guarantee that it will call this callback function whenever there is data inside 
the promise object and in the earlier piece of code, what if this create order API might call our function twice, thrice or it might never call it. promises handle it beautifully. we have data inside promise it will call this function and it will call it just once and we will also have control our program 

## FETCH
make an api call to github servers and will get a user info with us 

const GITHUB_API = "https://github.com/yashikaagraw"

 const user = fetch(GITHUB_API)
 //this line of code is executed we will get a promise object inside this user


