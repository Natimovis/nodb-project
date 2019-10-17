let broTestimony = [];

let id= 0;
function addTestimony(req, res) {
    const { city, country, imgbefore, imgafter } = req.body;
    broTestimony.push({
        city,
        country,
        imgbefore,
        imgafter,
        id
    })
    id++
    res.status(200).json(broTestimony);
}

function getTestimony(req, res) {
    res.status(200).json(broTestimony);
}

function editTestimony(req, res) {
    console.log("hit")
    for (let i=0;i<broTestimony.length; i++){
        if (broTestimony[i].id == +req.params.id) {
            broTestimony[i].imgafter = req.body.afterImg 
        } 
    }
    res.status(200).json(broTestimony)
}

function removeTestimony(req, res) {
    const {id} = req.params;
    console.log(id);
    const index = broTestimony.findIndex(val => {
        if(val.id == id) {
            return true;
        }
    });
    broTestimony.splice(index, 1);
    res.status(200).json(broTestimony);
}






module.exports = {
    addTestimony,
    getTestimony,
    removeTestimony,
    editTestimony
}