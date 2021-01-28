function listQueue() {
  this.elements = new List()
  this.length = 0
}

// 进入队列
listQueue.prototype.enqueue = function(element) {
  this.elements.append(element)
  this.length++
}

// toString方法
listQueue.prototype.toString = function() {
  return this.elements.toString()
}

// 出队列
listQueue.prototype.dequeue = function() {
  this.length--
  return this.elements.removeAt(0)
}

// 返回队列第一个元素
listQueue.prototype.front = function() {
  return this.elements.get(0)
}

// 判断队列是否为空
listQueue.prototype.isEmpty = function() {
  return this.length === 0
}

// 返回队列的长度
listQueue.prototype.size = function() {
  return this.length
}