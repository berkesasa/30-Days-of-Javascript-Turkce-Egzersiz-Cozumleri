// Seviye-3

/* Egzersiz-1
-countries_data dosyasındaki ülke bilgilerini kullanın. Ülkeleri ada, başkente, nüfusa göre sıralayın.
*/
const sortByName = countriesData.sort()
console.log(sortByName);

const sortByCapital = countriesData.sort((a, b) => {
    return a.capital.localeCompare(b.capital)
})
console.log(sortByCapital);

const sortByPopulation = countriesData.sort((a, b) => {
    return a.population - b.population
})
console.log(sortByPopulation);

/* Egzersiz-2
-En çok konuşulan 10 dili bulun.
*/
function mostSpokenLanguages(countries, limit) {
    const languageCount = {};

    countries.forEach(country => {
        country.languages.forEach(language => {
            languageCount[language] = (languageCount[language] || 0) + 1;
        });
    });

    return Object.entries(languageCount)
        .map(([language, count]) => ({ language, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, limit);
}
console.log(mostSpokenLanguages(countriesData, 10));

/* Egzersiz-3
-countries_data.js dosyasını kullanarak en kalabalık on ülkeyi oluşturan bir fonksiyon oluşturun
*/
function mostPopulation(countries, limit) {

    const sortedPopulation = countries.sort((a, b) => {
        return b.population - a.population
    })
        .slice(0, limit)
        .map(country => ({ country: country.name, population: country.population }))

    return sortedPopulation
}
console.log(mostPopulation(countriesData, 10));


/* Egzersiz-4
-Bir merkezi eğilim ölçüsünü (ortalama, medyan, mod) ve değişkenlik ölçüsünü (aralık, varyans, standart sapma) hesaplayan bir program geliştirmeye çalışın. Bu ölçülere ek olarak, örneğin minimum, maksimum, sayı, yüzdelik ve frekans dağılımını bulun. statistics adında bir nesne oluşturabilir ve istatistiksel hesaplamalar yapan tüm fonksiyonları statistics nesnesi için yöntem olarak oluşturabilirsiniz. Aşağıdaki çıktıyı kontrol edin.
*/
const statistics = {
    data: [],

    addData: function (data) {
        this.data = data;
    },

    count: function () {
        return this.data.length;
    },

    sum: function () {
        return this.data.reduce((acc, val) => acc + val, 0);
    },

    min: function () {
        return Math.min(...this.data);
    },

    max: function () {
        return Math.max(...this.data);
    },

    range: function () {
        return this.max() - this.min();
    },

    mean: function () {
        return this.sum() / this.count();
    },

    median: function () {
        const sortedData = [...this.data].sort((a, b) => a - b);
        const middle = Math.floor(this.count() / 2);

        if (this.count() % 2 === 0) {
            return (sortedData[middle - 1] + sortedData[middle]) / 2;
        } else {
            return sortedData[middle];
        }
    },

    mode: function () {
        const frequencyMap = {};
        this.data.forEach(num => {
            frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        });

        let mode = null;
        let maxCount = 0;

        for (const num in frequencyMap) {
            if (frequencyMap[num] > maxCount) {
                mode = parseInt(num, 10);
                maxCount = frequencyMap[num];
            }
        }

        return { mode, count: maxCount };
    },

    var: function () {
        const mean = this.mean();
        const squaredDifferences = this.data.map(num => Math.pow(num - mean, 2));
        const sumSquaredDiff = squaredDifferences.reduce((acc, val) => acc + val, 0);

        return sumSquaredDiff / this.count();
    },

    std: function () {
        return Math.sqrt(this.var());
    },

    freqDist: function () {
        const frequencyMap = {};
        this.data.forEach(num => {
            frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        });

        const freqDist = Object.entries(frequencyMap)
            .map(([num, count]) => [count, parseInt(num, 10)])
            .sort(([countA], [countB]) => countB - countA);

        return freqDist;
    },

    describe: function () {
        return `Count: ${this.count()}\nSum: ${this.sum()}\nMin: ${this.min()}\nMax: ${this.max()}\nRange: ${this.range()}\nMean: ${this.mean()}\nMedian: ${this.median()}\nMode: (${this.mode().mode}, ${this.mode().count})\nVariance: ${this.var()}\nStandard Deviation: ${this.std()}\nFrequency Distribution: ${JSON.stringify(this.freqDist())}`;
    },
};

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

statistics.addData(ages);

console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.var());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ', statistics.freqDist());
console.log(statistics.describe());

