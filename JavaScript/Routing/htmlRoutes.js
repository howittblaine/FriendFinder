var path = require("path");

module.exports = function(app){
// HTML : Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/HTML/index.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/HTML/survey.html"));
});
};
