// Seviye-1

/* Egzersiz-1
-Dog adında boş bir nesne oluşturun
*/
const dog = {}

/* Egzersiz-2
-Dog nesnesini konsola yazdırın
*/
console.log(dog);

/* Egzersiz-3
-Dog nesnesi için name, legs, color, age ve bark özelliklerini ekleyin. bark özelliği "woof woof" döndüren bir yöntemdir.
*/
dog.name = "Arnold"
dog.legs = 4
dog.color = "White"
dog.age = 6
dog.bark = function() {
    return "woof woof"
}

/* Egzersiz-4
-Dog nesnesinden name, legs, color, age ve bark değerini alın.
*/
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());


/* Egzersiz-5
-Dog nesnesi için yeni özellikler ayarlayın: breed, getDogInfo
*/
dog.breed = "Husky"
console.log(dog.breed);
dog.getDogInfo = function () {
    return `My dog name is ${this.name}. It is ${this.age} years old. It's breed is ${this.breed}.`
}
console.log(dog.getDogInfo());





