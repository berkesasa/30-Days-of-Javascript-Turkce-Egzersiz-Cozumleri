// Seviye-3

/* Egzersiz-1
-Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun. Saat ve dakika her zaman iki basamaklı olmalıdır
    (7 saat 07 ve 5 dakika 05 olmalıdır)
        YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
let tarih3 = new Date();
let yil3 = tarih3.getFullYear();
let ay3 = tarih3.getMonth() + 1;
let gun3 = tarih3.getDate();
let saat3 = tarih3.getHours();
let dakika3 = tarih3.getMinutes();
console.log(`Bugünün tarihi: ${gun3<10 ? `0${gun3}` : `${gun3}`}/${ay3<10 ? `0${ay3}` : `${ay3}`}/${yil3} ${saat3<10 ? `0${saat3}` : `${saat3}`}:${dakika3<10 ? `0${dakika3}` : `${dakika3}`}`);