input.onPinPressed(TouchPin.P2, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
radio.setGroup(1)
