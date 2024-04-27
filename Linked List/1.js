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

  insert(index, value) {
    const newNode = new Node(value);
    let i = 1;
    let prev = this.head;
    if (index === 0) {
      newNode.next = prev;
      this.head = newNode;
      return;
    }
    let next = prev.next;

    while (next.next) {
      if (i == index) {
        prev.next = newNode;
        newNode.next = next;
        this.length++;
        return;
      }
      prev = next;
      next = next.next;
      i++;
    }
  }

  display() {
    let temp = this.head;
    while (temp.next !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
    console.log(temp.value);
  }

  reverse() {
    let first = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.prepend(5);
myLinkedList.insert(2, 99);
myLinkedList.display();

console.log(myLinkedList);

myLinkedList.reverse()
myLinkedList.display()
