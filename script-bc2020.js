var end = new Date(2021, 0, 1);

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
  var now = new Date();
  var distance = end.getTime() - now.getTime();
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById('countdownTitle').innerHTML = 'THE WINNER IS MARKO';
    document.getElementById('countdown').innerHTML = '';
    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);

  document.getElementById('countdown').innerHTML = days + ' days ';
  document.getElementById('countdown').innerHTML += hours + ' hrs ';
  document.getElementById('countdown').innerHTML += minutes + ' mins ';
  document.getElementById('countdown').innerHTML += seconds + ' secs';
}

timer = setInterval(showRemaining, 1000);