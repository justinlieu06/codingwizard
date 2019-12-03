class Bug {
  constructor(x, y, speed, bugSpriteNum, playerSpeed, velocityX, velocityY){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.bugSpriteNum = bugSpriteNum;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.playerSpeed = playerSpeed;
  }

  move(){
    if (player.up) {
      this.y += this.playerSpeed;
    }
    if (player.down) {
      this.y -= this.playerSpeed;
    }
    if (player.left){
      this.x += this.playerSpeed;
    }
    if (player.right){
      this.x -= this.playerSpeed;
    }
  }

  update(bugXDir, bugYDir, velX, velY){
    this.velocityX = velX;
    this.velocityY = velY;
    this.x += bugXDir * this.speed;
    this.y += bugYDir * this.speed;
  }
}