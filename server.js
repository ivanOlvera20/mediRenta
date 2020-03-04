require("dotenv").config();

const app = require("./app");
const connectDb = require("./db/mongodb");

connectDb();
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`APP listen on ${port}`));
