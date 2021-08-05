var block = document.getElementsByClassName('block');
var nut = document.getElementById('start');
var noti = document.getElementById('noti');
var how = document.getElementById('how');

nut.onclick = function () {
    play();
}

function play() {
    nut.innerText = "Play again";
    noti.innerText = ""
    how.innerText = "How to play: choose the block which was lightened!";

    var quest = Math.floor(Math.random() * 5);
    block[quest].style.animation = "empha 1s";

    var sai;
    for (sai = 0; sai < block.length; sai++) {
        block[sai].onclick = function () {
            this.style.animation = "false 1s";
            noti.style.color = "red"
            noti.style.fontSize = "50px";
            noti.innerText = "False! Try again!"
            how.innerText=""
        }
    }

    block[quest].onclick = function () {
        this.style.animation = "true 1s";
        noti.style.color = "yellow"
        noti.style.fontSize = "50px";
        noti.innerText = "True! You win!"
        how.innerText = ""

        for (sai = 0; sai < block.length; sai++) {
            block[sai].onclick = function () {
                noti.style.color = "lightgrey"
                noti.style.fontSize = "30px";
                noti.innerText = "Press \"Play again\" to enjoy more!"
                how.innerText = ""
            }
        }
        
    }
}