function serie(x){
    let s = 0
    for (let i=1; i<=x; i++){
       s = s +1/(i*(i+1))
    }
    return s
}
console.log(serie(3))
