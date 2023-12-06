public class Wallet {
  private User user;
  private int money;

  public Wallet(User user, int money) {
    this.user = user;
    this.money = money;
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

  @Override
  public String toString() {
    return "Wallet{" +
        "user=" + user +
        ", money=" + money +
        '}';
  }
}
