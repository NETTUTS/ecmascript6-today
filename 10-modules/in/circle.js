export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}

// inside folder js
// $ compile-modules circle.js --type amd --to ../js -m circle
