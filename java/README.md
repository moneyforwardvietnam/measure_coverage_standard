
Example
-------

Below is a code example that illustrates the differences between C0 (Line Coverage), C1 (Branch Coverage) and C2 (Condition Coverage).

FYI, this is a go snippet to determine if a number is Positive and Even or Negative or Odd.

```test.java
(1)  public String CheckNumber(a int) {
(2)      if a > 0 && a%2 == 0 {
(3)          return "Positive and Even"
(4)      } else {
(5)          return "Negative or Odd"
(6)      }
(7)  }

```

We have below test cases:

```
TC1:   result = CheckNumber(2)    # Positive and Even
TC2:   result = CheckNumber(3)    # Negative or Odd
TC3:   result = CheckNumber(-1)   # Negative or Odd
```

Test result
===========

| No  | Test cases | command                                                           | Result                                      |
|-----| --- |-------------------------------------------------------------------|---------------------------------------------|
| 1   | TC1 | `mvn clean test -Dtest=JavaCoverageTests#testTC1`                 | Missed branches: 2 of 4<br/> Branch: 50.0%  |
| 2   | TC2 | `mvn clean test -Dtest=JavaCoverageTests#testTC2`                 | Missed branches: 2 of 4<br/> Branch: 50.0%  |
| 3   | TC3 | `mvn clean test -Dtest=JavaCoverageTests#testTC3`                 | Missed branches: 2 of 4<br/> Branch: 50.0%  |
| 4   | TC1 + TC2 | `mvn clean test -Dtest=JavaCoverageTests#testTC1+testTC2`         | Missed branches: 1 of 4<br/> Branch: 75.0%  |
| 5   | TC1 + TC3 | `mvn clean test -Dtest=JavaCoverageTests#testTC1+testTC3`         | Missed branches: 1 of 4<br/> Branch: 75.0%  |
| 6   | TC2 + TC3 | `mvn clean test -Dtest=JavaCoverageTests#testTC2+testTC3`         | Missed branches: 1 of 4<br/> Branch: 75.0%  |
| 7   | TC1 + TC2 + TC3 | `mvn clean test -Dtest=JavaCoverageTests#testTC1+testTC2+testTC3` | Missed branches: 0 of 4<br/> Branch: 100.0% |
