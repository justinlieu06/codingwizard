class Viewport {
  constructor(x, y, w, h, speed){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.speed = speed;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
  }

  move(){
    if (player.up) {
      this.y -= this.speed;
    }
    if (player.down) {
      this.y += this.speed;
    }
    if (player.left){
      this.x -= this.speed;
    }
    if (player.right){
      this.x += this.speed;
    }
  }

}