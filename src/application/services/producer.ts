import {QueueMessageDto} from '../../core/dtos/queue-message-dto';
import {IProducer} from '../../core/interfaces/producer';

export class Producer implements IProducer {
  publish(message: QueueMessageDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
