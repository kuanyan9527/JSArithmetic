function PriorityQueue() {
  this.elements = []
  this.length = 0

  
}

PriorityQueue.prototype.CreateElement = function(data, priority) {
  this.data = data
  this.priority = priority
}


PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new this.CreateElement(data, priority)
  if (this.length === 0) {
    this.elements.push(element)
    this.length++
  } else {
    let added = false
    for(let i = 0; i < this.length; i++) {
      if (this.elements[i].priority > element.priority) {
        this.elements.splice(i, 0, element)
        added = true
        break
      }
    }
    if (!added) {
      this.elements.push(element)
    }
    this.length++
  }
}

PriorityQueue.prototype.dequeue = function() {
  this.length--
  return this.elements.shift()
}

PriorityQueue.prototype.front = function() {
  return this.elements[0].data
}

PriorityQueue.prototype.isEmpty = function() {
  return this.length === 0
}

PriorityQueue.prototype.size = function() {
  return this.length
}

PriorityQueue.prototype.toString = function() {
  let queueString = ''
  for(let i = 0; i < this.length; i++) {
    queueString += this.elements[i].data + ' '
  }
  return queueString
}

