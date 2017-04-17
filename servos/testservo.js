var Gpio = require('pigpio').Gpio,
  motor = new Gpio(4, {mode: Gpio.OUTPUT}),
  pulseWidth = 1000,
  increment = 100;
 
setInterval(function () {
  console.log(pulseWidth);
  motor.servoWrite(pulseWidth);
 
  pulseWidth += increment;

  if (pulseWidth >= 2000) {
    increment = -100;
  } else if (pulseWidth <= 1000) {
    increment = 100;
  }

}, 1000);

