let x: number = 12

let sobra = function(x1:number): boolean {
    if (x1 % 2 == 0){
        return true
    }
    else{
        return false
    }

}

if (sobra(x)) {
    console.log("Par")
}
else
    console.log("Ímpar")

