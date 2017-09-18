// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs(); //===>1
      AppController.handleClockTick(); // ===>2
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
    // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    // Your Code Here
    this.millisecs += 10;
    if(this.millisecs >= 1000) {
      this.secs++;
    }else if(this.secs >= 60) {
      this.mins++;
    }else{
      null;
    }
  },
  reset: function(){
    // Your Code Here
    if(this.isRunning === true) {
      return 0;
    }
      
    
  },
  start: function(){
    // Your Code Here
    if (this.isRunning !== true) {
     this.isRunning = true;
     this.tickClock();
    }else{
      null;
    }
  
  },
  stop: function(){
    // Your Code Here
    this.isRunning = false;
    
  },
  lap: function(){
    // Your Code Here
    if(this.isRunning === true) {
      this.laps.push({
        mins: this.mins,
        secs: this.secs,
        millisecs: this.millisecs
      });
    }
  }
  }

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    // Your Code Here
    document.getElementById('mins').innerHTML = ViewHelpers.zeroFill(mins, 2);
    document.getElementById('secs').innerHTML = ViewHelpers.zeroFill(secs, 2);
    document.getElementById('millisecs').innerHTML = ViewHelpers.zeroFill(millisecs, 2);
  },
  updateLapListDisplay: function(laps){
    // Your Code Here

  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here


  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
    ViewEngine.updateTimeDisplay(Stopwatch.millisecs,Stopwatch.sec,Stopwatch.mins);
  },
  handleClickStart: function() {
    // Your Code Here
    
    if(!Stopwatch.isRunning){
      Stopwatch.start();
    }

  },
  handleClickStopReset: function(){
    // Your Code Here

  },
  handleClickLap: function(){ 
    // Your Code Here
    
  }

};
  window.onload = function(){
    // Attach AppController methods to the DOM as event handlers here.
    document.getElementById('start').onclick = AppController.handleClickStart();
    document.getElementById('lap').onclick = AppController.handleClickLap();
    document.getElementById('stop').onclick = AppController.handleClickStopReset();
  }


  
