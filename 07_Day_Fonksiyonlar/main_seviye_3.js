//Seviye-2

/* Egzersiz-1
-userIdGenerator işlevini değiştirin. userIdGeneratedByUser adında bir fonksiyon tanımlayın. Herhangi bir parametre almaz ancak prompt() kullanarak iki girdi alır. Girdilerden biri karakter sayısı, ikincisi ise üretilmesi gereken kimlik sayısıdır.
*/
function userIdGeneratedByUser() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let karakterSayisi = prompt("Lütfen karakter sayısı giriniz:")
    let kimlikAdedi = prompt("Kaç adet kimlik üretmek istiyorsunuz?")

    const totalUserId = []
    for (let j = 1; j <= kimlikAdedi; j++) {
        var userId = '';
        for (var i = 0; i < karakterSayisi; i++) {
            var randomIndex = Math.floor(Math.random() * characters.length);
            userId += characters.charAt(randomIndex);
        }
        totalUserId.push(userId)
    }
    totalUserId.map((value) => {
        console.log(value);
    })
}
// userIdGeneratedByUser()


/* Egzersiz-2
-rgbColorGenerator adında bir fonksiyon yazın ve bu fonksiyon rgb renkleri üretsin.

    rgbColorGenerator()
    rgb(125,244,255)
*/
function rgbColorGenerator() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}
console.log(rgbColorGenerator());

/* Egzersiz-3
-Bir dizide herhangi bir sayıda onaltılık renk döndüren bir arrayOfHexaColors fonksiyonu yazın.
*/
function arrayOfHexaColors() {
    let arrayHexa = []
    let randomNumber = Math.floor(Math.random() * 11)
    for (let i = 0; i <= randomNumber; i++) {
        let hexadecimal = ['#']
        for (let j = 1; j <= 6; j++) {
            let randomHexa = Math.floor(Math.random() * 16).toString(16)
            hexadecimal.push(randomHexa)

        }
        arrayHexa.push(hexadecimal.join(''))
    }
    return arrayHexa
}
console.log(arrayOfHexaColors());


/* Egzersiz-4
-Bir dizide herhangi bir sayıda RGB rengi döndüren bir arrayOfRgbColors fonksiyonu yazın.
*/
function arrayOfRgbColors() {
    let arrayRgb = []
    let randomNumber = Math.floor(Math.random() * 11)
    for (let i = 0; i <= randomNumber; i++) {
        arrayRgb.push(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`)
    }
    return arrayRgb
}
console.log(arrayOfRgbColors());

/* Egzersiz-5
-Hexa rengini rgb'ye dönüştüren ve bir rgb rengi döndüren convertHexaToRgb fonksiyonunu yazın.
*/
function convertHexaToRgb(hex) {
    hex = hex.replace(/^#/, '');

    var bigint = parseInt(hex, 16);

    var red = (bigint >> 16) & 255;
    var green = (bigint >> 8) & 255;
    var blue = bigint & 255;

    var rgbColor = "RGB(" + red + ", " + green + ", " + blue + ")";

    return rgbColor;
}
console.log(convertHexaToRgb("#1a2b3c"));

/* Egzersiz-6
-Rgb'yi hexa rengine dönüştüren ve bir hexa rengi döndüren convertRgbToHexa fonksiyonunu yazın.
*/
function convertRgbToHexa(r, g, b) {
    let hexa = ['#']
    for (let i = 0; i < arguments.length; i++) {
        const hex = arguments[i].toString(16);
        hex.length == 1 ? hexa.push("0" + hex) : hexa.push(hex);
    }

    return hexa.join("")
}
console.log(convertRgbToHexa(11, 212, 213));

/* Egzersiz-7
-Herhangi bir sayıda hexa veya rgb renk üretebilen bir generateColors fonksiyonu yazın.

    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
*/
function generateColors(type, number) {
    if (type == "hexa") {
        let arrayHexa = []
        for (let i = 0; i < number; i++) {
            let hexadecimal = ['#']
            for (let j = 1; j <= 6; j++) {
                let randomHexa = Math.floor(Math.random() * 16).toString(16)
                hexadecimal.push(randomHexa)
            }
            arrayHexa.push(hexadecimal.join(''))
        }
        return arrayHexa
    } else {
        let arrayRgb = []
        for (let i = 0; i < number; i++) {
            arrayRgb.push(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`)
        }
        return arrayRgb
    }
}
console.log(generateColors("hexa", 3));

/* Egzersiz-8
-shuffleArray fonksiyonunuzu çağırın, parametre olarak bir dizi alır ve karıştırılmış bir dizi döndürür
*/
function shuffleArray(dizi) {
    for (let i = dizi.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [dizi[i], dizi[j]] = [dizi[j], dizi[i]];
    }
    return dizi;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));

/* Egzersiz-9
-Fonksiyonunuzu factorial olarak adlandırın, parametre olarak bir tam sayı alır ve sayının faktöriyelini döndürür
*/
function factorial(sayi) {
    result = 1;
    for (let i = sayi; i > 1; i--) {
        result *= i
    }
    return result
}
console.log(factorial(5));

