'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 250;
// var CLOUD_X = 100;
// var CLOUD_Y = 50;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var BAR_GAP = 50;
var FONT_GAP = 20;
var TEXT_WIDTH = 50;
var TEXT_HEIGHT = 25;
var BAR_WIDTH = 40;
var barHeight = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  
  for (var i = 0; i < arr.length; i++) {
    
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  
  ctx.fillStyle = '#000';
  
  ctx.font = '16px, PT MONO';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + 2 * FONT_GAP);
  
  var maxTime = getMaxElement(times);
  
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT + TEXT_HEIGHT + GAP);
    if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random()) + ')';
        }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT + GAP, BAR_WIDTH, -1 * (barHeight * Math.floor(times[i]) / Math.floor(maxTime)));
    }
};