

// =====================================
// SIMPLE COFFEE SHOP SYSTEM
// =====================================


// 1. VARIABLES / PROPERTIES
let shopName = "Raven Coffee Shop";
let location = "Calbayog";
let maxOrder = 3;


// 2. ARRAYS - 3
let coffees = ["Americano", "Latte", "Mocha"];

let prices = [80, 100, 110];

let customers = ["Ben", "Anna", "John"];


// 3. OBJECT LITERAL #1
let shop = {
    name: "Raven Coffee Shop",
    location: "Calbayog",

    showShop() {
        console.log(this.name + " - " + this.location);
    }
};


// 4. OBJECT LITERAL #2
let cashier = {
    name: "Maria",
    job: "Cashier",

    showJob() {
        console.log(this.name + " is the " + this.job);
    }
};


// =====================================
// CLASS #1 - PERSON
// =====================================

class Person {

    // ENCAPSULATION #1
    #name;

    constructor(name) {
        this.#name = name;
    }

    // METHOD #1
    getName() {
        return this.#name;
    }

    // METHOD #2
    introduce() {
        return "Hello, I am " + this.#name;
    }
}


// =====================================
// CLASS #2 - CUSTOMER
// INHERITANCE #1
// =====================================

class Customer extends Person {

    constructor(name, order) {
        super(name);
        this.order = order;
    }

    // METHOD #3
    buyCoffee(coffee) {

        // CONDITIONAL #1
        if (this.order < maxOrder) {
            return this.getName() + " bought " + coffee;
        } else {
            return this.getName() + " reached the order limit";
        }
    }
}


// =====================================
// CLASS #3 - EMPLOYEE
// INHERITANCE #2
// =====================================

class Employee extends Person {

    constructor(name, job) {
        super(name);
        this.job = job;
    }

    // METHOD #4
    work() {
        return this.getName() + " is working as a " + this.job;
    }

    // POLYMORPHISM
    introduce() {
        return this.getName() + " is an employee";
    }
}


// =====================================
// CLASS #4 - COFFEE SHOP
// =====================================

class CoffeeShop {

    // ENCAPSULATION #2
    #menu;

    constructor(menu) {
        this.#menu = menu;
    }

    // METHOD #5
    showMenu() {

        console.log("\nCOFFEE MENU");

        // LOOP #1
        for (let i = 0; i < this.#menu.length; i++) {
            console.log((i + 1) + ". " + this.#menu[i]);
        }
    }

    // METHOD #6
    searchCoffee(name) {

        // LOOP #2
        for (let coffee of this.#menu) {

            // CONDITIONAL #2
            if (coffee.toLowerCase() === name.toLowerCase()) {
                return name + " is available";
            }
        }

        return name + " is not available";
    }

    // METHOD #7
    addCoffee(name) {

        // CONDITIONAL #3
        if (name != "") {
            this.#menu.push(name);
            return name + " added to the menu";
        }

        return "Invalid coffee";
    }
}


// =====================================
// ABSTRACTION
// =====================================

// The user only calls this function.
// The checking process is hidden inside.
function orderCoffee(customer, coffee, shop) {

    if (shop.searchCoffee(coffee).includes("available")) {
        console.log(customer.buyCoffee(coffee));
    } else {
        console.log("Coffee is unavailable");
    }
}


// =====================================
// 4 OBJECTS
// =====================================

let customer1 = new Customer("Ben", 1);

let customer2 = new Customer("Anna", 2);

let employee1 = new Employee("John", "Barista");

let coffeeShop = new CoffeeShop(coffees);


// =====================================
// PROGRAM OUTPUT
// =====================================

console.log("==============================");
console.log("       COFFEE SHOP");
console.log("==============================");

shop.showShop();

cashier.showJob();

coffeeShop.showMenu();

console.log(
    coffeeShop.searchCoffee("Latte")
);

orderCoffee(
    customer1,
    "Latte",
    coffeeShop
);

console.log(
    employee1.work()
);


// =====================================
// POLYMORPHISM
// =====================================

console.log("\nPEOPLE");

let people = [customer1, employee1];

// LOOP #3
for (let person of people) {
    console.log(person.introduce());
}


// Add coffee
console.log(
    coffeeShop.addCoffee("Cappuccino")
);

coffeeShop.showMenu();

