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
      let currentNode = this.first;
      while (currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new Node(value);
      this.last = currentNode.nextNode;
    } else {
      this.first = new Node(value);
      this.last = this.first;
    }
    this.length += 1;
  }

  prepend(value) {
    this.first = new Node(value, this.first);
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
      while (currentNode.nextNode != null) {
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
      } while (i < this.length);
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
}

const fruits = new LinkedList();
fruits.append("banana");
fruits.append("apple");
fruits.append("pineapple");
fruits.prepend("orange");

console.log(fruits.toString());
