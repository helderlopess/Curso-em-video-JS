/*Operadores 

< menor
> maior
= = igual
! = diferente
*/

preco = 200.20
idade = 18
curso = 'Javascript'
n1 = 2
n2 = 4

preco >= 200.50
console.log(preco >= 200.50)
idade < 18
curso == 'Javascript'
n1 != n2

console.log(preco, idade, curso, n1, n2)

//Identidade

console.log(5 == 5) //igual
console.log(5 == '5') // igualdade grandesa mesmo sem ser do mesmo tipo
console.log(5 === '5') // identico, grandeza e tipo
console.log(5 === 5)

//Logicos

/*
! negacao >> UNAARIO
&& conjuncao (E) >> tem qu ser 2 true
|| disjuncao (OU)>> pelo menos 1 true
 */

//a ordem das relações sera: aritimeticos, relacionais e logicos
var a = 5
var b = 8

console.log(a > b && b % 2 == 0)

