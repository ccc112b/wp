class Sprite {
  constructor({position, imgSrc, scale = 1, framesMax = 1, offset = {       x:0, y:0}}) {
    this.position = position
    this.height = 150
    this.width = 50
    this.image = new Image()
    this.image.src = imgSrc
    this.scale = scale
    this.framesMax = framesMax
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
    this.offset = offset
  }

  draw () {
    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width/this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,

      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale)
  }

  animateFrames() {
    this.framesElapsed ++
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax-1) this.framesCurrent ++
      else this.framesCurrent = 0
    }
  }

  update() {
    this.draw()
    this.animateFrames()
  }
}

class Fighter extends Sprite{
  constructor({ position, velocity, color='red', imgSrc, scale = 1, framesMax = 1, offset = {x:0, y:0},
  sprites,
  attackBox = { offset: {}, width: undefined, height: undefined}
}) {

    super({
      position,
      imgSrc,
      scale,
      framesMax,
      offset
    })

    this.velocity = velocity
    this.height = 150
    this.width = 50
    this.lastKey
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      width: attackBox.width,
      offset: attackBox.offset,
      height: attackBox.height,
    }
    this.color = color
    this.isAttacking
    this.health = 100

    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
    this.sprites = sprites
    this.dead = false

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image()
      sprites[sprite].image.src = sprites[sprite].imgSrc
    }
    console.log(this.sprites)
}

  update() {
    this.draw()
    // don't do anything other than gravity & draw to make character fall if they died mid air, thus prevent further animation of the character
    if (this.dead) {
      while (!(this.position.y + this.height + this.velocity.y >= canvas.height - 96)) {
        this.position.y += this.velocity.y
        this.velocity.y += gravity
      }
      this.velocity.y = 0
      this.position.y = 330
      return
    }
    this.animateFrames()

    // attack boxes
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y

    // draw attackBox
    //c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    // stop falling when reached bottom
    if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
      this.velocity.y = 0
      this.position.y = 330
    } else {
      this.velocity.y += gravity
    }
  }

  attack() {
    this.switchSprite('attack1')
    this.isAttacking = true

    /* we shoudl only be attacking for a certain period of time

    setTimeout(() => {this.isAttacking=false}, 100) */
  }

  takeHit() {
    this.health -= 20
    if (this.health <= 0) {
      // y is 0
      while (this.position.y > 0) {this.position.y -= 5}
      this.switchSprite('death')
    }
    else{
      this.switchSprite('takeHit') }
  }

  switchSprite(sprite) {
    // override for when attack animation
    if (this.image === this.sprites.attack1.image && this.framesCurrent < this.sprites.attack1.framesMax - 1) return
    // override for when got hit animation
    if (this.image === this.sprites.takeHit.image && this.framesCurrent < this.sprites.takeHit.framesMax - 1) return
    // override permanent for death
    if (this.image === this.sprites.death.image ) {
      if (this.framesCurrent === this.sprites.death.framesMax-1 && !this.dead) {
        this.dead = true
      }
      return
    }

    switch(sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image
          this.framesMax = this.sprites.idle.framesMax
          this.framesCurrent = 0
        }
        break;

      case 'run':
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image
          this.framesMax = this.sprites.run.framesMax
          this.framesCurrent = 0
        }
        break;

      case 'jump':
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image
          this.framesMax = this.sprites.jump.framesMax
          this.framesCurrent = 0
        }
        break;
      case 'fall':
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image
          this.framesMax = this.sprites.fall.framesMax
          this.framesCurrent = 0
        }
        break;
      case 'attack1':
        if (this.image !== this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image
          this.framesMax = this.sprites.attack1.framesMax
          this.framesCurrent = 0
        }
        break;
      case 'takeHit':
        if (this.image !== this.sprites.takeHit.image) {
          this.image = this.sprites.takeHit.image
          this.framesMax = this.sprites.takeHit.framesMax
          this.framesCurrent = 0
        }
        break;
      case 'death':
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image
          this.framesMax = this.sprites.death.framesMax
          this.framesCurrent = 0
        }
        break;
    }
  }
}
