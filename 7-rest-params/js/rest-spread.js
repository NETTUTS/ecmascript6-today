var $__toObject = function(value) {
  if (value == null) throw TypeError();
  return Object(value);
}, $__spread = function() {
  var rv = [], k = 0;
  for (var i = 0; i < arguments.length; i++) {
    var value = $__toObject(arguments[i]);
    for (var j = 0; j < value.length; j++) {
      rv[k++] = value[j];
    }
  }
  return rv;
};
function push(array) {
  for (var items = [], $__0 = 1; $__0 < arguments.length; $__0++) items[$__0 - 1] = arguments[$__0];
  items.forEach(function(item) {
    array.push(item);
    console.log(item);
  });
}
var planets = [];
console.log("Inner planets of our Solar system are: ");
push(planets, "Mercury", "Venus", "Earth", "Mars");
function createURL(comment, path, protocol, subdomain, domain, tld) {
  var shoutout = name + ": " + protocol + "://" + subdomain + "." + domain + "." + tld + "/" + path;
  console.log(shoutout);
}
var weblink = ["hypertext/WWW/TheProject.html", "http", "info", "cern", "ch"], comment = "World's first Website";
createURL.apply(null, $__spread([comment], weblink));
