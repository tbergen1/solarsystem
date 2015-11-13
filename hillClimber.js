//Things we Need

$( document ).ready(function() {
    console.log( "ready!" );


    // var canvas = document.getElementById("canvas");
    // var ctx = canvas.getContext("2d");
    // //var ctx2 = canvas.getContext("2d");
    // var height = 50;
    // ctx.fillStyle = "blue";
    // ctx.fillRect(100, 100, height, 100);

    // ctx.fillStyle = "rgba(200,0,0, 0.5)";
    // ctx.fillRect (10, 10, height, 50);

    // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    // ctx.fillRect (30, 30, height, 50);

    // ctx.fillStyle = 'rgba(0, 200, 0, 0.5)';
    // ctx.fillRect(20, 20, height, 50);

    // setInterval(function() {
    //   height = Math.floor(Math.random()*100);
    //   console.log("hey");
    // }, 200);


    // function draw() {

var sun = new Image();
var moon = new Image();
var earth = new Image();
var jupiter = new Image();

function init(){
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  jupiter.src = 'jupiter.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,500,500); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150,150);


  // Jupiter
  var time1 = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time1.getSeconds() + ((2*Math.PI)/60000)*time1.getMilliseconds() );
  ctx.translate(50,0);
  ctx.fillRect(0,-12,50,24); // Shadow
  ctx.drawImage(jupiter,-12,-12, 40, 40);




  // Earth
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(105,100);
  ctx.fillRect(0,-12,50,24); // Shadow
  ctx.drawImage(earth,-12,-12);

  // Moon
  ctx.save();
  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctx.translate(0,28.5);
  ctx.drawImage(moon,-3.5,-3.5);
  ctx.restore();

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
  ctx.stroke();
 
  ctx.drawImage(sun,0,0,500,500);

  window.requestAnimationFrame(draw);
}

init();





  //   var triangle = function(){
  //     ctx.fillStyle = "red";
  //     ctx.beginPath();
  //     ctx.moveTo(75,50);
  //     ctx.lineTo(100,75);
  //     ctx.lineTo(100,25);
  //     ctx.fill();
  // };

  // triangle();



/*****************
*Tulip Object Type
******************/
// var Tulip = function(x, y, height) {
//     this.x = x;
//     this.y = y;
//     this.height = height;
// };

// Tulip.prototype.draw = function() {
//     noStroke();
//     fill(16, 122, 12);
//     rect(this.x, this.y, 10, -this.height);
//     fill(255, 0, 0);
//     // petals
//     ellipse(this.x+5, this.y-this.height, 44, 44);
//     triangle(this.x-16, this.y-this.height, 
//             this.x+20, this.y-this.height,
//             this.x-20, this.y-this.height-31);
//     triangle(this.x-14, this.y-this.height, 
//             this.x+24, this.y-this.height,
//             this.x+3, this.y-this.height-39);
//     triangle(this.x+-4, this.y-this.height, 
//             this.x+26, this.y-this.height,
//             this.x+29, this.y-this.height-36);
// };

// Tulip.prototype.growBy = function(amount) {
//     this.height += amount;
// };

// /*********************
// *Sunflower Object Type
// **********************/
// var Sunflower = function(x, y, height) {
//     this.x = x;
//     this.y = y;
//     this.height = height;
// };

// Sunflower.prototype.draw = function() {
//     fill(16, 122, 12);
    
//     rect(this.x, this.y, 10, -this.height);
    
//     // petals
//     stroke(0, 0, 0);
//     fill(255, 221, 0);
//     ellipse(this.x-10, this.y-this.height, 20, 18);
//     ellipse(this.x+5, this.y-this.height-15, 20, 18);
//     ellipse(this.x+5, this.y-this.height+15, 20, 18);
//     ellipse(this.x+20, this.y-this.height, 20, 18);
//     fill(20, 20, 20);
//     ellipse(this.x+5, this.y-this.height, 20, 20);
// };

// Sunflower.prototype.growBy = function(amount) {
//     this.height += amount;
// };

// /**************
// *MAIN PROGRAM
// ***************/

// /** create object instances **/
// var tulip = new Tulip(38, 390, 150);
// var sunflower = new Sunflower(186, 390, 100);


// var drawScene = function() {
//     background(207, 250, 255);
//     tulip.draw();
//     sunflower.draw();
// };

// mouseClicked = function() {
//     tulip.growBy(10);
//     sunflower.growBy(20);
//     drawScene();
// };

// drawScene();



});