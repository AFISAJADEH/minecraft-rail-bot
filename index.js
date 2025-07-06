require('./keepalive.js');
const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'leiosmp.aternos.me', // ganti sesuai server lo
    port: 26999,                // ganti sesuai port Aternos
    version: '1.20.4',
    username: 'RailBot'
  });

  bot.on('spawn', () => {
    console.log('✅ Bot sudah join!');
    setInterval(() => {
      bot.look(Math.random() * Math.PI * 2, 0, true);
    }, 30000);
  });

  bot.on('end', () => {
    console.log('🔄 Disconnected, reconnecting...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', err => {
    console.log('❌ Error:', err);
  });
}

createBot();
