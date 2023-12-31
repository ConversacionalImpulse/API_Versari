const SindicosCadastrados = require("../models/model_sindico");

exports.createOne = async (req, res) => {
    const{ nome, telefone, condominio} = req.body;
    try{
        const sindico_cadastrado = await SindicosCadastrados.create({nome, telefone, condominio, sindico: true})
        return res.json({sindico_cadastrado});
    } catch (err) {
        res.status(500).send({ error: err.message });
      };
};

exports.searchOne = async (req, res) => {
    const{ telefone } = req.body;
    try{
        const data = await SindicosCadastrados.findOne({telefone})
        if(data == null){
            return res.json({isSindico: false});
        }else {
            return res.json({isSindico: true, data});
        }
        
    } catch (err) {
        res.status(500).send({ error: err.message });
      };
}

exports.searchAll = async (req, res) => {
    try{
        const data = await SindicosCadastrados.find()

        if(data == null){
            return res.json(data);
        }else {
            return res.json(data);
        }
        
    } catch (err) {
        res.status(500).send({ error: err.message });
      };
}