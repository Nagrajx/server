require("dotenv").config();
const connecteddb =  require("./src/database/db")

const app = require("./src/app");


const port = process.env.PORT || 4000;

connecteddb();

app.listen(port, () => {
    console.log(`Server started successfully on port ${port}`);
});




