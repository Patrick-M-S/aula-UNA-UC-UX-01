console.log('Olá mundo');

var x = 1;
var y = 2.1;

var dia = "segunda";

console.log('O valor de x é: ' + x);
console.log('O valor de y é: ' + y);
console.log('Hoje o dia é: ' + dia);

var z = x * y;

console.log('O valor de z é: ' + z);

z = x * y + dia;

console.log('O valor de z é: ' + z);

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof dia);

const pessoa = {
    nome : 'PATRICK MENDES SILVA',
    profissao : 'Desenvolvedor',
    idade : 22
}

console.log(`O nome da pessoa é: ${pessoa.nome}, sua profissão é ${pessoa.profissao} e sua idade é ${pessoa.idade}`);

const aviao = {

    companhia: 'Azul',
    tipo: 'Comercial',
    modelo: 'Boeing'
}


function Ola () {
    console.log('Funcao Ola!');
}

() => {
    console.log('Funcao arrow!');
}

concatenarNome('Patrick', 'Mendes');

function concatenarNome (nome, sobrenome) {
    console.log(`O seu nome é ${nome} ${sobrenome}`);
}