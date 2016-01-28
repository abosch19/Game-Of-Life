(function () {

/*
 *CONSTANTS AND VARIABLES
 */

var canvas = document.getElementById('gameOfLife');
var ctx = canvas.getContext('2d');

var MATRIX_LENGTH = 20;

var X_MAX = canvas.width;
var Y_MAX = canvas.height;
var X_MIN = 0;
var Y_MIN = 0;
var CELL = X_MAX/MATRIX_LENGTH;


var matrix = new Array();
var nextTurnCells = new Array();
var start = document.getElementById('start_stop');
var restart = document.getElementById('restart');

/*
 *Adding eventsListener
 */
//start.addEventListener('click', nextTurn);
canvas.addEventListener('click', canvasOnClick);
restart.addEventListener('click',function () {
  initMatrix();
  initCanvas();
});

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
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(X_MIN,Y_MIN,X_MAX,Y_MAX);
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
    for(var i = 0; i < MATRIX_LENGTH; ++i) {
      matrix[i] = new Array();
      for(var j = 0; j < MATRIX_LENGTH; ++j) {
        matrix[i][j] = false;
        }
      }
  }

  function canvasOnClick (ev) {
    var coords = xyConverter(ev.layerX,ev.layerY);
    //console.log("X: " + coords.x + "\nY: " + coords.y);
    drawCanvas(coords.x,coords.y);
    //console.log(matrix);
  }

  function xyConverter(x,y) {
    return {'x': Math.floor(x/X_MAX*MATRIX_LENGTH),'y': Math.floor(y/Y_MAX*MATRIX_LENGTH)}
  }

  function drawCanvas (x,y) {
    var margin = ctx.lineWidth;
    ctx.beginPath();
    if(!getCell(x,y)) {
      ctx.fillStyle = '#888686';
      ctx.fillRect(x*CELL + margin,y*CELL + margin,CELL - 2*margin,CELL - 2*margin);
      setCell(x,y,true);

    } else {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x*CELL + margin,y*CELL + margin,CELL - 2*margin,CELL - 2*margin);
      setCell(x,y,false);

    }
    ctx.closePath();
  }

  function getCell (x,y) {
    return matrix[y][x];
  }

  function setCell (x,y,condition) {
    matrix[y][x] = condition;
  }

  function nextTurn (ev) {
    for(var y = 0; y < Y_MAX; ++y) {
      for(var x = 0; x < X_MAX; ++x){
        var neighbours = findNeighbours(x,y);
        if(getCell(x,y)) {
          alert(neighbours);
        } else {

        }
      }
    }
  }
}())
