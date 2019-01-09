import * as ApiladoEjemplar from "./app-example";
import * as Apilado from "apilado";

ApiladoEjemplar.demo(ApiladoEjemplar.emergeApiladoEjemplar1(Apilado).Backend, 'ejemplox 1');
ApiladoEjemplar.demo(ApiladoEjemplar.emergeApiladoEjemplar2(Apilado).Backend, 'ejemplox 2');
ApiladoEjemplar.demo(ApiladoEjemplar.emergeApiladoEjemplar3(Apilado).Backend, 'ejemplox 3');

ApiladoEjemplar.demo(
    ApiladoEjemplar.emergeApiladoEjemplar3(
        ApiladoEjemplar.emergeApiladoEjemplar2(
            ApiladoEjemplar.emergeApiladoEjemplar1(
                Apilado
            )
        )
    ).Backend, 
    'ejemplox 123'
);

var BE = ApiladoEjemplar.emergeApiladoEjemplar2(Apilado).Backend;

var app = new BE('BE 2');
app.describe();
console.log(app.esTres, app.delSegundoCaso);
app.start();