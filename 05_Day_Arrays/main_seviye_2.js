//Seviye-2

/* Egzersiz-2
-Önce bütün noktalama işaretlerini kaldırın ve ve string ifadeyi dizi olarak değiştirin ve dizideki kelime sayısını sayın
*/
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let safText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
let textDizisi = safText.split(' ');
console.log(textDizisi.length);

/* Egzersiz-3
-Aşşağıdaki alışveriş sepetindeki elemanları ekleyin, silin , düzenleyin.

    const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

        Eğer alışveriş sepetine zaten 'Meat' eklenmemişse en başa ekleyin.

        Eğer alışveriş sepetine zaten 'Sugar' eklenmemişse en sona ekleyin.

        Eğer bala alerjiniz varsa 'Honey' elemanını diziden silin.

        'Tea' elemanını 'Green Tea' olarak güncelleyin.
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
console.log(shoppingCart.splice(shoppingCart.indexOf('Honey'), 1));
shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea"
console.log(shoppingCart);

/* Egzersiz-4
-countries dizisinde 'Ethiopia' olup olmadığını kontrol edin. Eğer varsa 'ETHIOPIA' yazdırın. eğer yoksa bunu countries dizisine ekleyin.
*/
if (countries.indexOf('Ethiopia') != -1) {
    console.log(countries[countries.indexOf('Ethiopia')].toLocaleUpperCase());
} else {
    countries.push('Ethiopia')
}

/* Egzersiz-5
-webTechs dizisinde Sass olup olmadığını kontrol edin eğer varsa 'Sass is a CSS preprocess' yazdırın. Eğer yoksa diziye Sass elemanını ekleyip diziyi yazdırın
*/
if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS processors");
} else {
    webTechs.push("Sass");
    console.log(webTechs);
}

/* Egzersiz-6
-Aşağıdaki iki değişkeni birleştirin ve bir fullStack değişkeninde atayın.

    const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const  backEnd = ['Node','Express', 'MongoDB']
    console.log(fullStack)
*/
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]
console.log(fullStack);