Call back HEll :- 
inversion of Control
Javascript is asynchronous single threaded language 
it can do just single thing at a time 

## console.log("javascript")
if we have to excute it after 5 seconds 

setTimeout(function () {
    console.log("JavaScript")
}, 5000)


## PYARAMID OF DOOM :- 
## const cart = ["shoes", "pants", "kurta"]
first we need to create order and payment
api.createOrder()
api.proccedToPayment()

const cart = ["shoes", "pants", "kurta"];
api.createOrder(cart, function() {
    api.proccedToPayment()
})
 //create order and payment is done 
 now we need to create a order summary page

api.showOrderSummary()

const cart = ["shoes", "pants", "kurta"];
api.createOrder(cart, function() {
    api.proccedToPayment(function(){
    api.showOrderSummary()
})
})
//summary is done 
now updateWallet

const cart = ["shoes", "pants", "kurta"];
api.createOrder(cart, function() {
    api.proccedToPayment(function(){
    api.showOrderSummary(function () {
        api.updateWallet()
    })
})
})

This structure is called PYRAMID OF DOOM in Programming 



