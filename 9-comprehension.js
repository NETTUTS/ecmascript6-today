// Understanding function scoped and variable hoisting
// Run in : Firefox browser > Web Developer > Web Console

function degToKelvin(deg) {
  return deg + 273;
}

// 1D array is created
var temperature = [0, 37, 100];
[degToKelvin(t) for (t of temperature)]; // [273, 310, 373]
