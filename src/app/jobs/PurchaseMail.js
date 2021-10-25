// Na pasta jobs serão colocados todos os scripts que irão rodar em segundo plano

import Mail from '../lib/Mail';

export default {
    // Todo job terá uma key única, podendo ser qualquer valor, que no caso será o nome do próprio job.
    key: "PurchaseMail",

    // Método que dirá o que este job irá fazer, recebendo dados do usuário contidos em { data }
    async handle({ data }){

        const { purchase } = data;

        await Mail.sendMail({

            // Quem vai enviar o email
            from: "Queuetest <queue@queuetest.com>",
            // Quem vai receber o email
            to: `${purchase.customer_name} <${purchase.customer_email}>`,
            // Assunto do email
            subject: 'Compra',
            // Mensagem que pode ser inserida tags html
            html: `Prezado ${purchase.customer_name}, </br> o pedido n.º ${purchase.purchase_id} com o total de R$ ${purchase.total} foi cadastrado com sucesso.
            O prazo de entrega será até ${purchase.delivery_date}.`
        });
    }
};