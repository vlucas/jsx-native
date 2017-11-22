const htmr = require('htmr');

const IS_BROWSER = typeof window !== undefined;

/**
 * Render template value as string
 */
function templateValueToJSX(value) {
  if (value === undefined || value === null) {
    return '';
  }

  // Handle arrays of sub-data
  if (value instanceof Array) {
    let values = value.map(val => templateValueToJSX(val));

    if (IS_BROWSER) {
      return values;
    }

    return values.join('');
  }

  return value.toString();
}

/**
 * ES6 tagged template literal function
 */
function jsx(strings, ...values) {
  let output = '';
  let index = 0;
  let componentMap = {};

  for (index = 0; index < values.length; index++) {
    let value = values[index];
    let valueString;

    if (typeof value === 'function') {
      // Assume React component when we get a function
      let componentName = value.name || value.constructor.name;

      componentMap[componentName] = value;
      componentMap[componentName.toLowerCase()] = value;

      valueString = componentName;
    }

    if (valueString === undefined) {
      valueString = templateValueToJSX(value);
    }

    output += strings[index] + valueString;
  }

  output += strings[index];

  if (IS_BROWSER) {
    return htmr(output, componentMap);
  }

  return output.trimRight();
}

module.exports = {
  jsx,
};
