import { Escuela } from "src/escuelas/entities/escuela.entity";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { EstudiantesClase } from "src/estudiante/entities/estudiante_clase.entity";
import { Profesore } from "src/profesores/entities/profesore.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('clases')
export class Clase {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;



    constructor(nombre:string){
        this.nombre = nombre;
    }

    public getIdCiudad():number{
        return this.id;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre:string){
        this.nombre = nombre;
    }

    @ManyToOne(()=>Profesore, profesore => profesore.clases)
    @JoinColumn({name:'id_profesor'})
    profesore: Profesore;

    @ManyToMany(()=>Estudiante,estudiante=> estudiante.clases)
    @JoinTable({name:'EstudianteClase'})
    estudiantes:Estudiante[];

    @ManyToOne(()=>Escuela, escuela=> escuela.clases)
    @JoinColumn({name:'id_escuela'})
    escuela:Escuela;
    
    
    

}

