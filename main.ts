let azimuth = 0
basic.forever(function () {
    azimuth = input.compassHeading()
    serial.writeString("" + (azimuth))
    serial.writeLine("")
})
