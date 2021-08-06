var block = document.getElementsByClassName('block');
var nut = document.getElementById('start');
var noti = document.getElementById('noti');
var how = document.getElementById('how');

var home = document.getElementById('home');
var easy = document.getElementById('easy');
var norm = document.getElementById('norm');
var hard = document.getElementById('hard');

var quit = document.getElementById('quit');
var quitNorm = document.getElementById('quit-norm');
var quitHard = document.getElementById('quit-hard');

var toEasy = document.getElementById('to-easy');
var toNorm = document.getElementById('to-norm');
var toHard = document.getElementById('to-hard');

var blockNorm = document.getElementsByClassName('block-norm');
var startNorm = document.getElementById('start-norm');
var notiNorm = document.getElementById('noti-norm');
var howNorm = document.getElementById('how-norm');

var blockHard = document.getElementsByClassName('block-hard');
var startHard = document.getElementById('start-hard');
var notiHard = document.getElementById('noti-hard');

quit.addEventListener(
    "click",
    function () {
        easy.style.animation = "fadeout 500ms"
        easy.style.visibility = 'hidden'
        home.style.animation = "fadein 500ms"
        home.style.visibility = 'visible'
    }
);

quitNorm.onclick = function () {
    norm.style.animation = "fadeout 500ms"
    norm.style.visibility = 'hidden'
    home.style.animation = "fadein 500ms"
    home.style.visibility = 'visible'
}

quitHard.onclick = function () {
    hard.style.animation = "fadeout 500ms"
    hard.style.visibility = 'hidden'
    home.style.animation = "fadein 500ms"
    home.style.visibility = 'visible'
}

toEasy.onclick = function () {
    home.style.visibility = 'hidden';
    home.style.animation = "fadeout 500ms"
    easy.style.visibility = 'visible';
    easy.style.animation = "fadein 500ms"
    nut.innerText = "Start"
    how.innerText = ""
    noti.innerText = ""
}

toNorm.onclick = function () {
    home.style.visibility = 'hidden';
    home.style.animation = "fadeout 500ms"
    norm.style.visibility = 'visible';
    norm.style.animation = "fadein 500ms"
    startNorm.innerText = "Start"
    notiNorm.innerText = ""
    howNorm.innerText = ""
}

toHard.onclick = function () {
    home.style.visibility = 'hidden';
    home.style.animation = "fadeout 500ms"
    hard.style.visibility = 'visible';
    hard.style.animation = "fadein 500ms"
}

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
            noti.innerText = "False!\nTry again!"
            how.innerText = ""
        }
    }

    block[quest].onclick = function () {
        this.style.animation = "true 1s";
        noti.style.color = "yellow"
        noti.style.fontSize = "50px";
        noti.innerText = "True!\nYou win!"
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

startNorm.onclick = function () {
    playNorm()
}

function playNorm() {
    startNorm.innerText = "Play again";
    notiNorm.innerText = ""
    howNorm.innerText = "How to play: choose the blocks in the same order as lightened!"

    var q1 = Math.floor(Math.random() * 9)
    blockNorm[q1].style.animation = "empha 1s";
    var q2;
    var i;

    setTimeout(() => {
        var q3 = Math.floor(Math.random() * 9)
        blockNorm[q3].style.animation = "empha 1s";
        q2 = q3
        setTimeout(() => { resNorm(); }, 1000)
    }, 1000);

    function resNorm() {
        for (i = 0; i < blockNorm.length; i++) {
            blockNorm[i].onclick = function () {
                this.style.animation = "false 1s";
                notiNorm.style.color = "red"
                notiNorm.style.fontSize = "50px";
                notiNorm.innerText = "False!\nTry again!"
                howNorm.innerText = ""
            }
        }

        blockNorm[q1].onclick = function () {
            this.style.animation = "true 500ms";
            notiNorm.innerText = ""
            howNorm.innerText = ""

            setTimeout(() => {
                for (i = 0; i < blockNorm.length; i++) {
                    blockNorm[i].style.animation = "unset"
                }
            }, 500)

            for (i = 0; i < blockNorm.length; i++) {
                blockNorm[i].onclick = function () {
                    this.style.animation = "false 1s";
                    notiNorm.style.color = "red"
                    notiNorm.style.fontSize = "50px";
                    notiNorm.innerText = "False!\nTry again!"
                }
            }

            blockNorm[q2].onclick = function () {
                this.style.animation = "true 500ms";
                notiNorm.style.color = "yellow"
                notiNorm.style.fontSize = "50px";
                notiNorm.innerText = "True!\nYou win!"

                for (i = 0; i < blockNorm.length; i++) {
                    blockNorm[i].onclick = function () {
                        notiNorm.style.color = "lightgrey"
                        notiNorm.style.fontSize = "30px";
                        notiNorm.innerText = "Press \"Play again\" to enjoy more!"
                    }
                }
            }
        }
    }

}

startHard.onclick = function () {
    playHard();
}

function playHard() {
    startHard.innerText = "Play again";
    notiHard.innerText = ""

    var q1 = Math.floor(Math.random() * 25)
    var q2 = Math.floor(Math.random() * 25)
    var q3 = Math.floor(Math.random() * 25)

    blockHard[q1].style.animation = "empha 750ms"
    var i;

    setTimeout(() => {
        blockHard[q2].style.animation = "empha 750ms"
        setTimeout(() => {
            blockHard[q3].style.animation = "empha 750ms"
            setTimeout(() => {
                resHard()
            }, 750)
        }, 750)
    }, 750)

    function resHard() {
        for (i = 0; i < blockHard.length; i++) {
            blockHard[i].onclick = function () {
                this.style.animation = "false 1s";
                notiHard.style.color = "red"
                notiHard.style.fontSize = "50px";
                notiHard.innerText = "False!\nTry again!"
            }
        }

        blockHard[q1].onclick = function () {
            this.style.animation = "true 500ms";
            notiHard.innerText = ""

            setTimeout(() => {
                for (i = 0; i < blockHard.length; i++) {
                    blockHard[i].style.animation = "unset"
                }
            }, 500)

            for (i = 0; i < blockHard.length; i++) {
                blockHard[i].onclick = function () {
                    this.style.animation = "false 1s";
                    notiHard.style.color = "red"
                    notiHard.style.fontSize = "50px";
                    notiHard.innerText = "False!\nTry again!"
                }
            }

            blockHard[q2].onclick = function () {
                this.style.animation = "true 500ms";
                notiHard.innerText = ""

                setTimeout(() => {
                    for (i = 0; i < blockHard.length; i++) {
                        blockHard[i].style.animation = "unset"
                    }
                }, 500)

                for (i = 0; i < blockHard.length; i++) {
                    blockHard[i].onclick = function () {
                        this.style.animation = "false 1s";
                        notiHard.style.color = "red"
                        notiHard.style.fontSize = "50px";
                        notiHard.innerText = "False!\nTry again!"
                    }
                }

                blockHard[q3].onclick = function () {
                    this.style.animation = "true 500ms";
                    notiHard.style.color = "yellow"
                    notiHard.style.fontSize = "50px";
                    notiHard.innerText = "True!\nYou win!"

                    for (i = 0; i < blockHard.length; i++) {
                        blockHard[i].onclick = function () {
                            notiHard.style.color = "lightgrey"
                            notiHard.style.fontSize = "30px";
                            notiHard.innerText = "Press \"Play again\" to enjoy more!"
                        }
                    }
                }
            }
        }
    }

}