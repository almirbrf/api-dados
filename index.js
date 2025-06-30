//desenvolvido por necessitec-2025

import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const PORT = process.env.PORT || 3000;

connectDB(); // conecta ao banco primeiro
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
