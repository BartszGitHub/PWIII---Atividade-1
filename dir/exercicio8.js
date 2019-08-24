"use strict";
exports.__esModule = true;
var Piscina = /** @class */ (function () {
    function Piscina() {
    }
    Piscina.prototype.raio = function () {
        return this.diametro / 2;
    };
    Piscina.prototype.area = function () {
        return 3.14159265359 * (this.raio() * this.raio());
    };
    Piscina.prototype.custoTotal = function () {
        return this.custoConstrucao * this.area();
    };
    return Piscina;
}());
exports.Piscina = Piscina;
