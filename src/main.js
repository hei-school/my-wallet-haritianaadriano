"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./service");
var readline = require('prompt-sync')();
var service = new service_1.Service();
while (true) {
    console.log("Welcome to wallet ts ----");
    console.log("Please login");
    var username = readline("- enter username: ");
    var password = readline("- enter password: ");
    if (service.isAuthenticated(username, password)) {
        console.log("login succeed");
        while (true) {
            var ownerWallet = service.findWalletByUserUsername(username);
            console.log("Actual money: " + (ownerWallet === null || ownerWallet === void 0 ? void 0 : ownerWallet.getMoney()));
            console.log("\ 1. deposit");
            console.log("\ 2. withdraw");
            console.log("\ 3. exit");
            var choice = +readline(" - choice: ");
            if (choice === 1) {
                var toDeposit = +readline(" - enter a value: ");
                service.depositMoney(toDeposit, username);
            }
            if (choice === 2) {
                var toWithDraw = +readline(" - enter a value: ");
                service.withDrawMoney(toWithDraw, username);
            }
            if (choice === 3) {
                break;
            }
        }
    }
    else {
        break;
    }
}
