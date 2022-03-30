console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagem = true;

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);


//tirar elemento da lista
// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// }
// else if (estaAcompanhada == true) {
//         console.log("Comprador está acompanhado");
//         listaDeDestinos.splice(1, 1);
//     } else {
//         console.log("Comprador menor de idade e não esta acompanhado, não pode comprar");
//     }

if (idadeComprador >= 18 ||estaAcompanhada == true) {
    console.log("Boa Viagem");
    listaDeDestinos.splice(2, 1);
    }
else {
    console.log("Comprador menor de idade e não esta acompanhado, não pode comprar");
    }

    console.log("Embarque: \n\n")
    if(idadeComprador >=18 && temPassagem){
        console.log("Boa Viagem");
    } else{
        console.log("Você não pode embarcar");
    }

console.log(listaDeDestinos);


// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);


