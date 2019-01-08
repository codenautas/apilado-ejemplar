import * as Apilado from "apilado";
export * from "apilado";

import {Constructor} from "apilado";

export function emergeBeEjemplar<T extends Constructor<Apilado.Backend>>(Base:T){
    return class Backend extends Base{
        constructor(...args:any[]){ 
            super(args);
            // this.usuariosTD.field.rol={typeName:'text'};
        }
        /*
        rolesTD:TableDefinition={
            field:{
                rol:{typeName:'text'},
            },
            primaryKey:['rol']
        }
        */
        get esTres(){ return 'sí, es 3!'}
    };
}
