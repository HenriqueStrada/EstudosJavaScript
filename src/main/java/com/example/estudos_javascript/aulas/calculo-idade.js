var anoNascimento = prompt("Por favor informe o ano do seu nascimento");

while(anoNascimento >= 2020){
    alert('Por favor informe seu de nascimento corretamente.');
    anoNascimento = prompt("Por favor informe o ano do seu nascimento");
}

var anoAtual = prompt("E qual o ano atual?");

var idadeFinal = anoAtual - anoNascimento;

alert('A idade final é: '+ idadeFinal);
