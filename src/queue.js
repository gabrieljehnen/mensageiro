// Arquivo necessário para processar a fila

import Queue from './app/lib/Queue';
import PurchaseMail from './app/jobs/PurchaseMail';

Queue.process(PurchaseMail.handle);

// Após esse método, a fila já estará funcionando em segundo plano.