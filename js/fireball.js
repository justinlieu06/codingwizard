class Fireball {
  constructor(x, y, speed, fireballSpriteNum){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.fireballSpriteNum = fireballSpriteNum;
  }

  update(xDir, yDir){
    this.x += xDir * this.speed;
    this.y += yDir * this.speed;
  }
}