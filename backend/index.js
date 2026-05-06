const express = require("express");
const calendarRoutes = require("./routes/calendar.routes");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());


// 🔗 rutas
app.use("/api", calendarRoutes);
app.get("/", (req, res) => {
  res.send("El backend de la clínica está funcionando 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});