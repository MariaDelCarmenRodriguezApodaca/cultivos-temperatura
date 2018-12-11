const app = require('./app');
const global = require('./global');
const mongoose = require('mongoose');

mongoose.connect('mongodb://unoxm5lbgau3g0v:2gWW2YEiIwnnx5r4PDUA@bpx1ofbnjiyre1n-mongodb.services.clever-cloud.com:27017/bpx1ofbnjiyre1n', { useNewUrlParser: true }, (err) => {
    if (err) throw err
    console.log(`BD OK!`);
    app.listen(global.port, (err) => {
        if (err) throw err
        console.log(`Serviodr conectado port:${global.port}`);
    })
});