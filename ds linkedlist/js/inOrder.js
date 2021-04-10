
'use strict';

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insertNode(val) {
        var node = {
            data: val,
            left: null,
            right: null
        };

        var currentNode;

        if (!this.root) {
            this.root = node;
        } else {
            currentNode = this.root;
            while (currentNode) {
                if (val < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (val > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    console.log('Ignoring this value as the BST supposed to be a tree containing UNIQUE values');
                    break;
                }
            }
        }
    }
}


/*function BinarySearchTree() {
    this.root = null;
} */

BinarySearchTree.prototype.inOrderTraversal = function (root) {

    if (root.left) {
        this.inOrderTraversal(root.left);
    }

    console.log(root.data);

    if (root.right) {
        this.inOrderTraversal(root.right);
    }
};


BinarySearchTree.prototype.preOrderTraversal = function (root) {
    console.log(root.data);

    if (root.left) {
        this.preOrderTraversal(root.left);
    }
    if (root.right) {
        this.preOrderTraversal(root.right);
    }
};


BinarySearchTree.prototype.postOrderTraversal = function (root) {

    if (root.left) {
        this.postOrderTraversal(root.left);
    }
    if (root.right) {
        this.postOrderTraversal(root.right);
    }
    console.log(root.data);

};


var BST = new BinarySearchTree();
BST.insertNode(10);
BST.insertNode(15);
BST.insertNode(5);
BST.insertNode(2);
BST.insertNode(3);
BST.insertNode(12);
BST.insertNode(17);

//BST.inOrderTraversal(BST.root); // 2, 3, 5, 10, 12, 15, 17

//BST.preOrderTraversal(BST.root);//10,5,2,3,15,12,17


BST.postOrderTraversal(BST.root); //3,2,5,12,15,17,10

