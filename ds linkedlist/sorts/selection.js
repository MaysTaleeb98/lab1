
function swap(array, from, to) {
    // ES6 array destructing
    [array[from], array[to]] = [array[to], array[from]];
}



function selectionSort(collection) {
    const array = Array.from(collection); // <1>

    for (let left = 0; left < array.length; left++) { // <2>
        let selection = left; // <3>

        for (let right = left + 1; right < array.length; right++) {
            if (array[selection] > array[right]) { // <4>
                selection = right; // <5>
            }
        }

        if (selection !== left) {
            swap(array, selection, left); // <6>
        }
    }

    return array;
}

let a = [20,12,10,15,2];
let res = selectionSort(a);
console.log(res);