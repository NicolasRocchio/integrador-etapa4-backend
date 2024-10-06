import mongoose from "mongoose";
import ProductosEsquema from "./esquemas/ProductosEsquemas.js";

const ProductoModelo = mongoose.model("productos", ProductosEsquema);

const obtenerTodos = async () => {
  try {
    const productos = await ProductoModelo.find();
    return productos;
  } catch (error) {
    throw error;
  }
};

const obtenerUnProducto = async (id) => {
  try {
    const producto = await ProductoModelo.findById(id);
    return producto;
  } catch (error) {
    throw error;
  }
};

const crearProducto = async (producto) => {
  try {
    const productoCreado = await ProductoModelo.create(producto);
    return productoCreado;
  } catch (error) {
    throw error;
  }
};

const updateProducto = async (id, productoEditado) => {
  try {
    const options = { new: true };
    const productoYaEditado = await ProductoModelo.findByIdAndUpdate(
      id,
      productoEditado,
      options
    );
    return productoYaEditado;
  } catch (error) {
    throw error;
  }
};

const deleteProducto = async (id) => {
  try {
    const productoBorrado = await ProductoModelo.findByIdAndDelete(id);
    return productoBorrado;
  } catch (error) {
    throw error;
  }
};

export default {
  obtenerTodos,
  obtenerUnProducto,
  crearProducto,
  updateProducto,
  deleteProducto,
};
