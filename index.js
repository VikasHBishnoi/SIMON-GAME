// alert("hello");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var curlvl = 0;
var start=false;
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
    level++;
    $('h1').text('level ' + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(50).fadeIn(50);
    return randomChosenColour;
}
// var h=nextSequence();
function checkAnswer(currentLevel) {
    if (currentLevel < 0) {
        userClickedPattern = [];
        return true;
    }
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        return checkAnswer(currentLevel - 1);
    }
    else {
        return false;
    }
}
function handler() {
    var userChosenColour = this.id;
    console.log("Hello" + userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    console.log(userClickedPattern);
    animatePress(userChosenColour);
    curlvl++;
    
    if(curlvl < level){
        $('h1').text('doing');
        return;
    }
    var fl = checkAnswer(level);
    console.log(fl);
    curlvl = 0;
    if (!fl || curlvl > level) {
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
        playSound('wrong');
        $('body').addClass('game-over');

        $('h1').text('Game Over ');
        start=false;
        setTimeout(function () {
            //your code to be executed after .2 second
            $('body').removeClass('game-over')
        },200);
        setTimeout(function () {
            //your code to be executed after 1 second
            $('h1').text("Press A Key to Start");
        },1000);
    }
    else {
        setTimeout(function () {
            //your code to be executed after 1 second
            if (level != 0) {
                nextSequence();
            }
        }, 1000);
    }
}
$('.btn').click(handler);
$(document).keypress(function(){
    if(!start){
        nextSequence();
        start=true;
    }
});









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

