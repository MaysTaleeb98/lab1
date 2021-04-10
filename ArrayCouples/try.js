

function PalindromeCreator(arr) {
    if (isPal(arr)) 
    return 'palindrome'


    for (var i = 0; i < arr.length; i++) {
        const newArr = arr.map((x, i) => i % 2 == 0 && arr.slice(i, i + 2)).filter(x => x);
        let j= i+1
        if (isPal(newArr[i], newArr[j])) 
        return chars.join('')
    }

    for (let i = 0; i < arr.length; i++) {
        let chars = [];
        for (let j = i; j < arr.length; j++) {
            let testArray = arr.split('');
            chars[0] = testArray.splice(i, 1);
            chars[1] = testArray.splice(j, 1);
            let newString = testArray.join('');
            if (isPal(newString)) {
                return chars.join('');
            }
        }
    }
    return 'not possible'
}

/*function isPal(str) {
    return (str == str.split('').reverse().join('')) ? true : false
}*/

function isPal(a, b) {
    for (let i = 0; i < a.length; i++) {
        return (a[i] != b[b.length - 1 - i]) ? no : yes 

    }
}