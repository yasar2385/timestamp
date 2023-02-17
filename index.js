// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var MS_PER_MINUTE = 60000;
var myEndDateTime = new Date().getTime();
var myStartDate = new Date(myEndDateTime - 30 * MS_PER_MINUTE).getTime();

console.log(myStartDate);

// setInterval(function(){
//   console.log(new Date().toISOString())
// },1000)
var d1 = new Date();
console.log(d1.toUTCString());
//"Sun, 18 Mar 2012 05:50:34 GMT" // two hours less than my local time
console.log(Math.floor(d1.getTime() / 1000));
//1332049834

var d2 = new Date(
  d1.getUTCFullYear(),
  d1.getUTCMonth(),
  d1.getUTCDate(),
  d1.getUTCHours(),
  d1.getUTCMinutes(),
  d1.getUTCSeconds()
);
console.log(d2.toUTCString());
//"Sun, 18 Mar 2012 03:50:34 GMT" // four hours less than my local time, and two hours less than the original time - because my GMT+2 input was interpreted as GMT+0!
console.log(Math.floor(d2.getTime() / 1000));
//1332042634
