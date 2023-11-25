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
const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
console.log(shoppingCart.splice(shoppingCart.indexOf('Honey'),1));
shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea"
console.log(shoppingCart);

/* Egzersiz-4
-countries dizisinde 'Ethiopia' olup olmadığını kontrol edin. Eğer varsa 'ETHIOPIA' yazdırın. eğer yoksa bunu countries dizisine ekleyin.
*/
if(countries.indexOf('Ethiopia') != -1){
    console.log(countries[countries.indexOf('Ethiopia')].toLocaleUpperCase());
} else{
    countries.push('Ethiopia')
}