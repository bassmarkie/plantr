const db = require("./models");
db.sync({ force: true })
  .then(() => {
    console.log("database synced");
  })
  .catch(err => {
    console.log(err, "something went wrong");
  })
  .finally(() => {
    db.close();
  });
