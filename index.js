const express = require("express");
const morgan = require("morgan");
const marca = require("./routes/marca");
const veiculo = require("./routes/veiculo");
const locacao = require("./routes/locacao");
const cliente = require("./routes/cliente");
const app = express();
const porta = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Olá pessoal");
});

app.use("/marca", marca);
app.use("/veiculo", veiculo);
app.use("/locacao", locacao);
app.use("/cliente", cliente);

app.listen(porta, () => {
  console.log("Aplicação rodando na porta " + porta);
});
