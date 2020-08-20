var express = require("express");
var app = express();

var port = 3000;

var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended : true}));

var TodoRoutes = require("./routes/routes");
app.use("/api/todos", TodoRoutes);



//Server Route
app.listen(port, ()=>{

console.log(`Server running at Port 3000`);

})