import example.JavaCoverage;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class JavaCoverageTests {
    // Your tests come here
    JavaCoverage javaCoverage = new JavaCoverage();

//    @Test
//    public void testPositive() {
//        assertEquals("Number is positive and even", javaCoverage.checkNumber(2));
//    }

    @Test
    public void testTC1() {
        assertEquals("Number is positive and even", javaCoverage.checkNumber(2));
    }

    @Test
    public void testTC2() {
        assertEquals("Number is Negative or odd", javaCoverage.checkNumber(3));
    }

    @Test
    public void testTC3() {
        assertEquals("Number is Negative or odd", javaCoverage.checkNumber(-1));
    }
}