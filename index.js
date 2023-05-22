// alert("hello");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level=0;
function playSound(file) {
    var path = "./sounds/" + file + ".mp3";
    var audio = new Audio(path);
    audio.play();
}
function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed');
    $('#' + currentColour).ready(function () {
        setTimeout(function () {
            $('#' + currentColour).removeClass('pressed');
        }, 100)
    });
}

function nextSequence() {
    $('h1').text('level '+level);
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(50).fadeIn(50);
    return randomChosenColour;
}
// var h=nextSequence();

function handler() {
    var userChosenColour = this.id;
    console.log("Hello" + userChosenColour);
    // var path = "./sounds/" +userChosenColour+ ".mp3";
    // var audio = new Audio(path);
    // audio.play();
    // $("#"+userChosenColour).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    console.log(userClickedPattern);
    animatePress(userChosenColour);
}
$('.btn').click(handler);
$(document).keypress(nextSequence);









// console.log(userClickedPattern);
// // console.log($('.btn'));
// function color() {
//     console.log("Hello" + this.id);
//     var idofbtn = this.id;
//     var path = "./sounds/" + this.id + ".mp3";
//     var audio = new Audio(path);
//     audio.play();
//     $("#"+idofbtn).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
// }
// $('.btn').on("click", color);

