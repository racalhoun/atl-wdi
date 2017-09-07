// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function (timerValue) {
    // sets the numeric display to the current value of the timer
    document.getElementById('numeric-display').textContent = timerValue;
  },
  drawProgressBars: function (timerValue) {
    // Your Code Here
    const timePassed = 100 - timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timePassed + '%';
  },
  drawLitFuses: function (timerValue) {
    // Your Code Here
    const timePassed = 100 - timerValue;
    document.getElementsByClassName('unburnt')[0].style.width = timerValue * .98 + '%';
    document.getElementsByClassName('burnt')[0].style.width = timePassed * .98 + '%';
    //documnet.getElementsByClassName('unburnt')[0].style.width = timerValue
  },
  drawCrawlers: function (timerValue) {
    // Your Code Here
    const moveBug = 100 - timerValue;
    document.getElementsByClassName('crawler')[0].style.marginLeft = (moveBug * 10) + 'px';
    if (timerValue % 2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = 10 + 'px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = 0 + 'px';
    }

  }
  };
