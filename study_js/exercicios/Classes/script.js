/*
  1. Crie a classe ContaBancaria, que possui os
  parâmetros agencia, numero, tipo e saldo.

  2. Dentro de ContaBancaria, construa o getter e o
  setter de saldo.

  3. Dentro de ContaBancaria, crie os métodos sacar
  e depositar.
*/
class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return "Operação negada!"
    }
    this._saldo = this._saldo - valor;

    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;

    return this._saldo;
  }
}

/*
  4. Crie uma classe-filha chamada ContaCorrente que
  herda todos esses parâmetros e ainda possua o
  parâmetro cartaoCredito.

  5. Ainda em ContaCorrente, construa o getter e
  setter do cartaoCredito.

  6. Ainda em ContaCorrente, faça com que o tipo
  seja `conta corrente` por padrão.
*/

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "Conta Corrente";
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

/*
  7. Crie uma classe-filha chamada ContaPoupanca
  que herda todos os parâmetros de ContaBancaria.
*/

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero, saldo);
    this.tipo = "Conta Poupança";
  }
}

/*
  8. Crie uma classe-filha chamada ContaUniversitaria
  que herda todos os parâmetros de ContaBancaria.

  9. Faça com que o método de saque de ContaUniversitaria
  apenas seja capaz de sacar valores menores que 500 reais.
*/

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "Conta Universitária";
  }

  sacar(valor) {
    if (valor > this._saldo || valor < 500) {
      return "Operação negada!"
    }
    this._saldo = this._saldo - valor;

    return this._saldo;
  }
}