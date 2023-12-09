public class Card {
  private String cardOwner;
  private CardType cardType;

  public Card(String cardOwner, CardType cardType) {
    this.cardOwner = cardOwner;
    this.cardType = cardType;
  }
  public CardType getCardType() {
    return this.cardType;
  }
  public static enum CardType {
    CIN,
    VISIT_CARD,
    DRIVING_CERTIFICATE
  }
}
