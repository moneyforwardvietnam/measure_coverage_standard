
Example
-------

Below is a code example that illustrates the differences between C0 (Line Coverage), C1 (Branch Coverage) and C2 (Condition Coverage).

FYI, this is a python code to determine if a number is Positive and Even or Negative or Odd.

```
(1)  def check_number(number):
(2)      if number > 0 and number % 2 == 0:
(3)          return "Positive and Even"
(4)      else:
(5)          return "Negative or Odd"

```

We have below test cases:

```
TC1:   result = check_number(2)    # Positive and Even
TC2:   result = check_number(3)    # Positive and Odd
TC3:   result = check_number(-1)   # Negative
```

Test result
===========

| No | Test cases | command | Result |
| --- | --- | --- | --- |
| 1 | TC1 | `bundle exec rspec spec/tc1.rb` | Coverage report generated for RSpec to /measure_coverage_standard/ruby/coverage. 4 / 5 LOC (80.0%) covered. |
| 2 | TC2 | `bundle exec rspec spec/tc2.rb` | Coverage report generated for RSpec to /measure_coverage_standard/ruby/coverage. 4 / 5 LOC (80.0%) covered. |
| 3 | TC3 | `bundle exec rspec spec/tc3.rb` | Coverage report generated for RSpec to /measure_coverage_standard/ruby/coverage. 4 / 5 LOC (80.0%) covered. |
| 4 | TC1 + TC2 | `bundle exec rspec spec/tc1.rb spec/tc2.rb` | Coverage report generated for RSpec to /measure_coverage_standard/ruby/coverage. 11 / 11 LOC (100.0%) covered |
| 5 | TC1 + TC3 | `bundle exec rspec spec/tc1.rb spec/tc3.rb` | Coverage report generated for RSpec to /measure_coverage_standard/ruby/coverage. 11 / 11 LOC (100.0%) covered. |
| 6 | TC2 + TC3 | `bundle exec rspec spec/tc2.rb spec/tc3.rb` | Coverage report generated for RSpec to /measure_coverage_standard/ruby/coverage. 10 / 11 LOC (90.91%) covered. |
| 7 | TC1 + TC2 + TC3 | `bundle exec rspec spec/tc1.rb spec/tc2.rb spec/tc3.rb` | Coverage report generated for RSpec to /measure_coverage_standard/ruby/coverage. 17 / 17 LOC (100.0%) covered |
