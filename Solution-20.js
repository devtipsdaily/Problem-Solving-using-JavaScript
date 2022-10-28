function numberSquares(n){

  if(n<=1){

    return 1;
    
  }else{

    return n**2 + numberSquares(n-1);
  }
}


console.log(numberSquares(2));

console.log(numberSquares(5));
