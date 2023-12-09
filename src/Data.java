import java.util.ArrayList;
import java.util.List;

public class Data {
  private List<User> userData = new ArrayList<>();
  private List<Wallet> walletData = new ArrayList<>();

  User user1 = new User("user1", "password");
  User root = new User("root", "root");
  Card card1 = new Card("user1", Card.CardType.CIN);
  Card card2 = new Card("user1", Card.CardType.VISIT_CARD);
  Card card3 = new Card("root", Card.CardType.VISIT_CARD);
  Card card4 = new Card("root", Card.CardType.DRIVING_CERTIFICATE);

  Wallet wallet1 = new Wallet(user1, 20000, List.of(card1, card2));
  Wallet walletRoot = new Wallet(root, 99999, List.of(card1, card2, card3, card4));

  public List<User> findUserData() {
    userData.addAll(List.of(user1, root));
    return userData;
  }

  public List<Wallet> findWalletData() {
    walletData.addAll(List.of(wallet1, walletRoot));
    return walletData;
  }
}
