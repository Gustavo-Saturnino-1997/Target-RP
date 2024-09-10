function proximoNumeroSequenciaA() {
    const sequencia = [1, 3, 5, 7];
    const incremento = 2;
    const proximoNumero = sequencia[sequencia.length - 1] + incremento;
    return proximoNumero;
}

console.log(proximoNumeroSequenciaA());

function proximoNumeroSequenciaB() {
    const sequencia = [2, 4, 8, 16, 32, 64];
    const multiplicador = 2;
    const proximoNumero = sequencia[sequencia.length - 1] * multiplicador;
    return proximoNumero;
}

console.log(proximoNumeroSequenciaB());

function proximoNumeroSequenciaC() {
    const sequencia = [0, 1, 4, 9, 16, 25, 36];
    const proximoIndice = sequencia.length;
    const proximoNumero = proximoIndice * proximoIndice;
    return proximoNumero;
}

console.log(proximoNumeroSequenciaC());

function proximoNumeroSequenciaD() {
    const sequencia = [4, 16, 36, 64];
    const proximoIndicePar = (sequencia.length + 1) * 2;
    const proximoNumero = proximoIndicePar * proximoIndicePar;
    return proximoNumero;
}

console.log(proximoNumeroSequenciaD());


function proximoNumeroSequenciaE() {
    const sequencia = [1, 1, 2, 3, 5, 8];
    const proximoNumero = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    return proximoNumero;
}

console.log(proximoNumeroSequenciaE());


function proximoNumeroSequenciaF() {
    const sequencia = [2, 10, 12, 16, 17, 18, 19];
    const proximoNumero = sequencia[sequencia.length - 1] + 1;
    return proximoNumero;
}

console.log(proximoNumeroSequenciaF());








