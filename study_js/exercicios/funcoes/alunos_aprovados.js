// Criar uma função que recebe o array alunos e um
// número que irá representar a média final.

// Percorrer o array e popular um novo array auxiliar
// apenas com os alunos cujas notas são maiores ou
// igual à média final.

// Utilize a técnica "object destruturing" para
// manipular as propriedades desejadas de cada aluno.
const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'Sofia',
    nota: 9,
    turma: '1B'
  },
  {
    nome: 'Paulo',
    nota: 6,
    turma: '2C'
  }
]

function alunosAprovados(alunos, mediaFinal) {
  let aprovados = []
  for (aluno of alunos) {
    const { nota, nome } = aluno
    if (nota >= mediaFinal) {
      aprovados.push(nome)
    }
  }
  return aprovados
}

console.log(alunosAprovados(alunos, 2))
