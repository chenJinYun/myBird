function Pipe(option) {
  this.ctx = option.ctx
  this.pipeImgTop = option.pipeImgTop;
  this.pipeImgBottom = option.pipeImgBottom;
  this.pipeX = option.pipeX;

  this.pipeTopY = 0;
  this.pipeBottomY = 0;
  this.steep = 2;
  this.pipeW = this.pipeImgTop.width * 3;
  this.pipeH = this.pipeImgTop.height;
  // 初始化，第一次循环产生随机的y值
  this.getY();
}
Pipe.prototype = {
  constructor: Pipe,
  getY: function () {
    this.pipeTopY = -(Math.random() * 298 + 102);
    this.pipeBottomY = this.pipeTopY + this.pipeH + 150;
  },
  drawPipe: function () {
    this.pipeX -= this.steep;
    if (this.pipeX <= -this.pipeW) {
      this.pipeX += 6 * this.pipeW;
      this.getY();
    }
    this.ctx.drawImage(this.pipeImgTop, this.pipeX, this.pipeTopY);
    this.ctx.rect(this.pipeX, this.pipeTopY, this.pipeImgTop.width, this.pipeH);
    this.ctx.drawImage(this.pipeImgBottom, this.pipeX, this.pipeBottomY);
    this.ctx.rect(this.pipeX, this.pipeBottomY, this.pipeImgTop.width, this.pipeH);

  }
}