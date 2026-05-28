public class OperatorPrecedence {
    public static void main(String[] args) {
         /* 
        Java operator Precedence is similar to BODMAS.
        If operators have the same precedence level,
        Java evaluates the expression from left to right.
        */

        
        int example1 = 9 / 7 + ( 3 * 8 );
        System.out.println(example1);
        /*
        Step 1 -> (3*8) brackets first -> 9 / 7 + 24
        Step 2 -> division -> 1 + 24
        Step 3 -> addition ->  result = 25


         */
        int example2 = 7 * 2 - 9 + 2;
        System.out.println(example2);
         /*
        Step 1 -> Multiplication first -> 14 - 9 + 2
        Step 2 -> left to right so 5 + 2
        Step 3 -> addition -> result = 7
         */
    }
}
