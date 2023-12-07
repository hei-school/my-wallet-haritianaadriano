class Wallet:
    def __init__(self):
        self.balance = 0.0

    def display_balance(self):
        print(f"Current Balance: ${self.balance:.2f}")

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited ${amount:.2f}.")
        else:
            print("Invalid deposit amount.")

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew ${amount:.2f}.")
        else:
            print("Invalid withdrawal amount.")

def main():
    wallet = Wallet()

    while True:
        print("\nWallet Options:")
        print("1. Display Balance")
        print("2. Deposit Funds")
        print("3. Withdraw Funds")
        print("4. Quit")

        choice = input("Enter your choice (1-4): ")

        if choice == "1":
            wallet.display_balance()
        elif choice == "2":
            amount = float(input("Enter the deposit amount: $"))
            wallet.deposit(amount)
        elif choice == "3":
            amount = float(input("Enter the withdrawal amount: $"))
            wallet.withdraw(amount)
        elif choice == "4":
            print("Quitting the wallet application. Goodbye!")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 4.")

if __name__ == "__main__":
    main()
