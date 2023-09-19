import { Clientes, clientesSchema } from "../model/ClientesModel.js";

const ClientesController = {
    create: async (req, res) => {
        try {
            const cliente = {
                CPF: req.body.CPF,
                nome: req.body.nome,
                endereco: req.body.endereco,
                telefone: req.body.telefone,
                email: req.body.email
            };

            const resposta = await Clientes.create(cliente);

            res.status(201).json({ resposta, msg: "Serviço criado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: error.message });
        }
    },
    
    


};

export default ClientesController;
