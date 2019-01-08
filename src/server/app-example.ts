import * as Apilado from "apilado";
export * from "apilado";

/*
var T = emergeAppExample(Apilado);
export typeof T.AppApilado;
*/

export function emergeAppExample<T extends typeof Apilado>(Base:T){
    class AppApilado2 extends Base.AppApilado{
        constructor(...args:any[]){ 
            super(args);
            this.usuariosTD.field.rol={typeName:'text'};
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
    }    
    return {...Base, AppApilado: AppApilado2};
}

var Aplicacion = emergeAppExample(Apilado);

var app = new Aplicacion.AppApilado('exe');
app.start();
app.describe();



