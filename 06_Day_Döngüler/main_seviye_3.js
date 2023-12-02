//Seviye-3

/* Egzersiz-1
-Countries dizisini kopyalayın(Avoid mutation)
*/
const newCountries = [...countries]
console.log(newCountries);

/* Egzersiz-2
-Diziler değişebilir. Dizinin orjinalini değiştirmeden bir kopyasını oluşturun. Oluşturduğunuz diziyi alfabetik olarak sıralayın ve sortedCountries dizisine atayın
*/
const sortedCountries = [...countries].sort()
console.log(sortedCountries);

/* Egzersiz-3
-webTechs dizisini ve mernStack dizisini sıralayın
*/
let sortedWebTechs = [...webTechs].sort()
let sortedMernStack = [...mernStack].sort()
console.log(sortedMernStack);
console.log(sortedWebTechs);

/* Egzersiz-4
-countries arrayinden "land" sözüğü ile biten ülkeleri farklı bir diziye atayın
*/
let landArray = []
for(let i=0; i<countries.length; i++){
    if(countries[i].toLowerCase().endsWith("land")){
        landArray.push(countries[i])
    }
}
console.log(landArray);

/* Egzersiz-5
-countries arrayinden en uzun karakterli ülkeyi bulun
*/
let maxLengthWord = countries[0]
for(let i=1; i<countries.length; i++){
    if(countries[i].length > maxLengthWord.length){
        maxLengthWord = countries[i]
    }
}
console.log(maxLengthWord);

/* Egzersiz-6
-countries arrayinde 4 karakterli ülkeleri yazdırın
*/
let fourCharactersArray = []
for(let i=0; i<countries.length; i++){
    countries[i].length == 4 ? fourCharactersArray.push(countries[i]) : ""
}
console.log(fourCharactersArray);

/* Egzersiz-7
-countries arrayinde iki veya daha fazla kelime içieren ülkeleri farklı bir diziye atayın
*/
let twoWordsArray = []
for(let i=0; i<countries.length; i++){
    countries[i].split(" ").length >= 2 ? twoWordsArray.push(countries[i]) : ""
}
console.log(twoWordsArray);

/* Egzersiz-8
-countries arrayi ters çevirin ve ülkelerin tüm harflerini büyük hale gertirin
*/
let reverseCountries = []
for(let i=(countries.length-1); i>=0; i--){
    reverseCountries.push(countries[i].toUpperCase())
}
console.log(reverseCountries);









