import Queue from '../lib/Queue';

export default {

    async store(req, res){

        // Método para adicionar dias à data atual
        Date.prototype.addDays = function (days) {
            const date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };

        // Gerar data atual
        const date = new Date(Date.now());

        // Adicionar 10 dias à data atual
        var final_date = date.addDays(10);


        // Formatar data para modelo DD/MM/AAAA
        const delivery_date = `${final_date.getDay()}/${final_date.getMonth()}/${final_date.getFullYear()}`
        
        // Onde serão armazenados os valores da requisição
        const { purchase_id, total, customer_name, customer_email } = req.body;


        // Criando o objeto com os valores da requisição com adição da data de entrega
        const purchase = {
            purchase_id,
            total,
            delivery_date, 
            customer_name,
            customer_email
        };


        // Adicionar objeto à fila
        await Queue.add({ purchase })

        return res.json(purchase);
    }
};