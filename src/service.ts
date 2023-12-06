import { Data } from "./data";
import { User, Wallet } from "./Model";

class Service {
    data: Data = new Data();

    public findUserByUsername(username: string): User | undefined {
        return this.data.findUserData().find(user => user.getUsername() === username);
    }

    public findWalletByUserUsername(username: string): Wallet | undefined {
        return this.data.findWalletData().find(wallet  => wallet.getUser().getUsername() === username);
    }

    public isAuthenticated(username: string, password: string): boolean {
        return this.findUserByUsername(username)?.getUsername() === username 
        && this.findUserByUsername(username)?.getPassword() === password;
    }

    public depositMoney(toDeposit: number, username: string): void {
        const wallet = this.findWalletByUserUsername(username);
    
        if (!wallet) {
            console.log("Wallet not found for the given username");
            return;
        }
    
        if (toDeposit < 0) {
            console.log("Deposit must be greater than 0");
        } else {
            const updatedMoney = wallet.getMoney() + toDeposit;
            wallet.setMoney(updatedMoney);
            console.log(`Deposit of ${toDeposit} successful. New balance: ${updatedMoney}`);
        }
    }
    
}