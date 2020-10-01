exports.min = function min (array) {
  if (array === undefined || array[0] === undefined) return 0;
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (array === undefined || array[0] === undefined) return 0; 
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (array === undefined || array[0] === undefined) return 0;
  let i = 0;
  let sum = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum / array.length;
}