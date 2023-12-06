"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
var data_1 = require("./data");
var Service = /** @class */ (function () {
    function Service() {
        this.data = new data_1.Data();
    }
    Service.prototype.findUserByUsername = function (username) {
        return this.data.findUserData().find(function (user) { return user.getUsername() === username; });
    };
    Service.prototype.findWalletByUserUsername = function (username) {
        return this.data.findWalletData().find(function (wallet) { return wallet.getUser().getUsername() === username; });
    };
    Service.prototype.isAuthenticated = function (username, password) {
        var _a, _b;
        return ((_a = this.findUserByUsername(username)) === null || _a === void 0 ? void 0 : _a.getUsername()) === username
            && ((_b = this.findUserByUsername(username)) === null || _b === void 0 ? void 0 : _b.getPassword()) === password;
    };
    Service.prototype.depositMoney = function (toDeposit, username) {
        var wallet = this.findWalletByUserUsername(username);
        if (!wallet) {
            console.log("Wallet not found for the given username");
            return;
        }
        if (toDeposit < 0) {
            console.log("Deposit must be greater than 0");
        }
        else {
            var updatedMoney = wallet.getMoney() + toDeposit;
            wallet.setMoney(updatedMoney);
            console.log("Deposit of ".concat(toDeposit, " successful. New balance: ").concat(updatedMoney));
        }
    };
    Service.prototype.withDrawMoney = function (toWithdraw, username) {
        var wallet = this.findWalletByUserUsername(username);
        if (!wallet) {
            console.log("Wallet not found for the given username");
            return;
        }
        var actualMoney = wallet.getMoney();
        if (actualMoney < toWithdraw) {
            console.log("You can only retire a value inferior to your money");
        }
        else {
            var updatedMoney = wallet.getMoney() - toWithdraw;
            wallet.setMoney(updatedMoney);
            console.log("Deposit of ".concat(toWithdraw, " successful. New balance: ").concat(updatedMoney));
        }
    };
    return Service;
}());
exports.Service = Service;
