`A linked list is a data structure that consists of a sequence of elements called nodes.
 Each node contains two parts: data and a reference (or link) to the next node in the sequence. 
 Linked lists are used to store collections of data in a linear order, similar to arrays, but they differ in how they store elements in memory.`

 `Nodes: Each element in a linked list is called a node. A node contains data and a reference to the next node.
Head: The first node in a linked list is called the head. It serves as the entry point to the list.
Tail: The last node in a linked list points to null, indicating the end of the list.
Dynamic Size: Linked lists can grow and shrink in size dynamically, as nodes can be easily added or removed without the need for resizing.
Sequential Access: Nodes are accessed sequentially starting from the head. Unlike arrays, direct access by index is not possible.`

// &  SINGLY LINKED LIST    >>>>>>>>>>
// Node class representing each element in the linked list

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // SinglyLinkedList class representing the entire list
  class SinglyLinkedList {
    constructor(data) {
        this.data = data;
        this.head = null;
    }
  
    // Add a new node to the end of the list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // Add a new node to the beginning of the list
    prepend(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Remove the first occurrence of a node with the given data
    remove(data) {
      if (!this.head) return;
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }
  
    // Print the linked list
    print() {
      const list = [];
      let current = this.head;
      while (current) {
        list.push(current.data);
        current = current.next;
      }
      console.log(list.join(' -> '));
    }
  }
  
  // Example usage
  const list = new SinglyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(0);
  list.print(); // Output: 0 -> 1 -> 2 -> 3
  list.remove(2);
  list.print(); // Output: 0 -> 1 -> 3 // Output: 1 -> 2 -> 3 -> null

//&  DOUBLY LINKED LIST    >>>>>>>>

class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    //* Creates a new doubly linked list.
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
     //* Adds a new node with the given value to the end of the list.
    append(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.size++;
    }
   
     //* Adds a new node with the given value to the beginning of the list.
    prepend(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this.size++;
    }

     //* Removes the node at the beginning of the list.
     
    removeHead() {
      if (!this.head) {
        return null;
      }
      const value = this.head.value;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.size--;
      return value;
    }
  
     //* Removes the node at the end of the list.
     
    removeTail() {
      if (!this.tail) {
        return null;
      }
      const value = this.tail.value;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
      return value;
    }
  
     //* Prints the values in the list from head to tail.
     
    printForward() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  
     //* Prints the values in the list from tail to head.
    printBackward() {
      let current = this.tail;
      while (current) {
        console.log(current.value);
        current = current.prev;
      }
    }
  }
  
  // Example usage:
  const dll = new DoublyLinkedList();
  dll.append(1);
  dll.append(2);
  dll.append(3);
  dll.prepend(0);
  dll.printForward(); // print 0, 1, 2, 3
  dll.printBackward(); // print 3, 2, 1, 0
  console.log(dll.removeHead()); // print 0
  console.log(dll.removeTail()); // print 3
  dll.printForward(); // print 1, 2

