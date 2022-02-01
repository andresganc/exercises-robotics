
import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm'


@Entity()
export class nc_ms_cyl_cylinders extends BaseEntity {

    @PrimaryGeneratedColumn()
    cylinder_id!: number;

    /*
    @OneToMany( type => nc_mb_cli_contacts, contacts => contacts.fkey_clients, { eager: true } )
    fkey_contacts?: nc_mb_cli_contacts[]
    */

    @CreateDateColumn({ type: 'timestamp' })
    created_at?: string;

    @CreateDateColumn({ type: 'timestamp' })
    updated_at?: string;

    @Column({ default: '' })
    serial?: string;

    @Column({ type: 'timestamp' })
    manufacturing_date?: string;

    @Column({ default: '' })
    manufacturing_number ?: string;
    
    @Column({ type: 'timestamp' })
    ph_date?: string;

    @Column( { default: '' } )
    valve_type?: string;

    @Column( { default: '' } )
    gas_type?: string;

    @Column( { default: '' } )
    capacity?: string;

    @Column( { default: '' } )
    image?: string;

    @Column( { default: '' } )
    notes?: string;

    @Column( { default: '' } )
    created_user?: string;

}