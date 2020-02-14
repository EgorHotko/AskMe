import { SLONIK_POOL } from './slonik.constants';
import { createPool, DatabasePoolType } from 'slonik';
import { slonikConnectionConfigurations } from './config/config';

function generateConnectionString(): string {
  return `postgres://${slonikConnectionConfigurations.user}:${slonikConnectionConfigurations.password}@${slonikConnectionConfigurations.host}:${slonikConnectionConfigurations.port}/${slonikConnectionConfigurations.database}`;
}

export const slonikProviders = [
  {
    provide: SLONIK_POOL,
    useFactory: (): DatabasePoolType => {
      return createPool(generateConnectionString());
    },
  },
];
