import * as Apilado from "apilado";
export * from "apilado";

/*
var T = emergeAppExample(Apilado);
export typeof T.AppApilado;
*/

// /* CASO FUERA Y SEPARADO 
import "./be-apilado";
import { emergeBeEjemplar } from "be-example";

export function emergeApiladoEjemplar<T extends typeof Apilado>(Base:T){
    return {...Base, Backend: emergeBeEjemplar(Base.Backend) };
}
// */

/* CASO DENTRO Y SEPARADO 
export function emergeApiladoEjemplar<T extends typeof Apilado>(Base:T){
    class Backend extends Base.Backend{
        constructor(...args:any[]){ 
            super(...args);
            // this.usuariosTD.field.rol={typeName:'text'};
        }
        // rolesTD:TableDefinition={
        //     field:{
        //         rol:{typeName:'text'},
        //     },
        //     primaryKey:['rol']
        // }
        get esTres(){ return 'sí, es 3!'}
    }
    return {...Base, Backend };
}
// */

/* CASO TODO JUNTO 
export function emergeApiladoEjemplar<T extends typeof Apilado>(Base:T){
    return {...Base, Backend: class Backend extends Base.Backend{
        constructor(...args:any[]){ 
            super(...args);
            // this.usuariosTD.field.rol={typeName:'text'};
        }
        // rolesTD:TableDefinition={
        //     field:{
        //         rol:{typeName:'text'},
        //     },
        //     primaryKey:['rol']
        // }
        get esTres(){ return 'sí, es 3!'}
    }};
}
// */

var Aplicacion = emergeApiladoEjemplar(Apilado);

var app = new Aplicacion.Backend('exe');
app.start();
app.describe();



