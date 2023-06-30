import {QueueMessageDto} from '../dtos/queue-message-dto';

export interface Producer {
  sendMessage(message: QueueMessageDto): Promise<void>;
}
