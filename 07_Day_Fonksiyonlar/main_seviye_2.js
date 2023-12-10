//Seviye-2

/* Egzersiz-1
-Doğrusal denklem şu şekilde hesaplanır: ax + by + c = 0. Doğrusal denklemin değerini hesaplayan bir fonksiyon yazın, solveLinEquation.
*/
function solveLinEquation(a, b, c) {
    if (a === 0 && b === 0) {
        return "Bu doğrusal bir denklem değildir.";
    } else if (a === 0) {
        let y = -c / b
        return { y: y }
    } else if (b === 0) {
        let x = -c / a
        return { x: x }
    }
    var x = -c / a
    var y = -c / b

    return { x: x, y: y }
}
console.log(solveLinEquation(2, -3, 6));

/* Egzersiz-2
-İkinci dereceden denklem şu şekilde hesaplanır: ax2 + bx + c = 0. İkinci dereceden denklemin değerini veya değerlerini hesaplayan bir fonksiyon yazın, solveQuadEquation.
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/
function solveQuadEquation(a, b, c) {
    let diskriminant = (b * b) - 4 * a * c

    if (diskriminant < 0) {
        return "Reel kok yok";
    }

    var kok1 = (-b + Math.sqrt(diskriminant)) / (2 * a);
    var kok2 = (-b - Math.sqrt(diskriminant)) / (2 * a);

    return [kok1, kok2]
}
console.log(solveQuadEquation(1, -1, -2));

/* Egzersiz-3
-printArray adında bir fonksiyon tanımlayın. Parametre olarak dizi alır ve dizinin her bir değerini yazdırır.
*/
function printArray(dizi) {
    dizi.map((value) => {
        console.log(value);
    })
}
printArray([1, 2, 3])

/* Egzersiz-4
-Zamanı bu biçimde gösteren showDateTime adında bir işlev yazın: 08/01/2020 04:08 Date nesnesini kullanarak.

    showDateTime()
    08/01/2020 04:08
*/
function showDateTime() {
    let tarih = new Date();
    let yil = tarih.getFullYear();
    let ay = tarih.getMonth() + 1;
    let gun = tarih.getDate();
    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    console.log(`${gun}/${ay}/${yil} ${saat}:${dakika}`);
}
showDateTime()

/* Egzersiz-5
-swapValues adında bir fonksiyon tanımlayın. Bu fonksiyon x değerini y ile değiştirir.

    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
*/
function swapValues(x, y) {
    let newX = y
    let newY = x
    return { x: newX, y: newY }
}
console.log(swapValues(1, 2));

/* Egzersiz-6
-reverseArray adında bir fonksiyon tanımlayın. Parametre olarak dizi alır ve dizinin tersini döndürür (method kullanmayın).

    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
*/
function reverseArray(dizi) {
    let reverseArray = []
    for (let i = 0; i < dizi.length; i++) {
        reverseArray[i] = dizi[dizi.length - 1 - i]
    }
    return reverseArray
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

/* Egzersiz-7
-capitalizeArray adında bir fonksiyon tanımlayın. Parametre olarak array alır ve - capitalizedarray değerini döndürür.
*/
function capitalizeArray(dizi) {
    var capitalizedArray = [];

    for (var i = 0; i < dizi.length; i++) {
        if (typeof dizi[i] === 'string') {
            capitalizedArray.push(dizi[i].charAt(0).toUpperCase() + dizi[i].slice(1));
        } else {
            capitalizedArray.push(dizi[i]);
        }
    }

    return capitalizedArray;
}
console.log(capitalizeArray(["apple", "banana"]));

/* Egzersiz-8
-addItem adında bir fonksiyon tanımlayın. Parametre olarak bir öğe alır ve öğe eklendikten sonra bir dizi döndürür
*/
var defaultArray = [1, 2, 3]
function addItem(newItem, arr) {
    arr[arr.length] = newItem
    return arr
}
console.log(addItem(4, defaultArray));

/* Egzersiz-9
-removeItem adında bir fonksiyon tanımlayın. Bir indeks parametresi alır ve bir öğeyi kaldırdıktan sonra bir dizi döndürür
*/
var defaultArray = [1, 2, 3]
function removeItem(item, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            arr.splice(i, 1)
        }
    }
    return arr
}
console.log(removeItem(2, defaultArray));

/* Egzersiz-10
-sumOfNumbers adında bir fonksiyon tanımlayın. Bir sayı parametresi alır ve bu aralıktaki tüm sayıları toplar.
*/
function sumOfNumbers(aralik) {
    let result = 0
    for (let i = 0; i <= aralik; i++) {
        result += i
    }
    return result
}
console.log(sumOfNumbers(5));

