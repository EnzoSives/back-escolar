import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "./estudiante.entity";


@Entity('DomicilioEstudiante')
export class DomicilioEstudiante{


    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    domicilio:string;
    

    constructor(nombre:string){
        this.domicilio = nombre;
    }
    
    public getIdCiudad():number{
        return this.id;
    }
    
    public getNombre():string{
        return this.domicilio;
    }
    
    public setNombre(nombre:string){
        this.domicilio = nombre;
    }

    @ManyToOne(()=>Estudiante,estudiante=>estudiante.domicilios)
    @JoinColumn({name:'id_estudiante'})
    estudiante:Estudiante;

    @ManyToOne(()=>Ciudad,ciudad=>ciudad.domicilioEstu)
    ciudad:Ciudad;



}
