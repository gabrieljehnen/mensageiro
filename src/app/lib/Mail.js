// Configurações de envio de Email

import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail';

// Criar um transportador que será um objeto capaz de enviar e-mail, passando as configurações do mailtrap
export default nodemailer.createTransport(mailConfig);