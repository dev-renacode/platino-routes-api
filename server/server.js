import app from "../app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT ?? 3000;

const connectionString = "mongodb://localhost:27017/atlas_sinnoh";

const mongoConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/atlas_sinnoh");
    console.log("¡Conectado exitosamente a MongoDB!");
  } catch (error) {
    console.error("Error crítico al conectar a la base de datos:", error);
    process.exit(1);
  }
};

mongoConnection();

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});

export default mongoConnection;
