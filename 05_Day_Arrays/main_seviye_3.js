//Seviye-3

/* Egzersiz-1
-Aşağıdaki dizide 10 öğrencinin yaşı vardır:

    const  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

    Diziyi sıralayın ve en küçük ve en büyük yaşı bulun
    Medyan yaşı bulun(dizinin ortasındaki eleman ama ortada iki eleman varsa elemanlar ikiye bölünür)
    Ortalama yaşı bulun(tüm elemanlar eleman sayısına bölünür)
    Yaş aralığını bulun (maks - min)
    abs() metodunu kullanarak (min - ortalama) ve (maks - ortalama) değerlerini karşılaştırın,
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort((a, b) => a - b);
console.log(ages);
let min = Math.min(...ages)
let max = Math.max(...ages)
console.log(max, min); //en büyük ve en küçük sayı

let median;
(ages.length / 2) % 2 == 0
    ? median = (ages[(ages.length / 2) - 1] + ages[ages.length / 2]) / 2
    : median = ages[Math.ceil(ages.length / 2) - 1]
console.log(median);//medyan

let toplam = ages.reduce((sum, current) => sum + current, 0);
let ortalama = toplam / ages.length
console.log(ortalama); //dizi elemanları ortalaması

console.log(max - min); // maks-min yaş

console.log(Math.abs(min - ortalama), Math.abs(max - ortalama)); //min-ortalama ve max-ortalama

/* Egzersiz-2
-countries array dizisinden ilk 10 ülkeyi dilimleyin ( Slice edin )
*/
let slicedCountries = countries.slice(0, 10)
console.log(slicedCountries);

/* Egzersiz-3
-countries array dizisinden ortadaki ülkeleri bulun
*/
let medianCountry;

(countries.length / 2) % 2 == 0
    ? medianCountry = (countries[(countries.length / 2) - 1] + countries[countries.length / 2]) / 2
    : medianCountry = countries[Math.ceil(countries.length / 2) - 1]
console.log(medianCountry);//medyan
console.log(countries[96]); // kontrol için countries dizisi 193 elemanlıdır ortadaki eleman 96. indextedir.

/* Egzersiz-4
- countries dizisini çift ise iki eşit diziye bölün. countries dizisi çift değilse, ilk yarı için bir ülke fazla olarak bölün
*/
let firstCountries;
let secondCountries;
if ((countries.length / 2) % 2 == 0) {
    firstCountries = countries.slice(0, countries.length/2)
    secondCountries = countries.slice(countries.length/2, countries.length - 1)
}else {
    firstCountries = countries.slice(0, Math.ceil(countries.length/2))
    secondCountries = countries.slice(Math.ceil(countries.length/2, countries.length - 1))
}
console.log(firstCountries);
console.log(secondCountries);

