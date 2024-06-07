const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imgSrc: '../img/background.png'
})

const shop = new Sprite({
  position: {
    x: 600,
    y: 128,
  },
  imgSrc: '../img/shop.png',
  scale: 2.75,
  framesMax: 6
})

const player = new Fighter({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  scale: 2.5,
  imgSrc: "../img/samuraiMack/Idle.png",
  framesMax: 8,
  offset: {
    x: 215,
    y: 157,
  },
  sprites: {
    idle: {
      imgSrc: "../img/samuraiMack/Idle.png",
      framesMax: 8
    },
    run: {
      imgSrc: "../img/samuraiMack/Run.png",
      framesMax: 8
    },
    jump: {
      imgSrc: "../img/samuraiMack/Jump.png",
      framesMax: 2
    },
    fall: {
      imgSrc: "../img/samuraiMack/Fall.png",
      framesMax: 2
    },
    attack1: {
      imgSrc: "../img/samuraiMack/Attack1.png",
      framesMax: 6
    },
    takeHit: {
      imgSrc: "../img/samuraiMack/Take Hit - white silhouette.png",
      framesMax: 4
    },
    death: {
      imgSrc: "../img/samuraiMack/Death.png",
      framesMax: 6
    }
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50
    },
    width: 160,
    height: 50
  }
})

const enemy = new Fighter({
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  framesMax: 4,
  imgSrc: "../img/kenji/Idle.png",
  scale: 2.5,
  offset: {
    x:215,
    y:167
  },
  sprites: {
    idle: {
      imgSrc: "../img/kenji/Idle.png",
      framesMax: 4
    },
    run: {
      imgSrc: "../img/kenji/Run.png",
      framesMax: 8
    },
    jump: {
      imgSrc: "../img/kenji/Jump.png",
      framesMax: 2
    },
    fall: {
      imgSrc: "../img/kenji/Fall.png",
      framesMax: 2
    },
    attack1: {
      imgSrc: "../img/kenji/Attack1.png",
      framesMax: 4
    },
    takeHit: {
      imgSrc: "../img/kenji/Take Hit.png",
      framesMax: 3
    },
    death: {
      imgSrc: "../img/kenji/Death.png",
      framesMax: 7
    }
  },
  attackBox: {
    offset: {
      x: -170,
      y: 50
    },
    width: 170,
    height: 50
  }
})

console.log(player)

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  w: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowUp: {
    pressed: false
  }
}

decreaseTimer()

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  shop.update()
  player.update()
  enemy.update()

  // default player velocity should be 0
  player.velocity.x = 0
  enemy.velocity.x = 0
  // Player Movement
  if (keys.a.pressed && player.lastKey === 'a') {
    player.switchSprite('run')
    player.velocity.x = -5
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.switchSprite('run')
    player.velocity.x = 5}
    else {
      player.switchSprite('idle')
    }
  if (player.velocity.y < 0)  {
    player.switchSprite('jump')
  } else if (player.velocity.y > 0) {
      player.switchSprite('fall')
    }



  //console.log(enemy.velocity)
  // Enemy Movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.switchSprite('run')
    enemy.velocity.x = -5
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.switchSprite('run')
    enemy.velocity.x = 5}
    else {
      enemy.switchSprite('idle')
    }
  if (enemy.velocity.y < 0)  {
    enemy.switchSprite('jump')
  } else if (enemy.velocity.y > 0) {
      enemy.switchSprite('fall')
    }

  // detect for collision
  // For x axis -> attackbox rightmost should be >= enemy's leftmost to be colliding
  //  It should also have attackbox's leftmost not be more than enemy's rightmost or else it means it didn't hit enemy
  //  For y axis -> Player's attackbox should be between player and enemy's y axis

  // enemy gets hit
  if (rectangularCollision({
    rectangle1: player,
    rectangle2: enemy
  }) && player.isAttacking && player.framesCurrent === 4) {

    enemy.takeHit()
    // this was done for when it hits enemy, should be a single hit
    player.isAttacking = false

    document.querySelector('#enemyHealth').style.width = enemy.health + "%"
    // gsap.to("#enemyHealth", {width: enemy.health + "%"})

    //console.log('go', player.position.y, enemy.position.y)
  }

  // reset isAttacking if player attacked
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false
  }

  // this is where player gets hit
  if (rectangularCollision({
    rectangle1: enemy,
    rectangle2: player
  }) && enemy.isAttacking && enemy.framesCurrent === 2) {

    player.takeHit()
    enemy.isAttacking = false

    document.querySelector('#playerHealth').style.width = enemy.health + "%"
    // gsap.to("#playerHealth", {width: player.health + "%"})
    //console.log('Enemy attacked successfuly', enemy.position.y, player.position.y)
  }
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false
  }

  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({player, enemy, timerId})
  }
}

animate()

window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'd':
      keys.d.pressed = true
      player.lastKey = 'd'
      break

    case 'a':
      keys.a.pressed = true
      player.lastKey = 'a'
      break

    case 'w':
      if (player.velocity.y === 0)
        {player.velocity.y = -20}
      break

    case ' ':
      player.attack()
      break

    case 'ArrowDown':
      enemy.attack()
      break

    case 'ArrowRight':
      keys.ArrowRight.pressed = true
      enemy.lastKey = 'ArrowRight'
      break

    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true
      enemy.lastKey = 'ArrowLeft'
      break

    case 'ArrowUp':
      if (enemy.velocity.y === 0) {
      enemy.velocity.y = -20}
      break

  }
})

window.addEventListener('keyup', (event) => {
  switch(event.key) {
    case 'd':
      keys.d.pressed = false
      break

    case 'a':
      keys.a.pressed = false
      break

    // enemy keys

    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break

    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})
