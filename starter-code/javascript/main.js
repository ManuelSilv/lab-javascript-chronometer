var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML === "START"){
    chronometer.startClick()
    btnLeft.innerHTML = "STOP"
    btnLeft.className = "btn stop"
    btnRight.innerHTML = "SPLIT"
    btnRight.className = "btn split";
  }
    else if (btnLeft.innerHTML === "STOP"){
   chronometer.stopClick()
   btnLeft.innerHTML = "START" 
   btnLeft.className = "btn start"
   btnRight.innerHTML = "RESET"
   btnRight.className = "btn reset";

    }
});

  //Reset/Split Button
  btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML === "SPLIT"){
      chronometer.resetClick()
      btnRight.innerHTML = "RESET"
      btnRight.className = "btn reset";

  }
});


