const makePoint = (x, y) => {
  return {
    x: x,
    y: y
  };
};

const getX = point => {
  return point.x;
};

const getY = point => {
  return point.y;
};

const toString = point => {
  const coord = Object.values(point);
  return `[${coord.join(", ")}]`;
};

const getDistance = (point1, point2) => {
  const [x1, y1] = Object.values(point1);
  const [x2, y2] = Object.values(point2);
  const xDist = x1 - x2;
  const yDist = y1 - y2;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
};

const getQuadrant = point => {
  const [x, y] = Object.values(point);
  if (x === 0 || y === 0) return null;
  if (x < 0) {
    if (y > 0) return 2;
    if (y < 0) return 3;
  }
  if (x > 0) {
    if (y > 0) return 1;
    if (y < 0) return 4;
  }
};

module.exports = {
  makePoint,
  getX,
  getY,
  toString,
  getDistance,
  getQuadrant
};
