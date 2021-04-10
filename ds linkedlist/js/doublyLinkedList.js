
class Node {

    constructor(data) {
        this.data = data; // data
        this.prev = null; // reference to the prev node
        this.next = null; // . reference to next node
    }

}


class DoublyLinkedList {

    constructor() {
        this.head = null; //first element in list
        this.tail = null; //last element in list
        this.length = null;
    }

    //to add the new node at the end of the Linked list.
    push(data) {

        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;

        }

        this.length++;
    }

    //to remove the last node from the list.
    pop() {

        if (!this.head) return null

        // tail is the last node so that we take the
        // prev property from the tail
        const prevNode = this.tail.prev

        if (prevNode) {
            prevNode.next = null;
            this.tail = prevNode; // updating the tail
        } else {
            // if  prev property is null
            // it means there is only single node
            this.head = null;
            this.tail = null;
        }
        this.length--; //decrement the length
    }


    insertBeginning(data) {

        // new node is created
        const node = new Node(data);

        // if there is no nodes
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            // update the head.prev to the new node
            // take the new node.next property and link it to the
            // head property
            this.head.prev = node
            node.next = this.head;
            this.head = node;
        }
        // increment the length
        this.length++;

    }

    removeFirst() {

        if (!this.head) return null

        // storing the second node
        const node = this.head.next;

        if (node) {
            // removing the previous node
            node.prev = null
            // updating the head
            this.head = node
        } else {
            // only single node so we update head and tail to null
            this.head = null
            this.tail = null
        }
        //decrement the length
        this.length--;

    }


}

