// Seviye-1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

/* Egzersiz-1
-Boş bir set oluşturun
*/
const emptySet = new Set()
console.log(emptySet);

/* Egzersiz-2
-Döngü kullanarak 0 ile 10 aralığını içeren bir set oluşturun
*/
const numbersSet = new Set()
for (let i = 0; i < 10; i++) {
    numbersSet.add(i)
}
console.log(numbersSet);

/* Egzersiz-3
-Set içinden bir eleman silin
*/
numbersSet.delete(7)
console.log(numbersSet);

/* Egzersiz-4
-Set'i temizleyin
*/
numbersSet.clear()
console.log(numbersSet);

/* Egzersiz-5
- 5 string eleman içeren bir set oluşturun (dizi ile oluşturulacak)
*/
const stringArray = ["merhaba", "bu", "bir", "string", "dizisidir."]
const stringSet = new Set(stringArray)
console.log(stringSet);

/* Egzersiz-6
-Bir ülke Map'ı oluşturun ve içindeki ülkelerin karakter sayısını girin
*/
const countryWithLengths = countries.map((country) => {
    return [country, country.length]
})
const countryMap = new Map(countryWithLengths)
console.log(countryMap);
