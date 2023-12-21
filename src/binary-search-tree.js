const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.count = 0
  }

  root() {
    if (this.count === 0) {
      return null
    } else {
      return this.treeRoot
    }
  }

  add(data) {
    let newNode = new Node(data)
    if (this.count === 0) {
      this.treeRoot = newNode
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (!node.left) {
            node.left = newNode
          } else {
            searchTree(node.left)
          }
        } else if (data > node.data) {
          if (!node.right) {
            node.right = newNode
          } else {
            searchTree(node.right)
          }
        }
      }
      searchTree(this.treeRoot)
    }
    this.count++
  }

  has(data) {
    let currentNode = this.treeRoot
    while (currentNode) {
      if (data === currentNode.data) {
        return true
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return false
  }

  find(data) {
    let currentNode = this.treeRoot
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return null
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentNode = this.treeRoot
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.data
  }

  max() {
    let currentNode = this.treeRoot
    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.data
  }
}

module.exports = {
  BinarySearchTree
};
