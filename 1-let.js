// Understanding function scoped and variable hoisting
// Run in : Firefox browser > Web Developer > Web Console
var jsFuture = "es6";
(function () {
  // var jsFuture = undefined;
  // variable hoisting
  if (!jsFuture) { var jsFuture = "es5"; }
  console.log(jsFuture); // "es5"
}());


// ES5 var
// Run in : Firefox browser > Web Developer > Web Console
var es = [];
for (var i = 0; i < 10; i++) {
  es[i] = function () {
    console.log("Upcoming edition of ECMAScript is ES" + i);
  };
}
es[6](); // 10


// ES6 let
// Run in : Firefox browser > Web Developer > Web Console
var es = [];
for (var j = 0; j < 10; j++) {
  let c = j;
  es[j] = function () {
    console.log("Upcoming edition of ECMAScript is ES" + c);
  };
}
es[6](); // 5
