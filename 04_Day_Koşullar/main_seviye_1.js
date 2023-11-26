// Seviye-1

/* Egzersiz-1
-prompt(“Enter your age:”) ile kullanıcı girdisi alın. Kullanıcı 18 veya daha büyükse, geri bildirimde bulunun:'Sürecek kadar yaşlısınız', ancak 18 değilse, 18 yaşına girmesi gereken yıl sayısını beklemeye başlayarak başka bir geri bildirim verin.
*/
// let yas = prompt("Yaşınızı girin:")
// alert(yas >= 18 ? "Araba sürecek kadar yaşlısınız." : `${18-yas} yıl sonra araba sürebilirsiniz.`)

/* Egzersiz-2
-if… else kullanarak myAge ve yourAge değerlerini karşılaştırın. Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin. Yaşı girdi olarak almak için komut prompt(“Enter your age:”) kullanın.
*/
// let benimYasim = prompt("Kendi yaşını gir:")
// let seninYasin = prompt("Arkadaşının yaşını gir:")
// if(benimYasim > seninYasin){
//     console.log("Ben senden daha büyüğüm")
// } else if (benimYasim == seninYasin){
//     console.log("Yaşlarımız aynı")
// } else {
//     console.log("Sen benden daha büyüksün.")
// }


/* Egzersiz-3
-a, b'den büyükse, 'a b'den büyüktür', aksi takdirde 'a, b'den küçüktür' döndürür. şekilde uygulamaya çalışın
    using if else
    ternary operator.
*/
let a = 5;
let b = 7;
if(a > b){
    console.log("a, b'den büyüktür")
} else if (a == b){
    console.log("a, b'ye eşittir.")
} else {
    console.log("a, b'den küçüktür.")
}

a > b ? "a, b'den büyüktür." : "a, b'den küçüktür."


/* Egzersiz-4
-Çift sayılar 2'ye tam bölünür kalan sıfırdır. Bir sayının çift olup olmadığını veya JavaScript kullanıp kullanmadığını nasıl kontrol edersiniz?
*/
let sayiKontrol = prompt("Çift sayı kontrolü için sayı giriniz:")
alert(sayiKontrol % 2 === 0 ? "Sayı çifttir." : "Sayı tektir.")