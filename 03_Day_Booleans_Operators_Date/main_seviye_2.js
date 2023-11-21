// Seviye-2

/* Egzersiz-1
-Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h)
*/
// let taban = prompt("Üçgenin taban uzunluğunu giriniz:");
// let yukseklik = prompt("Üçgenin yüksekliğini giriniz:");
// let ucgenAlan = alert(`Üçgenin alanı: ${(taban*yukseklik)/2}`);

/* Egzersiz-2
-Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın (çevre = a + b + c)
*/
// let ucgenIlkKenar = prompt("Üçgenin birinci kenar uzunluğunu giriniz:");
// let ucgenIkıncıKenar = prompt("Üçgenin ikinci kenar uzunluğunu giriniz:");
// let ucgenUcuncuKenar = prompt("Üçgenin üçüncü kenar uzunluğunu giriniz:");
// let ucgenCevre = alert(`Üçgenin çevresi: ${(ucgenIlkKenar + ucgenIkıncıKenar + ucgenUcuncuKenar)}`);

/* Egzersiz-3
-Komut istemini kullanarak uzunluk ve genişliği alın ve bir dikdörtgenin alanını hesaplayın (alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik))
*/
// let dikdortgenUzunluk = prompt("Dikdörtgenin uzunluğunu giriniz:");
// let dikdortgenGenislik = prompt("Dikdörtgenin genişliğini giriniz:");
// let dikdortgenAlan = alert(`Dikdörtgenin alanı: ${(dikdortgenUzunluk * dikdortgenGenislik)}`);

/* Egzersiz-4
-Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14.
*/
// let yaricap = prompt("Yarıçapı giriniz:");
// const pisayisi = Math.PI;
// let daireninAlani = prompt(`Dairenin Alanı: ${yaricap*yaricap*pisayisi}`);
// let daireninCevresi = prompt(`Dairenin Çevresi: ${2*yaricap*pisayisi}`);

/* Egzersiz-5
-y = 2x-2'nin eğimini, x kesme noktasını ve y kesme noktasını hesaplayın
*/
let y = "2x-2"
console.log("Denklemin eğimi: 2, x kesme noktası: 1, y kesme noktası: -2");

/* Egzersiz-6
-Eğim m = (y2-y1)/(x2-x1). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun
*/
console.log(`Eğim (m): ${(10-2)/(6-2)}`);

/* Egzersiz-7
-Yukarıdaki iki sorunun eğimini karşılaştırın.
*/
console.log("Yukarıda yer alan iki sorunun eğimleri eşittir.");

/* Egzersiz-8
-y'nin değerini hesaplayın (y = x2 + 6x + 9). Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun.
*/
console.log("y=0 için x=-3");

/* Egzersiz-9
-Kullanıcıdan saat ve saat başına oran girmesini isteyen bir komut dosyası yazın. Kişinin ücretini hesapla?
*/
// let isciSaat = prompt("Saat giriniz:");
// let isciSaatBasinaOran = prompt("Saat başına oran giriniz:");
// console.log(`Haftalık Kazancınız: ${isciSaat*isciSaatBasinaOran}`);

/* Egzersiz-10
-Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.
*/
// let isimAl2 = prompt("İsminizi Giriniz:");
// console.log(`${isimAl2.length > 7 ? "Adınız Uzun" : "Adınız Kısa"}`);

/* Egzersiz-11
-Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın.
*/
// let isimAl = prompt("İsminizi Giriniz:");
// let soyIsimAl = prompt("Soyadınızı Giriniz:");
// console.log(`${isimAl} olan adınız, ${soyIsimAl} olan soyadınızdan daha ${isimAl.length > soyIsimAl.length ? "uzun" : "kısa"}`);

/* Egzersiz-12
-İki değişken myAge ve yourAge bildirin ve bunlara başlangıç değerleri ile myAge ve yourAge atayın.
*/
let myAge = 25;
let yourAge = 23;
console.log(`Ben senden ${Math.abs(myAge-yourAge)} yaş ${myAge>yourAge ? "büyüğüm" : "küçüğüm"}`);

/* Egzersiz-13
-İstemi kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.
*/
// let dogumYili = prompt("Hangi yılda doğdunuz:")
// let tarih = new Date()
// let kullaniciYasi = tarih.getFullYear() - dogumYili
// console.log(`${kullaniciYasi} yaşındasınız. Araba kullanmak için ${kullaniciYasi >= 18 ? `yeterli yaştasınız` : `${18-kullaniciYasi} yıl beklemelisiniz.`}`);

/* Egzersiz-14
-Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım
*/
// let yasGir = prompt("Yaşınızı giriniz:");
// let yasSaniye = yasGir * 365 * 24 * 60 * 60
// console.log(yasSaniye);

/* Egzersiz-15
-Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun
*/
let tarihYeni = new Date();
let yilYeni = tarihYeni.getFullYear();
let ayYeni = tarihYeni.getMonth() + 1;
let gunYeni = tarihYeni.getDate();
let saatYeni = tarihYeni.getHours();
let dakikaYeni = tarihYeni.getMinutes();
console.log(`Bugünün tarihi: ${gunYeni}/${ayYeni}/${yilYeni} ${saatYeni}:${dakikaYeni}`);



