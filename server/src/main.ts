import express from "express";
import cors from "cors";
import router from "./routes/expRoutes.js";

const app = express();
app.use(cors());
const PORT = 8081;

app.use(router);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
