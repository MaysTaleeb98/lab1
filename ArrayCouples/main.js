
let isReserved = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    return (a[i] != b[b.length - 1 - i]) ? "No" : "Yes"

  }
}


function ArrayCouples(arr) {

const newArr =  arr.map((x, i) => i % 2== 0 && arr.slice(i, i + 2)).filter(x => x);
 
//const test = newArr.reduce(isReserved);
  const test = newArr.reduce(isReserved);
console.log(test);

  /*for (let i = 0; i < newArr.length; i++) {
  let j=i+1;
 const test = newArr.reduce((newArr[i],newArr[j] ){

     
   });

  
 } 
 
*/


/* for (let i = 0; i < newArr.length; i++){

  if (isReserved(newArr[i], newArr[i+1]  )){
      console.log("yess");
      console.log(newArr[1].length);
     

    }
    else{
      console.log("noo");
      console.log(newArr);
      //ArrayCouples(arr)

    }
  
}*/

 //console.log(newArr);
 /*  let size = newArr.length;
  let i = 0, j = 1;     // Initialize positions of two elements 
  // Search for a pair 
  while (i < size && j < size) {
    if (isReserved(newArr[i], newArr[j]) ) {
      console.log("yes");

     return true;
    }
    else if (!(isReserved(newArr[i], newArr[j])))
      j++;
    else
      i++;
  }

  console.log("No");

  return false; 
}
*/
}






console.log(ArrayCouples([1,2,2,1])); //yes
console.log(ArrayCouples([2, 3, 3, 1])); //no
console.log(ArrayCouples([5, 4, 4, 5,7,6,6,7])); //yes error
console.log(ArrayCouples([5, 4, 4, 5])); //yes eerrroe






