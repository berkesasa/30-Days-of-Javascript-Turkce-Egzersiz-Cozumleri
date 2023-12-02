// Seviye-3

/* Egzersiz-1
-'Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.' Bu cümledeki aşk kelimesini sayın.
*/
let ask = 'Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.'
console.log(ask.match(/aşk/gi).length);

/* Egzersiz-2
-Aşağıdaki cümledeki tüm çünkü sayısını saymak için match() kullanın:'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
*/
console.log(cunkuText.match(/çünkü/gi).length);

/* Egzersiz-3
-Aşağıdaki metni temizleyin ve en sık kullanılan kelimeyi bulun (ipucu, değiştirme ve normal ifadeleri kullanın)
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
*/
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.'
let cleanedSentence = sentence.replace(/[^\w\s\.]/g, '')
console.log(cleanedSentence);

/* Egzersiz-4
-Aşağıdaki metinden sayıları çıkararak kişinin yıllık toplam gelirini hesaplayın.
    'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.'
*/
let aylikMaas = 5000
let yillikİkramiye = 10000
let aylikOnlineGelir = 15000
console.log("Yıllık Gelir: ", (5000*12 + 10000 + 15000*12) );

