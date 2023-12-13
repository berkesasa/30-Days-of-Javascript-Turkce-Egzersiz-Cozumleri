// Seviye-2

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', "MERN"],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}


/* Egzersiz-1
-users nesnesinde birçok beceriye sahip olan kişiyi bulun.
*/
let maxSkills = 0;
let maxSkillsUser = null;

for (const user in users) {
    const skillsCount = users[user].skills.length;
    if (skillsCount > maxSkills) {
        maxSkills = skillsCount;
        maxSkillsUser = user;
    }
}
console.log("En çok yeteneğe sahip olan kullanıcı:", maxSkillsUser);

/* Egzersiz-2
-Oturum açmış kullanıcıları sayın, users nesnesinden 50 puana eşitten daha büyük olan kullanıcıları sayın.
*/
let puan = 0;

for (const user in users) {
    users[user].points >= 50 ? puan += 1 : null
}
console.log(`${puan} kişinin puanı 50'den yüksektir.`);

/* Egzersiz-3
-users nesnesinden MERN yığını geliştiricisi olan kişileri bulun. (Burada verilen users nesnesinde kimsede MERN yer almadığından kendim John adlı kullanıcıya ekledim.)
*/
let mernStacks = []
for (const user in users) {
    users[user].skills.indexOf("MERN") !== -1 ? mernStacks.push(user) : null
}
console.log(mernStacks);

/* Egzersiz-4
-Orijinal users nesnesini değiştirmeden users nesnesinde adınızı ayarlayın.
*/
let copyUsers = Object.assign({}, users);

copyUsers.Berke = {}
copyUsers.Berke.email = "sasaberke@outlook.com";
copyUsers.Berke.skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Next.js', 'React', 'Linux'];
copyUsers.Berke.age = 25;
copyUsers.Berke.isLoggedIn = false;
copyUsers.Berke.points = 77
console.log(copyUsers);

/* Egzersiz-5
-users nesnesinin tüm anahtarlarını veya özelliklerini alın.
*/
console.log(Object.keys(users));

/* Egzersiz-6
-users nesnesinin tüm değerlerini alın.
*/
console.log(Object.values(users));

/* Egzersiz-7
-Ülke adını, başkentini, nüfusunu ve dillerini yazdırmak için countries nesnesini kullanın.
*/
for(const country in countries){
    console.log(countries[country].name);
    // console.log(countries[country].capital);
    // console.log(countries[country].population);
    // console.log(countries[country].languages);
}



