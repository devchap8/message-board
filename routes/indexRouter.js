const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString('en-US'),
    id: crypto.randomUUID()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString('en-US'),
    id: crypto.randomUUID()
  }
];


indexRouter.get('/', (req, res) => {
    res.render("index", {messages});
})

indexRouter.get('/new', (req, res) => {
    res.render('form');
})

indexRouter.post('/new', (req, res) => {
    messages.push({
        text: req.body['form-text'],
        user: req.body['form-name'], 
        added: new Date().toLocaleString('en-US'),
        id: crypto.randomUUID()
    })
    res.redirect('/');
})

indexRouter.get('/info/:id', (req, res, next) => {
    const msg = messages.find(m => m.id === req.params.id);
    if(msg) res.render('msg-info', {msg});
    else next();
})

module.exports = indexRouter;