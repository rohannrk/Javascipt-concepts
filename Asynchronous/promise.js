let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        }
        else {
            reject(console.log("Our shop is closed"))
        }
    });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

    .then(() => {
        return order(0, () => console.log("Production has started"));
    })

    .then(() => {
        return order(2000, () => console.log("The fruit has been chopped"));
    })

    .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`));
    })

    .then(() => {
        return order(1000, () => console.log("Start the machine"));
    })

    .then(() => {
        return order(2000, () => console.log(`The icecream was placed on ${stocks.holder[0]}`));
    })

    .then(() => {
        return order(3000, () => console.log(`${stocks.toppings[0]} was added as toppings`));
    })

    .then(() => {
        return order(2000, () => console.log("Serve Icecream"));
    })

    .catch(() => {
        console.log("Customer left");
    })

    .finally(()=> {
        console.log("Day ended, our shop is closed");
    });