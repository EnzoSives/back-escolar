import { Clase } from "src/clases/entities/clase.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DomicilioProfesor } from "./domicilio_profesor.entity";

@Entity('profesore')
export class Profesore {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombreYapellido:string;



    constructor(nombre:string){
        this.nombreYapellido = nombre;
    }

    public getIdCiudad():number{
        return this.id;
    }

    public getNombre():string{
        return this.nombreYapellido;
    }

    public setNombre(nombre:string){
        this.nombreYapellido = nombre;
    }

    @OneToMany(()=>Clase,clase => clase.profesore)
    clases: Clase[];

    @OneToMany(()=>DomicilioProfesor,domicilios=>domicilios.profesore)
    domicilios:DomicilioProfesor[];

}