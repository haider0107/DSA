class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log("yes");
      return this.append(value);
    }

    if (index === 1) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    newNode.next = leader;
    newNode.prev = leader.prev;
    leader.prev.next = newNode;
    leader.prev = newNode;
    // const holdingPointer = leader.next;
    // leader.next = newNode;
    // newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  
}

let list = new DoublyLinkedList(1);
list.append(10);
list.append(20);
list.append(25);
list.append(30);
list.append(46);

list.prepend(90);

console.log(list);

console.log(list.insert(2, 85));

