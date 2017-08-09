function MyRect(option) {
  this.ctx = option.ctx;
  this.x = option.x;
  this.y = option.y;
  this.w = option.w;
  this.h = option.h;
  this.init(option);

}
MyRect.prototype = {
  constructor: MyRect,
  init: function (option) {
    this.creatPath();
    this.dragPath(option);
  },
  creatPath: function () {
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.w, this.y);
    this.ctx.lineTo(this.x + this.w, this.y + this.h);
    this.ctx.lineTo(this.x, this.y + this.h);
    this.ctx.closePath();
  },
  dragPath: function (option) {
    // 只描边
    if ((option.strokeStyle && !option.fillStyle) || (!option.strokeStyle && !option.fillStyle)) {
      this.ctx.strokeStyle = option.strokeStyle;
      this.ctx.stroke();
    }
    // 只填充
    else if (!option.strokeStyle && option.fillStyle) {
      this.ctx.fillStyle = option.fillStyle;
      this.ctx.fill();
    }
    // 描边加填充
    else {
      this.ctx.strokeStyle = option.strokeStyle;
      this.ctx.stroke();
      this.ctx.fillStyle = option.fillStyle;
      this.ctx.fill();

    }
  }
}