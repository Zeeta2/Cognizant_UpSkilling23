import java.util.Scanner;
class Example{
    
int add(int a,int b){
    return a+b;
}
int add(int a,int b,int c){
    return a+b+c;
}
double add(double a,double b){
    return a+b;
}
}
public class MethodOverLoading {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        Example e=new Example();
        System.out.println(e.add(2,3));
        System.out.println(e.add(3.4,5.7));
        System.out.println(e.add(9,8,7));
        sc.close();

    }
}
