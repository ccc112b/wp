function rectangularCollision({rectangle1, rectangle2}) {
  return (rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
    rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width
    && Math.abs(rectangle1.position.y - rectangle2.position.y) <= rectangle1.attackBox.height)
}

function determineWinner({player, enemy, timerId}) {
  clearTimeout(timerId)
  document.querySelector("#display-text").style.display = "flex"
  if (player.health === enemy.health) {
    document.querySelector("#display-text").innerHTML = "Tie"
  }
  else if (player.health > enemy.health) {
    document.querySelector("#display-text").innerHTML = "Player 1 Wins"
  }
  else if (enemy.health > player.health) {
    document.querySelector("#display-text").innerHTML = "Player 2 Wins"
  }
}

let timer = 60
let timerId;
function decreaseTimer() {
  if (timer > 0) {
    // redo the function after a second
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer
  }

  // win conditions
  if (timer == 0) {
    determineWinner({player, enemy, timeoutId})
  }
}
