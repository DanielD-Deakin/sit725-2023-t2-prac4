var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/fonts", express.static(path.join(__dirname, "fonts")));

app.listen(port, () => {
    console.log("App listening to: " + port);
});
