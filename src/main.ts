import { Service } from "./service";
import prompt from "prompt-sync";
const readline = prompt();

const service: Service = new Service();

while (true) {
  console.log("Welcome to wallet ts ----");
  console.log("Please login");
  const username = readline("- enter username: ");
  const password = readline("- enter password: ");
  if (service.isAuthenticated(username, password)) {
  } else {
    break;
  }
}
