import { Module } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { ProfesoresController } from './profesores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from 'src/clases/entities/clase.entity';
import { Profesore } from './entities/profesore.entity';
import { DomicilioProfesor } from './entities/domicilio_profesor.entity';
import { Ciudad } from 'src/ciudad/entities/ciudad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clase,Profesore,DomicilioProfesor,Ciudad])],
  controllers: [ProfesoresController],
  providers: [ProfesoresService]
})
export class ProfesoresModule {}
