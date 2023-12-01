//Seviye-1

/*
    const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]

    const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
*/

/* Egzersiz-1
-while ve do while kullanarak 0 dan 10'a kadar giden bir döngü kurun.
*/
i = 0
// while (i <= 10) {
//     console.log(i);
//     i++
// }
do {
    console.log(i);
    i++
} while (i <= 10)

/* Egzersiz-2
-while ve do while kullanarak 10 dan 0'a kadar giden bir döngü kurun.
*/
let j = 10
// while (j >= 0) {
//     console.log(j);
//     j--
// }
do {
    console.log(j);
    j--
} while (j >= 0)

/* Egzersiz-3
-0'dan n' e kadar giden bir for döngüsü kurun.
*/
let n;
for (let i = 0; i <= n; i++) {
    console.log(i);
}

/* Egzersiz-4
-Console.log() kullanarak aşağıdaki çıktıyı almayı deneyin.
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
let x = 7
for (let i = 1; i <= x; i++) {
    let hashtag = "#"
    console.log(hashtag.repeat(i));
}

/* Egzersiz-5
-Aşağıdaki çıktıyı almak için bir döngü kurun:
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
*/
let y = 10
for (let i = 0; i <= y; i++) {
    console.log(`${i} x ${i} = ${i ** 2}`);
}

/* Egzersiz-6
-Aşağıdaki çıktıyı almak için bir döngü kurun:
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
*/
let z = 10
console.log("i\ti^2\ti^3");
for (let i = 0; i <= z; i++) {
    console.log(`${i}\t${i ** 2}\t${i ** 3}`);
}

/* Egzersiz-7
-0'dan 100'e kadar olan çift sayıları bir döngü yardımı ile ekrana yazdırın.
*/
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    };
}

/* Egzersiz-8
-0'dan 100'e kadar olan tek sayıları bir döngü yardımı ile ekrana yazdırın.
*/
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    };
}

/* Egzersiz-9
-0'dan 100'e kadar olan asal sayıları bir döngü yardımı ile ekrana yazdırın
*/
for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for(let j=2; j<i; j++){
        if(i % j ===0){
            isPrime = false;
            break
        }
    }

    if(isPrime){
        console.log(i);
    }
}

/* Egzersiz-9
-0 ile 100 arasındaki tüm sayıların toplamını ekrana yazdırın.
*/
let result =0;
for(let i=0; i<=100; i++){
    result += i
}
console.log(`0 ile 100 arasındaki sayıların toplamı: ${result}`);

/* Egzersiz-10
-0 ile 100 arasındaki tek ve çift sayıların toplamını bulun
*/
let ciftSayilarToplami =0;
let tekSayilarToplami =0;
for(let i=0; i<=100; i++){
    if(i%2==0){
        ciftSayilarToplami += i
    } else{
        tekSayilarToplami += i
    }
}
console.log(`Çift sayıların toplamı: ${ciftSayilarToplami} \nTek sayıların toplamı: ${tekSayilarToplami}`);

