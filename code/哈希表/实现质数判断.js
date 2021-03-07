// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false
//     }
//   }
//   return true
// }

function isPrime(num) {
  let range = parseInt(Math.sqrt(num))
  for (let i = 2; i <= range; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));