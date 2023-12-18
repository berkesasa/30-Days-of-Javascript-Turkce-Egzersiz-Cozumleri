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
-land içeren ülkeleri filtrelemek için filter kullanın.
*/
const landCountry = countries.filter(country => country.toLocaleLowerCase().includes("land"))
console.log(landCountry);

/* Egzersiz-12
-Altı karaktere sahip ülkeleri filtrelemek için filter kullanın.
*/
const sixCountries = countries.filter(country => country.length == 6)
console.log(sixCountries);

/* Egzersiz-13
-countries dizisinde altı ve daha fazla harf içeren ülkeleri filtrelemek için filter kullanın.
*/
const moreSixCountry = countries.filter(country => country.length >= 6)
console.log(moreSixCountry);

/* Egzersiz-14
-'E' ile başlayan ülkeleri filtrelemek için filter kullanın;
*/
const eCountry = countries.filter(country => country[0] == "E")
console.log(eCountry);

/* Egzersiz-15
-Yalnızca değerleri olan fiyatları filtrelemek için filter kullanın.
*/
const pricedProducts = products.filter(product => typeof product.price == "number")
console.log(pricedProducts);

/* Egzersiz-16
-Parametre olarak bir dizi alan ve ardından yalnızca string öğeleri içeren bir dizi döndüren getStringLists adlı bir işlev tanımlayın.
*/
function getStringLists(array) {
    const stringArray = array.filter(value => typeof value == "string")
    return stringArray
}
console.log(getStringLists([1, 2, 3, "berke", true, [1, 2, 3], "sasa"]));

/* Egzersiz-17
-numbers dizisindeki tüm sayıları toplamak için reduce kullanın.
*/
const sumOfNumbers = numbers.reduce((accumulator, current) =>
    accumulator + current, 0)
console.log(sumOfNumbers);

/* Egzersiz-18
-Tüm ülkeleri birleştirmek ve bu cümleyi üretmek için reduce kullanın: Estonya, Finlandiya, İsveç, Danimarka, Norveç ve IceLand Kuzey Avrupa ülkeleridir
*/
const concatenatedSentence = countries.reduce((accumulator, currentCountry, index) => {
    if (index < countries.length - 1) {
        return `${accumulator}, ${currentCountry}`;
    } else {
        return `${accumulator} ve ${currentCountry} Kuzey Avrupa ülkeleridir`;
    }
}, '');
console.log(concatenatedSentence);

/* Egzersiz-19
-some ve every arasındaki farkı açıklayın
*/
//some dizideki tüm ögelerin yalnızca birinin koşulu sağlaması durumunda true döndürürken, every her dizi ögesinin koşulu sağlaması durumunda true döndürür.

/* Egzersiz-20
-names dizisinde bazı isimlerin uzunluğunun yediden büyük olup olmadığını kontrol etmek için some kullanın
*/
console.log(names.some(name => name.length >= 7));

/* Egzersiz-21
-Tüm ülkelerin land kelimesini içerip içermediğini kontrol etmek için every kullanın.
*/
console.log(countries.every(country => country.includes("land")));

/* Egzersiz-22
-find ve findIndex arasındaki farkı açıklayın.
*/
//find istenilen koşulu sağlayan ilk elemanı döndürürken findIndex bu koşulu sağlayan elemanın indeksini döndürür.

/* Egzersiz-23
-countries dizisinde yalnızca altı harf içeren ilk ülkeyi bulmak için find kullanın
*/
console.log(countries.find(country => country.length == 6));

/* Egzersiz-24
-countries dizisinde yalnızca altı harf içeren ilk ülkenin konumunu bulmak için findIndex'i kullanın
*/
console.log(countries.findIndex(country => country.length == 6));

/* Egzersiz-25
-Norveç'in konumunu bulmak için findIndex kullanın, yoksa -1 elde edersiniz.
*/
console.log(countries.findIndex(country => country == "Norway"));

/* Egzersiz-26
-Rusya'nın konumunu bulmak için findIndex kullanın, eğer dizide yoksa -1 alırsınız.
*/
console.log(countries.findIndex(country => country == "Russia"));