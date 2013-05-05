function history(lang, year) {
    if (typeof lang === "undefined") { lang = "C"; }
    if (typeof year === "undefined") { year = 1972; }
    return lang + " was created around the year " + year;
}
