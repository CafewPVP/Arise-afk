const noblox = require("noblox.js");

async function start() {
  const cookie = process.env.ROBLOX_COOKIE;
  await noblox.setCookie(cookie);
  const currentUser = await noblox.getCurrentUser();
  console.log(`Logged in as ${currentUser.UserName}`);

  const gameId = "15605936380"; // Arise Crossover
  const jobId = null; // ถ้ามี JobId เจาะจงใส่ได้
  await noblox.joinGame(gameId, jobId);

  console.log("Joined game. Now AFKing...");
  setInterval(() => {}, 1000); // กันโปรแกรมจบ
}
start();
