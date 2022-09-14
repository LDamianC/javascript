//programa que recebe as dimensoes de um terreno e uma casa retangulares e escreve a area livre disponível.
let t1, t2, c1, c2, arealivre, pArea
t1 = parseInt(prompt("Altura do terrreno:"))
t2 = parseInt(prompt("Largura do terrreno:"))
c1 = parseInt(prompt("Altura da casa:"))
c2 = parseInt(prompt("Largura da casa:"))
arealivre = t1*t2 - c1*c2
pArea = (100*arealivre)/(t1*t2)
console.log("Area livre: ", arealivre,"m² (", pArea,"%)")
