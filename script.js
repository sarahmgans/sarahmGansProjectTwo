// Begin with a document ready that will be holding all of the js
$(document).ready(function () {

// Attach an event listener onto the hamburger menu icon, and on click, have the icon be replaced by an x icon and have the dropdown menu visible. 
$('.hamburger-menu').on('click', function(){
    $(this).toggleClass('verticalMenu');
})

// Attach an event listener onto the x icon, and on click, have the icon be replaced by the hamburger menu icon and have the dropdown menu not visible. 
});