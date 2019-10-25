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

  keyListener(e){
    let key_state = event.type === "keydown" ? true : false;
    if (e.key === 'w'){
      bug.up = key_state;
    }
    if (e.key === 's'){
      bug.down = key_state;
      
    }
    if (e.key === 'a'){
      bug.left = key_state;
      
    }
    if (e.key === 'd'){
      bug.right = key_state;
      
    }
  }

  move(){
    if (viewport.up) {
      this.y += this.playerSpeed;
    }
    if (viewport.down) {
      this.y -= this.playerSpeed;
    }
    if (viewport.left){
      this.x += this.playerSpeed;
    }
    if (viewport.right){
      this.x -= this.playerSpeed;
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