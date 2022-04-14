let nbr = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.pause(2000)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
OLED.init(128, 64)
OLED12864_I2C.init(60)
OLED12864_I2C.invert(true)
OLED12864_I2C.clear()
OLED.clear()
basic.forever(function () {
    OLED12864_I2C.clear()
    while (input.buttonIsPressed(Button.B)) {
        OLED12864_I2C.zoom(true)
        OLED12864_I2C.showNumber(
        6,
        1,
        sonar.ping(
        DigitalPin.P15,
        DigitalPin.P14,
        PingUnit.Centimeters
        ),
        1
        )
        led.plot(2, 0)
    }
    led.unplot(2, 0)
    if (input.buttonIsPressed(Button.A)) {
        if (255 == nbr) {
            nbr = 0
            basic.pause(1000)
            led.unplot(2, 2)
        } else if (0 == nbr) {
            nbr += 255
            basic.pause(1000)
            led.plot(2, 2)
        } else {
        	
        }
    }
    robotbit.MotorRun(robotbit.Motors.M1A, nbr)
})
