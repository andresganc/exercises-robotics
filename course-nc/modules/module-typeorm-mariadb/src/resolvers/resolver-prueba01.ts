
import { Resolver, Mutation, Arg, Int, Query, InputType, Field } from 'type-graphql'
import { Prueba } from '../entity/entity-prueba01'

@InputType()
class PruebaInput {
    
    @Field()
    name!: string

    @Field()
    age!: number
}

@InputType()
class PruebaUpdateInput {

    @Field(() => String, { nullable: true } ) 
    name?: string

    @Field(() => Int, { nullable: true })
    age?: number

}

@Resolver()
export class ResolverPrueba01 {

    @Mutation( () => Prueba )
    async createPrueba(
        //@Arg('name') name: string,
        //@Arg('age', () => Int) age: number,
        @Arg("variables", () => PruebaInput) variables: PruebaInput
    ){
        const newPrueba = Prueba.create(variables);
        console.log( newPrueba )
        return await newPrueba.save();
    }


    @Mutation( () => Boolean)
    async updatePrueba (
            @Arg ("id", () => Int) id: number,
            @Arg ("fields", () => PruebaUpdateInput ) fields: PruebaUpdateInput
        ) {
            await Prueba.update ({id}, fields)
            //console.log(id, fields)
            return true;
        }

    
    @Mutation( () => Boolean) 
    async deletePrueba(@Arg ("id", () => Int) id: number ) {
        await Prueba.delete(id)
        return true
    }


    @Query(() => [Prueba])
    queryPruebas() {
        return Prueba.find()   
    }
}