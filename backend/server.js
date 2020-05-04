const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app/public')));

const db = require("./app/models");


db.sync({ force: true }).then(() => {
 console.log("Drop and re-sync db.");
});
const corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
require("./app/routes/armor.routes")(app);
require("./app/routes/bracelet.routes")(app);
require("./app/routes/hero.routes")(app);
require("./app/routes/locket.routes")(app);
require("./app/routes/pet.routes")(app);
require("./app/routes/ring.routes")(app);
require("./app/routes/talent.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/weapon.routes")(app);
require("./app/routes/userArmor.routes")(app);
require("./app/routes/userBracelet.routes")(app);
require("./app/routes/userHero.routes")(app);
require("./app/routes/userLocket.routes")(app);
require("./app/routes/userPet.routes")(app);
require("./app/routes/userRing.routes")(app);
require("./app/routes/userTalent.routes")(app);
require("./app/routes/userWeapon.routes")(app);
require("./app/routes/upgradeRequirement.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
