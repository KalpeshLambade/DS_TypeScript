# DS_TypeScript

## SingleLinkedList_TS
A TypeScript implementation of a single linked list - a fundamental data structure that organizes values in a linear fashion. Each node contains a value and a reference to the next node in the list. The last node in the list points to null.

## Types of Linked Lists

### 1. Singly Linked List
In a singly linked list, each node has a single pointer that points to the next node in the list. The traversal is only forward, starting from the head and moving towards the tail.

### 2. Doubly Linked List
In a doubly linked list, each node has two pointers: one pointing to the next node and another pointing to the previous node. This allows traversal in both forward and backward directions.

## Head and Tail
The first element in the list is known as the **head**, and the last element is the **tail**. The length of the list is determined by counting the number of nodes it contains.

## Key Characteristics

- Lists do not have indexes; each value is connected to the next value through pointers.
- Accessing values requires iterating through the list from the head or tail.
- Efficient insertion and deletion operations as they only require updating neighboring pointers.

## Common Operations

### 1. Push
Add a new node to the end of the list.

### 2. Pop
Remove and return the last node in the list.

### 3. Unshift
Add a new node to the beginning of the list.

### 4. Shift
Remove and return the first node in the list.

### 5. Get
Retrieve the node at a specified index in the list.

### 6. Set
Set the value of a node at a specified index.

### 7. Insert
Insert a new node at a specified index in the list.

### 8. Remove
Remove and return a node at a specified index in the list.

### 9. Reverse
Reverse the order of nodes in the list.

## Usage

```typescript
// Example usage of a single linked list
const myList = new SingleLinkedList();

myList.push(10);
myList.push(20);
myList.push(30);

console.log(myList); // Output: SingleLinkedList { head: Node { val: 10, next: Node { val: 20, next: Node { val: 30, next: null } } }, tail: Node { val: 30, next: null }, length: 3 }
