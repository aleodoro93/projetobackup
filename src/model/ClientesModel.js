import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose

const clientesSchema = new Schema({
    CPF: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    }

});

const Clientes = mongoose.model("Clientes", clientesSchema)

export {Clientes, clientesSchema}
