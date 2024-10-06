import modelos from "../models/productos.models.js";
import handleMongoId from "../utils/handle-mongo-id.js";

const getAll = async (req, res) => {
  try {
    const productos = await modelos.obtenerTodos();
    res.json(handleMongoId(productos));
  } catch (error) {
    console.log("[gatAll]", error);
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;

  try {
    const producto = await modelos.obtenerUnProducto(id);
    res.json(handleMongoId(producto));
  } catch (error) {
    console.log("[getOne]", error);
  }
};

const create = async (req, res) => {
  const producto = req.body;

  try {
    const productoCreado = await modelos.crearProducto(producto);
    res.status(201).json({ producto: productoCreado });
  } catch (error) {
    console.log("[create]", error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const productoEditado = req.body;

  try {
    const productoActualizado = await modelos.updateProducto(
      id,
      productoEditado
    );
    res.json(productoActualizado);
  } catch (error) {
    console.log("[update]", error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const productoBorrado = await modelos.deleteProducto(id);
    res.json({ producto: productoBorrado });
  } catch (error) {
    console.log("[remove]", error);
  }
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
