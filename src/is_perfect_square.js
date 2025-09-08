"use strict";

/**
 * Проверяет, является ли целое число идеальным квадратом, без использования Math.*
 * Алгоритм: вычитает последовательные нечётные числа (1,3,5,...) пока остаток не станет 0 или < 0.
 */
function isPerfectSquare(n) {
    if ((n | 0) !== n || n < 0) return false; // только неотрицательные целые
    let remainder = n;
    let odd = 1;
    while (remainder > 0) {
        remainder -= odd;
        odd += 2;
    }
    return remainder === 0;
}

module.exports = { isPerfectSquare };



