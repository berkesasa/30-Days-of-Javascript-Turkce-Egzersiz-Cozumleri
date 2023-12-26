// Seviye-3

/* Egzersiz-1
-Tüm ülkelerin adını, başkentini, nüfusunu ve dillerini yazdıran ülkeler nesnesine destructuring işlemi uygulayın.
*/
countriesData.forEach(country => {
    let [name, capital, population, languages] = [country.name, country.capital, country.population, country.languages]
    console.log({ name: name, capital: capital, population: population, languages: languages });
});

/* Egzersiz-2
-Küçük bir geliştirici, öğrenci adını, becerilerini ve puanını okunması kolay olmayabilecek diziler halinde yapılandırır.Aşağıdaki dizi adını ada, beceriler dizisini becerilere, puan dizisini puanlara, JavaScript puanını jsScore'a ve React puanını React değişkenine tek bir satırda destructuring işlemi uygulayın.
    const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    console.log(name, skills, jsScore, reactScore)
    David (4) ["HTM", "CSS", "JS", "React"] 90 95
*/
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

const [name, skills, [, , jsScore, reactScore]] = student;

console.log(name, skills, jsScore, reactScore);

/* Egzersiz-3
-Diziyi bir structure nesnesine dönüştürebilen convertArrayToObject adlı bir fonksiyon yazın.

    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
    ]

    console.log(convertArrayToObject(students))
    [
        {
        name: 'David',
        skills: ['HTM','CSS','JS','React'],
        scores: [98,85,90,95]
        },
        {
        name: 'John',
        skills: ['HTM','CSS','JS','React'],
        scores: [85, 80,85,80]
        }
    ]
*/
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(students) {
    let student = students.map((student) => {
        const [name, skills, [, , jsScore, reactScore]] = student;
        return { name, skills, jsScore, reactScore };
    })
    return student
}
console.log(convertArrayToObject(students));

/* Egzersiz-4
-Öğrenci nesnesini orijinal nesneyi değiştirmeden newStudent'e kopyalayın.Yeni nesnede aşağıdakini ekleyin?
frontEnd beceri setlerine seviye 8 ile Bootstrap ekleyin
backEnd beceri setlerine 9. seviye Express'i ekleyin
dataBase beceri setlerine seviye 8 ile SQL ekleyin
dataScience beceri setlerine seviye olmadan SQL ekleyin
    const student = {
        name: 'David',
        age: 25,
        skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
        }
    }
Kopyalanan nesne çıktısı şöyle görünmelidir:

    {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
        {skill: 'HTML',level: 10},
        {skill: 'CSS',level: 8},
        {skill: 'JS',level: 8},
        {skill: 'React',level: 9},
        {skill: 'BootStrap',level: 8}
        ],
        backEnd: [
        {skill: 'Node',level: 7},
        {skill: 'GraphQL',level: 8},
        {skill: 'Express',level: 9}
        ],
        dataBase: [
        { skill: 'MongoDB',level: 7.5},
        { skill: 'SQL',level: 8}
        ],
        dataScience: ['Python','R','D3.js','SQL']
    }
    }
*/
const student2 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

let newStudent = { ...student2 }

newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 })
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 })
newStudent.skills.dataBase.push({ skill: 'MongoDB', level: 8 })
newStudent.skills.dataScience.push('SQL')

console.log(newStudent);