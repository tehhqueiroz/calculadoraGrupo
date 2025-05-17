class Soma {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    somar() {
        return this.a + this.b;
    }
}

function realizarSoma(a, b) {
    const calc = new Soma(a, b);
    const somando = calc.somar();
    console.log(`A soma = ${somando} \n`);
    return somando; 
}

module.exports = { Soma, realizarSoma };