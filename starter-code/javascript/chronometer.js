
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.startClick = () => {
      // debugger
      this.intervalId = setInterval(() => {
        //debugger
        this.currentTime++;
        console.log(this.getTimeInFourDigits());
        this.printTime();
        // if(counter === 1) {
        // }
      }, 1000);
    };
    this.getTimeInFourDigits = function () {
      let sec = this.currentTime % 60
      let min = (this.currentTime - sec) / 60 
      let secString = ""
      let minString = ""
      if (sec < 10 ){
        secString = `0${sec}`;
      }
       else {
         secString = `${sec}`;
       }

      if (min < 60){
        minString = `0${min}`;
      }
        else {
        minString = `${min}`;
        }

      return (`${minString}:${secString}`);
       //needs to return a string 

    };

    this.printTime = function () {

      var str = this.getTimeInFourDigits();
      var res = str.charAt();

      secUni.innerHTML = str.charAt(4);
      secDec.innerHTML = str.charAt(3);
      minUni.innerHTML = str.charAt(1);
      minDec.innerHTML = str.charAt(0);
  
     
    };
    this.stopClick = function () {
      clearInterval(this.intervalId);
    };
    this.resetClick = function () {
      this.currentTime = 0;
      }
    };
    // this.splitClick = function () {

    }
  

/*this.setMinutes = function () {
    if (this.currentTime.value >= 59){
      return toString("0100");
       }
    
 // }


  //}
  
*/
