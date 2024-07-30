//*  STACK :

`The stack data structure is a sequential collection of elements.
It operates on the principle of LIFO, where the last element added is the first to be removed.
Stack data structure has two main operations: push and pop.
Stack data structure is used in browser history tracking and the undo operation. 
`

//*  QUEUE :
`Queue data structure follows FIFO principle. 
Analogy of a queue of people waiting in line
People enter at rear/tail & leave from front. 
Similar to stack data structure but with different behavior. 
`
//&  Array >>>>>>>>>>
class Queue{
    constructor(){
        this.items = []
    }
    enqueue(ele){
        this.items.push(ele)
    }
    dequeue(){
        return this.ele.shift()
    }

    isEmpty(){
        this.items.length === 0 
    }
    peek(){    //It will give the first element from the array without removing it. 
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null;
    }   
    size(){
        this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}
// Creating a new instance of the class :
let queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.size())
queue.print()
console.log(queue.dequeue())

//&  Object  >>>>>>>>>>>>>>
class Queue {
    constructor(){
        this.items = {}
        this.back = 0
        this.front = 0
    }
    enqueue(ele){
        this.items[this.back] = ele
        this.back ++
    }
    dequeue(){
        let item = this.items[this.front]
        delete this.items[this.front]
        this.front ++
        return item;
    }
    isEmpty(){
        return this.front - this.back === 0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.back - this.front
    }
    print(){
        console.log(this.items)
    }
}

const queues = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.size())
queue.print()

console.log(queue.dequeue());  //10 will be removed. 
