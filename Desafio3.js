let valor1, valor2, valor3, aux, maior
valor1 = parseInt(prompt("Digite 3 valores inteiros diferentes:"))
valor2 =  parseInt(prompt("Digite 3 valores inteiros diferentes:"))
valor3 =  parseInt(prompt("Digite 3 valores inteiros diferentes:"))
console.log(valor1, valor2, valor3)
aux = (valor1 + valor2 + Math.abs(valor1-valor2))/2
maior = (aux+valor3+ (Math.abs(aux-valor3)))/2
console.log("O maior valor é", maior)