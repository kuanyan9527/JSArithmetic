function DoubleList() {
  this.header = null
  this.tail = null
  this.length = 0
}

DoubleList.prototype.CreateNode = function(data) {
  this.data = data
  this.next = null
  this.pre = null
}

DoubleList.prototype.append = function(data) {
  let node = new this.CreateNode(data)
  if (this.length === 0) {
    this.header = node
    this.tail = node
  } else {
    node.pre = this.tail
    this.tail.next = node
    this.tail = node
    
  }
  this.length++
}

DoubleList.prototype.insert = function(position, data) {
  if (position > this.length) return false
  let node = new this.CreateNode(data)
  let current = this.header
  let previous = null
  let index = 0
  if (position === 0) {
    node.next = this.header
    this.header.pre = node
    this.header = node
  } else if (position === this.length) {
    node.pre = this.tail
    this.tail.next = node
    this.tail = node
  } else {
    while(current) {
      index++
      previous = current
      current = current.next
      if (index === position) {
        node.next = current
        node.pre = previous
        previous.next = node
        current.pre = node
      }
    }
  }
  this.length++
  return node.data
}

DoubleList.prototype.toString = function() {
  let current = this.header
  let doubleListStr = ''
  while(current) {
    doubleListStr += current.data + ' '
    current = current.next
  }
  return doubleListStr
}

DoubleList.prototype.get = function(position) {
  if (position >= this.length) return null
  let current = this.header
  let index = 0
  while(current) {
    if (position === index) {
      return current.data
    }
    index++
    current = current.next
  }
}

DoubleList.prototype.indexOf = function(element) {
  let current = this.header
  let index = 0
  while(current) {
    if (current.data === element) {
      return index
    }
    index++
    current = current.next
  }
  return null
}

DoubleList.prototype.update = function(position, element) {
  if (position >= this.length) return false
  let current = this.header
  let index = 0
  while(current) {
    if (index === position) {
      current.data = element
      return true
    }
    index++
    current = current.next
  }
}

DoubleList.prototype.removeAt = function(position) {
  if (position >= this.length) return false
  let current = this.header
  let previous = null
  let index = 0
  if (position === 0) {
    this.header = current.next
    current.next.previous = null
  } else if (position === this.length - 1) {
    this.tail.pre.next = null
    this.tail = this.tail.pre
  } else {
    while(current) {
      if (index === position) {
        previous.next = current.next
        current.next.pre = previous
      }
      index++
      previous = current
      current = current.next
    }
  }
  this.length--
  return true
}

DoubleList.prototype.remove = function(element) {
  let position = this.indexOf(element)
  return this.removeAt(position)
}

DoubleList.prototype.isEmpty = function() {
  return this.length === 0
}

DoubleList.prototype.size = function() {
  return this.length
}

DoubleList.prototype.forwardString = function() {
  return this.toString()
}

DoubleList.prototype.backwordString = function() {
  let current = this.tail
  let doubleListStr = ''
  while(current) {
    doubleListStr += current.data + ' '
    current = current.pre
  }
  return doubleListStr
}
