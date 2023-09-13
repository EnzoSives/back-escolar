import { Module } from '@nestjs/common';
import { EscuelasService } from './escuelas.service';
import { EscuelasController } from './escuelas.controller';
import { Escuela } from './entities/escuela.entity';
import { Clase } from 'src/clases/entities/clase.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Escuela,Clase])],
  controllers: [EscuelasController],
  providers: [EscuelasService]
})
export class EscuelasModule {}
