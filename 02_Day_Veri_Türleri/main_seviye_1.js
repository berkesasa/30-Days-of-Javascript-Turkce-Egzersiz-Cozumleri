/* Seviye-1

/* Egzersiz-1
-Challenge adında bir değişken tanımlayın ve '30 Days Of JavaScript' başlangıç ​​değerine atayın
*/
let Challenge = "30 Days Of JavaScript";

/* Egzersiz-2
-console.log() kullanarak tarayıcı konsolunda değişkeni yazdırın
*/
console.log(Challenge);

/* Egzersiz-3
-console.log() kullanarak tarayıcı konsolunda dizenin length değerini yazdırın
*/
console.log(Challenge.length);

/* Egzersiz-4
-toUpperCase() yöntemini kullanarak tüm dize karakterlerini büyük harflerle değiştirin
*/
let upperChallange = Challenge.toLocaleUpperCase();
console.log(upperChallange);

/* Egzersiz-5
-toLowerCase() yöntemini kullanarak tüm dize karakterlerini küçük harflerle değiştirin
*/
let lowerChallange = Challenge.toLocaleLowerCase();
console.log(lowerChallange);

/* Egzersiz-6
-substr() veya substring() yöntemini kullanarak string'in ilk kelimesini kesin-silin (dilimleyin)
*/
let substringChallenge = Challenge.substring(3,Challenge.length);
console.log(substringChallenge);

/* Egzersiz-7
-Days Of JavaScript ifadesini 30 Days Of JavaScript'ten ayırın
*/
let slicedChallenge = Challenge.substring(0,3);
console.log(slicedChallenge);

/* Egzersiz-8
-includes() yöntemini kullanarak string'in Script kelimesini içerip içermediğini kontrol edin
*/
console.log(Challenge.includes('Script'));

/* Egzersiz-9
-split() yöntemini kullanarak string öğesini bir array'ye bölün
*/
console.log(Challenge.split());

/* Egzersiz-10
-30 Days Of JavaScript dizesini split() yöntemini kullanarak boşlukta bölün
*/
console.log(Challenge.split(' '));

/* Egzersiz-11
-'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dizeyi virgülden split ve bir dizi olarak değiştirin
*/
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(', '));

/* Egzersiz-12
-replace() yöntemini kullanarak 30 Days of JavaScript'i 30 Days of Python olarak değiştirin
*/
let replacingText = "30 Days of JavaScript";
console.log(replacingText.replace('JavaScript', 'Python'));

/* Egzersiz-13
-'30 Days Of JavaScript' dizesinde dizin 15'teki karakter nedir? charAt() yöntemini kullanın
*/
console.log(Challenge.charAt(15));

/* Egzersiz-14
-charCodeAt() kullanan '30 Days Of JavaScript' dizesindeki J karakter kodu nedir?
*/
console.log(Challenge.charCodeAt(Challenge.indexOf('J')));

/* Egzersiz-15
-30 Days of JavaScript'te a öğesinin ilk oluşumunun konumunu belirlemek için indexOf kullanın
*/
console.log(Challenge.indexOf('a'));

/* Egzersiz-16
-30 Days of JavaScript'te a öğesinin son oluşumunun konumunu belirlemek için lastIndexOf kullanın
*/
console.log(Challenge.lastIndexOf('a'));

/* Egzersiz-17
-Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için indexOf kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
*/
let cunkuText = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır"
console.log(cunkuText.indexOf('çünkü'));

/* Egzersiz-18
-Aşağıdaki cümlede çünkü kelimesinin son geçtiği yeri bulmak için lastIndexOf kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
*/
console.log(cunkuText.lastIndexOf('çünkü'));

/* Egzersiz-19
-Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için search kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
*/
console.log(cunkuText.search('çünkü'));

/* Egzersiz-20
-Bir dizgenin başındaki ve sonundaki boşlukları kaldırmak için trim() kullanın. Örneğin '30 Days Of JavaScript'
*/
console.log(Challenge.trim());

/* Egzersiz-21
-30 Days Of JavaScript dizesiyle startsWith() yöntemini kullanın ve sonucu doğru yapın
*/
console.log(Challenge.startsWith('30'));

/* Egzersiz-22
-30 Days Of JavaScript dizesiyle endsWith() yöntemini kullanın ve sonucu doğru yapın
*/
console.log(Challenge.endsWith('JavaScript'));

/* Egzersiz-23
-JavaScript'in 30 Günü'ndeki tüm a'leri bulmak için match() yöntemini kullanın
*/
console.log(Challenge.match('a'));

/* Egzersiz-24
-concat() kullanın ve '30 Days of' ve 'JavaScript'i tek bir dize olan '30 Days of JavaScript' ile birleştirin
*/
let egzersiz24_1 = "30 Days of";
let egzersiz24_2 = " JavaScript";
console.log(egzersiz24_1.concat(egzersiz24_2));

/* Egzersiz-25
-30 Gün JavaScript'i 2 kez yazdırmak için repeat() yöntemini kullanın
*/
console.log(Challenge.repeat(2));
