document.getElementById("calcIdade").onclick = function() {
    var nome = prompt("Qual o seu nome?");
    var dia = parseInt(prompt("Qual dia você nasceu?"));
    var mes = parseInt(prompt("Qual mês você nasceu?"));
    var ano = parseInt(prompt("Qual ano você nasceu?"));
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var mesAtual = dataAtual.getMonth() + 1;
    var diaAtual = dataAtual.getDate();
    var anos = anoAtual - ano;
    var meses = mesAtual - mes;
    var dias = diaAtual - dia;
    if (meses < 0 || (meses == 0 && dias < 0)) {
        anos--;
        meses += 12;
    }

    if (dias < 0) {
        meses--;
        dias += new Date(anoAtual, mesAtual - 1, 0).getDate();
    }
    alert(nome + ", sua idade é " + anos + " anos, " + meses + " meses e " + dias + " dias.");
    alert("Daqui 30 anos, você tera: " + (anos + 30) + " anos, e em dias tera: " + (anos + 30 * 365) + " dias de vida.");

    if(anos >= 16){
        alert(nome + ", na sua idade atual, você está apto para votar!")
    }else{
        alert(nome + ", na sua idade atual, você não está apto para votar!")
    }

    meses = meses + 40;
    if (meses >= 12) {
        anos += Math.floor(meses / 12);
        meses = meses % 12;
    }
    if (anos >= 18) {
        alert(nome + ", daqui 40 meses você será maior de idade.");
        alert(nome + ", sua idade será de " + anos + " anos, " + meses + " meses e " + dias + " dias.");
    } else {
        alert(nome + ", daqui 40 meses você ainda não será maior de idade.");
        alert(nome + ", sua idade será de " + anos + " anos, " + meses + " meses e " + dias + " dias.");
    }
}
document.getElementById("calcIMC").onclick = function() {
    var nome = prompt("Qual o seu nome?");
    var peso = prompt("Qual o seu peso? (em quilogramas)");
    var altura = prompt("Qual sua altura? (em metros. Ex: 1.72 '1 metro e 72 centimetros'");
    altura = parseFloat(altura);
    const imc = peso / (altura * altura);

    if(imc >= 30){
        alert(nome+ ", você está acima do peso, com imc igual a: " + imc);
    }else{
        alert(nome+", você está em um peso normal, com imc igual a: " + imc)
    }
}
document.getElementById("calcAposent").onclick = function() {
    function aposentadoria(){
        if(sexo == 1){
            var apos = parseInt(anosCont) + parseInt(idade);
            if (apos >= 95){
                alert(`Parabéns ${nome}! Você está apto para ter sua aposentadoria!`)
            }else{
                alert(`Infelizmente ${nome}, ainda não está apto para sua aposentadoria!`)
            }
        } else if(sexo == 2){
            var apos = parseInt(anosCont) + parseInt(idade);
            if (apos >= 85){
                alert(`Parabéns ${nome}! Você está apta para ter sua aposentadoria!`)
            }else{
                alert(`Infelizmente ${nome}, ainda não está apta para sua aposentadoria.`)
            }
        }else{
            alert("Digite um sexo válido por favor.")
        }
    }

    var nome = prompt("Qual o seu nome?");
    var sexo = prompt("Qual o seu sexo? (1) homem - (2) mulher");
    var idade = prompt("Qual a sua idade.");
    var anosCont = prompt("Quantos anos de trabalho você possui?");

    if(anosCont < 35){
        alert("Você não possui o tempo minimo de trabalho para a aposentadoria.");
        alert("Tempo minimo 35. Seu tempo: " + anosCont);
    } else if (anosCont >= 35){
        aposentadoria();
    }

}