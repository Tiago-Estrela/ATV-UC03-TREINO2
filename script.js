function tabuada() {
    let usuario, multiplicador, mensagem = "";

    usuario = parseInt(prompt("Digite o número da tabuada que deseja visualizar:"));

    for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
        mensagem += `${usuario} x ${multiplicador} = ${usuario * multiplicador}\n`;
    }

    alert(mensagem);
}

function contagem() {

    let n1, n2, resultado;

    n1 = parseInt(prompt("Digite o primeiro número para iniciarmos a contagem"));
    n2 = parseInt(prompt("Digite o segundo número para finalizarmos a contagem"));

    if (n1 < n2) {
        resultado = n1 + " - Ínicio\n";
        while (n1 < n2) {
            n1++;
            if (n1 === n2) {
                resultado += n1 + "- FIM\n";
            } else {
                resultado += n1 + "\n";
            }
        }
        alert(resultado);
    } else {
        alert("O primeiro número DEVE ser maior que o segundo... \n TENTE NOVAMENTE!");
    }
}