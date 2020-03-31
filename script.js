// Begin with a document ready that will be holding all of the js
$(document).ready(function () {

// Attach an event listener onto the icon element in the header, and on click, toggle between having the vertical menu visible and not visible, as well as between having the hamburger icon and the x icon. 
$('i.home').on('click', function(){
    $('nav').toggleClass('navVisible');
    $('i.home').toggleClass('fa fa-bars fas fa-times');
})
});