class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    if (!this.head.value) {
      console.log("List is empty");
      return;
    }
    const temp = new Node(value);

    this.tail.next = temp;
    this.tail = temp;
    this.length++;
  }

  prepend(value) {
    let temp = new Node(value);
    temp.next = this.head;

    this.head = temp;
    this.length++;
  }

//   insert(index,value){
//     const temp = this.head
//     while(!temp.next){

//     }
//   }

  display() {
    let temp = this.head;
    while (temp.next !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.prepend(5);
myLinkedList.display();

console.log(myLinkedList);
