(function () {

var canvas = document.getElementById('gameOfLife');

/*
 *CONSTANTS
 */
var PIXEL = 20;
var X_MAX = canvas.width;
var Y_MAX = canvas.height;
var X_MIN = 0;
var Y_MIN = 0;
var MATRXI_LENGTH = 20;

var matrix = [];
  canvas.addEventListener('click', function (ev) {
    console.log(ev);
  })

  function initCanvas () {
    var ctx = canvas.getContext('2d');

    ctx.strokeStyle = '#d2d2d2';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(var i = PIXEL; i < X_MAX; i += PIXEL) {
      ctx.moveTo(i,Y_MIN);
      ctx.lineTo(i,Y_MAX);
      ctx.stroke();
    }

    for(var j = PIXEL; j < Y_MAX; j += PIXEL) {
      ctx.moveTo(X_MIN,j);
      ctx.lineTo(X_MAX,j);
      ctx.stroke();
    }
    ctx.closePath();
  }

  function initMatrix () {
    var row = [];
    for(var i = 0; i < MATRXI_LENGTH; ++i) {
      row.push(false);
    }
    for(var i = 0; i < MATRXI_LENGTH; ++i) {
      matrix.push(row);
    }
  }

  initMatrix();
  initCanvas();
  console.log(matrix);


}())
