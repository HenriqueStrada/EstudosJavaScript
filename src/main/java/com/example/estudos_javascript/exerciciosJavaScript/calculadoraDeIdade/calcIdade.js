document.getElementById("calc").onclick = function() {
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
}