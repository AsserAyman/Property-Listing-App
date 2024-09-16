import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'property_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PropertyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
