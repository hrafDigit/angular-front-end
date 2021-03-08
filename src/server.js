const express = require('express');
const app = express();
app.use(express.static('./dist/myAngularBasics'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/myAngularBasics/'}),
);
app.listen(process.env.PORT || 8080);
