const axios = require("axios");
const express = require("express");
const { tareasHandler } = require("./handler/handlertareas");
const {sequelize} = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000", // Reemplaza con la URL de tu frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);


app.get("/user", (req, res) => {
  try {
    res.status(200).json({ msj: "estamos solicitando en user" });
  } catch (error) {
    res.status(404).json({ error: "error al solititar post" });
  }
});
// creando la tarea
app.post("/tareas", tareasHandler);

app.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const infoDataApi = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const dataApi = infoDataApi.data;
    console.log(dataApi.name);

    res.status(200).json(dataApi.name);
  } catch (error) {
    res.status(404).json({ error: "Error al traer la API" });
  }
});

///////////////////////////////////////////////////////////user//////////////

sequelize
.authenticate()
.then(()=>{
  console.log("connection success");
  return sequelize.sync();
})
.then(()=>{
  app.listen(3001, () => {
    console.log("Estamos en 3001");
  });
})
.catch((error) => {
  console.log("no connecto", error);
});

