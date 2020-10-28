const puppeteer = require("puppeteer");

// remove line breaks & whitespaces
const minifyText = (text) => {
  return text.replace(/(\r\n|\n|\r)/gm, " ");
};

// scrape urls with puppeteer
const scrapeURL = async (url) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);

  const result = await page.evaluate(() => {
    let content = document.querySelector("html");

    return content.textContent;
  });

  browser.close();
  return result;
};

module.exports = {
  minifyText,
  scrapeURL,
};
