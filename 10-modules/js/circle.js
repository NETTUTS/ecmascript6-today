define("circle",
  ["exports"],
  function(__exports__) {
    "use strict";
    function area(radius) {
      return Math.PI * radius * radius;
    }

    function circumference(radius) {
      return 2 * Math.PI * radius;
    }

    // inside folder js
    // $ compile-modules circle.js --type amd --to ../js -m circle

    __exports__.area = area;
    __exports__.circumference = circumference;
  });