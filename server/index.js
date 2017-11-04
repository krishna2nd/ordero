const express = require('express');
const morgan = require('morgan');
const app = express();
const productinoBuild = express.static('client/build');
const port = process.env.APP_PORT || 8080;

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

app.get('*', productinoBuild);

//Finally starting the listener
app.listen(port, function () {
  console.log(`Ordero application listening on port ${port}`);
});