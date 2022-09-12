let quantia, n100, n50, n20, n10, n5
quantia=parseInt(prompt("Digite uma quantia de dinheiro para ser trocada e notas de 100, 50, 20, 10 e 5."))
console.log(quantia)
n100 = Math.floor(quantia/100)
quantia = quantia%100
n50 = Math.floor(quantia/50)
quantia = quantia%50
n20 = Math.floor(quantia/20)
quantia = quantia%20
n10 = Math.floor(quantia/10)
quantia = quantia%10
n5 = Math.floor(quantia/5)
quantia = quantia%5
if (quantia > 0){
  console.log("Esse valor não pode ser trocado.")
} else {
  console.log(n100," notas de 100, ", n50," notas de 50, ",n20," notas de 20, ", n10," notas de 10 e ", n5," notas de 5." )
}
