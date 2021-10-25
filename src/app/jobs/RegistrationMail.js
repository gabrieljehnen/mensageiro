// Job relacionado ao UserController para testes (Não considerar)

import Mail from '../lib/Mail';

export default {
    key: "RegistrationMail",

    async handle({ data }){

        const { user } = data;

        await Mail.sendMail({
            from: "Queuetest <queue@queuetest.com>",
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuario',
            html: `Olá ${user.name}, bem-vindo ao sistema de filas.`
        });
    }
};