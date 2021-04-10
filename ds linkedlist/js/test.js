
function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}


BinarySearchTree.prototype.ckeckHeight  = function ( node) {
    if (node === null) return 0;

    const left = ckeckHeight(node.left);
    const right = ckeckHeight(node.right);

    if (
        // if a previous call has returned false,
        // we need to pass false all the way up
        left === false ||
        right === false ||
        Math.abs(left - right) > 1
    ) {
        return false;
    }

    // height of a node
    return Math.max(left, right) + 1;
};

BinarySearchTree.prototype.isBalanced = root => {
    if (root === null) return true;

    return ckeckHeight(root) !== false;
};

let a = [1,2,3,35,1];
console.log(isBalanced(a));