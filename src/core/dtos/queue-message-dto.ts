import {UUID} from 'crypto';

export type QueueMessageDto = {
  id: UUID;
  origin: string;
  payload: unknown;
  timestamp: number;
  description?: string;
};
