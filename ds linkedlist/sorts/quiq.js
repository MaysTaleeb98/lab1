
function swap(array, from, to) {
    // ES6 array destructing
    [array[from], array[to]] = [array[to], array[from]];
}

 // Shuffle items in an array in -place

function shuffle(array) {
    const { length } = array;
    for (let index = 0; index < length; index++) {
        const newIndex = Math.floor(Math.random() * length);
        swap(array, index, newIndex);
    }
    return array;
}

function partition(array, low, high) {
    const pivotIndex = low; // <1>
    let pivotFinalIndex = pivotIndex; // <2>

    for (let current = pivotIndex + 1; current <= high; current++) {
        if (array[current] < array[pivotIndex]) { // <3>
            pivotFinalIndex += 1; // <4>
            swap(array, current, pivotFinalIndex); // <5>
        }
    }

    swap(array, pivotIndex, pivotFinalIndex); // <6>
    return pivotFinalIndex;
}

function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) { // <4>
        const partitionIndex = partition(array, low, high); // <1>
        quickSort(array, low, partitionIndex - 1); // <2>
        quickSort(array, partitionIndex + 1, high); // <3>
    }
    return array;
}

function quickSortWrapper(collection) {
    const array = Array.from(collection); // <1>
    shuffle(array); // <2>
    return quickSort(array);
}


let a = [20, -12, 10, 15, 2];
let res = quickSortWrapper(a);
console.log(res);