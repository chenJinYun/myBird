function Land(option) {
  this.ctx = option.ctx;
  this.landImg = option.landImg;
  this.canvasH = option.canvasH;
  this.landX = option.landX;

  this.LandY =this.canvasH - this.landImg.height;
  this.steep = 2;
  this.landW = this.landImg.width;
  this.landH = this.landImg.height;
78987  
}
Land.prototype = {
  constructor: Land,
  drawLand: function () {
    this.landX -= this.steep;
    if (this.landX <= -this.landW) {
      this.landX += 4 * this.landW;
    }
    this.ctx.drawImage(this.landImg,this.landX,this.LandY);
  }
}