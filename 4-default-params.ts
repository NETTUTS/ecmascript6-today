// Run in command line to create 4-default-params.js:
// tsc 4-default-params.ts
function history(lang = "C", year = 1972) {
  return lang + " was created around the year " + year;
}
