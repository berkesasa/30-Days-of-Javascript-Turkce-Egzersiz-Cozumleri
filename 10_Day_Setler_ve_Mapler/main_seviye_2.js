// Seviye-2

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

/* Egzersiz-1
-A birleşim B'yi bulun 
*/
let birlesim = [...a, ...b]
let birlesimSet = new Set(birlesim)

console.log(birlesimSet)

/* Egzersiz-2
-A kesişim B'yi bulun
*/
let A = new Set(a)
let B = new Set(b)

let kesisim = a.filter((num) => B.has(num))
let kesisimSet = new Set(kesisim)

console.log(kesisimSet)

/* Egzersiz-3
-A fark B'yi bulun.
*/
let AA = new Set(a)
let BB = new Set(b)

let fark = a.filter((num) => !BB.has(num))
let farkSet = new Set(fark)

console.log(farkSet)



