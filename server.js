const express = require('express');
const app = express();
app.use(express.static('./dist/angular-front-end'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-front-end/'}),
);
app.listen(process.env.PORT || 8080);
