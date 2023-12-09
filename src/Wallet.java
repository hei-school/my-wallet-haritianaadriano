import java.util.ArrayList;
import java.util.List;

public class Wallet {
  private User user;
  private int money;
  private List<Card> cards;

  public Wallet(User user, int money, List<Card> cards) {
    this.user = user;
    this.money = money;
    this.cards = cards;
  }
  public void setUser(User user) {
    this.user = user;
  }
  public void setMoney(int money) {
    this.money = money;
  }
  public User getUser() {
    return this.user;
  }
  public int getMoney() {
    return this.money;
  }

  public static enum WalletStatus {
    FORFEITED,
    ROBBED,
    INDEBTED,
  }

  @Override
  public String toString() {
    return "Wallet{" +
        "user=" + user +
        ", money=" + money +
        '}';
  }
}
