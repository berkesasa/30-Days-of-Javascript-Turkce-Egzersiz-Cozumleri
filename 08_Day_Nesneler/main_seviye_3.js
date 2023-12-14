// Seviye-3

/* Egzersiz-1
-personAccount adında bir nesne değişmezi oluşturun. firstName, lastName, incomes, expenses özelliklerine ve totalIncome, totalExpense, accountInfo,addIncome, addExpense ve accountBalance yöntemlerine sahiptir. Gelirler bir gelirler kümesi ve açıklamasıdır ve giderler bir gelirler kümesi ve açıklamasıdır.
*/
const personAccount = {
    firstName: "Berke",
    lastName: "SASA",
    incomes: 1500,
    expenses: 1000,
    addIncome: function (add) {
        return this.incomes += add
    },
    addExpense: function (add) {
        return this.incomes -= add
    },
    totalIncome: function () {
        return this.incomes
    },
    totalExpenses: function () {
        return this.expenses
    },
    accounBalance: function () {
        return this.incomes - this.expenses
    },
    accountInfo: function () {
        return this.accounBalance >= 0 ? "Gelir düzeyiniz artıda" : "Gelir düzeyiniz ekside"
    }
}
personAccount.addIncome(200)
console.log(personAccount.totalIncome());

/* Egzersiz-2
-2, 3 ve 4. sorular aşağıdaki iki diziye dayanmaktadır: users ve products
*/
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

/* 
- Yukarıdaki users koleksiyonunu bir MongoDB veritabanından aldığınızı düşünün.
    a. Kullanıcının koleksiyona eklenmesini sağlayan signUp adında bir fonksiyon oluşturun. Kullanıcı mevcutsa, kullanıcıyı zaten bir hesabı olduğu konusunda bilgilendirin.
    b. Kullanıcının uygulamada oturum açmasını sağlayan signIn adında bir fonksiyon oluşturun
*/
function signUp(username, email, password) {

    function randomHexaNumberGenerator() {
        let hexadecimal = ['']
        for (let i = 1; i <= 6; i++) {
            let randomHexa = Math.floor(Math.random() * 16).toString(16)
            hexadecimal.push(randomHexa)
        }
        return hexadecimal.join('')
    }

    let _id;

    do {
        _id = randomHexaNumberGenerator();
    } while (isIdExists(users, _id));

    function isIdExists(users, id) {
        return users.some(user => user._id === id);
    }

    let tarih = new Date();
    let yil = tarih.getFullYear();
    let ay = tarih.getMonth() + 1;
    let gun = tarih.getDate();
    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let createdAt = `${gun < 10 ? `0${gun}` : `${gun}`}/${ay < 10 ? `0${ay}` : `${ay}`}/${yil} ${saat < 10 ? `0${saat}` : `${saat}`}:${dakika < 10 ? `0${dakika}` : `${dakika}`}`;
    if (users.some((value) => value.username === username)) {
        return alert("Bu kullanıcı adı ile kayıtlı bir hesap mevcut. Lütfen başka bir kullanıcı adı ile kaydolun.");
    } else {
        users.push(
            {
                _id: _id,
                username: username,
                email: email,
                password: password,
                createdAt: createdAt,
                isLoggedIn: false
            }
        )
    }
}
signUp("Berke", "sasaberke@outlook.com", "123456")
console.log(users);

function signIn(username, password) {
    return users[users.findIndex(user => user.username === username)].password === password ? "Giriş yapıldı" : "Şifreniz hatalı"
}

console.log(signIn("Berke", "123456"));



/* Egzersiz-3
-products dizisinin üç elemanı ve her birinin altı özelliği vardır.
    a. Ürünü derecelendiren rateProduct adında bir fonksiyon oluşturun
    b. Bir ürünün ortalama derecelendirmesini hesaplayan averageRating adında bir fonksiyon oluşturun
*/
function rateProduct(productName, rate) {
    function randomHexaNumberGenerator() {
        let hexadecimal = ['']
        for (let i = 1; i <= 6; i++) {
            let randomHexa = Math.floor(Math.random() * 16).toString(16)
            hexadecimal.push(randomHexa)
        }
        return hexadecimal.join('')
    }
    products[products.findIndex(product => product.name === productName)].ratings.push(
        {
            userId: randomHexaNumberGenerator(),
            rate: rate
        }
    )
}
rateProduct("Laptop", 5)
console.log(products);

function averageRating(productName) {
    let ratingsArray = products[products.findIndex(product => product.name === productName)].ratings;
    let sum = ratingsArray.reduce((accumulator, currentElement) => {
        return accumulator + currentElement.rate;
    }, 0)
    let average = sum / ratingsArray.length
    return average;
}
console.log(averageRating("mobile phone"));

/* Egzersiz-4
-likeProduct adında bir fonksiyon oluşturun. Bu fonksiyon, ürün beğenilmediyse beğenilmesine ve beğenildiyse beğeninin kaldırılmasına yardımcı olacaktır.
*/

let yourId = "asdfgh"
function likeProduct(yourId, productName) {
    const productIndex = products.findIndex(product => product.name === productName);
    if (productIndex !== -1) {
        const product = products[productIndex];
        const likesIndex = product.likes.indexOf(yourId);

        if (likesIndex !== -1) {
            product.likes.splice(likesIndex, 1);
        } else {
            product.likes.push(yourId);
        }
    } else {
        console.log("Ürün bulunamadı.");
    }
}
console.log(products);
likeProduct(yourId, "Laptop")
console.log(products);
