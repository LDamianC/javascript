function somatorio(a, b, c){
  let s = 0
  for(let i=0; i<=c; i++){
    s= s+(a+i)*(b+i)
    console.log("a:", a+i, "b:", b+i)
    console.log("somatorio a X b:", s)
  }
  return s
}

somatorio(3, 1, 6)
  
