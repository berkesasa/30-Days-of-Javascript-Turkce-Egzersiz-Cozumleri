// Seviye-2

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
-İki veya daha fazla dizi yineleyicisini zincirleyerek ürünlerin toplam fiyatını bulun (örn. arr.map(callback).filter(callback).reduce(callback))
*/
const total = products
    .filter(item => item.price !== '' && item.price !== ' ' && !isNaN(item.price))
    .map(item => parseFloat(item.price))
    .reduce((acc, price) => acc + price, 0);

console.log('Toplam Fiyat:', total);

/* Egzersiz-2
-Yalnızca reduce reduce(callback)) kullanarak ürünlerin fiyatlarının toplamını bulun
*/
const totalReduce = products.reduce((acc, item) => {
    const price = parseFloat(item.price);
    if (!isNaN(price) && typeof price === 'number') {
        return acc + price;
    } else {
        return acc;
    }
}, 0);

console.log(totalReduce);

/* Egzersiz-3
-Bazı ortak kalıplara sahip ülkelerden oluşan bir dizi döndüren categorizeCountries adlı bir fonksiyon tanımlayın (ülkeler dizisini bu depoda countries.js olarak bulabilirsiniz (örneğin 'land', 'ia', 'island','stan')).
*/
function categorizeCountries(countryArray, patterns) {

    const commonCountries = [];

    for (const country of countryArray) {
        if (patterns.every(pattern => country.name.toLowerCase().includes(pattern))) {
            commonCountries.push(country);
        }
    }

    return commonCountries;
}
console.log(categorizeCountries(countriesData, ["land"]));

/* Egzersiz-4
-Harf ve harfin bir ülke adıyla başlamak için kaç kez kullanıldığını gösteren bir dizi nesne döndüren bir fonksiyon oluşturun.
*/
function countStartingLetters(countryArray) {
    const result = [];

    for (const country of countryArray) {
        const firstLetter = country.charAt(0).toLowerCase();
        const totalLetters = country.length;

        const existingObject = result.find(obj => obj.letter === firstLetter);

        if (existingObject) {
            existingObject.count++;
        } else {
            result.push({ letter: firstLetter, count: 1, totalLetters });
        }
    }

    return result;
}
console.log(countStartingLetters(countries));

/* Egzersiz-5
-Bir getFirstTenCountries fonksiyonu tanımlayın ve on ülkeden oluşan bir dizi döndürün. countries.js dizisi üzerinde çalışmak için farklı işlevsel programlama kullanın
*/
function getFirstTenCountries(array) {
    const newArray = []
    for (let i = 0; i < 10; i++) {
        newArray[i] = array[i];
    }
    return newArray
}
console.log(getFirstTenCountries(countriesData));

/* Egzersiz-6
-countries dizisindeki son on ülkeyi döndüren bir getLastTenCountries fonksiyonu tanımlayın.
*/
function getLastTenCountries(array) {
    const newArray = []
    for (let i = (array.length - 1); i >= (array.length - 10); i--) {
        newArray.push(array[i])
    }
    return newArray
}
console.log(getLastTenCountries(countriesData));

/* Egzersiz-7
-Ülkeler dizisinden bir ülke adının baş harfi olarak en çok hangi harfin kullanıldığını bulun (örn. Finlandiya, Fiji, Fransa vb.)
*/
function findMostUsedStartingLetter(countryArray) {
    const letterCounts = {};

    for (const country of countryArray) {
        const firstLetter = country.name.charAt(0).toLowerCase();
        letterCounts[firstLetter] = (letterCounts[firstLetter] || 0) + 1;
    }

    const mostUsedLetter = Object.keys(letterCounts).reduce((a, b) => letterCounts[a] > letterCounts[b] ? a : b);

    return mostUsedLetter;
}
console.log(findMostUsedStartingLetter(countriesData));

