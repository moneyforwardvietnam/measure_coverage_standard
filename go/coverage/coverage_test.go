package coverage

import (
	"testing"
)

func Test_TC1(t *testing.T) {
	type args struct {
		a int
		b bool
	}

	tests := []struct {
		name string
		args args
		want bool
	}{
		{
			name: "TC1 - test odd - negative - false",
			args: args{
				a: -3,
				b: true,
			},
			want: false,
		},
		{
			name: "TC2 - test even - negative - false",
			args: args{
				a: -10,
				b: true,
			},
			want: true,
		},
		{
			name: "TC3 - test odd - positive - true",
			args: args{
				a: 3,
				b: true,
			},
			want: false,
		},
		{
			name: "TC4 - test even - positive - true",
			args: args{
				a: 10,
				b: true,
			},
			want: false,
		},
		{
			name: "TC5 - test even - positive - false",
			args: args{
				a: 10,
				b: false,
			},
			want: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			getCoverage(tt.args.a, tt.args.b)
		})
	}
}
