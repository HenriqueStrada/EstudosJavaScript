function Pessoa(){
    this.nome = "Guilherme";
    this.idade = 27;
    this.printNome = function(numero){
        alert(numero);
    };
    this.returnAnimal = function(animal){
        return animal;
    }
}

function Animal(){
    this.nome = "cachorro";
    this.raca = "Bulldog";
}


var pessoa = new Pessoa();

var animal = new Animal();

animal.raca = "Maltes";

alert(pessoa.returnAnimal(animal).raca);