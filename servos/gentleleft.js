console.log(process.argv);
var Gpio = require('pigpio').Gpio,
  motor = new Gpio(4, {mode: Gpio.OUTPUT}),

  //todo: read the last number or start with 1000
  pulseWidth = parseInt(process.argv[2]),
  //pulseWidth = 1000,

  //we're going a quarter turn left, if possible
  eventual_position = pulseWidth + 250,

  //smooth the movement
  t = Math.PI/2,
  increment = 10,
  new_increment = 10;

  console.log("start "+process.argv[2]);
  
var foo = setInterval(function () {
//  console.log(pulseWidth);
  motor.servoWrite(pulseWidth);
 
  pulseWidth += increment;
  new_increment = Math.round(Math.abs(Math.sin(t)*10));
  console.log(new_increment);
  if (pulseWidth <= eventual_position) {
//    increment = 10;
    increment = new_increment;
    t += 0.1;
  }else{
    clearInterval(foo);    
    console.log("end "+eventual_position);
  }

}, new_increment);

