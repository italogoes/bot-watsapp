const puppeteer = require('puppeteer')

async function printScreen() {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    await page.setUserAgent(

      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"

    );

    //Navigates to Whatsapp

    await page.goto("https://web.whatsapp.com/");

    await page.waitForSelector('._3j691');

    await delay(3000);

    await page.click('span[title="Tito"]');

    await delay(2000);

    await page.type('.g0rxnol2','Opa!');

    await delay(1000);

    await page.click('[data-testid="send"]');
}

printScreen();

function delay(time) {

    return new Promise(function (resolve) {
  
      setTimeout(resolve, time);
  
    });
  
  }
  