const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { DB } = require("./src/BD_FN/DB-FN")
const PORT = 3001;



conn.sync({ force: false }).then(async () => {
await DB();
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
