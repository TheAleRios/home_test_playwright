import { BeforeAll, AfterAll, Before, After, Status, setWorldConstructor, World, IWorldOptions} from '@cucumber/cucumber';
import { chromium, firefox, webkit, Browser, BrowserContext, Page } from 'playwright';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

let browser: Browser;
let context: BrowserContext;
export let page: Page;

dotenv.config();

class CustomWorld extends World {
  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);


BeforeAll(async () => {

  const browserType = process.env.BROWSER || 'chromium';

  switch (browserType) {
    case 'firefox':
      browser = await firefox.launch({ headless: false });
      break;
    case 'webkit':
      browser = await webkit.launch({ headless: false });
      break;
    default:
      browser = await chromium.launch({ headless: false });
  }
  
});

Before(async function(){
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page;
});

After(async function(scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshotPath = path.resolve(`reports/screenshots/${sanitizeFileName(scenario.pickle.name)}.png`);

    fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
    await page.screenshot({ path: screenshotPath, fullPage: true });
    const imageBuffer = fs.readFileSync(screenshotPath);

    this.attach(imageBuffer, 'image/png');
  }
  await page.close();
  await context.close();
});

AfterAll(async () => {
  await browser.close();
});

function sanitizeFileName(name: string): string {
  return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}