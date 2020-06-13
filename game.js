import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from 'snake.js'


let lastRenderTime = 0
import SNAKE_SPEED from 'snake.js'

const gameBoard = document.getElementById('game-board')

function main(currentTime) {
     window.requestAnimationFrame(main)
     const SecondSinceLastRender = (currentTime - lastRenderTime)
     if (SecondSinceLastRender < 1 / SNAKE_SPEED) return
     

     console.log('Render')
     lastRenderTime = currentTime


    update()
    draw()
 }

 window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    drawSnake(gameBoard)
}

