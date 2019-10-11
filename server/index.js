const express = require("express");
const {bodyTypes, caloricThreshold, dietTypes} = require("./controller");

const app = express();

app.use(express.json());

const port = 5150;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

