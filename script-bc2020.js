var end = new Date(2021, 0, 1);

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

let result = document.getElementById('result');
result.style.display = "none";

let test = 0;

function showRemaining() {
  var now = new Date();
  var distance = end.getTime() - now.getTime();
  test++;
  if (distance < 0 || test > 3) {
    clearInterval(timer);
    //document.getElementById('countdownTitle').style.fontSize = '1.7em';
    document.getElementById('countdownTitle').style.marginBottom = '40px';
    document.getElementById('countdownTitle').innerHTML = 'THE WINNER IS <span class="fadein3">' + order[2].longName + '</span>';
    document.getElementById('countdown').innerHTML = '';

    result.style.display = "flex";

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

let order = null;

$.ajax({
  url: 'bc2020.json',
  cache: false
})
  .done(function( data ) {
 
    order = [ 
      { name: "L", value: data.l, longName: 'LEO'},
      { name: "M", value: data.m, longName: 'MARKO'},
      { name: "N", value: data.n, longName: 'NIKOLA'}
    ];

    order.sort((a, b) => a.value - b.value);

    $('.firstPlaceData').html(order[2].name + " " + order[2].value);
    $('.secondPlaceData').html(order[1].name + " " + order[1].value);
    $('.thirdPlaceData').html(order[0].name + " " + order[0].value);
    //$('.lastUpdateText').html('Last update: ' + data.ts);
  });

