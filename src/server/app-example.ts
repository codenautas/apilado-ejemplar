import * as Apilado from "apilado";
export * from "apilado";

/*
var T = emergeAppExample(Apilado);
export typeof T.AppApilado;
*/

// /* CASO FUERA Y SEPARADO 
import { emergeBeEjemplar } from "./be-example";

export function emergeApiladoEjemplar1<T extends typeof Apilado>(Base:T){
    return {...Base, Backend: emergeBeEjemplar(Base.Backend) };
}
// */

// /* CASO DENTRO Y SEPARADO 
export function emergeApiladoEjemplar2<T extends typeof Apilado>(Base:T){
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
        get esTres(){ return 'sí, pero no exporta'}
    }
    return {...Base, Backend };
}
// */

// /* CASO TODO JUNTO 
export function emergeApiladoEjemplar3<T extends typeof Apilado>(Base:T){
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
        get esTres(){ return 'sí, pero hay que meter todo dentro'}
    }};
}
// */

var Aplicacion1 = emergeApiladoEjemplar1(Apilado);
var Aplicacion2 = emergeApiladoEjemplar2(Apilado);
var Aplicacion3 = emergeApiladoEjemplar3(Apilado);

function demo(BE:typeof Apilado.Backend, initText:string){
    var app = new BE(initText)
    app.start();
    app.describe();
}

demo(Aplicacion1.Backend, 'ejemplo1');
demo(Aplicacion2.Backend, 'ejemplo2');
demo(Aplicacion3.Backend, 'ejemplo3');

