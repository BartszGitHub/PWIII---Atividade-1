export class Piscina {
    diametro:number
    custoConstrucao:number

    raio(){
        return this.diametro / 2
    }
    area(){
        return 3.14159265359 * (this.raio() * this.raio())
    }

    custoTotal(){
        return this.custoConstrucao * this.area()
    }


}

