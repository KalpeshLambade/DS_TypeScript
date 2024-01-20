class listNode<T> {
    val: T;
    next: listNode<T> | null = null;

    constructor(val: T) {
        this.val = val;
    }
}

class singleLinkedList <T>{
    head: listNode<T> | null;
    tail: listNode<T> | null;
    length: number;
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val:T):void{
        const newNode = new listNode(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail!.next = newNode; 
            this.tail = newNode; 
        }
        this.length++;
    }

    pop(){
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}