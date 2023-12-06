import java.util.ArrayList;
import java.util.List;

public class Data {
  private List<User> userData = new ArrayList<>();
  private List<Wallet> walletData = new ArrayList<>();

  User user1 = new User("user1", "password");
  User root = new User("root", "root");

  public List<User> findUserData() {
    userData.addAll(List.of(user1, root));
    return userData;
  }

  public List<Wallet> findWalletData() {
    Wallet wallet1 = new Wallet(user1, 20000);
    Wallet walletRoot = new Wallet(root, 99999);
    walletData.addAll(List.of(wallet1, walletRoot));
    return walletData;
  }
}
