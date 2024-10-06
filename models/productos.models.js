import mongoose from "mongoose";
import ProductosEsquema from "./esquemas/ProductosEsquemas.js";

const ProductoModelo = mongoose.model("productos", ProductosEsquema);

const obtenerTodos = async () => {
  try {
    const productos = await ProductoModelo.find();
    return productos;
  } catch (error) {
    console.log("[obtenerTodos]", error);
  }
};

const obtenerUnProducto = async (id) => {
  try {
    const producto = await ProductoModelo.findById(id);
    return producto;
  } catch (error) {
    console.log("[obtenerUnProducto]", error);
  }
};

const crearProducto = async (producto) => {
  try {
    const productoCreado = await ProductoModelo.create(producto);
    return productoCreado;
  } catch (error) {
    console.log("[crearProducto]", error);
  }
};

const updateProducto = () => {};

const deleteProducto = async (id) => {
  try {
    const productoBorrado = await ProductoModelo.findByIdAndDelete(id);
    return productoBorrado;
  } catch (error) {
    console.log("[deleteProducto]", error);
  }
};

export default {
  obtenerTodos,
  obtenerUnProducto,
  crearProducto,
  updateProducto,
  deleteProducto,
};
