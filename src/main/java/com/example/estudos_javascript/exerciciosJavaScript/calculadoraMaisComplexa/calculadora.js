window.alert("Bem-Vindo a calculadora JavaScript. Por favor digite qual operação deseja fazer.");

// Função para obter os valores do usuário
function pegaValores() {
    var valorUm = prompt("Digite o primeiro valor: ");
    var valorDois = prompt("Digite o segundo valor: ");
    return [valorUm, valorDois];
  }
  
  // Adiciona um evento de clique a cada botão
  var buttons = document.querySelectorAll("button");
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Obtém o valor do botão clicado
      var operation = this.value;
  
      // Executa a operação matemática correspondente
      var valores = pegaValores();
      var resultado;
      switch (operation) {
        case "1":
          resultado = parseFloat(valores[0]) + parseFloat(valores[1]);
          break;
        case "2":
          resultado = parseFloat(valores[0]) - parseFloat(valores[1]);
          break;
        case "3":
          resultado = parseFloat(valores[0]) * parseFloat(valores[1]);
          break;
        case "4":
          resultado = parseFloat(valores[0]) / parseFloat(valores[1]);
          break;
      }
  
      // Exibe o resultado
      window.alert("O resultado é: " + resultado);
    });
  });  