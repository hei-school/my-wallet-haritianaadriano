import java.util.Optional;

public class Service {
  private final Data data = new Data();

  public void preventChoice(String usernmane) {
    System.out.println("Actual money: " + findWalletByUserUsername(usernmane).getMoney());
    System.out.println("choice: ");
    System.out.println("\n1. deposit");
    System.out.println("\n2. withdraw");
    System.out.println("\n3. exit");
  }

  public User findUserByUsername(String username) {
    Optional<User> foundUser = data.findUserData()
        .stream()
        .filter(user -> user.getUsername().equals(username))
        .findFirst();

    return foundUser.orElse(null);
  }

  public Wallet findWalletByUserUsername(String username) {
    Optional<Wallet> foundWallet = data.findWalletData()
        .stream()
        .filter(wallet -> wallet.getUser().getUsername().equals(username))
        .findFirst();

    return foundWallet.orElse(null);
  }

  public boolean isAuthenticated(String username, String password) {
    User authenticated = findUserByUsername(username);
    return authenticated.getPassword().equals(password);
  }

  public boolean deposit(String username, int toDeposit) {
    if (toDeposit < 0) {
      System.out.println("deposit must be greater than 0");
      return false;
    }
    Wallet wallet = findWalletByUserUsername(username);
    int actualMoney = wallet.getMoney();
    wallet.setMoney(actualMoney + toDeposit);
    System.out.println("transaction completed");
    return true;
  }

  public boolean borrow(String username, int toBorrow) {
    Wallet wallet = findWalletByUserUsername(username);
    int actualMoney = wallet.getMoney();
    wallet.setMoney(actualMoney - toBorrow);
    System.out.println("actual balance: " + wallet.getMoney());
    return true;
  }

  public boolean withdraw(String username, int toWithdraw) {
    Wallet wallet = findWalletByUserUsername(username);
    if (toWithdraw > wallet.getMoney()) {
      System.out.println("to withdraw must be inferior of atcual money");
      return false;
    }
    int actualMoney = wallet.getMoney();
    wallet.setMoney(actualMoney - toWithdraw);
    return true;
  }
}
