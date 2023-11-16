// Seviye-2

/* Egzersiz-1
-console.log() kullanarak aşağıdaki ifadeyi yazdırın:
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

/* Egzersiz-2
-console.log()'u kullanarak Rahibe Teresa'nın aşağıdaki alıntısını yazdırın:
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

/* Egzersiz-3
-'10' tipinin tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın.
*/
let egzersiz3_1 = '10';
let egzersiz3_2 = 10
console.log(egzersiz3_1 === egzersiz3_2);
console.log(parseInt(egzersiz3_1));

/* Egzersiz-4
-'10' tipinin tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın.
*/
console.log(parseFloat('9.8') === 10);

/* Egzersiz-5
-Hem python hem de jargonda 'on' ifadesinin bulunup bulunmadığını kontrol edin
*/
let python = "python";
let jargon = "jargon";
console.log(python.includes('on'));
console.log(jargon.includes('on'));

/* Egzersiz-6
-Umarım bu kurs jargonla dolu değildir. Cümlede jargon olup olmadığını kontrol edin.
*/
let egzersiz6 = "Umarım bu kurs jargonla dolu değildir."
console.log(egzersiz6.includes('jargon'));

/* Egzersiz-7
-0 ile 100 arasında rastgele bir sayı üretin.
*/
let egzersiz7 = Math.floor(Math.random()*101)
console.log(egzersiz7);

/* Egzersiz-8
-50 ile 100 arasında rastgele bir sayı üretin.
*/
let egzersiz8 = (Math.floor(Math.random() * 50)) + 50
console.log(egzersiz8);

/* Egzersiz-9
-Dahil olmak üzere 0 ile 255 arasında rastgele bir sayı oluşturun.
*/
let egzersiz9 = Math.floor(Math.random() * 256 )
console.log(egzersiz9);

/* Egzersiz-10
-Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin.
*/
let js = "Javascript"
let randomIndex = js[Math.floor(Math.random() * (js.length))]
console.log(randomIndex);

/* Egzersiz-11
-Aşağıdaki kalıbı yazdırmak için console.log() ve kaçış karakterlerini kullanın.
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
*/
let one = 1
let two = 2
let three = 3
let four = 4
let five = 5
console.log(`${Math.pow(one, 0)}\t${Math.pow(one, 1)}\t${Math.pow(one, 2)}\t${Math.pow(one, 3)}\t`);
console.log(`${Math.pow(two, 0)}\t${Math.pow(two, 1)}\t${Math.pow(two, 2)}\t${Math.pow(two, 3)}\t`);
console.log(`${Math.pow(three, 0)}\t${Math.pow(three, 1)}\t${Math.pow(three, 2)}\t${Math.pow(three, 3)}\t`);
console.log(`${Math.pow(four, 0)}\t${Math.pow(four, 1)}\t${Math.pow(four, 2)}\t${Math.pow(four, 3)}\t`);
console.log(`${Math.pow(five, 0)}\t${Math.pow(five, 1)}\t${Math.pow(five, 2)}\t${Math.pow(five, 3)}\t`);

/* Egzersiz-12
-substr kullanarak çünkü çünkü ifadesini aşağıdaki cümleden ayırın:'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
*/
let cunkuText2 = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır"
let matchCunkuText2 = cunkuText2.match(/çünkü çünkü/gi)
console.log(cunkuText2.substring(cunkuText2.indexOf(matchCunkuText2), cunkuText2.length));