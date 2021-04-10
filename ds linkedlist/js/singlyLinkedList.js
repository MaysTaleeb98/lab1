/* operations of singly linked list 
1-Inserting first node
2- Inserting last node
3- Inserting node at a specified position
4- Retrieving node at a specified position
5- Removing node at a specified position
6- Destroying the linked list
7- Printing all nodes */

class Node {
    constructor(data, next = null) {
        // set next to null by default since there could be only
        // one element in our linked list and/or the tail node, which will always have a null next field.
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert First Node
    insertFirstNode(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    
    //Insert Last Node
    insertLastNode(data) {

        const newNode = new Node(data);

        if (!this.head) { 
 
            this.head = newNode;
        } else {
            let currentNode = this.head;
            //while this.next is true, set the current node to the next node.
            // Once the loop is over, set the next node of the current node to the new node.
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }

        this.size++;
    }

    //Insert Node at a Specified Position

    insertNodeAtIndex(data, index) {

        if (this.size < index) {
            console.log("index is greater than size of list");
            return;
        }

        const node = new Node(data);
        //If there is no head node we simply 
        //set the our node to the head and increase the size of the list.
        if (!this.head) {
            this.head = node;
        } 
        
        //If the given index is 0 we replace the current head in the list with our node.
        else if (index === 0) {
            const head = this.head;
            this.head = node;
            node.next = head;

        } else {
            let previousNode;
            let currentNode = this.head;
            let indexCounter = 0;

            while (indexCounter < index) {
                previousNode = currentNode;
                currentNode = previousNode.next;

                indexCounter++;
            }

            previousNode.next = node;
            node.next = null;

            if (currentNode) {
                node.next = currentNode;
            }
        }

        this.size++;
    }
    
    //Retrieve Node at a Specified Position

    getNodeAtIndex(index) {
        if (index > this.size) {
            console.log("index is greater than size of list");
            return;
        }

        let currentNode = this.head;
        let counter = 0;

        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }

        console.log(`Node data at index(${index}) is ${currentNode.data}`);
    }



    // Remove Node at a Specified Position

    removeNodeAtIndex(index) {
        if (index > this.size) {
            console.log("index is greater than size of list");
            return;
        }

        if (!this.head) {
            console.log("List is empty");
            return;
        }

        if (index === 0) {
            this.head = null;
        } else {
            let previousNode;
            let currentNode = this.head;
            let counter = 0;

            while (counter < index) {
                previousNode = currentNode;
                currentNode = previousNode.next;

                counter++;
            }

            if (currentNode.next) {
                previousNode.next = currentNode.next;
            } else {
                previousNode.next = null;
            }
        }

        this.size--;

        console.log(
            `Removed node at index(${index}) and current linked list is: })`
        );
    }

     // clear linked list 
    clear() {
        //for each of the nodes, remove at index

        let index = 0;

        while (index < this.size) {
            console.log(`removing at index: ${index}`);
            this.removeNodeAtIndex(index);
            this.size--;
            index++;
        }
    }

    // print all nodes
    printListData() {
        let currentNode = this.head;

        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }


}


const linkedList = new LinkedList();
linkedList.insertFirstNode(5);
linkedList.insertFirstNode(8);
linkedList.insertLastNode(2);
linkedList.insertFirstNode(90);
linkedList.insertNodeAtIndex(34, 1);
linkedList.insertNodeAtIndex(57, 4);

linkedList.printListData();

linkedList.getNodeAtIndex(4); //Node data at index(4) is 57
linkedList.removeNodeAtIndex(2); //Removed node at index(2) and current linked list is: })
linkedList.printListData();

linkedList.clear();

linkedList.printListData();
