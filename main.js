
var start_min = 0
var time = start_min * 60

function add(){
    time += 60 * 5
    return time
}
function substract(){
    time -= 60 * 5
    return time
}

function play() {
    var audio = new Audio('./music10.mp3')
    audio.play();
}

function update_countdown(){
    var elm_countdown = document.getElementById("timer");
    var min = Math.floor(time / 60);
    var sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    elm_countdown.innerHTML = `${min} : ${sec}`;
    time--;
    if(time < 0){
        time = 0
    }
    else if (time == 0) {
        play()
    }
    return time;
    }

function main(){
    setInterval(update_countdown, 1000);
}



