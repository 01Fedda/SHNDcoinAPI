const express = require("express");
const bodyParser = require("body-parser");
const rpcMethods = require("./routes/api");
const path = require('path');
const favicon = require('serve-favicon');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Use a random port (7777)
const port = process.env.PORT || 7777;

//Use of public folder's content
app.use(express.static(path.join(__dirname, 'public')));

//Favicon.ico
app.use(favicon(__dirname + '/public/images/favicon.ico'));

//Route https://shndcoin-api.xyz to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

//Route ip address and rpc calls to https://shndcoin-api.xyz and rpc calls
app.use("/api", rpcMethods, (req, res) => res.redirect("https://shndcoin-api.xyz/api", rpcMethods));

server = app.listen(port, () => console.log(`SHND API running on port ${port}`));
