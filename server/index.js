const express = require("express");
const {bodyTypes, caloricThreshold, dietTypes} = require("./controller");

const app = express();

app.use(express.json());


const nutrition = [
    { id: 1, name: 'nutrition1'},
    { id: 2, name: 'nutrition2'},
    { id: 3, name: 'nutrition3'},
]


app.get('/api/nutrition', (req, res) => {
    res.send(nutrition);
});

app.post('/api/nutrition', (req, res) =>{
    if (!req.body.name) {
    //400 Bad Request
    res.status(400).send(`Input is required and should be a minimum of 3 characters.`);
    return;
    }

    const health = {
        id: nutrition.length + 1,
        name: req.body.name
    };
    nutrition.push(health);
    res.send(health);
});

app.get('/api/nutrition/:id', (req, res) => {
    const health = nutrition.find(c => c.id === parseInt(req.params.id));
    if (!health) res.status(404).send(`The page with the given id was not found`);
    res.send(health);
});

//localhost:3000/api/posts/2018/1

const port = 5150;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});