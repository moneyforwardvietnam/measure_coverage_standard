package coverage

func getCoverage(a int, b bool) bool {
	var result = false
	if a < 0 && a%2 == 0 {
		result = false
	} else {
		result = true
	}
	_ = !!b && b
	return result && b
}
