function ListPriorityQueue() {
  this.elements = new List()
  this.length = 0
}

ListPriorityQueue.prototype.createElement = function(data, priority) {
  this.data = data
  this.priority = priority
}

// 进入队列
ListPriorityQueue.prototype.enqueue = function(data, priority) {
  const element = new this.createElement(data, priority)
  if (this.length === 0) {
    this.elements.append(element)
  } else {
    this.elements.forEach((item, index) => {
      if (item.priority > element.priority) {
        this.elements.insert(index, element)
      }
    })
  }
  this.length++
}

// 出队列
ListPriorityQueue.prototype.dequeue = function() {
  const data = this.elements.removeAt(0)
  this.length--
  return data
}

// toString方法
ListPriorityQueue.prototype.toString = function() {
  let queueString = ''
  this.elements.forEach(item => {
    queueString += item.data + ' '
  })
  return queueString
}

// 返回队列第一个元素
ListPriorityQueue.prototype.front = function() {
  const data = this.elements.get(0).data
  return data
}

// 判断队列是否为空
ListPriorityQueue.prototype.isEmpty = function() {
  return this.length === 0
}

// 返回队列的长度
ListPriorityQueue.prototype.size = function() {
  return this.length
}


