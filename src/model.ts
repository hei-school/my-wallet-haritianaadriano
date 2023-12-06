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

    constructor(user: User, money: number) {
        this.user = user;
        this.money = money;
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
 }