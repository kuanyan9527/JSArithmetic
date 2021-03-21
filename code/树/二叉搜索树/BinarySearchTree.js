function BinarySerachTree() {
  this.root = null
  this.count = 0
}

BinarySerachTree.prototype.Node = function(key) {
  this.key = key
  this.leftChild = null
  this.rightChild = null
}

BinarySerachTree.prototype.insert = function(key) {
  const newNode = new this.Node(key)

  if (this.root === null) {
    this.root = newNode
  } else {
    this.insertNode(newNode, this.root)
  }

  this.count++
}

BinarySerachTree.prototype.insertNode = function(newNode, parentNode) {
  if (newNode.key < parentNode.key) {
    if (parentNode.leftChild === null) {
      parentNode.leftChild = newNode
    } else {
      this.insertNode(newNode, parentNode.leftChild)
    }
  } else {
    if (parentNode.rightChild === null) {
      parentNode.rightChild = newNode
    } else {
      this.insertNode(newNode, parentNode.rightChild)
    }
  }
}

BinarySerachTree.prototype.preOrderTraverse = function(callback) {
  if (this.root === null) {
    return
  } else {
    this.traverse('pre', this.root, callback)
  }
}

BinarySerachTree.prototype.middleOrderTraverse = function(callback) {
  if (this.root === null) {
    return
  } else {
    this.traverse('mid', this.root, callback)
  }
}

BinarySerachTree.prototype.postOrderTraverse = function(callback) {
  if (this.root === null) {
    return
  } else {
    this.traverse('post', this.root, callback)
  }
}

BinarySerachTree.prototype.traverse = function(orderFlag, node, callback) {
  if (orderFlag === 'pre') {
    callback(node.key)
  }
  node.leftChild && this.traverse(orderFlag, node.leftChild, callback)

  if (orderFlag === 'mid') {
    callback(node.key)
  }

  node.rightChild && this.traverse(orderFlag, node.rightChild, callback)

  if (orderFlag === 'post') {
    callback(node.key)
  }
}

BinarySerachTree.prototype.min = function() {
  let node = this.root
  while(node.leftChild) {
    node = node.leftChild
  }
  return node.key
}

BinarySerachTree.prototype.max = function() {
  let node = this.root
  while(node.rightChild) {
    node = node.rightChild
  }
  return node.key
}

BinarySerachTree.prototype.search = function(key) {
  let node = this.root
  while(node) {
    if (node.key === key) {
      return true
    }

    if (key < node.key) {
      node = node.leftChild
    } else {
      node = node.rightChild
    }
  }

  return false
}

BinarySerachTree.prototype.remove = function(key) {
  let node = this.root
  let parent = null
  let isLeftChild = false

  while(node && node.key !== key) {
    parent = node
    if (key < node.key) {
      node = node.leftChild
      isLeftChild = true
    } else if (key > node.key) {
      node = node.rightChild
      isLeftChild = false
    }
  }

  if (!node) {
    return false
  }

  // 删除的节点有0个子节点（叶子节点）
  else if (!node.leftChild && !node.rightChild) {
    if (key === this.root.key) {
      this.root = null
    } else {
      if (isLeftChild) {
        parent.leftChild = null
      } else {
        parent.rightChild = null
      }
    }
  }

  // 删除的节点有2个子节点
  else if (node.leftChild && node.rightChild) {
    let oldNode = node
    let newNode = oldNode.leftChild
    let parentOfnewNode = oldNode

    while(newNode.rightChild) {
      parentOfnewNode = newNode
      newNode = newNode.rightChild
    }

    if (newNode === oldNode.leftChild) {
      newNode.rightChild = oldNode.rightChild
    } else {
      parentOfnewNode.rightChild = null
      newNode.leftChild = oldNode.leftChild
      newNode.rightChild = oldNode.rightChild
    }
    
    if (oldNode === this.root) {
      this.root = newNode
    } else {
      if (isLeftChild) {
        parent.leftChild = newNode
      } else {
        parent.rightChild = newNode
      }
    }
  }

  // 删除的节点有1个子节点
  else {
    if (key === this.root.key) {
      this.root = node.leftChild ? node.leftChild : node.rightChild
    } else {
      if (isLeftChild) {
        parent.leftChild = node.leftChild ? node.leftChild : node.rightChild
      } else {
        parent.rightChild = node.leftChild ? node.leftChild : node.rightChild
      }
    }
  }

  this.count--
  return true
}