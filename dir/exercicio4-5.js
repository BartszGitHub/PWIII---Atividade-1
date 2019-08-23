var x = 12;
var sobra = function (x1) {
    if (x1 % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
};
if (sobra(x)) {
    console.log("Par");
}
else
    console.log("Ímpar");
