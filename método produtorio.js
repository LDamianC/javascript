function produtorio(a, b, c){
  let p = 1
  for(let i=0; i<=c; i++){
    p = p*(a+i+b+i)
    //console.log("a:",a+i,"b:",b+i)
    //console.log("prod:", p)
  }
  return p
}  
  produtorio(1,1,10)
