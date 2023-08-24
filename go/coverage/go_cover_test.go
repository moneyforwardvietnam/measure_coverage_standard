package coverage

import (
	"testing"
)

func TestTC1(t *testing.T) {
	got := CheckNumber(2)
	if got != "Number is positive and even" {
		t.Fatal("Test failed. got: " + got)
	}
}

func TestTC2(t *testing.T) {
	got := CheckNumber(3)
	if got != "Number is Negative or odd" {
		t.Fatal("Test failed. got: " + got)
	}
}

func TestTC3(t *testing.T) {
	got := CheckNumber(-1)
	if got != "Number is Negative or odd" {
		t.Fatal("Test failed. got: " + got)
	}
}
