const { User } = require('../model/user'); // Asegúrate de importar el modelo correcto

const tareasHandler = async (req, res) => {
  try {
    // Analiza el JSON del cuerpo de la solicitud
    const { tarea, infotarea } = req.body;

    // Crea una nueva tarea en la base de datos
    const nuevaTarea = await User.create({
      tarea,
      infotarea,
    });

    // Responde con un código 201 (Created) y el objeto creado
    res.status(201).json(nuevaTarea);
  } catch (error) {
    // Si ocurre un error, responde con un código de error y un mensaje
    console.error(error);
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
};

module.exports = {
  tareasHandler,
};
