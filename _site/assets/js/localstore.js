//set the search input from user into sessionStorage
// document.getElementById("#search-input").addEventListener("keydown", function(e) {
//     if (!e) { var e = window.event; }
//     e.preventDefault(); // sometimes useful
//     // Enter is pressed
//     if (e.keyCode == 13) {
//       $('#search-box').submit(function (event) {
//         console.log('submitted');
//         event.preventDefault();
//         var searchInput = $('#search-box-input').val();
//         sessionStorage.setItem('search', JSON.stringify(searchInput));
//         var searchInput = null;
//         window.location.replace("/search-results/");
//       });
//     }
// }, false);

$('#search-box').submit(function (event) {

    event.preventDefault();
    var searchInput = $('#search-input').val();
    sessionStorage.setItem('search', JSON.stringify(searchInput));
    var searchInput = null;
    window.location.replace("/search-results/");
  });

//retrieve the stored search input to be passed to gcse
function addSearch (){
      var searchOutput = sessionStorage.getItem('search');
      var searchParsed = $.parseJSON(searchOutput);
      console.log(searchOutput);
  };

$('.search-input').click(function(e){
  e.preventDefault;
  $(".search-input").attr('placeholder', "").css('textTransform', 'capitalize');
})
