import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../providers/DatabaseProvider/IoC/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
})
export class RestModule {}
