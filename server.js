/* External Modules */
const express = require('express');

/* Internal Modules */

const

/* Instanced Modules */
const app = express();

/* Configuration */
const PORT = 4000;

/* Middle Ware */

/* Routes */
app.get("/", (req, res) => {
    res.send("Dog breeds!");
});

app.get("/dog/:dogBreed", (req, res) => {
    res.send(`The dog bred you selected was ${req.params.dogBreed}`);
});

/* Server Bind */
app.listen(PORT, () => {
    res.send(`Dog Server Live at: ${PORT}`);
});

app.get("/:id", (req, res, next) => {
    Dog.create(req.body, (error, createdDog) => {
        if (error) {
            const context = {
                error, 
            };
            return res.render("new", context);
        }
        return res.redirect(`/Dogs/${createdDog.id}`);
    });
});