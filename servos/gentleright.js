console.log(process.argv);
var Gpio = require('pigpio').Gpio,
  motor = new Gpio(4, {mode: Gpio.OUTPUT}),

  // max and min
  max = 2500,
  min = 500,

  //todo: read the last number from a file or start with 1000
  pulseWidth = parseInt(process.argv[2]),

  //we're going a quarter turn left, if possible
  eventual_position = pulseWidth - 250,

  //smooth the movement
  t = Math.PI/2,
  increment = -10,
  new_increment = 10;

  console.log("start "+process.argv[2]);
  
var foo = setInterval(function () {
  motor.servoWrite(pulseWidth);
 
  pulseWidth = pulseWidth - increment;
  new_increment = Math.round(Math.abs(Math.sin(t)*10));
  console.log(new_increment);
  if (pulseWidth >= eventual_position) {
    increment = new_increment;
    t = t - 0.1;
  }else{
    clearInterval(foo);    
    console.log("end "+eventual_position);
  }

}, new_increment*-1);

