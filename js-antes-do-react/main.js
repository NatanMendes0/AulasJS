//importar funções do arquivo lib
//import { soma, subtracao } from './lib/math';
//ou
//import * as math from './lib/math';

// document.body.innerText = soma(1, 2);
// document.body.innerText = subtracao(2, 1);

// nullish coalescing operator - operador para lidar com valores nulos

// const idade = 0;

// 0, '', false, null, undefined, NaN = falsy

// document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informada');

// objetos

// const pessoa = {
//   nome: 'João',
//   sobrenome: 'da Silva',
//   idade: 25,
//   endereco: {
//     rua: 'Av Brasil',
//     numero: 320
//   }
// };

// desestruturação de objetos

// const { endereco, idade: age, nome = 'Fernandes'} = pessoa

// document.body.innerText = JSON.stringify({ endereco, age, nome});

//rest operator - buscar o restante das propriedades

// const { endereco, idade, ...resto } = pessoa

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// const [first, ,third, ...resto] = array

// document.body.innerText = JSON.stringify({ first, third, resto});

//short syntax

// const nome = 'Diogo';
// const idade = 25;

// const pessoa = {
//   nome,
//   idade,
// }

// document.body.innerText = JSON.stringify(pessoa);

//optional chaining - operador de encadeamento opcional

// const pessoa = {
//   nome: 'João',
//   sobrenome: 'da Silva',
//   idade: 25,
//   endereco: {
//     rua: 'Av Brasil',
//     numero: 320,
//     cep: {
//       numero: 12345678,
//       cidade: 'São Paulo',
//     },
//     mostrarCidade() {
//       return 'cidade legal'
//     },
//   },
// };

// const key = 'cep';

// document.body.innerText = pessoa.endereco?.mostrarCidade?.();

// document.body.innerText = pessoa.endereco[key]?.numero;

//metodos de array

// const array = [1, 2, 3, 4, 5, "Diogo"];

//map, filter, every, some, find, findIndex, reduce

// filter e map - retornam um novo array

// const novoArray = array
//   .filter(item => item % 2 === 0)
//   .map(item => item * 2)

// document.body.innerText = JSON.stringify(novoArray);

//every - retorna true se todos os itens do array forem true

// const todosItensSaoNumeros = array.every(item => typeof item === 'number');

// document.body.innerText = todosItensSaoNumeros;

//some - retorna true se pelo menos um item do array for true

// const peloMenosUmItemNaoEUmNumero = array.some(
//   (item) => typeof item !== "number"
// );

// document.body.innerText = peloMenosUmItemNaoEUmNumero;

//findIndex - retorna o indice do item

// const par = array.findIndex(item => item % 2 === 0);

// document.body.innerText = par;

//reduce - acumulador

// const soma = array.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// document.body.innerText = soma;

//template literals - template strings

// const name = "Bruno";
// const message = `Olá ${name}, tudo bem?`;

// document.body.innerText = message;

//promisses - funções assincronas

// const somaDoisNumeros = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };

// somaDoisNumeros(2, 2)
//   .then((resultado) => {
//     document.body.innerText = resultado;
//   })
//   .catch((error) => {
//     document.body.innerText = error;
//   });

//outro exemplo de promisse

// fetch('https://api.github.com/users/diego3g')
//   .then(response => {
//     return response.json();
//   })
//   .then(body => {
//     console.log(body)
//   }).catch(error => {
//     console.log(error)
//   })
//   .finally(() => {
//     console.log('Finalizado')
//   })

//outro exemplo de promisse

//toda função com async retorna uma promisse!

// async function buscaDadosNoGithub(){
//   try {
//     const response = await fetch('https://api.github.com/users/diego3g');
//     const body = await response.json();


//     return body.name
//   } catch (error) {
//     console.log(error)
//   } finally {
//     console.log('Finalizado')
//   }
// }

// buscaDadosNoGithub().then(name => {
//   console.log(name)
// })