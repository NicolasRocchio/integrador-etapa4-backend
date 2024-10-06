import mongoose from "mongoose";

const getConnection = async (uri_remota) => {
  try {
    await mongoose.connect(uri_remota);
    console.log("Conexion Ok");
  } catch (error) {
    console.log("Error de conexion", error);
  }
};

export default getConnection;
