//Seviye-1

/* Egzersiz-1
-Bir fullName fonksiyonu tanımlayın ve tam adınızı yazdırın.
*/
function fullName(){
    console.log("berke sasa");
}
fullName()

/* Egzersiz-2
-Bir fullName fonksiyonu tanımlayın ve şimdi parametre olarak firstName, lastName alır ve tam adınızı döndürür.
*/
function fullName2(firstName, lastName){
    console.log(firstName + " " + lastName);
}
fullName2("berke", "sasa")

/* Egzersiz-3
-Bir addNumbers fonksiyonu tanımlayın ve bu fonksiyon iki parametre alır ve toplamı döndürür.
*/
function addNumbers(numberOne, numberTwo) {
    return numberOne+numberTwo
}
console.log(addNumbers(5,3));

/* Egzersiz-4
-Bir dikdörtgenin alanı şu şekilde hesaplanır: alan = uzunluk x genişlik. Dikdörtgenin alanını hesaplayan bir fonksiyon yazın.
*/
function alanHesaplama(uzunluk, genislik) {
    return uzunluk*genislik
}
console.log(alanHesaplama(5,4));

/* Egzersiz-5
-Bir dikdörtgenin çevresi şu şekilde hesaplanır: çevre= 2x(uzunluk + genişlik). Dikdörtgenin çevresini hesaplayan bir fonksiyon yazınız.
*/
function cevreHesaplama(uzunluk, genislik) {
    return 2*uzunluk*genislik
}
console.log(cevreHesaplama(5,4));

/* Egzersiz-6
-Bir dikdörtgenler prizmasının hacmi şu şekilde hesaplanır: hacim = uzunluk x genişlik x yükseklik. DikdörtgenPrizma hacmini hesaplayan bir fonksiyon yazınız.
*/
function prizmaHacim(uzunluk, genislik, yukseklik) {
    return uzunluk*genislik*yukseklik
}
console.log(prizmaHacim(5,4,3));

/* Egzersiz-7
-Bir dairenin alanı şu şekilde hesaplanır: alan = π x r x r. Dairenin alanını hesaplayan bir fonksiyon yazınız.
*/
function daireAlan(yaricap) {
    const PI = Math.PI
    return PI*yaricap*yaricap
}
console.log(daireAlan(5));

/* Egzersiz-8
-Bir dairenin çevresi şu şekilde hesaplanır: çevre = 2πr. Dairenin çevresini hesaplayan bir fonksiyon yazın
*/
function daireCevresi(yaricap) {
    const PI = Math.PI
    return 2*PI*yaricap
}
console.log(daireCevresi(5));

/* Egzersiz-9
-Bir maddenin yoğunluğu şu şekilde hesaplanır: yoğunluk= kütle/hacim. Yoğunluğu hesaplayan bir fonksiyon yazınız.
*/
function daireCevresi(yaricap) {
    const PI = Math.PI
    return 2*PI*yaricap
}
console.log(daireCevresi(5));

/* Egzersiz-10
-Hız, hareket eden bir cismin kat ettiği toplam mesafenin geçen toplam süreye bölünmesiyle hesaplanır. Hareket eden bir nesnenin hızını hesaplayan bir fonksiyon yazınız, hız.
*/



/* Egzersiz-11
-Bir maddenin ağırlığı şu şekilde hesaplanır: ağırlık = kütle x yerçekimi. Ağırlığı hesaplayan bir fonksiyon yazınız.
*/



/* Egzersiz-12
-oC cinsinden sıcaklık şu formül kullanılarak oF'ye dönüştürülebilir: oF = (oC x 9/5) + 32. oC'yi oF'ye dönüştüren bir fonksiyon yazınız. convertCelsiusToFahrenheit.
*/



/* Egzersiz-13
-Vücut kitle indeksi (BMI) şu şekilde hesaplanır: bmi = Kg cinsinden ağırlık / m2 cinsinden (boy x boy). BMI'yi hesaplayan bir fonksiyon yazınız. BMI, 20 yaş ve üzeri yetişkinlerde farklı kilo gruplarını genel olarak tanımlamak için kullanılır. Aşağıda verilen bilgilere dayanarak bir kişinin zayıf, normal, aşırı kilolu veya obez olup olmadığını kontrol edin.

    -Aynı gruplar hem erkekler hem de kadınlar için geçerlidir.
    -Zayıf: VKİ 18,5'in altındadır
    -Normal kilolu: BMI 18,5 ila 24,9 arasındadır
    -Aşırı kilolu: BMI 25 ila 29,9 arasındadır
    -Obez: BMI 30 veya daha fazladır
*/



/* Egzersiz-14  
-checkSeason adında bir fonksiyon yazın, bir ay parametresi alır ve mevsimi döndürür: Sonbahar, Kış, İlkbahar veya Yaz.
*/



/* Egzersiz-15
-Math.max en büyük argümanını döndürür. Üç argüman alan ve Math.max yöntemini kullanmadan bunların maksimumunu döndüren findMax adlı bir fonksiyon yazın.
*/