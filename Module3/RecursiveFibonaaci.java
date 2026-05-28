import java.util.Scanner;


public class RecursiveFibonaaci {
static int fibo(int n){
    if(n==0)return 0;
    if(n==1)return 1;
    return fibo(n-1)+fibo(n-2);
}
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter positive n: ");
        int n=sc.nextInt();
        System.out.println("Fibonacci number at position "+n+" is "+ fibo(n));
    sc.close();
}

}
