let usuario = prompt("Digite o nome de usuário:");
let senha = prompt("Digite a senha:");

let desejaLogar = confirm("Você deseja fazer login?");

if (desejaLogar) {
    if (usuario === "nomeDeUsuario" && senha === "senhaCorreta") {
        alert("Logado com sucesso!");
    } else {
        alert("Falha ao logar.");
    }
}
