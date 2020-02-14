import { Module } from '@nestjs/common';
import { slonikProviders } from '../../SlonikProvider/slonik.provider';
import { SLONIK_POOL } from '../../SlonikProvider/slonik.constants';

@Module({
  imports: [],
  providers: [...slonikProviders],
  exports: [SLONIK_POOL],
})
export class DatabaseModule {}
