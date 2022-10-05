var names = ['Alex', 'Anqi', 'Christian', 'Haodan', 'Jayti', 'Liz', 'Lukas', 'Lara', 'Patrick', 'Niklas', 'Simon', 'Asad', 'Carsten', 'Diana', 'Jay', 'Kira', 'Lucio', 'Matilda', 'Paul', 'Senthil', 'Mirek', 'Puneet', 'Max', 'Alex'];
var n = 0;
var randomNumber;

$('.btn').click(function(e) {
    randomNumberGenerator();
    start();
    printName(names);
});


function randomNumberGenerator() {
    randomNumber = Math.floor(Math.random()*names.length);
};

function printName(names) {
    var name = names[randomNumber];
    $("#name").html(name);
};

function changeValue() {
  if (value < 5) {
    document.getElementById("timer").innerHTML = ++value+" sec";
  } else {
    var audio = new Audio('sounds/clock_short.m4a');
    setInterval(audio.play(), 1000);
    stop();
  }
}
var timerInterval = null;
function start() {
  stop(); // stoping the previous counting (if any)
  timerInterval = setInterval(changeValue, 1000);
}

var stop = function() {
  clearInterval(timerInterval);
  value = 0;
}
