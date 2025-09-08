"use strict";

/**
 * Ищет два разных числа из массива уникальных целых, сумма которых равна targetSum.
 * Возвращает [a, b] или [] если пары нет. Время O(n), память O(n).
 */
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


