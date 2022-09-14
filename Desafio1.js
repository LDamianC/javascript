//programa que recebe um tempo em segundos e o converte em horas, minutos e segundos
let t, m, s, h
t = prompt("Digite um tempo em segundos")
console.log(t)
m = Math.floor(t/60)
s = t % 60
h = Math.floor(m/60)
m = m % 60
console.log(t, " segundos são iguais a ", h," horas, ", m," minutos e ", s, " segundos")
