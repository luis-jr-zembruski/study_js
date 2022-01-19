// Dada a função calculaIdade, utilize os métodos
// call e apply para modificar o valor de this.
// Crie seus próprios objetos para esta atividade.

function caclulaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

const pessoa = {
  nome: 'Maria',
  idade: 30
}

console.log(caclulaIdade.call(pessoa, 9))
console.log(caclulaIdade.apply(pessoa, [9]))
