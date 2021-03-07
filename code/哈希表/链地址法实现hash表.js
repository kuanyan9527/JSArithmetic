function HashTable(limit) {
  this.storage = [],
  this.limit = limit,
  this.count = 0
}

// 实现hash函数
HashTable.prototype.hashFunc = function(key, limit) {
  let hashCode = 0
  let index = 0

  // 利用霍纳法则计算hashCode
  for(let i = 0; i < key.length; i++) {
    hashCode = 37 * hashCode + key.charCodeAt(i)
  }

  // hash化
  index = hashCode % limit
  return index
}

// 修改或添加元素
HashTable.prototype.put = function(key, value) {
  // 先根据key计算index值
  let index = this.hashFunc(key, this.limit)
  // 在HashTable中查找index对应的bucket
  if (!this.storage[index]) {
    this.storage[index] = []
  }

  let bucket = this.storage[index]
  for(let i = 0, len = bucket.length; i < len; i++) {
    let tuple = bucket[i]
    if (key === tuple[0]) {
      tuple[1] = value
      return true
    }
  }
  bucket.push([key, value])
  this.count++
  if (this.count > this.limit * 0.75) {
    let newSize = this.getPrimeSize(this.limit * 2)
    this.resize(newSize)
  }
  return true
}

// 获取元素
HashTable.prototype.get = function(key) {
  // 根据key计算index
  let index = this.hashFunc(key, this.limit)
  // 根据index去查找
  if (!this.storage[index]) {
    return null
  }
  let bucket = this.storage[index]
  for(let i = 0, len = bucket.length; i < len; i++) {
    let tuple = bucket[i]
    if (key === tuple[0]) {
      return tuple[1]
    }
  }
  return null
}

// 删除元素
HashTable.prototype.remove = function(key) {
  let index = this.hashFunc(key, this.limit)
  if (!this.storage[index]) {
    return false
  }
  let bucket = this.storage[index]
  for(let i = 0, len = bucket.length; i < len; i++) {
    let tuple = bucket[i]
    if (key  === tuple[0]) {
      let ele = bucket.splice(i, 1)
      this.count--
      if (this.limit > 7 && this.count < this.limit * 0.25) {
        let newSize = this.getPrimeSize(Math.floor(this.limit / 2))
        if (newSize < 7) {
          newSize = 7
        }
        this.resize(newSize)
      }
      return ele
    }
  }
  return false
}

// 判断hash表是否为空
HashTable.prototype.isEmpty = function() {
  return this.count === 0
}

// 获取hash里的元素个数
HashTable.prototype.length = function() {
  return this.count
}

// 扩容函数
HashTable.prototype.resize = function(newSize) {
  let oldStorage = this.storage
  this.storage = []
  this.count = 0
  this.limit = newSize

  for(let i = 0, len = oldStorage.length; i < len; i++) {
    if (!oldStorage[i]) {
      continue
    }
    let bucket = oldStorage[i]
    for(let j = 0, len = bucket.length; j < len; j++) {
      let tuple = bucket[j]
      this.put(tuple[0], tuple[1])
    }
  }
}

// 判断是否为质数
HashTable.prototype.isPrime =  function(num) {
  let range = parseInt(Math.sqrt(num))
  for (let i = 2; i <= range; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

HashTable.prototype.getPrimeSize = function(size) {
  while(!this.isPrime(size)) {
    size++
  }
  return size
}

let hs = new HashTable(7)

// hs.put('abc', 123)
// console.log(hs.get('abc'))
// console.log(hs.remove('abc'))
// console.log(hs.get('abc'))
// console.log(hs.isEmpty())
// console.log(hs.length())
hs.put('abc', 123)
hs.put('acb', 124)
hs.put('bac', 125)
hs.put('bca', 126)
hs.put('cab', 127)
hs.put('cba', 128)
console.log(hs.limit);
console.log(hs.get('cba'));

hs.remove('abc')
hs.remove('acb')
hs.remove('bac')
hs.remove('bca')
hs.remove('cab')
hs.remove('cba')
console.log(hs.limit);
console.log(hs.get('cba'));
