
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn } from 'typeorm'
import { Field, Int, ObjectType } from "type-graphql";


@ObjectType()
@Entity()
export class Prueba extends BaseEntity {
    
    @Field( () => Int )
    @PrimaryGeneratedColumn()
    id!: number;

    @Field( () => String )
    @CreateDateColumn({ type: "timestamp" })
    createdAt!: string;

    @Field( () => String )
    @Column({ length: 100 })
    name!: string;

    @Field( () => Int )
    @Column("int", { default: 0 })
    age!: number;
}