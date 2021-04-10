/**
 * Sorting by insertion - Look for bigger numbers on the left side
 *
 * It starts from the 2nd element,
 * and it tries to find any element (to the left)
 * that could be bigger than the current index.
 * It will move all the elements that are bigger
 * and insert the current element where it belongs.
 * **/

function swap(array, from, to) {
    // ES6 array destructing
    [array[from], array[to]] = [array[to], array[from]];
}

function insertionSort(collection) {
    /*const array = Array.from(collection); // <1>

    for (let right = 1; right < array.length; right++) { // <2>
        for (let left = right; array[left - 1] > array[left]; left--) { // <3>
            swap(array, left - 1, left); // <4>
        }
    }
    return array; */

    const size = collection.length;
    for (let step = 1; step < size; step++) {
        let key = collection[step];
        let j = step - 1;

        // Compare key with each element on the left of it until an element smaller than
        // it is found.
        // For descending order, change key<array[j] to key>array[j].
        while (j >= 0 && key < collection[j]) {
            collection[j + 1] = collection[j];
            --j;
        }

        // Place key at after the element just smaller than it.
        collection[j + 1] = key;
    }

}

let a = [20, -12, 10, 15, -2];
let res = insertionSort(a);
console.log(res);
