const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  const addMoreNotifications = "#root > div:nth-child(1) > button";
  await page.waitForSelector(addMoreNotifications);

  var time = performance.now();

  for (var i = 0; i < 1000; i++) {
    await page.click(addMoreNotifications);
  }

  time = performance.now() - time;

  const addMoreNormalNotifications = "#root > div:nth-child(3) > button";
  await page.waitForSelector(addMoreNormalNotifications);

  var time2 = performance.now();

  for (var i = 0; i < 1000; i++) {
    await page.click(addMoreNormalNotifications);
  }

  time2 = performance.now() - time;

  console.log(
    time > time2 ? "Лучше контексты без всего" : "Лучше Контекстный движок"
  );

  await browser.close();
})();
