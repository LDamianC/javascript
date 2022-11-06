function fibonacci(n){
let ant, atual, a
ant = 0
atual = 1
    for (let i = 1; i<n; i++){
        a = ant
        ant = atual
        atual = a + atual
    }
    return atual
}
console.log(fibonacci(20))
