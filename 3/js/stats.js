/* eslint-disable no-var */
'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGTH = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const BAR_GAP = 50;
const MSG_HEIGHT = 50;
const TEXT_HEIGHT = 20;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGTH);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText(`Список результатов:`, CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
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

  for (let j = 0; j < players.length; j++) {
    if (players[j] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(240, ` + Math.random() * 100 + `% , 50%)`;
    }
    ctx.fillRect(
        CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * j,
        CLOUD_Y + MSG_HEIGHT + GAP + TEXT_HEIGHT + BAR_HEIGHT - BAR_HEIGHT * times[j] / maxTime,
        BAR_WIDTH,
        BAR_HEIGHT * times[j] / maxTime
    );
  }
};
