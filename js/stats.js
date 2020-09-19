'use strict'
var CLOUD_WIDTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var MSG_HEIGHT = 50;
var TEXT_HEIGHT = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH)
};
// пытался вывод сообщения сделать функцией, не получилось
// var renderMsg = function(ctx, x, y, font) {
//   ctx.font = font;
//   ctx.textBaseline = 'hanging';
//   ctx.fillText(x, y)
// };

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
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i,
      CLOUD_Y + MSG_HEIGHT + GAP + BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime
    );
    ctx.fillText(
      players[i],
      CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i,
      CLOUD_Y + MSG_HEIGHT + GAP * 2 + TEXT_HEIGHT + BAR_HEIGHT
    );
  }
// ctx.fillRect повторяется, но просто задать цвет в if не работает
  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(
        CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_Y + MSG_HEIGHT + GAP + TEXT_HEIGHT + BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime,
        BAR_WIDTH,
        BAR_HEIGHT * times[i] / maxTime
      );
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '% , 50%)';
      ctx.fillRect(
        CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_Y + MSG_HEIGHT + GAP + TEXT_HEIGHT + BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime,
        BAR_WIDTH,
        BAR_HEIGHT * times[i] / maxTime
      );
    }
  }
};
