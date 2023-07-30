//Synchronous
console.log(" I ")
console.log(" eat ")
console.log(" ice cream ")
console.log(" with a ")
console.log(" spoon ")


//Asynchronous
console.log(" I ")
console.log(" eat ")
setTimeout(()=>{
    console.log(" ice cream ")
}, 4000);
console.log(" with a ")
console.log(" spoon ")


//Callback
function one(call_two) {
    call_two()
    console.log("Step 1 complete. Please call step 2");
}
function two() {
    console.log("Step 2");
}
one(two);

//Async Await
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let toppings_choice = () => {
    return new Promise((resolve,reject) => {

        setTimeout(()=> {
            resolve(
                console.log("Which topping would you love to have? ")
                );
        }, 3000);
    });
};

async function kitchen() {
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")

    await toppings_choice()

    console.log(" D ")
    console.log(" E ")
}

kitchen();

console.log("Doing the dishes ");
console.log("Cleaning the tables ");
console.log("Taking the orders")