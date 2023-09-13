import { Clase } from "src/clases/entities/clase.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "./estudiante.entity";


@Entity('EstudiantesClase')
export class EstudiantesClase {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.estudiantesClases)
  @JoinColumn({ name: 'idEstudiante' })
  estudiante: Estudiante;

}





