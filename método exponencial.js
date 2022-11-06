function fatorial(num){
    a = num
    c = num
    for (let i = 1; i < num; i++){
        c = c-1
        a=a*c
    }
    return(a)
}

function exponencial(x, n){
        e= 1;
        for(let i = 1; i <= n; i++){
            e = e + x**i/fatorial(i)
            console.log("Somatória até o", i,"º termo: ", e)
        }
        return e
    }
console.log(exponencial(3 , 30))
