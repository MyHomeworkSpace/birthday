var deadline = '2016-11-29 23:29:14 GMT-0400';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(endtime){
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    if(t.total<=0){
      clearInterval(timeinterval);
      document.getElementById("countdown").innerHTML = 'Happy Birthday MyHomeworkSpace'
    } else {
      $("#countdown").css("font-size", "36px");
      document.getElementById("countdown").innerHTML = ('0' + t.days).slice(-3) + ' Days<br \>' + ('0' + t.hours).slice(-2) + ' Hours<br \>' + ('0' + t.minutes).slice(-2) + ' Minutes<br \>' + ('0' + t.seconds).slice(-2) + " Seconds<br \>Until MyHomeworkSpace turns 1"
    }
  },1000);
}

$(document).ready(function() {
  initializeClock(deadline);
});
