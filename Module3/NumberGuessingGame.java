import java.util.*;
public class NumberGuessingGame {
    public static void main(String[] args) {
        Random r = new Random();
        Scanner sc=new Scanner(System.in);
        int random=r.nextInt(101);
        int guess;
        do{
            System.out.print("Enter your guess: ");
            guess=sc.nextInt();
            if(guess>random) System.out.println("Too High");
            else if(guess<random) System.out.println("Too Low");
            else System.out.println("Correct Guess!");
        }while(guess!=random);
sc.close();
    }}
