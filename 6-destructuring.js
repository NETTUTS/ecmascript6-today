// Understanding array destructuring
// Run in : Firefox browser > Web Developer > Web Console

// initialize
var [ start, end ] = ["earth", "moon"];
console.log(start + " calling " + end); // earth calling moon

// variable swapping
[start, end] = [end, start];
console.log(start + " calling " + end); // moon calling earth

function equinox() {
  return [20, "March", 2013, 11, 02];
}
var [date, month, , ,] = equinox(); // some return values are not initialized
console.log("This year's equinox was on " + date + month); // This year's equinox was on 20March

// Understanding object destructuring
// Run in : Firefox browser > Web Developer > Web Console

function equinox2() {
  return {
    date: 20,
    month: "March",
    year: 2013,
    time: {
      hour: 11, // nested
      minute: 2
    }
  };
}

var { date: d, month: m, time : { hour: h} } = equinox2();
// h has the value of the nested property while "year" and "minute" are skipped totally

console.log("This year's equinox was on " + d + m + " at " + h); // This year's equinox was on 20March at 11