/* Egzersiz-10
-isEmpty fonksiyonunuzu çağırın, bir parametre alır ve boş olup olmadığını kontrol eder
*/
function isEmpty(check) {
    return check.length == 0 ? true : false
}

/* Egzersiz-11
-Fonksiyonunuzu sum olarak adlandırın, herhangi bir sayıda argüman alır ve toplamı döndürür.
*/
function sum() {
    let result = 0
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    return result
}
console.log(sum(1, 2, 3, 4, 5));

/* Egzersiz-12
-sumOfArrayItems adında bir fonksiyon yazın, bir dizi parametresi alır ve tüm öğelerin toplamını döndürür. Tüm dizi öğelerinin sayı türü olup olmadığını kontrol edin. Değilse makul bir geri bildirim döndürün.
*/
function sumOfArrayItems(dizi) {
    if (dizi.every(element => typeof element === 'number')) {
        let result = 0;
        for (let i = 0; i < dizi.length; i++) {
            result += dizi[i]
        }
        return result
    } else {
        return "Dizi elemanlarının toplanabilmesi için tüm elemanların Number tipinde olması gerekir."
    }
}
console.log(sumOfArrayItems([2, 4, 6, "deneme"]));

/* Egzersiz-13
-average adında bir fonksiyon yazın, bir dizi parametresi alır ve öğelerin ortalamasını döndürür. Tüm dizi öğelerinin sayı türünde olup olmadığını kontrol edin. Değilse makul bir geri bildirim döndürün.
*/
function average(dizi) {
    if (dizi.every(element => typeof element === 'number')) {
        let result = 0;
        for (let i = 0; i < dizi.length; i++) {
            result += dizi[i]
        }
        return result / dizi.length
    } else {
        return "Dizi elemanlarının ortalamasını hesaplamak için tüm elemanların Number tipinde olması gerekir."
    }
}
console.log(average([2, 4, 6, 8]));

/* Egzersiz-14
-modifyArray adında bir fonksiyon yazın, diziyi parametre olarak alır ve dizinin beşinci öğesini değiştirir ve diziyi döndürür. Eğer dizi uzunluğu beşten az ise 'item not found' döndürür.

    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
        ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
        ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
        'Not Found'
*/
function modifyArray(dizi) {
    console.log(dizi[4]);
    if (dizi.length >= 5) {
        dizi[4] = dizi[4].toLocaleUpperCase()
        return dizi
    } else {
        return "item not found"
    }

}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));

/* Egzersiz-15
-Bir sayının asal sayı olup olmadığını kontrol eden isPrime adında bir fonksiyon yazınız.
*/
function isPrime(sayi) {
    for (let i = 2; i < sayi; i++) {
        if (sayi % i == 0) {
            return "Sayı asal değildir.";
        }
    }
    return "Sayı asaldır."
}
console.log(isPrime(17));

/* Egzersiz-16
-Dizideki tüm öğelerin benzersiz olup olmadığını kontrol eden bir fonksiyon yazınız.
*/
function uniqueArray(dizi) {
    for (let i = 0; i < dizi.length; i++) {
        if (i !== dizi.indexOf(dizi[i])) {
            return "Dizideki elemanlar benzersiz değildir."
        }
    }
    return "Dizideki elemanlar benzersizdir."
}
console.log(uniqueArray([1, 2, 3, 4, 5, 6]));

/* Egzersiz-17
-Dizideki tüm öğelerin aynı veri türünde olup olmadığını kontrol eden bir fonksiyon yazın.
*/
function typeChecker(dizi) {
    let firstType = typeof dizi[0]
    return dizi.every((value) => typeof value == firstType ? true : false)
}
console.log(typeChecker([1, 2, 3, "selam"]));

/* Egzersiz-18
-JavaScript değişken adı $ veya _ dışında özel karakterleri veya sembolleri desteklemez. Bir değişkenin geçerli veya geçersiz değişken olup olmadığını kontrol eden isValidVariable fonksiyonunu yazınız.
*/
function isValidVariable(name) {

    if (!/^[a-zA-Z]$/.test(name[0])) {
        return false;
    }

    // Değişken adının geri kalan kısmında sadece harf, rakam, $ veya _ karakterlerini içerip içermediğini kontrol et
    return !/[^a-zA-Z_$]/g.test(name);
}
console.log(isValidVariable("ber_ke"));

/* Egzersiz-19
-0-9 aralığında yedi rastgele sayıdan oluşan bir dizi döndüren bir fonksiyon yazın. Tüm sayılar benzersiz olmalıdır.

    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
*/
function randomNumbersArray() {
    const uniqueNumbers = new Set();

    while (uniqueNumbers.size < 7) {
        const randomNumber = Math.floor(Math.random() * 10);
        uniqueNumbers.add(randomNumber);
    }

    return Array.from(uniqueNumbers);
}
console.log(randomNumbersArray());

/* Egzersiz-20
-reverseCountries adında bir fonksiyon yazın, ülkeler dizisini alır ve önce diziyi kopyalar ve orijinal dizinin tersini döndürür
*/
function reverseCountries(dizi) {
    let newArray = []
    for(let i=dizi.length-1; i>=0; i--){
        newArray.push(dizi[i])
    }
    return newArray
}
console.log(reverseCountries(countries));











