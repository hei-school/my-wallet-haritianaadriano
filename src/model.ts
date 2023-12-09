export class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    public getUsername(): string {
        return this.username;
    }
    public getPassword(): string {
        return this.password;
    }
    public setUsername(username: string): void {
        this.username = username;
    }
    public setPassword(password: string): void {
        this.password = password;
    }
 }

 export class Wallet {
    private user: User;
    private money: number;
    private status: WalletStatus;

    constructor(user: User, money: number, status: WalletStatus) {
        this.user = user;
        this.money = money;
        this.status = status;
    }

    public getUser(): User {
        return this.user;
    }
    public getMoney(): number {
        return this.money;
    }
    public setUser(user: User): void {
        this.user = user;
    }
    public setMoney(money: number): void {
        this.money = money;
    }
    public getStatus(): WalletStatus {
        return this.status = this.status
    }
    public setStatus(status: WalletStatus) {
        this.status = status;
    }
 }

 export enum WalletStatus {
    FORFEITED,
    ROBBED,
    INDEBTED 
}
