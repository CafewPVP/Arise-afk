const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  try {
    console.log('กำลังเข้าสู่ Roblox...');
    await page.goto('https://www.roblox.com/games/13864661037/Arise-Crossover', { waitUntil: 'networkidle2' });

    console.log('อยู่ในเกมแล้ว... จำลอง AFK 10 นาที');
    await new Promise(resolve => setTimeout(resolve, 1000 * 60 * 10)); // 10 นาที

  } catch (err) {
    console.error('เกิดข้อผิดพลาด:', err);
  } finally {
    await browser.close();
  }
}
)();
