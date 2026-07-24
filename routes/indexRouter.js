const { Router } = require("express");
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.send("Index Page Here");
})

indexRouter.get('/about', (req, res) => {
    res.send("About Page Here");
})

module.exports = indexRouter;