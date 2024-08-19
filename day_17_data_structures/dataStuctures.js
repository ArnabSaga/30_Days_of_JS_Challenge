//Activity-1[Linked List]
//Task-1:Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


//Task-2:Implement a LinkedList class with methods to adds a node to the end, remove a node from the end, and display all nodes.


class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    removeNode() {
        if (!this.head) {
            console.log("List is empty");
            return null;
        }
        else if (!this.head.next) {
            const removedNode = this.head;
            this.head = null;
            return removedNode;
        }
        let currentNode = this.head;
        while (currentNode.next && currentNode.next.next) {
            currentNode = currentNode.next;
        }
        const removedNode = currentNode.next;
        currentNode.next = null;
        return removedNode;
    }

    display() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const list = new LinkedList();

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.display();
list.removeNode();
list.display();


//Activity-2[Stack]
//Task-3:Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).


class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return "No Element In Stack";
        }
        return this.items[this.items.length - 1];
    }
}


//Task-4:Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.


function reverseString(string) {
    const stack = new Stack();
    for (let character of string) {
        stack.push(character);
    }
    let reversedString = "";
    while (stack.items.length > 0) {
        reversedString += stack.pop();
    }
    return reversedString;
}

console.log(reverseString("moury")); // Output: "olleh"


//Activity-3[Queue]
//Task-5:Implement a Queue class with methods enqueue(add element), dequeue(remove element) and front(view the first element).


class Queue {
    constructor() {
        this.items = [];
    }

    enQueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) {
            return "No Element In Queue";
        }
        return this.items[0];
    }
}


//Task-6:Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.


class PrinterQueue {
    constructor() {
        this.queue = new Queue;
    }

    addJob(job) {
        this.queue.enQueue(job);
        console.log(`Added Job: ${job}`);
    }

    processJob() {
        if (this.queue.items.length === 0) {
            console.log("No Jobs to Process");
        } else {
            const job = this.queue.dequeue();
            console.log(`Processing Jobs: ${job}`);

        }
    }
}

const printerQueue = new PrinterQueue();
printerQueue.addJob("Print Document 1");
printerQueue.addJob("Print Document 2");
printerQueue.processJob();
printerQueue.processJob();
printerQueue.processJob();


//Activity-4[Binary Tree]
//Task-7:Implement a TreeNode class to represent a node in a binary tree with properties value, left and right.


class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


//Task-8:Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.


class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    display() {
        this.inOrderTraversal(this.root);
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(8);
tree.display(); 