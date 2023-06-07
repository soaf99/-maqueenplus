radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
    } else if (receivedString == "B") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 30)
    } else if (receivedString == "L") {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 10)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 40)
    } else if (receivedString == "R") {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 10)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Heart)
