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
  try {
    if (!arr && !num) throw new ReferenceError('Invalid arguments')
    if (typeof arr !== 'object') throw new TypeError('Tipo invalido')
    if (typeof num !== 'number') throw new TypeError('Tipo invalido')
    if (arr.length !== num) throw new RangeError('Tamanho inválido')

    return arr
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log('Este erro é um ReferenceError!')
      console.error(error.message)
    } else if (error instanceof TypeError) {
      console.log('Este erro é um TypeError!')
      console.error(error.message)
    } else if (error instanceof RangeError) {
      console.log('Este erro é um RangeError!')
      console.error(error.message)
    } else {
      console.error('Tipo de erro não esperado:' + error)
    }
  }
}

console.log(validErrors([5, 3, 5], 3))
