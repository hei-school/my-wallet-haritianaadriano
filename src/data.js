"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var model_1 = require("./model");
var Data = /** @class */ (function () {
    function Data() {
        this.walletData = [];
        this.userData = [];
        this.user1 = new model_1.User("user1", "password1");
        this.root = new model_1.User("root", "root");
        this.wallet1 = new model_1.Wallet(this.user1, 20000);
        this.walletRoot = new model_1.Wallet(this.root, 99999);
    }
    Data.prototype.findUserData = function () {
        this.userData.push(this.user1, this.root);
        return this.userData;
    };
    Data.prototype.findWalletData = function () {
        this.walletData.push(this.wallet1, this.walletRoot);
        return this.walletData;
    };
    return Data;
}());
exports.Data = Data;
