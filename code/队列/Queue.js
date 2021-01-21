function Queue() {
  this.elements = []
}

// 进入队列 enqueue
Queue.prototype.enqueue = function(element) {
  this.elements.push(element)
}

// 出队列 dequeue
Queue.prototype.dequeue = function() {
  return this.elements.shift()
}

// 返回队列的第一个元素 front
Queue.prototype.front = function() {
  return this.elements[0]
}

// 返回队列是否为空 isEmpty
Queue.prototype.isEmpty = function() {
  return this.elements.length === 0
}

// 返回队列的长度 size
Queue.prototype.size = function() {
  return this.elements.length
}

// toString
Queue.prototype.toString = function() {
  let queueString = ''
  for(let i = 0, len = this.elements.length; i < len; i++) {
    queueString += this.elements[i] + ' '
  }
  return queueString
}
