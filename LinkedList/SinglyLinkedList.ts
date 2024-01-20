class listNode<T> {
    val: T;
    next: listNode<T> | null = null;

    constructor(val: T) {
        this.val = val;
    }
}

class singleLinkedList<T>{
    head: listNode<T> | null;
    tail: listNode<T> | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    /**
     * Adds a new node with the given value to the end of the linked list.
     * @param {T} val -The value to be added to the linked list. 
     * @returns {singleLinkedList<T>} - The modified linked list. 
     */
    push(val: T): singleLinkedList<T> {
        const newNode = new listNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Removes and returns the last node from the linked list.
     * @returns {listNode<T> | undefined} - The removed node, or `undefined` if the list is empty.
     */
    pop(): listNode<T> | undefined {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    /**
     * Removes and returns the first node from the linked list.
     * @returns {listNode<T> | undefined} - The removed node, or `undefined` if the list is empty.
     */

    shift(): listNode<T> | undefined {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length == 0) {
            this.tail = null;
        }
        return currentHead;
    }

    /**
     * Adds a new node with the given value to the beginning of the linked list.
     *
     * @param {T} val - The value to be added to the linked list.
     * @returns {singleLinkedList<T>} - The modified linked list.
     */
    unshift(val: T): singleLinkedList<T> {
        const newNode = new listNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    /**
     * Retrieves the node at the specified index in the linked list.
     * @param {number} index - The index of the node to retrieve.
     * @returns {listNode<T> | null} - The node at the specified index, or `null` if the index is out of bounds.
     */
    get(index: number): listNode<T> | null {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current!.next;
            counter++;
        }
        return current;
    }

    /**
     * Sets the value of the node at the specified index in the linked list.
     * @param {number} index - The index of the node to set the value for.
     * @param {T} val - The new value to be set for the node.
     * @returns {boolean} - `true` if the value is successfully set, `false` if the index is out of bounds.
     */
    set(index: number, val: T): boolean {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true
        }
        return false;
    }

    /**
     * Inserts a new node with the given value at the specified index in the linked list.
     * @param {number} index - The index at which to insert the new node.
     * @param {T} val - The value to be added to the linked list.
     * @returns {boolean} - `true` if the node is successfully inserted, `false` if the index is out of bounds.
     */
    insert(index: number, val: T): boolean {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new listNode(val);
        let pre = this.get(index - 1);
        let temp = pre!.next;
        pre!.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    /**
     * Removes and returns the node at the specified index in the linked list.
     * @param {number} index - The index of the node to be removed.
     * @returns {listNode<T> | undefined |null} - The removed node, or `undefined` if the index is out of bounds.
     */
    remove(index: number): listNode<T> | undefined | null{
        if (index < 0 || index >= this.length) return undefined;
        if (index == 0) return this.shift();
        if (index == this.length) return this.pop();

        let preNode = this.get(index - 1);
        let removed = preNode!.next;
        preNode!.next = removed!.next;
        this.length--;
        return removed;
    }

    /**
     * Reverses the order of nodes in the linked list.
     * @returns {singleLinkedList<T>} - The modified linked list with reversed node order.
     */
    reverse(): singleLinkedList<T> {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next: listNode<T> | null;
        let pre: listNode<T> | null = null;

        for (let i = 0; i < this.length; i++) {
            next = node!.next;
            node!.next = pre;
            pre = node;
            node = next;
        }
        return this;

    }


}