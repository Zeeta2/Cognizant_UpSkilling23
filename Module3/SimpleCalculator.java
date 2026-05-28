import java.util.*;
public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter First Number: ");
        int a=sc.nextInt();
        System.out.print("Enter Second Number: ");
        int b=sc.nextInt();
        System.out.print("Enter an operation (+) , (-) , (*) , (/) : " );
        char op=sc.next().charAt(0);
        double res;
        switch(op){
            case '+' :
                res=a+b;
                System.out.println("Result= "+res);
                break;
            case '-' :
                res=a-b;
                System.out.println("Result= "+res);
                break;
            case '*' :
                res=a*b;
                System.out.println("Result= "+res);
                break;
            case '/' :
                res=a/b;
                System.out.println("Result= "+res);
                break;
        }
        sc.close();
    }
}


