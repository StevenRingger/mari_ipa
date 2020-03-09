function getColorStep(color1, color2, factor) {
  factor = (arguments.length < 3) ? 0.5 : factor;

  let result = color1.slice();
  for (let i = 0; i < 3; i++) {
    let cl = Math.round(result[i] + factor * (color2[i] - color1[i]));
    result[i] = (i === 0) ? cl : cl + '%';
  }
  return result;
};
export const interpolateColorsHsl = (color1, color2, steps) => {
  let stepFactor = 1 / (steps - 1),
    interpolatedColorArray = [];

  for (let i = 0; i < steps; i++) {
    interpolatedColorArray.push(getColorStep(color1, color2, stepFactor * i));
  }
  return interpolatedColorArray;
}