// Crie uma função que retorna o nome dos membros de um Map
// que tem o papel 'ADMIN' no sistema.

/*
1. Crie uma função getAdmins que recebe um Map.
2. Crie um Map e popule-o com nome de usuários e seus papéis no sistema.
  Ex.: 'Luiz' => 'Admin'
3. Dentro de getAdmins, utilize o loop for...of para retornar uma lista
  com os nomes dos usuários que são Administradores.
*/

function getAdmins(list) {
  let admins = []
  for ([key, value] of list) {
    if (value === 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

const users = new Map()

users.set('Luís', 'Admin')
users.set('Be', 'User')
users.set('Bio', 'User')
users.set('Eu', 'Admin')

console.log(getAdmins(users))
