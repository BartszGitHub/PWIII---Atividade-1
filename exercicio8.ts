class Piscina {
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

let testepiscina = new Piscina() 
testepiscina.diametro = 6
testepiscina.custoConstrucao = 75

console.log(`R$ ${testepiscina.custoTotal().toFixed(2)}`)

