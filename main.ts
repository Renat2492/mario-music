input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Double))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(126, music.beat(BeatFraction.Whole))
})
music.setTempo(250)
control.inBackground(function () {
    while (true) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            # # . # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . # # # .
            # . . . #
            . # # # .
            . # # # .
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            # # . # #
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            . # # # .
            . # # # .
            # # . # #
            `)
    }
})
