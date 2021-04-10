

function swap(array, from, to) {
  // ES6 array destructing
  [array[from], array[to]] = [array[to], array[from]];
}


function bubbleSort(collection) {
    const array = Array.from(collection); 

    for (let i = 1; i < array.length; i++) { 
        let swapped = false;

        for (let current = 0; current < array.length - i; current++) { 
            if (array[current] > array[current + 1]) { 
                swap(array, current, current + 1); 
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return array;
}

let  a = [1,6,4,10,3];
let res = bubbleSort(a);
console.log(res);