const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        playSoundByClick(button.getAttribute('id'));
    })
})

function playSoundByClick(name) {
    let audio = new Audio(`sounds/${name}.wav`);
    audio.play();
}

const body = document.querySelector('body');
let keypress = body.addEventListener('keypress', playSoundByKeypress);


function playSoundByKeypress(keypress) {
    let key = keypress.key;
    
    let keyPosition
    const keyList = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const soundList = ['clap.wav', 'hihat.wav', 'kick.wav', 'openhat.wav', 'boom.wav', 'ride.wav', 'snare.wav', 'tom.wav', 'tink.wav'];
    for (i = 0; i < keyList.length; i++) {
        if (key === keyList[i]) {
            keyPosition = i;
        }
    }
    
    let audio = new Audio(`sounds/${soundList[keyPosition]}`);
    audio.play();
}