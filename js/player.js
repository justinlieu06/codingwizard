class Player {
  constructor(x, y, speed, spriteX, spriteY){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.spriteX = spriteX;
    this.spriteY = spriteY;
  }

  move(e){
    if (e.key === 'w'){
      this.y -= this.speed;
      // this.spriteX = 2;
      // this.spriteY = 0;
    }
    if (e.key === 's'){
      this.y += this.speed;
      // this.spriteX = 2;
      // this.spriteY = 2;
    }
    if (e.key === 'a'){
      this.x -= this.speed;
      // this.spriteX = 1;
      // this.spriteY = 0;
    }
    if (e.key === 'd'){
      this.x += this.speed;
      // this.spriteX = 3;
      // this.spriteY = 0;
    }
    // if (e.key === 'q'){
    //   this.x -= this.speed;
    //   this.y -= this.speed;
    // }
    // if (e.key === 'e'){
    //   this.x += this.speed;
    //   this.y -= this.speed;
    // }
    // if (e.key === 'z'){
    //   this.x -= this.speed;
    //   this.y += this.speed;
    // }
    // if (e.key === 'c'){
    //   this.x += this.speed;
    //   this.y += this.speed;
    // }
    if (e.shiftKey){
      this.speed += 5;
    }
  }
}