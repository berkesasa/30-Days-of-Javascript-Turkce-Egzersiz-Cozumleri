//Seviye-1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

/* Egzersiz-1
-Aralarındaki farkı açıklayın: forEach, map, reduce, filter
*/
//forEach tüm elemanlar üzerinde bir işlem düzenlerken map bunun aynısını yaparak bir değişkene atama imkanı sunar.
//reduce sayesinde aynı işlemleri yapabilirken bir başlangıç değeri atayabilir ve bunu depolayarak işlemi gerçekleştirebiliriz. filter ise belli bir koşulu sağlayan elemanların ayıklanmasıdır.

/* Egzersiz-2
-Bir geri arama işlevini forEach, map, filter veya reduce içinde kullanmadan önce tanımlayın.
*/
function isCift(sayi) {
    return sayi % 2 === 0;
}
const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ciftSayilar = sayilar.map(function (sayi) {
    return isCift(sayi);
});
console.log(ciftSayilar);

/* Egzersiz-3
-countries dizisindeki her ülkeyi console.log'a kaydetmek için forEach kullanın.
*/
countries.forEach(country => console.log(country))

/* Egzersiz-4
-names dizisindeki her bir adı console.log'a kaydetmek için forEach kullanın.
*/
names.forEach(name => console.log(name))

/* Egzersiz-5
-numbers dizisindeki her sayıyı console.log'a kaydetmek için forEach kullanın.
*/
numbers.forEach(number => console.log(number))

/* Egzersiz-6
-countries dizisindeki her ülkeyi büyük harfe dönüştürerek yeni bir dizi oluşturmak için map kullanın.
*/
const upperCountries = countries.map(country => country.toLocaleUpperCase())
console.log(upperCountries);

/* Egzersiz-7
-countries dizisinden ülke uzunluğunda bir dizi oluşturmak için map kullanın.
*/
const lengthOfCountries = countries.map(country => country.length)
console.log(lengthOfCountries);

/* Egzersiz-8
-numbers dizisindeki her sayıyı kare olarak değiştirerek yeni bir dizi oluşturmak için map kullanın
*/
const squareNumbers = numbers.map(number => number * number)
console.log(squareNumbers);

/* Egzersiz-9
-names dizisindeki her adı büyük harfe dönüştürmek için map kullanın
*/
const upperNames = names.map(name => name.toLocaleUpperCase())
console.log(upperNames);

/* Egzersiz-10
-products dizisini karşılık gelen fiyatlarla eşlemek için map kullanın.
*/
const productPrices = products.map(function (product) {
    return product.price;
});
console.log(productPrices);

/* Egzersiz-11
-land içeren ülkeleri filtrelemek için filtre kullanın.
*/

/* Egzersiz-12
-Altı karaktere sahip ülkeleri filtrelemek için filtre kullanın.
*/

/* Egzersiz-13
-countries dizisinde altı ve daha fazla harf içeren ülkeleri filtrelemek için filtre kullanın.
*/

/* Egzersiz-14
-'E' ile başlayan ülkeleri filtrelemek için filtre kullanın;
*/

/* Egzersiz-15
-products dizisini karşılık gelen fiyatlarla eşlemek için map kullanın.
*/

/* Egzersiz-16
-Yalnızca değerleri olan fiyatları filtrelemek için filtre kullanın.
*/

/* Egzersiz-17
-Parametre olarak bir dizi alan ve ardından yalnızca dize öğeleri içeren bir dizi döndüren getStringLists adlı bir işlev tanımlayın.
*/

/* Egzersiz-18
-numbers dizisindeki tüm sayıları toplamak için reduce kullanın.
*/

/* Egzersiz-19
-Tüm ülkeleri birleştirmek ve bu cümleyi üretmek için reduce kullanın: Estonya, Finlandiya, İsveç, Danimarka, Norveç ve IceLand Kuzey Avrupa ülkeleridir
*/

/* Egzersiz-20
-some ve every arasındaki farkı açıklayın
*/

/* Egzersiz-21
-names dizisinde bazı isimlerin uzunluğunun yediden büyük olup olmadığını kontrol etmek için some kullanın
*/

/* Egzersiz-22
-Tüm ülkelerin land kelimesini içerip içermediğini kontrol etmek için every kullanın.
*/

/* Egzersiz-23
-find ve findIndex arasındaki farkı açıklayın.
*/

/* Egzersiz-24
-countries dizisinde yalnızca altı harf içeren ilk ülkeyi bulmak için find kullanın
*/

/* Egzersiz-25
-countries dizisinde yalnızca altı harf içeren ilk ülkenin konumunu bulmak için findIndex'i kullanın
*/

/* Egzersiz-26
-Dizide yoksa Norveç'in konumunu bulmak için findIndex kullanın -1 elde edersiniz.
*/

/* Egzersiz-27
-Rusya'nın konumunu bulmak için findIndex kullanın, eğer dizide yoksa -1 alırsınız.
*/