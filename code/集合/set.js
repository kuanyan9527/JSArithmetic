function Set() {
  this.items = {}
}

Set.prototype.add = function(value) {
  if (this.has(value)) return false
  this.items[value] = value
  return true
}

Set.prototype.has = function(value) {
  return this.items.hasOwnProperty(value)
}

Set.prototype.remove = function(value) {
  if (!this.has(value)) return false
  delete this.items[value]
  return true
}

Set.prototype.clear = function() {
  this.items = {}
}

Set.prototype.size = function() {
  let keys = Object.keys(this.items)
  return keys.length
}

Set.prototype.values = function() {
  let values = Object.values(this.items)
  return values
}

// 并集
Set.prototype.unionSet = function(otherSet) {
  let newSet = new Set()
  let keys = Object.keys(this.items)
  for(let i = 0, len = keys.length; i < len; i++) {
    newSet.add(this.items[keys[i]])
  }
  keys = Object.keys(otherSet.items)
  for(let i = 0, len = keys.length; i < len; i++) {
    newSet.add(otherSet.items[keys[i]])
  }
  return newSet
}

// 交集
Set.prototype.intersectSet = function(otherSet) {
  let newSet = new Set()
  let keys = Object.keys(this.items)
  for(let i = 0, len = keys.length; i < len; i++) {
    if (otherSet.has(this.items[keys[i]])) {
      newSet.add(this.items[keys[i]])
    }
  }
  return newSet
}

// 差集
Set.prototype.difference = function(otherSet) {
  let newSet = new Set()
  let keys = Object.keys(this.items)
  for(let i = 0, len = keys.length; i < len; i++) {
    if (!otherSet.has(this.items[keys[i]])) {
      newSet.add(this.items[keys[i]])
    }
  }
  return newSet
}

// 子集
Set.prototype.subSet = function(otherSet) {
  let keys = Object.keys(this.items)
  for(let i = 0, len = keys.length; i < len; i++) {
    if (!otherSet.has(this.items[keys[i]])) {
      return false
    }
  }
  return true
}
