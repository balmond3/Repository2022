const input = require('sync-input')



let availableWater = 400; // mL
let availableMilk = 540; // mL
let availableBeans = 120; // g
let availableMoney = 550; // USD
let availableCups = 9;


//keep prompting user
function mainmenu() {
    let actions = ["buy", "fill", "take", "remaining", "exit"];
    let action = "";
    while (!actions.includes(action)) {
        action = input("Write action (buy, fill, take, remaining, exit):");
    }


    switch (action) {
        case "":
            break;
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "exit":
            break;
        case "remaining":
            outputState();
            mainmenu();
            break;
    }
}
mainmenu();
function outputState() {
    console.log(`The coffee machine has:
    ${availableWater} ml of water
    ${availableMilk} ml of milk
    ${availableBeans} g of coffee beans
    ${availableCups} disposable cups
    $${availableMoney} of money
    `);
}

function fill() {

    availableWater += parseInt(input("Write how many ml of water you want to add:"));
    availableMilk += parseInt(input("Write how many ml of milk you want to add:"));
    availableBeans += parseInt(input("Write how many grams of coffee beans you want to add:"));
    availableCups += parseInt(input("Write how many disposable coffee cups you want to add:"));
    mainmenu();
}

function buy() {
    let menu = ["1", "2", "3", "back","exit","remaining"];
    let choice = "";
    while (!menu.includes(choice)) {
        choice = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ");
    }

    switch (choice) {
        case "1":
            makeEspresso();
            break;
        case "2":
            makeLatte();
            break;
        case "3":
            makeCappuccino();
            break;
        case "back":
            mainmenu();
            break;
        case "exit":
            break;
        case "remaining":
            outputState();
            break;
    }


    }

    function makeEspresso() {
        if (availableWater < 250) {
            console.log("Sorry, not enough water!");
        } else if (availableMilk < 0){
            console.log("Sorry, not enough milk!");
        } if (availableBeans < 16) {
            console.log("Sorry, not enough coffee beans!");
        } else if (availableCups < 1) {
            console.log("Sorry, not enough disposable cups!")

        } else {
            availableWater -= 250;
            availableMilk -= 0;
            availableBeans -= 16;
            availableCups -= 1;
            availableMoney += 4;

        }
        mainmenu();
    }
    function makeLatte() {
        if (availableWater < 350){
            console.log("Sorry, not enough water!");

        } else if (availableMilk < 75){
            console.log("Sorry, not enough milk!");
        } else if (availableBeans < 20){
            console.log("Sorry, not enough coffee beans!")

        }else if (availableCups < 1){
            console.log("Sorry, not enough disposable cups!")
    }else{
            availableWater -= 350;
            availableMilk -= 75;
            availableBeans -= 20;
            availableCups -= 1;
            availableMoney += 7;
            console.log("I have enough resources, making you a coffee!")

        }mainmenu();
    }





    function makeCappuccino() {
        if (availableWater < 200){
            console.log("Sorry, not enough water!");
        } else if (availableMilk< 100){
            console.log("Sorry, not enough milk!");
        } else if (availableBeans < 12){
            console.log("Sorry, not enough coffee beans!")

        }else if (availableCups < 1){
            console.log("Sorry, not enough disposable cups!")
        }else {
            availableWater -= 200;
            availableMilk -= 100;
            availableBeans -= 12;
            availableCups -= 1;
            availableMoney += 6;
            console.log("I have enough resources, making you a coffee!")
            buy();
        }mainmenu();
    }

//take money
function take() {
    console.log(`I gave you $${availableMoney}`);
    availableMoney = 0;
    mainmenu();
}


