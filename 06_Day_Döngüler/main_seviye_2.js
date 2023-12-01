//Seviye-2

/* Egzersiz-1
-Herhangi bir sayıda rastgele id numarası atayan bir fonksiyon yazın
*/
let id = []
let length = Math.floor(Math.random() * 21)
for (let i = 1; i <= length; i++) {
    let randomId = Math.floor(Math.random() * 21).toString(36)
    id.push(randomId)
}
console.log(id.join(''));


/* Egzersiz-2
-Rastgele hexadecimal sayı üreten bir fonksiyon yazın.
*/
let hexadecimal = ['#']
for (let i = 1; i <= 6; i++) {
    let randomHexa = Math.floor(Math.random() * 16).toString(16)
    hexadecimal.push(randomHexa)
}
console.log(hexadecimal.join(''));

/* Egzersiz-3
-Rastgele bir rgb renk numarası oluşturan fonksiyon yazın.
*/
console.log(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`);

/* Egzersiz-4
-Aşağıdaki array'i kullanarak rastgele yeni bir dizi oluşturun.
    let countr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
let countr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let newCountr = []
for (let i = 0; i < countr.length; i++) {
    newCountr[i] = countr[Math.floor(Math.random() * countr.length)]
}
console.log(newCountr);

/* Egzersiz-5
-Aynı array'i kullanarak ülkelerin harf uzunluklarını içeren bir dizi olşturun'.
*/
let countrLengths = []
for (let i = 0; i < countr.length; i++) {
    countrLengths[i] = countr[i].length
}
console.log(countrLengths);

/* Egzersiz-6
-Yukarıdaki diziyi kullanarak aşağıdaki diziyi oluşturun:
    [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/
let concatArray = []
for (let i = 0; i < countr.length; i++) {
    let indexArray = []
    indexArray.push((countr[i].toLocaleUpperCase()[0]) + (countr[i].toLocaleLowerCase().slice(1, countr[i].length)))
    indexArray.push(countr[i].slice(0, 3).toLocaleUpperCase())
    indexArray.push(countrLengths[i])
    concatArray[i] = indexArray
}
console.log(concatArray);

/* Egzersiz-7
-Yukarıdaki ülkeler dizisinde "land" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. "land" içeren ülkeler varsa bunu dizi halinde yazdırın.
*/
let landSearch = []
for (let i = 0; i < countr.length; i++) {
    countr[i] = countr[i].toLocaleLowerCase()
    if (countr[i].includes("land")) {
        landSearch.push((countr[i].toLocaleUpperCase()[0]) + (countr[i].toLocaleLowerCase().slice(1, countr[i].length)))
    }
}
console.log(landSearch);

/* Egzersiz-8
-Yukarıdaki ülkeler dizisinde "ia" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. "ia" içeren ülkeler varsa bunu dizi halinde yazdırın..
*/
let iaSearch = []
for (let i = 0; i < countr.length; i++) {
    countr[i] = countr[i].toLocaleLowerCase()
    if (countr[i].includes("ia")) {
        iaSearch.push((countr[i].toLocaleUpperCase()[0]) + (countr[i].toLocaleLowerCase().slice(1, countr[i].length)))
    }
}
console.log(iaSearch);

/* Egzersiz-9
-Yukarıdaki ülkeler dizisini kullanarak en fazla karakter içeren ülkeyi bulun.
*/
console.log(countr[countrLengths.indexOf(Math.max(...countrLengths))]);

/* Egzersiz-10
-Yukarıdaki ülkeler dizisini kullanarak, yalnızca 5 karakter içeren ülkeyi bulun.
*/
let fivesArray = []
let fivesWord = []
countrLengths.map((value, index) =>{
    if(value == 5){
        fivesArray.push(index)
    }
})
for(let i=0; i<fivesArray.length; i++){
    fivesWord[i] = countr[fivesArray[i]]
}
console.log(fivesWord);


