import { Wallet } from "./model";
import { Service } from "./service";
const readline = require('prompt-sync')();

const service: Service = new Service();

while (true) {
  console.log("Welcome to wallet ts ----");
  console.log("Please login");
  const username = readline("- enter username: ");
  const password = readline("- enter password: ");
  if (service.isAuthenticated(username, password)) {
    console.log("login succeed");
    while (true) {
      let ownerWallet = service.findWalletByUserUsername(username);
      console.log("Actual money: " + ownerWallet?.getMoney());
      
      console.log("\ 1. deposit");
      console.log("\ 2. withdraw");
      console.log("\ 3. exit");
      
      const choice = +readline(" - choice: ");

      if(choice === 1) {
        const toDeposit = +readline(" - enter a value: ");
        service.depositMoney(toDeposit, username);
      }
      if(choice === 2) {
        const toWithDraw = +readline(" - enter a value: ");
        service.withDrawMoney(toWithDraw, username);
      }
      if(choice === 3) {
        break;
      }
    }
  } else {
    break;
  }
}
