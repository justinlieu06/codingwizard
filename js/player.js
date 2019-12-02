class Player {
  constructor(x, y, speed, spriteX, spriteY, fireballArr){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.spriteX = spriteX;
    this.spriteY = spriteY;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
  }

  keyListener(e){
    let key_state = event.type === "keydown" ? true : false;
    if (e.key === 'w'){
      player.up = key_state;
    }
    if (e.key === 's'){
      player.down = key_state;
    }
    if (e.key === 'a'){
      player.left = key_state;
    }
    if (e.key === 'd'){
      player.right = key_state;
    }
  }

  move(){        
    if (player.up) {
      this.y -= this.speed;
      this.spriteX = 2;
      this.spriteY = 0;
    }
    if (player.down) {
      this.y += this.speed;
      this.spriteX = 2;
      this.spriteY = 2;
    }
    if (player.left){
      this.x -= this.speed;
      this.spriteX = 1;
      this.spriteY = 0;
    }
    if (player.right){
      this.x += this.speed;
      this.spriteX = 3;
      this.spriteY = 0;
    }
  }

}