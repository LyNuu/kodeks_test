"use strict";

function isPerfectSquare(n) {
	if ((n | 0) !== n || n < 0) return false;
	let remainder = n;
	let odd = 1;
	while (remainder > 0) {
		remainder -= odd;
		odd += 2;
	}
	return remainder === 0;
}

module.exports = { isPerfectSquare };
