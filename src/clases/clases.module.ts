import { Module } from '@nestjs/common';
import { ClasesService } from './clases.service';
import { ClasesController } from './clases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from './entities/clase.entity';
import { Profesore } from 'src/profesores/entities/profesore.entity';
import { Estudiante } from 'src/estudiante/entities/estudiante.entity';
import { Escuela } from 'src/escuelas/entities/escuela.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clase,Profesore,Estudiante,Escuela])],
  controllers: [ClasesController],
  providers: [ClasesService]
})
export class ClasesModule {}
