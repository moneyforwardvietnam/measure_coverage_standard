
Example
-------

Below is a code example that illustrates the differences between C0 (Line Coverage), C1 (Branch Coverage) and C2 (Condition Coverage).

FYI, this is a go snippet to determine if a number is Positive and Even or Negative or Odd.

```
(1)  func CheckNumber(a int) string {
(2)      if a > 0 && a%2 == 0 {
(3)          return "Positive and Even"
(4)      } else {
(5)          return "Negative or Odd"
(6)      }

```

We have below test cases:

```
TC1:   result = CheckNumber(2)    # Positive and Even
TC2:   result = CheckNumber(3)    # Negative or Odd
TC3:   result = CheckNumber(-1)   # Negative or Odd
```

Test result
===========

| No  | Test cases | command                                                                                                | Result                                                                                                        |
|-----| --- |--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| 1   | TC1 | `gobco -branch -stats results/TC1-branch-cover.json -test -run=TestTC1 coverage`                       | Branch coverage: 1/2<br>coverage/go_cover.go:4:5: condition "a > 0 && a%2 == 0" was once true but never false<br>Branch: 50.0%|
| 2   | TC2 | `gobco -branch -stats results/TC2-branch-cover.json -test -run=TestTC2 coverage`                       | Branch coverage: 1/2<br>coverage/go_cover.go:4:5: condition "a > 0 && a%2 == 0" was once false but never true<br>Branch: 50.0% |
| 3   | TC3 | `gobco -branch -stats results/TC3-branch-cover.json -test -run=TestTC3 coverage`                       | Branch coverage: 1/2<br>coverage/go_cover.go:4:5: condition "a > 0 && a%2 == 0" was once false but never true<br>Branch: 50.0% |
| 4   | TC1 + TC2 | `gobco -branch -stats results/TC1_2-branch-cover.json test -run="(TestTC1\|TestTC2)" coverage`   | Branch coverage: 2/2<br>coverage/go_cover.go:4:5: condition "a > 0 && a%2 == 0" was once false and once true<br>Branch: 100.0%     |
| 5   | TC1 + TC3 | `gobco -branch -stats results/TC1_3-branch-cover.json -test -run="(TestTC1\|TestTC3)" coverage`  | Branch coverage: 2/2<br>coverage/go_cover.go:4:5: condition "a > 0 && a%2 == 0" was once false and once true<br>Branch: 100.0%    |
| 6   | TC2 + TC3 | `gobco -branch -stats results/TC2_3-branch-cover.json -test -run="(TestTC2\|TestTC3)" coverage`  | Branch coverage: 1/2<br>coverage/go_cover.go:4:5: condition "a > 0 && a%2 == 0" was 2 times false but never true<br>Branch: 50.0% |
| 7   | TC1 + TC2 + TC3 | `gobco -branch -stats results/TC_AL-branch-cover.json -test -run="(TestTC1\|TestTC2\|TestTC3)" coverage`  | Branch coverage: 2/2<br>coverage/go_cover.go:4:5: condition "a > 0 && a%2 == 0" was once true and 2 times false<br>Branch: 100.0% |
