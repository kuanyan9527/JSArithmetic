function Stack() {
  this.elements = []
}

// 添加元素push
Stack.prototype.push = function(element) {
  this.elements.push(element)
}

// 移除元素pop
Stack.prototype.pop = function() {
  return this.elements.pop()
}

// 返回栈顶元素peek
Stack.prototype.peek = function() {
  return this.elements[this.elements.length - 1]
}

// 栈是否为空isEmpty
Stack.prototype.isEmpty = function() {
  return this.elements.length === 0
}

// 移除栈中所有元素clear
Stack.prototype.clear = function() {
  this.elements = []
}

// 返回栈内元素的个数size
Stack.prototype.size = function() {
  return this.elements.length
}

// toString方法
Stack.prototype.toString = function() {
  var stackString = ''
  for(var i = 0, len = this.elements.length; i < len; i++) {
    stackString += this.elements[i] + ' '
  }
  return stackString
}
