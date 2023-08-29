window.alert("Bem-Vindo a calculadora JavaScript. Por favor digite qual operação deseja fazer.");


pegaValores = function(){
    var valorUm = prompt("Digite o primeiro valor: ");
    var valorDois = prompt("Digite o segundo valor: ");
    return [valorUm, valorDois];
}
refazer = true;
while(refazer == true){
    var conta = prompt("(1) Soma. (2) Subtração. (3) Multiplicação. (4) Divisão");
    if(conta == 1){
        var valores = pegaValores();
        var resultado = parseFloat(valores[0]) + parseFloat(valores[1]);
        window.alert("O resultado da soma é: " + resultado);
        console.log("O resultado da soma é: " + resultado);
    } else if (conta == 2){
        var valores = pegaValores();
        var resultado = parseFloat(valores[0] - parseFloat(valores[1]));
        window.alert("O resultado da subtração é: " + resultado);
        console.log("O resultado da subtração é: " + resultado);
    } else if (conta == 3){
        var valores = pegaValores();
        var resultado = parseFloat(valores[0]) * parseFloat(valores[1]);
        window.alert("O resultado da multiplicação é: " + resultado);
        console.log("O resultado da multiplicação é: " + resultado);
    } else if (conta == 4){
        var valores = pegaValores();
        var resultado = parseFloat(valores[0]) / parseFloat(valores[1]);
        window.alert("O resultado da divisão é: " + resultado);
        console.log("O resultado da divisão é: " + resultado);
    } else{
        window.alert("Por favor digite um valor valido!")
        refazer = true;
    }
    var refazer = prompt("Você deseja refazer as contas? (1) Sim, (2) Não");
    if(refazer == 1){
        refazer = true;
    }else{
        window.alert("obrigado por testar minha calculadora!");
        refazer = false;
    }
}