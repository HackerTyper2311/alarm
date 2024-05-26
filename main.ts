radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        radio.sendNumber(2012)
    } else if (receivedNumber == 2012) {
        if (Kopel != 1) {
            Kopel = 1
        }
    } else if (receivedNumber == 112) {
        music.play(music.stringPlayable("C5 B A C5 G F E B ", 500), music.PlaybackMode.LoopingInBackground)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(112)
})
input.onGesture(Gesture.FreeFall, function () {
    music.stopAllSounds()
})
let Kopel = 0
radio.setGroup(112)
basic.forever(function () {
    if (Kopel != 1) {
        basic.showIcon(IconNames.Scissors)
        basic.clearScreen()
        radio.sendNumber(1)
    }
})
