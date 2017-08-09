function Sky(option) {
  this.ctx = option.ctx;
  this.skyImg = option.skyImg;
  this.skyX = option.skyX;

  this.skyY = 0;
  this.steep = 2;
  this.skyW=this.skyImg.width
}
Sky.prototype = {
  constructor: Sky,
  drawSky: function () {
    this.skyX -= this.steep;
    if (this.skyX <= -this.skyW) {
      this.skyX += 2*this.skyW;
    }
    this.ctx.drawImage(this.skyImg, this.skyX, this.skyY);
  }

}