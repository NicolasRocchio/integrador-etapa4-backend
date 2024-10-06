import mongoose from "mongoose";

const ProductosEsquema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    detalles: String,
    foto: String,
    envio: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default ProductosEsquema;
