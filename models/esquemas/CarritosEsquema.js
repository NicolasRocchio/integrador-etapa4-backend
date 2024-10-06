import mongoose from "mongoose";

const CarritosEsquemas = mongoose.Schema(
  {
    carrito: Array,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default CarritosEsquemas;
