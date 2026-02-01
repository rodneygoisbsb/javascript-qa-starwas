console.log('Eai, mano! Jóia?')

var userName = 'Rodney'

document.getElementById('user-name').innerHTML = userName

//==============================================================

//VARIÁVEIS E TIPOS DE DADOS//

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)   


//==============================================================

//OPERADORES MATEMÁTICOS//

// + somar
// - subtrair
// * multiplicar
// / dividir
// % resto da divisão

// var n1 = 10
// var n2 = 5

// var total = n1 + n2
// console.log(total)

// força a conversão de string para número:
// var n3 = 10
// var n4 = '4'

// var total2 = n3 + parseInt(n4)
// console.log(total2)


//==============================================================

//OPERADORES DE COMPARAÇÃO//

// var v1 = 5
// var v2 = 5

// var resultado = v1 >= v2
// console.log(resultado)

// Igual (==)
// Retorna verdadeiro se os valores comparados forem iguais.
1=='1' //true

// Não igual (!=)
// Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.
4!=1 //true

// Igual estrito (===)
// Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
3==='3' //false
3===3 //true

// Não igual estrito (!==)
// Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
3!=='3' //true
3!==3 //false
3!==4 //true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
1>2 //false
5>3 //true
4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
1>=2 //false
5>=3 //true
4>='1' //true
2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro
1<2 //true
5<3 //false
4<'1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro
1<=2 //true
5<=3 //false
4<='1' //false
2<=2 // true



//==============================================================

//FUNÇÕES//

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma(10, 5)


// function boasVindas(nome) {
//     alert(nome + ', seja bem-vindo(a) ao curso de automação de testes com Javascript!')
// }

// boasVindas('Rodney')


// function soma(n1,n2) {
//     return n1 + n2
// }

// var resultado = soma(5,5)
// console.log(resultado)



//==============================================================

//CONTROLE DE FLUXOS//

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam o cartão de crédito e débito

// var saldo = 1000

// function saque(valor) {

//     if (valor > saldo) {
//     console.log('Valor ao saque superior ao saldo')
//     } else if (valor > 700) {
//         console.log('Valor do saque é superior ao máximo permitido por operação')
//     } else {
//     saldo = saldo - valor
//     }
// }
// saque(701)
// console.log(saldo)

// CENÁRIO 01: Saque com sucesso
// Dado que meu saldo é R$ 1000,00
// Quando eu realizo um saque de R$ 500,00
// Então o valor do saque realizo com sucesso

// CENÁRIO 02: Saque com valor superior ao saldo
// Dado que meu saldo é de R$ R$ 1000,00
// Quando realizo um saque de R$ 1001,00
// Então o saque não deve ser autorizado
// E deve mostrar uma mensagem de alerta informado que o valor é superior ao saldo

// CENÁRIO 03: Saque com valor máximo
// Dado que meu saldo é de R$ 1000,00
// E o valor máximo por operação é de R$ 700,00
// Quando faço um saque no valor de R$ 701,00
// Então o saque não deve ser autorizado
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao permitido por operação



//==============================================================

// ARRAYS //

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'princesa Leia', 'Darth Vader']

// personagens.push('C3PO')
// personagens.push('R2D2')

// personagens.pop()

// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader'
// })

// console.log(personagens)



//==============================================================

// CONTROLES DE REPETIÇÕES (LOOPS) //

//var personagens = ['Mestre Yoda', 'Luke Skywalker', 'princesa Leia', 'Darth Vader']

// "forEach" = mais fácil/simples de usar do que o "for", veja: 

// personagens.forEach(function(p){
//     console.log(p)
// })

// for (var i in personagens){
//     console.log(personagens[i])
// }

// // Aqui é pouco usado por QAs mas muito utilizado por devs (QA que usa assim se destaca):
// for (var i = 0; i <= 10; i++){
//     console.log(i)
//     // código vai ser executado até a condição retornar false
// }



//==============================================================

// OBJETOS  //

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 90,
//     Jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos!`)
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()


//==============================================================

// CONSTANTES //

// perfeita para criar massas de testes

// const nome = 'Darth Vader'
// console.log(nome)

// nome = 'Mestre Yoda'
// console.log(nome)



