/*Operadores aritiméticos do JS e ordem de predecencia
+ soma
- subtracao
* multiplicação
/ divisao real
% divisao inteira
** potenciação
*/

var a = 5 + 3       //8
b = a % 5           //resto 3
c = 5 * b ** 2      //potencia 1 == 9*5= 45
d = 10 - a / 2      // 8/2 => -10 = 6
e = 6 * 2 / d       //12/6 = 2
f = b % e + 4 / e   //1 + 2=3

console.log(a, b, c, d, e, f)

// variavel auto-atribuida

n = 3
n = n + 1

console.log(n)

//incremento
console.log('Incremento de variaveis')
var y = 1
console.log(y)
y = + 1
console.log(y)

var x = 1
console.log(`O valor de x ${x}`)
x++
console.log(`O valor de x ${x}`)
x--
console.log(`O valor de x ${x}`)