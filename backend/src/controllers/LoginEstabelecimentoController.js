const Est = require('../models/Estabelecimento');
const parseStringArray = require('../utils/parseStringArray');

module.exports = {
    async index(req, res){
        // busca estabelecimentos num raio de 20km.
        console.log(req.query);

        const { email, password } = req.query;

        const estas = await Est.find({
            email: {
                $in: email,
            },
            password: {
                $in: password,
            },
        });

        return res.json({ estas });
    }
}