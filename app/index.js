import clock from "clock";
import document from "document";
import { preferences } from "user-settings";

// Update the clock every minute
clock.granularity = "minutes";

let timeLabel = document.getElementById("timeLabel");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = new Date();
  let hours = today.getHours();
  let mins = today.getMinutes();
  let minsText = "amelia";
  let hoursText = "daniel";
 //console.log(evt.date.toTimeString());
  
// minutes
if (mins >= 0 && mins < 3) 
  {
    minsText = "";
  } 
else if (mins >= 3 && mins < 8) 
  {
    minsText = "five past ";
  }
else if (mins >= 8 && mins < 13) 
  {
    minsText = "ten past ";
  }
else if (mins >= 13 && mins < 18) 
  {
    minsText = "quarter past ";
  }
else if (mins >= 18 && mins < 23) 
  {
    minsText = "twenty past ";
  }
else if (mins >= 23 && mins < 28) 
  {
    minsText = "twenty five past ";
  }
else if (mins >= 28 && mins < 33) 
  {
    minsText = "half past ";
  }
else if (mins >= 33 && mins < 38) 
  {
    minsText = "twenty five to ";
  }
else if (mins >= 38 && mins < 43) 
  {
    minsText = "twenty to ";
  }
else if (mins >= 43 && mins < 48) 
  {
    minsText = "quarter to ";
  }
else if (mins >= 48 && mins < 53) 
  {
    minsText = "ten to ";
  }
else if (mins >= 53 && mins < 58) 
  {
    minsText = "five to ";
  }
else if (mins >= 58 && mins < 60) 
  {
    minsText = "";
  }

// hours
if (hours == 0) 
  {
    hoursText = "midnight";
  } 
else if (hours == 1) 
  {
    hoursText = "one";
  }
else if (hours == 2) 
  {
    hoursText = "two";
  }
 else if (hours == 3)
  {
    hoursText = "three";
  }
 else if (hours == 4) 
  {
    hoursText = "four";
  }
else if (hours == 5) 
  {
    hoursText = "five";
  }
else if (hours == 6) 
  {
    hoursText = "six";
  }
else if (hours == 7) 
  {
    hoursText = "seven";
  }
else if (hours == 8) 
  {
    hoursText = "eight";
  }
else if (hours == 9) 
  {
    hoursText = "nine";
  }
else if (hours == 10) 
  {
    hoursText = "ten";
  }
else if (hours == 11) 
  {
    hoursText = "eleven";
  }
else if (hours == 12) 
  {
    hoursText = "midday";
  }
else if (hours == 13) 
  {
    hoursText = "one";
  }
else if (hours == 14) 
  {
    hoursText = "two";
  }
else if (hours == 15) 
  {
    hoursText = "three";
  }
else if (hours == 16) 
  {
    hoursText = "four";
  }
else if (hours == 17) 
  {
    hoursText = "five";
  }
else if (hours == 18) 
  {
    hoursText = "six";
  }
else if (hours == 19) 
  {
    hoursText = "seven";
  }
else if (hours == 20) 
  {
    hoursText = "eight";
  }
else if (hours == 21) 
  {
    hoursText = "nine";
  }
else if (hours == 22) 
  {
    hoursText = "ten";
  }
else if (hours == 23) 
  {
    hoursText = "eleven";
  }

timeLabel.text = minsText + hoursText;
  
}
