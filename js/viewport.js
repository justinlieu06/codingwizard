class Viewport {
  constructor(x, y, w, h, speed){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
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
  }
}