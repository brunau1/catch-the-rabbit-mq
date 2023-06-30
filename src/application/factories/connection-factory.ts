import {Configuration} from '../../core/interfaces/configuration';
import {Consumer} from '../../core/interfaces/consumer';
import {Producer} from '../../core/interfaces/producer';

export class ConnectionFactory {
  static makeProducer(configs: Configuration): Producer {
    throw new Error('Method not implemented.');
  }
  static makeConsumer(configs: Configuration): Consumer {
    throw new Error('Method not implemented.');
  }
}
