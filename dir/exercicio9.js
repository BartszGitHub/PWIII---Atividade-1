"use strict";
exports.__esModule = true;
var exercicio8_1 = require("./exercicio8");
var testepiscina = new exercicio8_1.Piscina();
testepiscina.diametro = 6;
testepiscina.custoConstrucao = 75;
console.log("R$ " + testepiscina.custoTotal().toFixed(2));
