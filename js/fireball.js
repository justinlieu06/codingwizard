class Fireball {
  constructor(x, y, speed, fireballSpriteNum, playerSpeed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.fireballSpriteNum = fireballSpriteNum;
    this.playerSpeed = playerSpeed;
    this.xDir;
    this.yDir;
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

  update(xDir, yDir){
    if (this.xDir === undefined && this.yDir === undefined){
      this.xDir = xDir;
      this.yDir = yDir;
    }
    this.x += this.xDir * this.speed;
    this.y += this.yDir * this.speed;
    
  }
}