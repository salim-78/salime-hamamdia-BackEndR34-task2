const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const staticPath = path.join(__dirname, "public");
console.log(staticPath);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(staticPath));

hbs.registerPartials(path.join(__dirname, "partials"));

app.get("/", (req, res) => {
    res.render("index", {
        title: "HBS Engine Templates Home Page",
        name: "SALIME",
        age: 46, 
    });
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/logout", (req, res) => {
    res.render("logout");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})


app.listen(8000, () => {
    console.log("Server is running on port 8000");  
})