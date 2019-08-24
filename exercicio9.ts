import {Piscina} from "./exercicio8";

let testepiscina = new Piscina() 
testepiscina.diametro = 6
testepiscina.custoConstrucao = 75

console.log(`R$ ${testepiscina.custoTotal().toFixed(2)}`)