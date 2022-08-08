

const {Schema, model} = require('mongoose');

const NotepetSchema = new Schema({
    title: {type: String},
    description: {type: String, default: 'Description'},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    precio: {type: String},
    Created_at: {type: Date, default: Date.now()},
    public_id: {type: String},
    comments: {type: String},
    fecha_upload: {type: String},
    kin_name: {type: String},
    phone: {type: String},
    email: {type: String},
    how: {type: String},
    breed: {type: String},
    age: {type: String},
    gender: {type: String},
    diet: {type: String},
    health: {type: String},
    withanest: {type: String},
    noanest: {type: String},
    user: {type: String, required: true}
},{timestamps: true});

module.exports = model('Notepet' , NotepetSchema);