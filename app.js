const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 3000;



app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`App running on port ${PORT}`);
})