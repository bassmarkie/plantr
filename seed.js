const {db, Gardener, Plot, Vegetable} = require("./models");

db.sync({ force: false, logging: false })
  .then(() => {
    console.log("database synced");
  })

  .catch(err => {
    console.log(err, "something went wrong");
  })
  .finally(() => {
    console.log('database closed')
    db.close();
  });

  Vegetable.create({name: 'carrots', color: 'orange', planted_on: new Date('December 17, 1995 03:24:00')})
  // Vegetable.create({name: 'beets', color: 'red', planted_on: new Date('December 17, 1990 03:24:00')})
