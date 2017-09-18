
$(document).ready(function()){
    //<insert you code here>

});
// 1. Use jQuery to fetch all `h1` tags and save them to a variable called $h1
let $h1 = $("h1");
// if you console.log($h1);^
// 2. Grab the HTML element that is both an H1 and has an ID of "second"
let $second = $("h1"#second);
// no space betwee the two arguements^
// 3. Select the div with an ID of 'myDiv' and change the text to say "jQuery makes JS easy!"
$('#myDiv').text('jQuery makes jS easy');
//This adds  the text "jquery makes js easy" to the div with the id myDiv listed in the arguement. ^
// 4. Append this image to end of the body. http://www.fillmurray.com/200/200
$('body').append('<img src=\"http://www.fillmurray.com/200/200"\>');
//or
const $bill = $('<img src=\"http://www.fillmurray.com/200/200"\>');
$('body').append($bill); 
//assigned image to a variable then called the variable and added it to the body
// 5. Change the background color of the page to green.
$('html').css('background-color', )
// styling CSS with jQuery^
// 6. Remove the div with and ID of 'myDiv'
$('#myDiv').remove();
//removed ^
$('#myDiv').css('color', 'purple');
//^will change the color of the div id myDiv to purple.
$('form').on('submit', function(event){
    event.preventDefault();
    const val = $('#inputMagic').val();
    $('body').append
}
//^keeping the page from reloading when the submit is 'clicked'.
