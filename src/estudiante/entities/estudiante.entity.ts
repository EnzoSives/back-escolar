import { Clase } from "src/clases/entities/clase.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DomicilioEstudiante } from "./domicilio_estudioante.entity";
import { EstudiantesClase } from "./estudiante_clase.entity";

@Entity('estudiantes')
export class Estudiante {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombreYapellido:string;



    constructor(nombre:string){
        this.nombreYapellido = nombre;
    }

    public getIdEstudiante():number{
        return this.id;
    }

    public getNombre():string{
        return this.nombreYapellido;
    }

    public setNombre(nombre:string){
        this.nombreYapellido = nombre;
    }

    @ManyToMany(()=>Clase,clase => clase.estudiantes)
    clases: Clase[];

    @OneToMany(()=>DomicilioEstudiante,domicilios=>domicilios.estudiante)
    domicilios:DomicilioEstudiante[];

    @OneToMany(() => EstudiantesClase, (estudiantesClase) => estudiantesClase.estudiante)
    estudiantesClases: EstudiantesClase[];
}
