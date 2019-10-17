const express = require("express");
const { addTestimony, getTestimony, editTestimony, removeTestimony } = require("./controller");

const app = express();

app.use(express.json());

const port = 5150;

app.post("/api/testimonials", addTestimony);

app.get("/api/testimonials", getTestimony);

app.put("/api/testimonials/:id", editTestimony);

app.delete("/api/testimonials/:id", removeTestimony);


app.listen(port, () => console.log(`Listening on ${port}`));