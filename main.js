// get all keys
const keys = document.querySelectorAll(".key")

// play notes
function playNote(event) {

    let audioKeyCode = getKeyCode(event)

    // pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    // if key exists
    const cantFoundAnyKey = !key

    if (cantFoundAnyKey) {
        return
    }

    // playing class
    addPlayingClass(key)

    // play audio
    playAudio(audioKeyCode)
}

function addPlayingClass(key) {
  key.classList.add('playing') 
} 

function getKeyCode(event) {

    // keycode
    let keyCode

    const isKeyBoard = event.type === "keydown"
    
    if (isKeyBoard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    } 

    return keyCode
}

function playAudio(audioKeyCode) {
    // play audio
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

function init() {
    // click with mouse
    keys.forEach(function(key) {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })

    // keyboard type
    window.addEventListener("keydown", playNote)
}

window.addEventListener("load", init)