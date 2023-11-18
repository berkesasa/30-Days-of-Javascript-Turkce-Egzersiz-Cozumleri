// Seviye-1

/* Egzersiz-1
-boş bir dizi yaratın;
*/
const arr = new Array();

/* Egzersiz-2
-Eleman sayısı 5'ten fazla olan bir dizi yaratın
*/
const array = ["1", 2 , true, ["deneme", "deneme2"], null]

/* Egzersiz-3
-Yarattığınız dizinin uzunluğunu bulun ( length )
*/
console.log(array.length);

/* Egzersiz-4
-Dizinizdeki ilk elemanı, ortadaki elemanı ve sondaki elemanı bulun
*/
console.log(array[0], array[(array.length-1)/2], array[array.length-1]);

/* Egzersiz-5
-mixedDataTypes adında bir dizi yaratın,dizinin içine farklı veri tiplerinde elemanlar koyun ve bu dizinin uzunluğunu bulun. Dizinin uzunluğu 5'ten büyük olmalıdır
*/
const mixedDataTypes = ["3", 11, ["selam", "selam2"], {yetenek: "JS", bilgisayar: "Macbook"}, true]
console.log(mixedDataTypes.length);

/* Egzersiz-6
-ItCompanies adlı bir dizi değişkeni oluşturun ve Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon'a başlangıç değerleri atayın
*/
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

/* Egzersiz-7
-console.log() kullanarak dizinizi yazdırın
*/
console.log(itCompanies);

/* Egzersiz-8
-Dizinin içindeki şirketlerin sayısın yazdırın
*/
console.log(itCompanies.length);


/* Egzersiz-9
-Dizinin içindeki ilk, ortadaki ve son elemanı yazdırın
*/
console.log(itCompanies[0], itCompanies[(itCompanies.length-1)/2], itCompanies[itCompanies.length-1]);

/* Egzersiz-10
-Dizideki her şirketi yazdırın
*/
console.log(itCompanies.join(', '));

/* Egzersiz-11
-Her bir şirketin adını tek tek büyük harfleri ile değişterin ( ör: facebook -> FACEBOOK) ve her birini yazdırın
*/
console.log(itCompanies.join(', ').toLocaleUpperCase());

/* Egzersiz-12
-Diziyi bir cümle gibi yazdırın: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies
*/
console.log(`${itCompanies.join(', ')} are big IT companies.`);

/* Egzersiz-13
-itCompanies dizisinde belirli bir şirketin olup olmadığını kontrol edin. Varsa şirketi geri döndürün, aksi takdirde not found geri döndürün
*/
if(itCompanies.indexOf("Samsung") !== -1) {
    console.log(itCompanies[itCompanies.indexOf("Samsung")]);
} else {
    console.log("Not Found");
}

/* Egzersiz-14
-Birden fazla 'o' harfi içeren şirketleri filter metodunu kullanmadan filtreleyin
*/


/* Egzersiz-15
-sort() metodunu kullanarak diziyi sıralayın
*/
console.log(itCompanies.sort());

/* Egzersiz-16
-reverse() metodunu kullanarak diziyi tersine çevirin
*/
console.log(itCompanies.reverse());

/* Egzersiz-17
-Diziden ilk 3 şirketi dilimleyin ( Slice edin )
*/
console.log(itCompanies.slice(0,3));

/* Egzersiz-18
-Diziden son 3 şirketi dilimleyin ( Slice edin )
*/
console.log(itCompanies.slice(4,7));

/* Egzersiz-19
-Ortadaki IT şirketini ya da şirketlerini diziden dilimleyin ( Slice edin )
*/
console.log(itCompanies.slice((itCompanies.length-1)/2, ((itCompanies.length-1)/2)+1));

/* Egzersiz-20
-İlk IT şirketini diziden kaldırın.
*/
itCompanies.shift()
console.log(itCompanies);

/* Egzersiz-21
-Ortadaki IT şirketini ya da şirketlerini diziden kaldırın
*/
itCompanies.splice((itCompanies.length-1)/2, 2);
console.log(itCompanies);

/* Egzersiz-22
-Sondaki IT şirketini diziden kaldırın
*/
itCompanies.pop()
console.log(itCompanies);

/* Egzersiz-23
-Bütün IT şirketlerini kaldırın
*/
itCompanies.splice(0, itCompanies.length)
console.log(itCompanies);
















































