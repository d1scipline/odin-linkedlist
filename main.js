class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  append(value) {
    if (this.length != 0) {
      this.last.nextNode = new Node(value);
      this.last = this.last.nextNode;
    } else {
      this.first = new Node(value);
      this.last = this.first;
    }
    this.length += 1;
  }

  prepend(value) {
    this.first = new Node(value, this.first);
    if (this.length == 0) {
      this.last = this.first;
    }
    this.length += 1;
  }

  size() {
    return this.length;
  }

  head() {
    if (this.length != 0) {
      return this.first.value;
    } else {
      return undefined;
    }
  }

  tail() {
    if (this.length != 0) {
      return this.last.value;
    } else {
      return undefined;
    }
  }

  at(index) {
    if (index < 0 || index > this.length - 1) {
      return undefined;
    } else {
      let currentNode = this.first;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
      return currentNode.value;
    }
  }

  pop() {
    if (this.length != 0) {
      let value = this.first.value;
      this.first = this.first.nextNode;
      this.length -= 1;
      if (this.length == 0) {
        this.last = null;
      }
      return value;
    } else {
      return undefined;
    }
  }

  contains(value) {
    if (this.length != 0) {
      let currentNode = this.first;
      while (currentNode != null) {
        if (currentNode.value == value) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      return false;
    } else {
      return false;
    }
  }

  findIndex(value) {
    if (this.length != 0) {
      let i = 0;
      let currentNode = this.first;
      do {
        if (currentNode.value == value) {
          return i;
        } else {
          currentNode = currentNode.nextNode;
          i++;
        }
      } while (currentNode != null);
      return -1;
    } else {
      return -1;
    }
  }

  toString() {
    if (this.length != 0) {
      let output = "";
      let currentNode = this.first;
      while (currentNode != null) {
        output += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      output += `${currentNode}`;
      return output;
    } else {
      return "";
    }
  }

  insertAt() {
    if (arguments.length < 2) {
      throw new Error("Need at least two arguments");
    }

    let index = arguments[0];
    if (index < 0 || index > this.length) {
      throw new RangeError("Invalid index");
    }
    let values = Object.values(arguments).slice(1);
    let list = new LinkedList();

    for (const value of values) {
      list.append(value);
    }

    //Inserting into an empty list
    if (this.length == 0 && index == 0) {
      this.first = list.first;
      this.last = list.last;
      this.length += list.length;
      return;
    }

    //Insertin at the end of the list
    if (index == this.length) {
      this.last.nextNode = list.first;
      this.last = list.last;
      this.length += list.length;
      return;
    }

    //Inserting into the beginning of the list
    if (index == 0) {
      list.last.nextNode = this.first;
      this.first = list.first;
      this.length += list.length;
      return;
    }

    //Inserting into other indexes
    let currentNode = this.first;
    for (let i = 1; i < index; i++) {
      if (currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
      }
    }
    list.last.nextNode = currentNode.nextNode;
    currentNode.nextNode = list.first;
    this.length += list.length;
    return;
  }
}

const fruits = new LinkedList();
