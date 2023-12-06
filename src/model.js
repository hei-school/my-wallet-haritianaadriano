"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = exports.User = void 0;
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setUsername = function (username) {
        this.username = username;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    return User;
}());
exports.User = User;
var Wallet = /** @class */ (function () {
    function Wallet(user, money) {
        this.user = user;
        this.money = money;
    }
    Wallet.prototype.getUser = function () {
        return this.user;
    };
    Wallet.prototype.getMoney = function () {
        return this.money;
    };
    Wallet.prototype.setUser = function (user) {
        this.user = user;
    };
    Wallet.prototype.setMoney = function (money) {
        this.money = money;
    };
    return Wallet;
}());
exports.Wallet = Wallet;
