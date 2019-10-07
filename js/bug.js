class Bug {
  constructor(x, y, speed, bugSpriteNum){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.bugSpriteNum = bugSpriteNum;
    this.velocityX = 1;
    this.velocityY = 1;
  }

  move(e){
    if (e.key === 'w'){
      this.y += this.speed;
    }
    if (e.key === 's'){
      this.y -= this.speed;
    }
    if (e.key === 'a'){
      this.x += this.speed;
    }
    if (e.key === 'd'){
      this.x -= this.speed;
    }
    if (e.key === 'q'){
      this.x += this.speed;
      this.y += this.speed;
    }
  }

  updateRand(bugRandDir, bugRandDist){
    if (bugRandDir === 1){
      this.x += bugRandDist;
    }
    else if (bugRandDir === 2){
      this.y += bugRandDist;
    } 
    else if (bugRandDir === 3){
      this.y -= bugRandDist;
    }
    else {
      this.x -= bugRandDist;
    }
  }

  update(bugXDir, bugYDir, velX, velY){
    this.velocityX = velX;
    this.velocityY = velY;
    this.x += bugXDir * this.speed;
    this.y += bugYDir * this.speed;
  }
}