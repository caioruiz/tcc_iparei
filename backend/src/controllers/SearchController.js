const { index } = require("../models/utils/PointSchema");

const Est = require('../models/Estabelecimento');
const parseStringArray = require('../utils/parseStringArray');

module.exports = {
    async index(req, res){
        // busca estabelecimentos num raio de 20km.
        console.log(req.query);

        const { latitude, longitude, endereco} = req.query;

        const estas = await Est.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 15000,
                }
            },
            endereco: {
                $regex: endereco,
            },
        });

        return res.json({ estas });
    }
}