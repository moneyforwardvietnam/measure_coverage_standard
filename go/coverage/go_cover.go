package coverage

func CheckNumber(a int) string {
	if a > 0 && a%2 == 0 {
		return "Number is positive and even"
	} else {
		return "Number is Negative or odd"
	}
}
