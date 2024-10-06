import modeloCarritos from "../models/carrito.models.js";

const guardarCarrito = async (req, res) => {
  const productosCarrito = req.body;

  try {
    const carritoGuardado = await modeloCarritos.crearCarrito(productosCarrito);
    res.status(201).json(carritoGuardado);
  } catch (error) {
    console.log("No se pudo guardar el carrito", error);
    res.status(500).json({ mensaje: "Error al guardar el carrito" });
  }
};

export default {
  guardarCarrito,
};
