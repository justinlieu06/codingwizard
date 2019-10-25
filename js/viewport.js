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

  keyListener(e){
    let key_state = event.type === "keydown" ? true : false;
    if (e.key === 'w'){
      viewport.up = key_state;
    }
    if (e.key === 's'){
      viewport.down = key_state;
      
    }
    if (e.key === 'a'){
      viewport.left = key_state;
      
    }
    if (e.key === 'd'){
      viewport.right = key_state;
      
    }
  }

  move(){
    if (viewport.up) {
      this.y -= this.speed;
    }
    if (viewport.down) {
      this.y += this.speed;
    }
    if (viewport.left){
      this.x -= this.speed;
    }
    if (viewport.right){
      this.x += this.speed;
    }
  }

}