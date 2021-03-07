function hashFunc(str, limit) {
  let hashCode = 0
  let index = 0

  // 利用霍纳法则计算hashCode
  for(let i = 0; i < str.length; i++) {
    hashCode = 37 * hashCode + str.charCodeAt(i)
  }

  // hash化
  index = hashCode % limit
  return index
}