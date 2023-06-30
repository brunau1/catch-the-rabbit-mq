import {IConsumer} from '../../core/interfaces/consumer';

export class Consumer implements IConsumer {
  consume(): void {
    throw new Error('Method not implemented.');
  }
}
