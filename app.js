const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 3000;

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");


app.use('/', indexRouter);
app.use((req, res) => {
    res.status(404).render('404');
});


app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`App running on port ${PORT}`);
})