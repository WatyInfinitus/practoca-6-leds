input.onButtonPressed(Button.A, function () {
    led.setBrightness(led.brightness() + 15)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(led.brightness() - 15)
})
led.setBrightness(100)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        if (led.brightness() > 175) {
            led.plot(0, 0)
            led.plot(0, 4)
            led.plot(4, 4)
            led.plot(4, 0)
        } else {
            led.unplot(0, 0)
            led.unplot(0, 4)
            led.unplot(4, 4)
            led.unplot(4, 0)
        }
    }
})
