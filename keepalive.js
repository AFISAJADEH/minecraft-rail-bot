const http = require('http');
http.createServer((req, res) => {
  res.write("Bot masih hidup!");
  res.end();
}).listen(process.env.PORT || 8080, () => {
  console.log("🌐 Web server di port", process.env.PORT || 8080);
});
