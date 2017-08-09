function Bird(option) {
  this.ctx=option.ctx;
  this.birdimg=option.birdimg;
  this.canvasX=option.canvasX;
  this.canvasY=option.canvasY;

  this.birdX=0;
  this.birdY=0;
  this.birdW=this.birdimg.width/3;
  this.birdH=this.birdimg.height;
  this.g=0.0003;
  this.birdSteep=0;
  this.birdindex=0;
  this.birdMaxAngle=45;
  this.birdMaxSteep=0.4;
}
Bird.prototype = {
  constructor: Bird,
  drawBird: function (offsetTime) {
    // 重力加速度求移动的距离
    var distant = this.birdSteep * offsetTime + offsetTime * offsetTime * this.g  /  2;
    // 重力加速度求速度
    this.birdSteep = this.birdSteep + this.g * offsetTime;
    // 画布的y轴加上移动的距离
    this.canvasY += distant;
    this.birdX = this.birdW * this.birdindex;
    // 计算平移角度
    var currentAngle = this.birdMaxAngle * this.birdSteep / this.birdMaxSteep;
    // 当超过45度的时候，把角度设置为最大角度
    if (currentAngle > this.birdMaxAngle) {
      currentAngle = this.birdMaxAngle;
    }
    // 先平移在旋转
    this.ctx.save();
    this.ctx.translate(this.canvasX + this.birdW / 2, this.canvasY + this.birdH / 2);
    this.ctx.rotate(Math.PI / 180 * currentAngle);
    this.ctx.drawImage(this.birdimg, this.birdX, this.birdY, this.birdW,this.birdH, -this.birdW / 2, -this.birdH / 2, this.birdW, this.birdH);
    this.ctx.restore();
    this.birdindex++;
    if (this.birdindex > 2) {
      this.birdindex = 0;
    }
  }
}