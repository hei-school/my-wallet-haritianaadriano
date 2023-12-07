<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

class Wallet {
    private $balance;

    public function __construct($initialBalance = 0) {
        $this->balance = $initialBalance;
    }

    public function getBalance() {
        return $this->balance;
    }

    public function deposit($amount) {
        $this->balance += $amount;
    }

    public function withdraw($amount) {
        if ($amount <= $this->balance) {
            $this->balance -= $amount;
            return true;
        } else {
            return false; // Insufficient funds
        }
    }
}

function displayMenu() {
    echo "1. Deposit\n";
    echo "2. Withdraw\n";
    echo "3. Check Balance\n";
    echo "4. Exit\n";
}

// Example usage
$wallet = new Wallet(100); // Initial balance of $100

while (true) {
    displayMenu();
    echo "Enter your choice: ";
    $choice = trim(fgets(STDIN));

    switch ($choice) {
        case 1:
            echo "Enter amount to deposit: $";
            $amount = (float)trim(fgets(STDIN));
            $wallet->deposit($amount);
            echo "Deposited ${$amount}. Current balance: $" . $wallet->getBalance() . PHP_EOL;
            break;

        case 2:
            echo "Enter amount to withdraw: $";
            $amount = (float)trim(fgets(STDIN));
            if ($wallet->withdraw($amount)) {
                echo "Withdrawn ${$amount}. Current balance: $" . $wallet->getBalance() . PHP_EOL;
            } else {
                echo "Insufficient funds!" . PHP_EOL;
            }
            break;

        case 3:
            echo "Current balance: $" . $wallet->getBalance() . PHP_EOL;
            break;

        case 4:
            echo "Exiting the wallet application. Goodbye!\n";
            exit;

        default:
            echo "Invalid choice. Please enter a number between 1 and 4.\n";
            break;
    }
}
?>
