import java.util.Optional;
import java.util.List;
import java.util.stream.Collectors;

public class Service {
  private final Data data = new Data();

  public void preventChoice(String usernmane) {
    System.out.println("Actual money: " + findWalletByUserUsername(usernmane).getMoney());
    System.out.println("choice: ");
    System.out.println("\n1. deposit");
    System.out.println("\n2. withdraw");
    System.out.println("\n3. check balance");
    System.out.println("\n4. update wallet status");
    System.out.println("\n5. check card");
    System.out.println("\n6. exit");
  }

  public void updateWalletStatus(String username, Wallet.WalletStatus status) {
    Wallet wallet = findWalletByUserUsername(username);
    if(status.equals(Wallet.WalletStatus.FORFEITED)) {
      // because parent forfeited you
      wallet.setMoney(0);
    }
    if(status.equals(Wallet.WalletStatus.ROBBED)) {
      // because you has been robbed
      wallet.setCards(List.of());
      wallet.setMoney(0);
    }
    wallet.setStatus(status);
    System.out.println("actual status: " + wallet.getStatus());
  }

  public void checkCard(String username) {
    Wallet wallet = findWalletByUserUsername(username);
    List<Card.CardType> cardInWallet = wallet.getCards().stream().map(Card::getCardType).collect(
        Collectors.toUnmodifiableList());
    System.out.println("cards: " + cardInWallet);
  }

  public void checkBalance(String username) {
    Wallet wallet = findWalletByUserUsername(username);
    System.out.println("actual balance: " + wallet.getMoney());
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
    if(wallet.getMoney() < 0) {
      wallet.setStatus(Wallet.WalletStatus.INDEBTED);
    }
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
