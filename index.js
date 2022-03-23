const $video = document.querySelector('#video');
const $play = document.querySelector('#Play');
const $pause = document.querySelector('#Pause');
const $backward = document.querySelector('#Retrasar')
const $forward = document.querySelector('#Avanzar')


$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward)


function handlePlay(){
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('le diste click al boton play')
}

function handlePause(){
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
    console.log('le diste click al boton pause')
}

function handleBackward() {
    $video.currentTime = $video.currentTime-10
}

function handleForward(){
    $video.currentTime = $video.currentTime+10
}

const $progress = document.querySelector('#progress')
$video.addEventListener('timeupdate', handleTimeUpdate)
$video.addEventListener('loadedmetadata', handleLoader)

function handleLoader(){
    $progress.max = $video.duration
}

function handleTimeUpdate() {
   $progress.value = $video.currentTime 
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = $progress.value
}