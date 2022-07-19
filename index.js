const express = require("express");
const app = express();

// Registrar que estamos usando JSON no Body
// da requisição
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// /oi -> "Olá, mundo"
app.get("/oi", function (req, res) {
  res.send("Olá, mundo");
});

// Endpoints de Heróis

const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
//               0                   1                2

// [GET] /herois -> Read All (Ler tudo)
app.get("/herois", function (req, res) {
  res.send(herois.filter(Boolean));
});

// [GET] /herois/:id -> Read by ID (Ler pelo ID)
app.get("/herois/:id", function (req, res) {
  // Pegamos o ID pela rota
  const id = req.params.id;

  // Acessar o registro na lista, usando o ID
  const item = herois[id - 1];

  // Enviar o registro encontrado
  res.send(item);
});

// [POST] /herois -> Create (Criar)
app.post("/herois", function (req, res) {
  // console.log(req.body);

  // Acessamos o valor que foi enviado na request
  const item = req.body.nome;

  // Insere esse valor na lista
  herois.push(item);

  // Exibe uma mensagem de sucesso
  res.send("Item criado com sucesso!");
});

// [PUT] /herois/:id -> Update (Atualizar)
app.put("/herois/:id", function (req, res) {
  // Pegar o ID
  const id = req.params.id;

  // Pegar o item a ser atualizado
  const item = req.body.nome;

  // Atualizar na lista o valor recebido
  herois[id - 1] = item;

  // Envio uma mensagem de sucesso
  res.send("Item atualizado com sucesso!");
});

// [DELETE] /herois/:id -> Delete (Remover)
app.delete("/herois/:id", function (req, res) {
  // Pegar o ID
  const id = req.params.id;

  // Remove o item da lista
  delete herois[id - 1];

  // Exibimos uma mensagem de sucesso
  res.send("Item removido com sucesso!");
});

app.listen(3000, function () {
  console.log("Aplicação rodando em http://localhost:3000");
});
