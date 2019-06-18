function addTwoDigits(n) {
 let num = n.toString().split('')
 let total = parseInt(num[0]) + parseInt(num[1])
 
 return total
}
