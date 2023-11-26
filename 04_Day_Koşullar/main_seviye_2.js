// Seviye-2

/* Egzersiz-1
-Öğrencilere puanlarına göre not verebilecek bir kod yazın:
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/
let not = prompt("Öğrencinin notunu giriniz:")
switch(true){
    case not >=90 && not<=100:
        console.log("Öğrencinin harf notu A");
        break;
    case not >=70 && not<=79:
        console.log("Öğrencinin harf notu B");
        break;
    case not >=60 && not<=69:
        console.log("Öğrencinin harf notu C");
        break;
    case not >=50 && not<=59:
        console.log("Öğrencinin harf notu D");
        break;
    case not >=0 && not<=49:
        console.log("Öğrencinin harf notu F");
        break;
    default:
        console.log("0 ile 100 aralığında bir not giriniz");
}

/* Egzersiz-2
-Mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin. Değerler :
    Eylül, Ekim veya Kasım, mevsim sonbahardır.
    Aralık, Ocak veya Şubat, mevsim kıştır.
    Mart, Nisan veya Mayıs mevsimi bahardır
    Haziran, Temmuz veya Ağustos, mevsim yazdır
*/
let girdi = prompt("Lütfen bir ay giriniz:")
let ay = girdi.toLocaleLowerCase()

if( ay == "eylül" || ay == "ekim" || ay == "kasım"){
    console.log("Mevsim sonbahar.");
} else if( ay == "aralık" || ay == "ocak" || ay == "şubat"){
    console.log("Mevsim kış.");
} else if( ay == "mart" || ay == "nisan" || ay == "mayıs"){
    console.log("Mevsim ilkbahar.");
} else if( ay == "haziran" || ay == "temmuz" || ay == "ağustos"){
    console.log("Mevsim yaz.");
} else {
    console.log("Lütfen bir mevsim giriniz!");
}

/* Egzersiz-3
-Bir günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin. Komut dosyanız girdi olarak gün alacaktır.
*/
let girdi2 = prompt("Lütfen bir gün giriniz:")
let gün = girdi2.toLocaleLowerCase();

if( gün == "pazartesi" || gün == "salı" || gün == "çarşamba" || gün == "perşembe" || gün == "cuma"){
    console.log(`${gün} iş günüdür.`);
} else if( gün == "cumartesi" || gün == "pazar"){
    console.log(`${gün} haftasonudur.`);
} else {
    console.log("Lütfen bir gün giriniz!");
}

