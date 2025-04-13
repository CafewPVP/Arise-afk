const noblox = require('noblox.js');

(async () => {
  try {
    const cookie = process.env.ROBLOX_COOKIE;
    await noblox.setCookie(cookie);
    const currentUser = await noblox.getCurrentUser();
    console.log(`ล็อกอินเป็น ${currentUser.UserName}`);

    const gameId = 13864661037;
    await noblox.joinGame(gameId);
    console.log("เข้าห้องเรียบร้อย กำลัง AFK...");

    await new Promise(resolve => setTimeout(resolve, 1000 * 60 * 20)); // 20 นาที
    console.log("AFK จบแล้ว");

  } catch (err) {
    console.error("เกิดข้อผิดพลาด:", err);
  }
})();
