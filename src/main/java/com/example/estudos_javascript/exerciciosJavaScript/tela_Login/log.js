let usuario = prompt("Digite o nome de usuário:");
let senha = prompt("Digite a senha:");



let valorName = prompt("Digite o nome de usuario");
let valorSenha = prompt("Digite a senha:");

let desejaLogar = confirm("Você deseja fazer login?");
if (desejaLogar) {
    if (usuario === valorName && senha === valorSenha) {
        alert("Logado com sucesso!");
    } else {
        alert("Falha ao logar.");
    }
}
