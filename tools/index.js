const puppeteer = require('puppeteer');

(async () => {
	console.log('Launch browser');
	const browser = await puppeteer.launch({ headless: false });

	const page = await browser.newPage();
	await page.goto('https://es.wikipedia.org/wiki/Node.js');

	let titulo = await page.evaluate(() => {
		const h1 = document.querySelector('h1');
		return h1
	})

	console.log(titulo);
	browser.close();
})();