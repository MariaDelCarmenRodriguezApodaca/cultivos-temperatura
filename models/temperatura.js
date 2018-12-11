const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TemperaturaSchema = Schema({
    zona: { type: String, required: [true, 'El obejeto del id de la zona es obligatorio para poder relacionarlo'] },
    fecha: { type: String, required: [true, 'La fecha de medida de temperatura'] },
    min: { type: Number, required: [true, 'Son los grados centigrados maximos tomados en el dia'] },
    max: { type: Number, required: [true, 'Son los grados centigrados maxitos tomados en el dia'] }
})

module.exports = mongoose.model('Temperatura', TemperaturaSchema);