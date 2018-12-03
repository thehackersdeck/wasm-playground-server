import { queues } from './utils/queues';

//Process jobs on queue
Object.entries(queues).forEach(([queueName, queue]) => {
    queue.process((job, done) => {
        done();
    });
});

