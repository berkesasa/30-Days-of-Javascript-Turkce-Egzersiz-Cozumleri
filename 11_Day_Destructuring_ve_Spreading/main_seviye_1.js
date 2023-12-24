// Seviye-1

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

/* Egzersiz-1
-E, pi, gravity, humanBodyTemp, waterBoilingTemp sabitleri dizisinin öğelerini destructuring işlemi uygulayın ve atayın.
*/
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

/* Egzersiz-2
-fin, est, sw, den, nor olarak ülkeler dizisinin öğelerini destructuring işlemi uygulayın ve atayın.
*/
let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor);

/* Egzersiz-3
-Dikdörtgen nesnesini özelliklerine veya anahtarlarına göre destructuring işlemi uygulayın.
*/
let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter);

