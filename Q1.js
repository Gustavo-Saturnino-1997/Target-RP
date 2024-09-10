function eOunaoFibonacci(numero) {
    const estaNaseq = "faz parte da sequência de Fibonacci";
    let x = 0, y = 1;

    if (numero === 0 || numero === 1) {
        return `O número ${numero} ${estaNaseq}`;
    }

    for (let proximoNumerodaSequencia = 0; y < numero; proximoNumerodaSequencia = x + y) {
        x = y;
        y = proximoNumerodaSequencia;
    }

    const fazOunaoPartedaSequencia = (y === numero ? `O número ${numero} ${estaNaseq}` : `O número ${numero} não faz parte da sequência de Fibonacci`);
    return fazOunaoPartedaSequencia;
}

console.log(eOunaoFibonacci(13));
console.log(eOunaoFibonacci(10));



