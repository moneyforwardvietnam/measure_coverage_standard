package example;

public class JavaCoverage {
    public String checkNumber(int a) {
        if (a > 0 && a%2 == 0)
            return "Number is positive and even";
        else
            return "Number is Negative or odd";
    }
}