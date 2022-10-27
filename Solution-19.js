function getMin(arr){

  let min = arr[0];

  for(let i=1;i<arr.length;i++){

    if(min>arr[i]){

      min = arr[i];
      
    }
  }

  return min;
}

function getMax(arr){

  let max = arr[0];

  for(let i=1;i<arr.length;i++){

    if(max<arr[i]){

      max = arr[i];
      
    }
  }

  return max;
}



function checkNest(arr1, arr2) {
  
	return getMin(arr1) > getMin(arr2) && getMax(arr1) < getMax(arr2);
  
}


console.log(checkNest([1, 2, 3, 4], [0, 6]))

console.log(checkNest([9, 9, 8], [8, 9])) 
