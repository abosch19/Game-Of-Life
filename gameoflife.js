(function () {
/*
 *CONSTANTS AND VARIABLES
 */
var canvas = document.getElementById('gameOfLife');
var ctx = canvas.getContext('2d');

var CELL = 20;
var X_MAX = canvas.width;
var Y_MAX = canvas.height;
var X_MIN = 0;
var Y_MIN = 0;
var MATRXI_LENGTH = 20;

var matrix = [];
var button = document.getElementById('start_stop');

/*
 *Adding eventsListener
 */
button.addEventListener('click', buttonOnClick);
canvas.addEventListener('click', canvasOnClick);

/*
 * Init
 */
initMatrix();
initCanvas();
//console.log(matrix);


/*
 * Functions
 */
  function initCanvas () {

    ctx.strokeStyle = '#d2d2d2';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(var i = CELL; i < X_MAX; i += CELL) {
      ctx.moveTo(i,Y_MIN);
      ctx.lineTo(i,Y_MAX);
      ctx.stroke();
    }

    for(var j = CELL; j < Y_MAX; j += CELL) {
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

  function buttonOnClick (ev) {
    console.log("Start");
  }

  function canvasOnClick (ev) {
    var coords = xyConverter(ev.layerX,ev.layerY);
    //console.log("X: " + coords.x + "\nY: " + coords.y);
    drawCanvas(coords.x,coords.y);
    //console.log(matrix);
  }

  function xyConverter(x,y) {
    return {'x': Math.floor(x/X_MAX*CELL),'y': Math.floor(y/Y_MAX*CELL)}
  }

  function drawCanvas (x,y) {
    var margin = 1;
    ctx.beginPath();
    //console.log(getCell(x,y));
    if(!getCell(x,y)) {
      ctx.fillStyle = '#888686';
      ctx.fillRect(x*CELL + margin,y*CELL + margin,CELL - 2*margin,CELL - 2*margin);
      //setCell(x,y,true);
      //matrix[y][x] = true;
    } else {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x*CELL + margin,y*CELL + margin,CELL - 2*margin,CELL - 2*margin);
      //setCell(x,y,false);
      //matrix[y][x] = false;
    }
    ctx.closePath();
  }

  function getCell (x,y) {
    return matrix[y][x];
  }

  function setCell (x,y,condition) {
    matrix[y][x] = condition;
  }
}())
