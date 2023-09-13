import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { EscuelasModule } from './escuelas/escuelas.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { ClasesModule } from './clases/clases.module';
import { EstudianteModule } from './estudiante/estudiante.module';

@Module({
  imports: [
    TypeOrmModule.forRoot( {
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "Cristiano7",
      "database": "escolar",
      "entities": [
            "dist/**/**.entity{.ts,.js}"
      ],
      "synchronize": true
                } ),
                CiudadModule,
                EscuelasModule,
                ProfesoresModule,
                ClasesModule,
                EstudianteModule,


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
