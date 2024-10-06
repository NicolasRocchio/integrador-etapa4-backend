import express from "express";
const routerProductos = express.Router();
import controladores from "../controllers/productos.controllers.js";

//! CRUD

//! CREATE
routerProductos.post("/", controladores.create);

//! READ
// GET ALL
routerProductos.get("/", controladores.getAll);

// GET ONE
routerProductos.get("/:id", controladores.getOne);

//! UPDATE
routerProductos.put("/:id", controladores.update);

//! DELETE
routerProductos.delete("/:id", controladores.remove);

export default routerProductos;
