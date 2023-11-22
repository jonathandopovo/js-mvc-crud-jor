const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8071;

app.use(express.json());
app.use(cors());

app.get("/api/data", async (req, res) => {
  try {
    const data = await fs.readFile("data.json", "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Não foi possivel carregar os dados!" });
  }
});

app.post("/api/save", async (req, res) => {
  console.log(req.body)
  try {
    const novosDados = req.body;
    await fs.writeFile(
      "data.json",
      JSON.stringify(novosDados, null, 2),
      "utf8"
    );
    res.json({ message: "Dados salvos com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Não foi possível salvar os dados." });
  }
});

app.listen(PORT, () => {
  console.log(`rodando em http://localhost:${PORT}`);
});
