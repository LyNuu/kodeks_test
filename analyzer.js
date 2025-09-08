"use strict";

// Константы: путь к директории и искомая подстрока (регистронезависимая)
const FS_ROOT = __dirname; // текущая папка со скриптом
const RECURSIVE = true; // включить рекурсивный обход подпапок
const SEARCH_SUBSTRING = 'lorem';

const fs = require('fs');
const path = require('path');

/**
 * Возвращает список файлов .html/.htm в директории (при необходимости рекурсивно).
 */
function listHtmlFiles(dir, recursive = RECURSIVE) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	const files = [];
	for (const e of entries) {
		const full = path.join(dir, e.name);
		if (e.isDirectory()) {
			if (recursive) files.push(...listHtmlFiles(full, recursive));
			continue;
		}
		if (!e.isFile()) continue;
		const ext = path.extname(full).toLowerCase();
		if (ext === '.html' || ext === '.htm') files.push(full);
	}
	return files;
}

/**
 * Считает количество <p>...</p> с искомой подстрокой (без учета регистра).
 */
function countParagraphsWithSubstring(html, substr) {
	const paragraphRegex = /<\s*p\b[^>]*>([\s\S]*?)<\/\s*p\s*>/gi;
	const substrLower = substr.toLowerCase();

	let count = 0;
	let match;
	while ((match = paragraphRegex.exec(html)) !== null) {
		const inner = match[1].toLowerCase();
		if (inner.includes(substrLower)) count++;
	}
	return count;
}

function main() {
	const files = listHtmlFiles(FS_ROOT);
	if (files.length === 0) {
		console.log(`HTML-файлы не найдены в папке: ${FS_ROOT}`);
		return;
	}

	for (const file of files) {
		try {
			const content = fs.readFileSync(file, 'utf8');
			const count = countParagraphsWithSubstring(content, SEARCH_SUBSTRING);
			console.log(`${path.relative(FS_ROOT, file)}: параграфов с подстрокой "${SEARCH_SUBSTRING}" — ${count}`);
		} catch (err) {
			console.error(`${path.relative(FS_ROOT, file)}: ошибка чтения — ${err.message}`);
		}
	}
}

if (require.main === module) main();
