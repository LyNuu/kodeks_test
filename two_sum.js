"use strict";

function twoSumUnique(array, targetSum) {
	const seen = new Set();
	for (let i = 0; i < array.length; i++) {
		const current = array[i];
		const need = targetSum - current;
		if (seen.has(need)) return [need, current];
		seen.add(current);
	}
	return [];
}

module.exports = { twoSumUnique };
