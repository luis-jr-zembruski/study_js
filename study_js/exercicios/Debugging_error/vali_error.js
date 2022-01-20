/* Função que receba um array e retorne ele caso o seu tamanho
  corresponda ao número enviado como parâmetro na função.
  Caso contrário, um erro será lançado.

  1. Crie uma função que receba um array e um número.
  2. Realize as seguintes validações:
    a. Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
    b. Se o array não for do tipo 'object', lance um erro do tipo TypeError
    c. Se o número não for do tipo 'number', lance um erro do tipo TypeError
    d. Se o tamaho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
  3. Utilize a declaração try...catch
  4. Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

*/

function validErrors(arr, num) {
  if (!arr && !num) return new ReferenceError('Invalid arguments')
  if (typeof arr !== 'object') return TypeError('Tipo invalido')
  if (typeof num !== 'number') return TypeError('Tipo invalido')
  if (arr.length !== num) return new RangeError('Tamanho inválido')
}

console.log(validErrors([5, 3, 5], 3))
