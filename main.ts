input.onButtonPressed(Button.A, function () {
    basic.showNumber(4 + 1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # # .
        # # . . #
        # # . . #
        # # # # .
        # . . . .
        `)
})
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . . . . .
        . . . . .
        `)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    1 + 100,
    0,
    185,
    37,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.InBackground)
    music.playTone(131, music.beat(BeatFraction.Whole))
})
