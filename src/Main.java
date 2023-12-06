import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Service service = new Service();
    Scanner scanner = new Scanner(System.in);

    System.out.println("Welcome to wallet java ----");

    while (true) {
      System.out.println("Enter username: ");
      String usernmane = scanner.nextLine();
      System.out.println("Enter password: ");
      String password = scanner.nextLine();
      System.out.println("Exit ?");
      boolean isExiting = scanner.nextBoolean();

      if (isExiting) {
        scanner.close();
        break;
      }

      if (service.isAuthenticated(usernmane, password)) {
        System.out.println("authentication succeed");
      }
      else {
        System.out.println("failed to authenticated");
        break;
      }

      while (true) {
        service.preventChoice(usernmane);

        int choice = scanner.nextInt();

        if (choice == 3) {
          break;
        }
        if (choice == 1) {
          System.out.println("enter the value to deposit: ");
          int toDeposit = scanner.nextInt();
          service.deposit(usernmane, toDeposit);
        }
        if (choice == 2) {
          System.out.println("enter the value to withdraw: ");
          int toWithDraw = scanner.nextInt();
          service.withdraw(usernmane, toWithDraw);
        }
        if (choice == 3) {
          System.out.println("thanks for session");
          break;
        }
      }
    }
  }
}