const express = require('express');
const app = express();
const port = 3000;
const mainRouter = require('./routers/main');

app.use(express.static('public'));

app.use('/',mainRouter);



app.listen(port, () => console.log(`Server running in ${port}`));