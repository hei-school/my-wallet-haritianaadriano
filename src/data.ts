import { User, Wallet } from "./Model";

export class Data {
    constructor(){

    }

    private walletData: Wallet[];
    private userData: User[];
    user1: User = new User("user1", "password1");
    root: User = new User("root", "root");
    wallet1: Wallet = new Wallet(this.user1, 20000);
    walletRoot: Wallet = new Wallet(this.root, 99999);

    public findUserData(): User[] {
        this.userData.push(this.user1, this.root);
        return this.userData;
    }

    public findWalletData(): Wallet[] {
        this.walletData.push(this.wallet1, this.walletRoot);
        return this.walletData;
    }
}