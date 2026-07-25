const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString('en-US')
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString('en-US')
  }
];


indexRouter.get('/', (req, res) => {
    res.render("index", {messages});
})

indexRouter.get('/new', (req, res) => {
    res.render('form');
})

module.exports = indexRouter;