// Controls how far from the top before we start drawing
var offset1 = 420;
var offset2 = 835;
var offset3 = 1350;
// These vars adjust the speed at which the lines draw in on scrolled. These can be integers or formulas that output integers.
var speed1 = 9;
var speed2 = 7.5;
var speed3 = 8;
// For now, each line is handled seperately.
// Get the id of the <path> element and the length of <path>
var myline1 = document.getElementById("top-track");
var myline2 = document.getElementById("middle-track");
var myline3 = document.getElementById("bottom-track");

var length1 = myline1.getTotalLength();
var length2 = myline2.getTotalLength();
var length3 = myline3.getTotalLength();

// The start position of the drawing mask
myline1.style.strokeDasharray = length1;
myline2.style.strokeDasharray = length2;
myline3.style.strokeDasharray = length3;

var mySwitch;
// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled

function drawPaths1(scroll) {
  $(myline1).show();
  // What % down is it?
  var scrollpercent = ($(window).scrollTop() - offset1) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Length to offset the dashes
  var draw1 = length1 * (scrollpercent * speed1);

  // Reverse the drawing (when scrolling upwards)
  myline1.style.strokeDashoffset = length1 - draw1;

  //get point at length
  endPoint1 = myline1.getPointAtLength(draw1);
  roundPointx = Math.round(endPoint1.x);
  roundPointy = Math.round(endPoint1.y);

  // function for doing stuff when a line is complete
  if ((draw1 - length1) >= 0){
    switchOn();
    showBee1(roundPointx, roundPointy);
    //delayline2();
    drawPaths2();
  }
}

//
// function delayline2(){
//   var delay = 1000; // miliseconds
//   setTimeout(function() {
//     drawPaths2();
//   }, delay);
// }

function hideBee1(){
  var delay = 2500; // miliseconds
  setTimeout(function() {
    $('#bee1').addClass("animated fadeOut");
  }, delay);
}
function hideBee2(){
  var delay = 2500; // miliseconds
  setTimeout(function() {
    $('#bee2').addClass("animated fadeOut");
  }, delay);
}

// ///////////////////////////////////////////////////////////////////
function drawPaths2(scroll) {
  hideBee1();
  $(myline2).show();

  // What % down is it?
  var scrollpercent = ($(window).scrollTop() - offset2) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Length to offset the dashes
  var draw2 = length2 * (scrollpercent * speed2);
  // Reverse the drawing (when scrolling upwards)
  myline2.style.strokeDashoffset = length2 - draw2;

  //get point at length
  endPoint2 = myline2.getPointAtLength(draw2);
  roundPointx = Math.round(endPoint2.x);
  roundPointy = Math.round(endPoint2.y);

  // function for doing stuff when a line is complete
  if ((draw2 - length2) >= 0){
    switchOn();
    showBee2(roundPointx, roundPointy);
    drawPaths3();
  }
}

// //////////////////////////////////////////////////////////////
function drawPaths3(scroll) {
  hideBee2();
  $(myline3).show();
  // What % down is it?
  var scrollpercent = ($(window).scrollTop() - offset3) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Length to offset the dashes
  var draw3 = length3 * (scrollpercent * speed3);

  // Reverse the drawing (when scrolling upwards)
  myline3.style.strokeDashoffset = length3 - draw3;

  //get point at length
  endPoint3 = myline3.getPointAtLength(draw3);
  roundPointx = Math.round(endPoint3.x);
  roundPointy = Math.round(endPoint3.y);

  // function for doing stuff when a line is complete
  if ((draw3 - length3) >= 0){
    switchOn();
    showBee3(roundPointx, roundPointy);
  }
}

// Handle the display of images attached to the endpoint of the svg paths.
function showBee1(x,y){
  $('.bee1').removeClass("beepop");
  $('.bee1').addClass("animated shake");
  $('.graphic1').removeClass("imgpop");
  $('.graphic1').addClass("animated fadeIn");
  $('.copy1').removeClass("copypop");
  $('.copy1').addClass("animated zoomIn");
  var bee = document.getElementById('bee1');
  bee.style.position = "absolute";
  bee.style.left = '0px';
  bee.style.bottom = '-30px';
  //bee.style.bottom = y +'px';
};
function showBee2(x,y){
  $('.bee2').removeClass("beepop");
  $('.bee2').addClass("animated shake");
  $('.graphic2').removeClass("imgpop");
  $('.graphic2').addClass("animated fadeIn");
  $('.copy2').removeClass("copypop");
  $('.copy2').addClass("animated zoomIn");
  var bee = document.getElementById('bee2');
  bee.style.position = "absolute";
  bee.style.right = '30px';
  bee.style.bottom = '-30px';
};
function showBee3(x,y){
  $('.bee3').removeClass("beepop");
  $('.bee3').addClass("animated shake");
  $('.graphic3').removeClass("imgpop");
  $('.graphic3').addClass("animated fadeIn");
  $('.copy3').removeClass("copypop");
  $('.copy3').addClass("animated zoomIn");
  var bee = document.getElementById('bee3');
  bee.style.position = "absolute";
  bee.style.left = '30px';
  bee.style.bottom = '-100px';
};
function classResets(){
  $('#bee1').removeClass("animated fadeOut");
  $('.bee1').addClass("beepop");
  $('.bee1').removeClass("animated shake");
  $('#bee2').removeClass("animated fadeOut");
  $('.bee2').addClass("beepop");
  $('.bee2').removeClass("animated shake");
  $('#bee3').removeClass("animated fadeOut");
  $('.bee3').addClass("beepop");
  $('.bee3').removeClass("animated shake");
  $(myline1).hide();
  $(myline2).hide();
  $(myline3).hide();
}

function switchOn() {
  mySwitch = true;
}
function switchOff() {
  mySwitch = false;
}
// hide first line on ready
$( document ).ready(function() {
  $(myline1).hide();
  $(myline2).hide();
  $(myline3).hide();
});

$(window).scroll(function() {
  if ($(this).scrollTop() >= offset1 ) {
     drawPaths1();
  }
});

$(window).scroll(function() {
  $(function(){
  var threshold = 2750; // number of pixels from top of page when div will disappear
  var imagePos = $("#svg-paths").offset().top;
  var bottomOfWindow = $(window).scrollTop() + $(window).height();
  var scrollHeight = $(document).height();
if ((scrollHeight - bottomOfWindow) / scrollHeight == 0) {
 $("#svg-paths").hide();
 classResets();
}
if($(document).scrollTop() == 0){
 classResets();
 $("#svg-paths").show();

}
});
});
