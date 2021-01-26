function ListStack() {
  this.elements = new List()
}

ListStack.prototype.push = function(element) {
  this.elements.append(element)
}

ListStack.prototype.pop = function() {
  return this.elements.removeAt(this.size() - 1)
}

ListStack.prototype.peek = function() {
  let peek = this.elements.get(this.size() - 1)
  return peek
}

ListStack.prototype.isEmpty = function() {
  return this.elements.isEmpty()
}

ListStack.prototype.clear = function() {
  while(!this.isEmpty()) {
    this.pop()
  }
}

ListStack.prototype.size = function() {
  return this.elements.length
}

ListStack.prototype.toString = function() {
  return this.elements.toString()
}