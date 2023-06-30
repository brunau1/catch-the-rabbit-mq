import {Configuration} from '../../core/interfaces/configuration';
import {IConsumer} from '../../core/interfaces/consumer';
import {IProducer} from '../../core/interfaces/producer';

export class ConnectionFactory {
  static makeProducer(configs: Configuration): IProducer {
    throw new Error('Method not implemented.');
  }
  static makeConsumer(configs: Configuration): IConsumer {
    throw new Error('Method not implemented.');
  }
}
