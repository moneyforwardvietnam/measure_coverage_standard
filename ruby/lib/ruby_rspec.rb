# frozen_string_literal: true

class RubyRspec
  # check number is postive or negative and odd or even
  # assume that 0 is positive
  def check_number(num)
    if num.positive? && num.even?
      'Number is positive and even'
    else
      'Number is Negative or odd'
    end
  end
end
