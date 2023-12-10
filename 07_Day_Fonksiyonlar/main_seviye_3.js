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
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}
console.log(rgbColorGenerator());