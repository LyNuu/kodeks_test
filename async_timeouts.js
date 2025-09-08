"use strict";

function funcPromise(arr) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(arr) || arr.some(it => !Number.isInteger(it) || it < 0)) {
			reject(new Error("Неверный формат входящих данных, должен быть массив положительных чисел"));
			return;
		}
		if (arr.length === 0) {
			resolve([]);
			return;
		}
		const res = [];
		const onDone = (val) => {
			res.push(val);
			if (res.length === arr.length) resolve(res);
		};
		for (let i = 0; i < arr.length; i++) setTimeout(onDone, arr[i], arr[i]);
	});
}

async function funcAsync(arr) {
	return await funcPromise(arr);
}

module.exports = { funcPromise, funcAsync };
