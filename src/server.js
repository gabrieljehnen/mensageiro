// Aqui é utilizado o express para que possamos abrir um servidor.
/* Obs: Foi utilizado o pacote sucrase que adicionam funcionalidades e sintaxes novas do ECS6 
que ainda não estão presentes no Node.js
*/
import express from 'express';
import PurchaseController from './app/controllers/PurchaseController';
import 'dotenv/config';

const app = express();

// Comando necessário para poder fazer requisições enviando ou recebendo json.
app.use(express.json());


// Método POST na rota /purchase, onde o PurchaseController.store já contém a requisição e resposta.
app.post('/purchase', PurchaseController.store);

// Abrir o servidor e conectar à porta 3030.
app.listen(3030, () => {
    console.log('Conectado.');
});