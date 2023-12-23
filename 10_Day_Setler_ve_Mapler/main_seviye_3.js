// Seviye-3

/* Egzersiz-1
-countries_data dosyasında kaç dil vardır?
*/
const languageSet = new Set()
countriesData.forEach(country => {
    country.languages.forEach(language => {
        languageSet.add(language);
    });
});
console.log(languageSet);

/* Egzersiz-2
-En çok konuşulan 10 dili bulmak için ülke verilerini kullanın.
*/
function mostSpokenLanguages(countries, n) {
    const languageCount = countries.reduce((acc, country) => {
        country.languages.forEach(language => {
            acc[language] = (acc[language] || 0) + 1;
        });
        return acc;
    }, {});

    const sortedLanguages = Object.entries(languageCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, n)
        .map(([language, count]) => ({ [language]: count }));

    console.log(sortedLanguages);
    return sortedLanguages;
}
mostSpokenLanguages(countriesData, 10)

