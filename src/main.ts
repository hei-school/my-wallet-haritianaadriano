import { Service } from "./service";
const readline = require('prompt-sync')();

const service: Service = new Service();

while(true) {
    console.log("Welcome to wallet ts ----");
    console.log("Please login");
    const username = readline("- enter username: ");
    const password = readline("- enter password: ");
    if(service.isAuthenticated(username, password)) {

    }
    else {
        break     
    }  
}