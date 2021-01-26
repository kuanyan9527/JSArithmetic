function List() {
  this.header = null
  this.length = 0
}

List.prototype.CreateElement = function(data) {
  this.data = data
  this.next = null
}

List.prototype.append = function(element) {
  let node = new this.CreateElement(element)

  if (this.length === 0) {
    this.header = node
  } else {
    let current = this.header
    while(current.next) {
      current = current.next
    }
    current.next = node
  }
  this.length++
  return node
}

List.prototype.insert = function(position, element) {
  if (position < 0 || position > this.length) return null
  let node = new this.CreateElement(element)

  let i = 0
  let current =  this.header
  let previous = null
  while(i < position) {
    previous = current
    current = current.next
    i++
  }
  previous.next = node
  node.next = current
  this.length++
  return node
}

List.prototype.toString = function() {
  let current = this.header
  let listString = ''
  while(current) {
    listString += current.data + ' '
    current = current.next
  }
  return listString
}

List.prototype.indexOf = function(element) {
  let i = 0
  let current = this.header
  while(current) {
    if (current.data === element) {
      return i
    }
    current = current.next
    i++
  }
  return -1
}

List.prototype.removeAt = function(position) {
  if (position < 0 || position >= this.length) {
    return false
  }
  let i = 0
  let current = this.header
  let previous = null
  if (position === 0) {
    this.header = current.next
  }else {
    while(i < position) {
      previous = current
      current = current.next
      i++
    }
    previous.next = current.next
  }
  this.length--
  return current.data
}

List.prototype.remove = function(element) {
  let position = this.indexOf(element)
  if (position === -1) return null
  return this.removeAt(position)
}

List.prototype.isEmpty = function() {
  return this.length === 0
}

List.prototype.size = function() {
  return this.length
}

// update和get
List.prototype.update = function(position, element) {
  if (position < 0 || position >= this.length) return false
  let current = this.header
  let i = 0
  while(current) {
    if (position === i) {
      current.data = element
      return true
    }
    current = current.next
    i++
  }
}

List.prototype.get = function(position) {
  if (position < 0 || position >= this.length) return null
  let current = this.header
  let i = 0
  while(current) {
    if (position === i) {
      return current.data
    }
    current = current.next
    i++
  }
}
