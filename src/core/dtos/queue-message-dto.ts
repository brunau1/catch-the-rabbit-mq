import {UUID} from 'crypto';

export type QueueMessageDto<T> = {
  id: UUID;
  origin: string;
  payload: T;
  timestamp: number;
  description?: string;
};
