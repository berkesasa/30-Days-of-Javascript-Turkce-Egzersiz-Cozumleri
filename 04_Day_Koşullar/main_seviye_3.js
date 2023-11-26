// Seviye-3

/* Egzersiz-1
-Bir aydaki gün sayısını söyleyen bir program yazın.
*/
let month = prompt("Bir ayı girin:").toLowerCase();

switch (month) {
    case "ocak":
        console.log("Ocak ayı 31 gün içerir.");
        break;
    case "şubat":
        console.log("Şubat ayı 28 gün içerir.");
        break;
    case "mart":
        console.log("Mart ayı 31 gün içerir.");
        break;
    case "nisan":
        console.log("Nisan ayı 30 gün içerir.");
        break;
    case "mayıs":
        console.log("Mayıs ayı 31 gün içerir.");
        break;
    case "haziran":
        console.log("Haziran ayı 30 gün içerir.");
        break;
    case "temmuz":
        console.log("Temmuz ayı 31 gün içerir.");
        break;
    case "ağustos":
        console.log("Ağustos ayı 31 gün içerir.");
        break;
    case "eylül":
        console.log("Eylül ayı 30 gün içerir.");
        break;
    case "ekim":
        console.log("Ekim ayı 31 gün içerir.");
        break;
    case "kasım":
        console.log("Kasım ayı 30 gün içerir.");
        break;
    case "aralık":
        console.log("Aralık ayı 31 gün içerir.");
        break;
    default:
        console.log("Geçersiz ay.");
}



