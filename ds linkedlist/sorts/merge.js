/**
 * Merge two arrays in ascending order
 * example: merge([2,5,9], [1,6,7]) => [1, 2, 5, 6, 7, 9]
 
 */
function merge(array1, array2 = []) {
    const mergedLength = array1.length + array2.length;
    const mergedArray = Array(mergedLength);

    // merge elements on a and b in asc order. Run-time O(a + b)
    for (let index = 0, i1 = 0, i2 = 0;
        index < mergedLength; index++) { // <1>
        if (i2 >= array2.length
            || (i1 < array1.length && array1[i1] <= array2[i2])) {
            mergedArray[index] = array1[i1]; // <2>
            i1 += 1;
        } else {
            mergedArray[index] = array2[i2]; // <2>
            i2 += 1;
        }
    }

    return mergedArray; // <3>
}

/**
 * Split array in half recursively until two or less elements are left.
 * Sort these two elements and combine them back using the merge function.
 * examples:
 *    splitSort([3, 2, 1]) => [1, 2, 3]
 *    splitSort([3]) => [3]
 *    splitSort([3, 2]) => [2, 3]
 */
function splitSort(array) {
    const size = array.length;
    // base case
    if (size < 2) {
        return array;
    } if (size === 2) {
        return array[0] < array[1] ? array : [array[1], array[0]]; // <1>
    }

    // recursive split in half and merge back
    const half = Math.ceil(size / 2);
    return merge( // <3>
        splitSort(array.slice(0, half)), // <2>
        splitSort(array.slice(half)), // <2>
    );
}

function mergeSort(collection) {
    const array = Array.from(collection); // <1>
    return splitSort(array);
}

let a = [20, -12, 10, 15, -2,100];
let res = mergeSort(a);
console.log(res);