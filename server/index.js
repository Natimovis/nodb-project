const express = require("express");
const {nutrition} = require("./controller");

const app = express();

app.use(express.json());

app.get('/api/nutrition', (req, res) => {
    res.send(nutrition);
});

app.get('/api/nutrition/:id', (req, res) => {
    const health = nutrition.find(c => c.id === parseInt(req.params.id));
    if (!health) return res.status(404).send(`The page with the given id was not found`);
    res.send(health);
});

app.post('/api/nutrition', (req, res) =>{
    if (!req.body.name) return res.status(400).send(`Ya goof'd brah`);   
    
    const health = {
        id: nutrition.length + 1,
        name: req.body.name
    };
    nutrition.push(health);
    res.send(health);
});


app.put('/api/nutrition/:id', (req, res) => {
    const health = nutrition.find(c => c.id === parseInt(req.params.id));
    if (!health) return res.status(404).send(`The page with the given id was not found`);
})

app.delete('/api/nutrition/:id', (req, res) =>{
    const health = nutrition.find(c => c.id === parseInt(req.params.id));
    if (!health) return res.status(404).send(`The page with the given id was not found`);
    
    const index = nutrition.indexOf(health);
    nutrition.splice(index, 1);
    
    res.send(health);
});


const port = 5150;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});