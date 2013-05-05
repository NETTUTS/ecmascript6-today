define("main",
  ["circle"],
  function(__dependency1__) {
    "use strict";
    var area = __dependency1__.area;
    var circumference = __dependency1__.circumference;

    console.log("Area of the circle: " + area(4) + " meter squared");
    console.log("Circumference of the circle: " + circumference(14) + " meters");


    // inside folder in
    // $ compile-modules main.js --type amd --to ../js

  });