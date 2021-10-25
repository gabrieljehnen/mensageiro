// Fila da aplicação

import Queue from 'bull';
import redisConfig from '../../config/redis';

// Importar a job de compra
import PurchaseMail from '../jobs/PurchaseMail';

// Criar uma fila, passando um nome para ela que será a key do proprio job e as configurações do Redis
const queue = new Queue(PurchaseMail.key, redisConfig);

export default queue;