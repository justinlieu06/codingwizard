class Player {
  constructor(x, y, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  move(e){
    if (e.key === 'w'){
      this.y -= this.speed;
    }
    if (e.key === 's'){
      this.y += this.speed;
    }
    if (e.key === 'a'){
      this.x -= this.speed;
    }
    if (e.key === 'd'){
      this.x += this.speed;
    }
    if (e.key === 'q'){
      this.x -= this.speed;
      this.y -= this.speed;
    }
    if (e.shiftKey){
      this.speed += 5;
    }
  }
}