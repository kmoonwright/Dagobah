// STACK - LIFO
// A container of objects that are inserted and removed according to a last-in 
// first-out(LIFO) principle. Elements can only be added and removed from the top.


class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // LIFO
    constructor() {
        this.bottom = null; // Front of the Stack
        this.top = null; // Back of the stack
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.top) {
            newNode.next = this.top;
            this.top = newNode;
            this.length += 1;
        } else {
            this.top = newNode;
            this.bottom = newNode;
            this.length += 1;
        }
        return this.length;
    }

    pop() {
        let oldTop;
        if (!this.top) return null;
        if (this.length === 1) {
            oldTop = this.top;
            this.top = null;
            this.bottom = null;
            this.length -= 1;
        } else {
            oldTop = this.top;
            let newTop = oldTop.next;
            this.top = newTop;
            this.length -= 1;
        }
        return oldTop.value;
    }

    size() {
        return this.length
    }
}