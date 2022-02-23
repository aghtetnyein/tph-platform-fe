function drawLovestruck(ctx) {
  ctx.save();
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineCap = "butt";
  ctx.lineJoin = "miter";
  ctx.miterLimit = 4;
  ctx.fillStyle = "#ffdf40";
  ctx.beginPath();
  ctx.arc(8.29785, 8, 8, 0, 6.283185307179586, true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#e3482c";
  ctx.beginPath();
  ctx.moveTo(9.46074, 6.64147);
  ctx.bezierCurveTo(9.18956, 6.15542, 9.03136, 5.67446, 9.18178, 5.1131);
  ctx.bezierCurveTo(9.42656, 4.19956, 10.3638, 3.65694, 11.2751, 3.90114);
  ctx.bezierCurveTo(11.7591, 4.03081, 12.1384, 4.35628, 12.3511, 4.76983);
  ctx.bezierCurveTo(12.7421, 4.51804, 13.2334, 4.42584, 13.7173, 4.55551);
  ctx.bezierCurveTo(14.6286, 4.79971, 15.169, 5.73824, 14.9242, 6.65178);
  ctx.bezierCurveTo(14.7738, 7.21313, 14.3963, 7.55058, 13.9185, 7.83591);
  ctx.bezierCurveTo(13.4406, 8.12125, 11.1708, 9.175, 11.1708, 9.175);
  ctx.bezierCurveTo(11.1708, 9.175, 9.73192, 7.12752, 9.46074, 6.64147);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#e3482c";
  ctx.beginPath();
  ctx.moveTo(2.58766, 7.83629);
  ctx.bezierCurveTo(2.10978, 7.55095, 1.73231, 7.21352, 1.58189, 6.65216);
  ctx.bezierCurveTo(1.33711, 5.73862, 1.87746, 4.80009, 2.78881, 4.55589);
  ctx.bezierCurveTo(3.27276, 4.42622, 3.76401, 4.51842, 4.15499, 4.77021);
  ctx.bezierCurveTo(4.36769, 4.35666, 4.74702, 4.03119, 5.23097, 3.90152);
  ctx.bezierCurveTo(6.14232, 3.65732, 7.07955, 4.19994, 7.32433, 5.11348);
  ctx.bezierCurveTo(7.47474, 5.67483, 7.31656, 6.15581, 7.04538, 6.64185);
  ctx.bezierCurveTo(6.7742, 7.12789, 5.33535, 9.17537, 5.33535, 9.17537);
  ctx.bezierCurveTo(5.33535, 9.17537, 3.06554, 8.12163, 2.58766, 7.83629);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#66342d";
  ctx.beginPath();
  ctx.moveTo(8.19727, 14.6037);
  ctx.bezierCurveTo(10.4064, 14.6037, 12.1973, 12.7392, 12.1973, 10.7002);
  ctx.bezierCurveTo(12.1973, 10.7002, 9.76855, 11.1346, 8.19727, 11.1346);
  ctx.bezierCurveTo(6.62598, 11.1346, 4.19727, 10.7002, 4.19727, 10.7002);
  ctx.bezierCurveTo(4.19727, 12.7392, 5.98813, 14.6037, 8.19727, 14.6037);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

export default drawLovestruck;
