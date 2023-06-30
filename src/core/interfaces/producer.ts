import {QueueMessageDto} from '../dtos/queue-message-dto';

export interface IProducer {
  publish(message: QueueMessageDto): Promise<void>;
}
