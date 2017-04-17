console.log(process.argv);
var Gpio = require('pigpio').Gpio,
  motor = new Gpio(4, {mode: Gpio.OUTPUT}),
  pulseWidth = parseInt(process.argv[2]),
  max = 2500,
  min = 500,
  increment = 10;
 
setInterval(function () {
  console.log(pulseWidth);
  motor.servoWrite(pulseWidth);
 
  pulseWidth += increment;

  if (pulseWidth >= max) {
    increment = -10;
  } else if (pulseWidth <= min) {
    increment = 10;
  }

}, 10);

