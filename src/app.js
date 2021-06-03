const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;
const hbs = require('hbs');
const staticPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));
// app.use(express.static(viewsPath));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/weather", (req, res) => {
    res.render("weather");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("*", (req, res) => {
    res.render("404");
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})