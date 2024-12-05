const pool = require('../utils/mysql.connect');

const saveInformacion = async ({ email, password, fecha }) => {
    const msg = {
        status: false,
        message: 'No se pudo guardar la información',
        code: 400,
    };

    let connection;
    try {
        // Validar datos
        if (!email || !password || !fecha) {
            throw new Error('Todos los campos son requeridos: email, password, fecha');
        }

        connection = await pool.getConnection();
        const sql = 'INSERT INTO sistema (email, password, fecha) VALUES (?, ?, ?)';
        const [result] = await connection.execute(sql, [email, password, fecha]);

        if (result.affectedRows > 0) {
            msg.status = true;
            msg.message = 'Información guardada con éxito';
            msg.code = 200;
        }
    } catch (error) {
        console.log(error);
        
        msg.message = error.message || 'Error interno del servidor';
    } finally {
        if (connection) connection.release();
    }

    return msg;
};

module.exports = {
    saveInformacion,
};