/* Egzersiz-11
-sumOfOdds adında bir fonksiyon tanımlayın. Bir sayı parametresi alır ve bu aralıktaki tüm tek sayıları toplar.
*/
function sumOfOdds(aralik) {
    let result = 0
    for (let i = 0; i <= aralik; i++) {
        i % 2 !== 0 ? result += i : null
    }
    return result
}
console.log(sumOfOdds(5));

/* Egzersiz-12
-sumOfEven adında bir fonksiyon tanımlayın. Bir sayı parametresi alır ve bu aralıktaki tüm çift sayıları toplar.
*/
function sumOfEven(aralik) {
    let result = 0
    for (let i = 0; i <= aralik; i++) {
        i % 2 == 0 ? result += i : null
    }
    return result
}
console.log(sumOfEven(6));

/* Egzersiz-13
-evensAndOdds adında bir fonksiyon tanımlayın.Parametre olarak pozitif bir tamsayı alır ve sayıdaki çiftlerin ve teklerin sayısını sayar.
    evensAndOdds(100);
    Teklerin sayısı 50'dir.
    Çiftlerin sayısı 51'dir.
*/
function evensAndOdds(aralik) {
    let evens = 0
    let odds = 0
    for (let i = 0; i <= aralik; i++) {
        i % 2 !== 0 ? odds += 1 : evens += 1
    }

    console.log(`Çift sayılar: ${evens}\nTek sayılar: ${odds}`);
}
evensAndOdds(100);

/* Egzersiz-14  
-Herhangi bir sayıda argüman alan ve argümanların toplamını döndüren bir fonksiyon yazın

    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
*/
function sumOfRandomNumbers() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    return result
}
console.log(sumOfRandomNumbers(1, 2, 3));

/* Egzersiz-15
-RandomUserIp üreten bir fonksiyon yazınız.
*/
function RandomUserIp() {
    var octet1 = Math.floor(Math.random() * 256);
    var octet2 = Math.floor(Math.random() * 256);
    var octet3 = Math.floor(Math.random() * 256);
    var octet4 = Math.floor(Math.random() * 256);

    var ipAddress = octet1 + '.' + octet2 + '.' + octet3 + '.' + octet4;

    return ipAddress;
}
console.log(RandomUserIp());

/* Egzersiz-16
-Rastgele bir macAddress üreten bir fonksiyon yazın
*/
function getRandomHexByte() {
    var randomByte = Math.floor(Math.random() * 256); // 0-255 arasında rastgele bir sayı
    var hexString = randomByte.toString(16); // Sayıyı hexadecimal formata çevir

    // Hexadecimal stringi iki haneli yapmak için gerekirse başına 0 ekle
    if (hexString.length < 2) {
        hexString = '0' + hexString;
    }

    return hexString;
}

function macAddress() {
    var macPart1 = getRandomHexByte();
    var macPart2 = getRandomHexByte();
    var macPart3 = getRandomHexByte();
    var macPart4 = getRandomHexByte();
    var macPart5 = getRandomHexByte();
    var macPart6 = getRandomHexByte();

    var macAddress = macPart1 + ':' + macPart2 + ':' + macPart3 + ':' +
        macPart4 + ':' + macPart5 + ':' + macPart6
    return macAddress;

}
console.log(macAddress());

/* Egzersiz-17
-randomHexaNumberGenerator adında bir fonksiyon tanımlayın.Bu fonksiyon çağrıldığında rastgele bir onaltılık sayı üretir. İşlev onaltılık sayıyı döndürür.

    console.log(randomHexaNumberGenerator());
    '#ee33df'
*/
function randomHexaNumberGenerator() {
    let hexadecimal = ['#']
    for (let i = 1; i <= 6; i++) {
        let randomHexa = Math.floor(Math.random() * 16).toString(16)
        hexadecimal.push(randomHexa)
    }
    console.log(hexadecimal.join(''));
}
randomHexaNumberGenerator()

/* Egzersiz-18
-userIdGenerator adında bir fonksiyon tanımlayın. Bu fonksiyon çağrıldığında yedi karakterlik bir kimlik oluşturur. İşlev kimliği döndürür.

    console.log(userIdGenerator());
    41XTDbE
*/
function userIdGenerator() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    var userId = '';

    for (var i = 0; i < 7; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        userId += characters.charAt(randomIndex);
    }
    return userId;
}
console.log(userIdGenerator());

