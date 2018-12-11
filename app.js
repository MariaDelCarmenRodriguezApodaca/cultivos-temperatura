const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const moment = require('moment');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
bodyParser.json();
app.use(morgan('dev'));


const Temperatura = require('./models/temperatura');
//script para el fuerte
app.get('/fuerte', (req, res) => {
    let año = '2017';
    var zona = '5c0f4fd632a3e60a4898c164';
    let fecha = año + '-01-01';
    let cuenta = moment(fecha);
    var i = 0;
    for (i; i <= 365; i++) {
        let mes = cuenta.month() + 1;
        let temp = new Temperatura();
        switch (mes) {
            case 1:
                //temperatura de 12 a 28
                temp.zona = zona;
                temp.fecha = cuenta.format('YYYY-MM-DD');
                temp.min = myRandom(12, 20);
                temp.max = myRandom(21, 28);
                break;
            case 2:
                //temperatura de 12 a 28
                temp.zona = zona;
                temp.fecha = cuenta.format('YYYY-MM-DD');
                temp.min = myRandom(12, 20);
                temp.max = myRandom(21, 28);
                break;
            case 3:
                //temperatura de 13 a 30
                temp.zona = zona;
                temp.fecha = cuenta.format('YYYY-MM-DD');
                temp.min = myRandom(13, 20);
                temp.max = myRandom(21, 28);
                break;
            case 4:
                //temperatura de 18 a 34
                temp.zona = zona;
                temp.fecha = cuenta.format('YYYY-MM-DD');
                temp.min = myRandom(18, 26);
                temp.max = myRandom(27, 34);
                break;
            case 5:
                //temperatura de 22 a 35
                temp.zona = zona;
                temp.fecha = cuenta.format('YYYY-MM-DD');
                temp.min = myRandom(22, 28);
                temp.max = myRandom(29, 35);
                break;
            case 6:
                //temperatura de 25 a 35
                temp.zona = zona;
                temp.fecha = cuenta.format('YYYY-MM-DD');
                temp.min = myRandom(25, 30);
                temp.max = myRandom(29, 35);
                break;
            case 7:
                //temperatura de 25 a 35
                temp.zona = zona;
                temp.fecha = cuenta.format('YYYY-MM-DD');
                temp.min = myRandom(25, 28);
                temp.max = myRandom(31, 36);
                break;
            case 8:
                //temperatura de 25 a 35
                temp.zona = zona;
                temp.fecha = cuenta.format('YYYY-MM-DD');
                temp.min = myRandom(25, 28);
                temp.max = myRandom(31, 36);
                break;
            case 9:
                //temperatura de 25 a 35
                temp.zona = zona;
                temp.fecha = cuenta.format('YYYY-MM-DD');
                temp.min = myRandom(24, 28);
                temp.max = myRandom(31, 36);
                break;
            case 10:
                //temperatura de 20 a 34
                temp.zona = zona;
                temp.fecha = cuenta.format('YYYY-MM-DD');
                temp.min = myRandom(20, 26);
                temp.max = myRandom(27, 34);
                break;
            case 11:
                //temperatura de 15 a 30
                temp.zona = zona;
                temp.fecha = cuenta.format('YYYY-MM-DD');
                temp.min = myRandom(15, 21);
                temp.max = myRandom(22, 30);
                break;
            case 12:
                //temperatura de 13 a 28
                temp.zona = zona;
                temp.fecha = cuenta.format('YYYY-MM-DD');
                temp.min = myRandom(13, 20);
                temp.max = myRandom(21, 28);
                break;
        }
        temp.save((err, tempSaved) => {
            if (err) return res.status(500).send({ message: `Error: ${err}` });
            console.log(tempSaved);
        })
        cuenta.add(1, 'day');
    }
    if (i >= 366) {
        return res.status(500).send({ result: 'ou yeah!!' });
    }

});


function myRandom(min, max) {
    return Math.random() * (max - min) + min;
}

//primavera, verano, otoño, invierno
module.exports = app;