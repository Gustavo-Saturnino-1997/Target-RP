function descobrirInterruptores() {
    // Estado inicial dos interruptores (todos desligados)
    let interruptor1 = false;
    let interruptor2 = false;
    let interruptor3 = false;

    // Simulação de lâmpadas: inicialmente todas desligadas e frias
    let lampada1 = { acesa: false, quente: false };
    let lampada2 = { acesa: false, quente: false };
    let lampada3 = { acesa: false, quente: false };

    // Passo 1: Ligar o interruptor 1 e deixar ligado por um tempo (lâmpada aquece)
    interruptor1 = true;
    lampada1.acesa = true;
    lampada1.quente = true; // A lâmpada aquece com o tempo

    console.log("Ligar o interruptor 1 e esperar para a lâmpada 1 aquecer...");

    // Passo 2: Desligar o interruptor 1 e ligar o interruptor 2
    interruptor1 = false;
    lampada1.acesa = false; // A lâmpada 1 foi desligada, mas permanece quente por um tempo

    interruptor2 = true;
    lampada2.acesa = true; // Lâmpada 2 acende imediatamente

    console.log("Desligar o interruptor 1 e ligar o interruptor 2...");

    // Passo 3: Verificar o estado das lâmpadas
    // Lâmpada ligada pertence ao interruptor 2
    if (lampada2.acesa) {
        console.log("A lâmpada 2 está acesa -> Interruptor 2.");
    }

    // Lâmpada desligada, mas quente, pertence ao interruptor 1
    if (!lampada1.acesa && lampada1.quente) {
        console.log("A lâmpada 1 está desligada, mas quente -> Interruptor 1.");
    }

    // Lâmpada desligada e fria pertence ao interruptor 3
    if (!lampada3.acesa && !lampada3.quente) {
        console.log("A lâmpada 3 está desligada e fria -> Interruptor 3.");
    }

    return {
        interruptor1: "Lâmpada 1 (desligada, mas quente -> Interruptor 1)",
        interruptor2: "Lâmpada 2 (acesa -> Interruptor 2)",
        interruptor3: "Lâmpada 3 (desligada e fria -> Interruptor 3)"
    };
}

// Chamando a função para verificar quais interruptores controlam as lâmpadas
const resultado = descobrirInterruptores();
console.log(resultado);



