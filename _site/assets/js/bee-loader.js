
var background = document.getElementById('loader-background');

// function initial() {
//   setTimeout(function(){
//     $(background).addClass('flicker');
//   }, 10);
//   setTimeout(function(){
//     $(background).removeClass('flicker');
//   }, 20);
//   setTimeout(function(){
//     $(background).addClass('flicker');
//   }, 30);
//   setTimeout(function(){
//     $(background).removeClass('flicker');
//   }, 40);
// }

function flicker() {
  setTimeout(function(){
    $(background).addClass('fade');
  }, 1500);
}

function fadeLoader() {
  setTimeout(function(){
    $(background).addClass('animated fadeOut');
    $(background).hide();
  }, 5000);
}

// function checkLoader(){
//   var retrievedSwitch = localStorage.getItem('loaderSwitch');
//   if (retrievedSwitch < 1 || retrievedSwitch == undefined){
//     fadeLoader();
//     var loaderSwitch =+ 1;
//     console.log(loaderSwitch);
//     localStorage.setItem('loaderSwitch', loaderSwitch);
//   } else {
//     console.log('hide');
//     var loaderSwitch = 1;
//     console.log(loaderSwitch);
//     localStorage.setItem('loaderSwitch', loaderSwitch);
//     $(background).hide();
//   }
// }
// checkLoader();
  //initial();
  flicker();
  fadeLoader();
