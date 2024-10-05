import express from "express";
import "dotenv/config";
import routerProductos from "./routers/productos.router.js";
import { error } from "console";

//! variables/Constantes

const app = express();
const PORT = process.env.PORT || 2222;

//! Middlewares
app.use(express.json());

//! Rutas
app.use("/api/v1/productos", routerProductos);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res.status(404).json({
    ruta: `${req.url}`,
    metodo: `${req.method}`,
    mensaje: "No se puede acceder al recurso que están queriendo acceder",
  });
});

app.listen(PORT, (err) => {
  if (err) throw new Error("No se pudo levantar el servidor", err);
  console.log(`Servidor funcionando en: http://localhost:${PORT}`);
});
