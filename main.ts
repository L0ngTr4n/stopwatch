let start = 0
let elapse = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    elapse = input.runningTime() - start
    basic.showNumber(Math.idiv(elapse, 1000))
})
