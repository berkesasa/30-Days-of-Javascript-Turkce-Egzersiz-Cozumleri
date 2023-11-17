// Seviye-1

/* Egzersiz-1
-firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturun ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın
*/
let firstName = "Berke" 
let lastName = "SASA"
let country = "Turkey"
let city = "İstanbul"
let age = 26
let isMarried = false
let year = 1998
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

/* Egzersiz-2
-'10' türünün 10'a eşit olup olmadığını kontrol edin
*/
console.log('10' == 10);

/* Egzersiz-3
-parseInt('9.8') 10'a eşit olup olmadığını kontrol edin
*/
console.log(parseInt('9.8') == 10);

/* Egzersiz-4
-Boolean değeri, doğru veya yanlıştır.
    Doğruluk değeri sağlayan üç JavaScript ifadesi yazın.
    Yanlış değer sağlayan üç JavaScript ifadesi yazın.
*/
console.log(11 == "11");
console.log(1 == true);
console.log(undefined == null);

console.log("deneme" == "deneme2");
console.log(0 === false);
console.log(undefined === null);

/* Egzersiz-5
-console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
    4 > 3 true
    4 >= 3 true
    4 < 3 false
    4 <= 3 false 
    4 == 4 true
    4 === 4 true
    4 != 4 false
    4 !== 4 false
    4 != '4' false
    4 == '4' true
    4 === '4' false
    Python ve jargonun uzunluğunu bulun ve yanlış bir karşılaştırma ifadesi yapın.
*/
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

/* Egzersiz-6
-console.log() kullanmadan önce aşağıdaki ifadelerin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
    4 > 3 && 10 < 12 true
    4 > 3 && 10 > 12 false
    4 > 3 || 10 < 12 true
    4 > 3 || 10 > 12 true
    !(4 > 3) false
    !(4 < 3)true
    !(false) true
    !(4 > 3 && 10 < 12) false
    !(4 > 3 && 10 > 12) true
    !(4 === '4') true
    Hem dragon hem de python'da 'on' yoktur. string
*/
console.log(4 > 3 && 10 < 12 );
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log("Hem dragon hem de python'da 'on' yoktur.");

/* Egzersiz-7
-Aşağıdaki etkinlikleri yapmak için Date nesnesini kullanın.
    Bugün yıl nedir?
    Bugünün ayı rakam olarak nedir?
    Bugünün tarihi nedir?
    Bugün sayı olarak gün nedir?
    Şimdi saat kaç?
    Dakika kaç şimdi?
    1 Ocak 1970'den bugüne kadar geçen saniye sayısını bulun.
*/

let tarih = new Date();
let yil = tarih.getFullYear(); console.log(yil);
let ay = tarih.getMonth() + 1; console.log(ay);
let gun = tarih.getDate(); console.log(gun);
let bugununTarihi = tarih.getDate(); console.log(`Bugünün tarihi: ${gun}/${ay}/${yil}`);
let saat = tarih.getHours(); console.log(saat);
let dakika = tarih.getMinutes(); console.log(dakika);
let gecenZaman = tarih.getTime()/1000; console.log(gecenZaman); //saniye cinsinden
