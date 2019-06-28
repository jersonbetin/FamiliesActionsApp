const jsonC = {}.constructor;

export const mapObject = (levels = [], obj) => {
  const level = levels.shift();
  if (levels.length > 0) {
    return mapObject(levels, obj[level]);
  }
  return obj[level];
};

export const buildObject = (levels = [], newObject, assign) => {
  const level = levels.shift();
  if (!newObject[level]) {
    newObject[level] = {};
  }
  if (levels.length > 0) {
    buildObject(levels, newObject[level], assign);
  } else {
    if (typeof assign !== 'undefined') {
      console.log('Asignacion', assign);
      newObject[level] = assign;
    }
  }
};

export const typeVar = {
  'null': 'null',
  'undefined': 'undefined',
  'string': 'String',
  'array': 'Array',
  'object': 'Object',
  'function': 'Function'
};

export function whatIsIt(object = {}) {
  const stringConstructor = ''.constructor;
  const arrayConstructor = [].constructor;
  const objectConstructor = {}.constructor;
  const anyFunction = () => { console.log('x'); };
  const functionConstructor = anyFunction.constructor;
  if (object === null) {
    return 'null';
  }
  else if (object === undefined) {
    return 'undefined';
  }
  else if (object.constructor === stringConstructor) {
    return 'String';
  }
  else if (object.constructor === arrayConstructor) {
    return 'Array';
  }
  else if (object.constructor === objectConstructor) {
    return 'Object';
  }
  else if (object.constructor === functionConstructor) {
    return 'Function';
  }
  return 'Noop';
}

export const verifyData = (data) => {
  if (typeof data !== 'undefined') {
    if (whatIsIt(data) === 'Object') {
      return Object.keys(data).length > 0;
    }
    return data.length > 0;
  }
  return false;
};


export const isJSON = (json) => {
  if (json && json.constructor === jsonC) {
    return true;
  }
  return false;
};

export const mergeJSON = (json1, json2) => {
  let result = null;
  if (isJSON(json2)) {
    result = {};
    if (isJSON(json1)) {
      for (const key in json1) {
        result[key] = json1[key];
      }
    }

    for (const key in json2) {
      if (typeof result[key] === 'object' && typeof json2 === 'object') {
        result[key] = mergeJSON(result[key], json2[key]);
      } else {
        result[key] = json2[key];
      }
    }
  } else if (Array.isArray(json1) && Array.isArray(json2)) {
    result = json1;

    for (let i = 0; i < json2.length; i++) {
      if (result.indexOf(json2[i]) === -1) {
        result[result.length] = json2[i];
      }
    }
  } else {
    result = json2;
  }

  return result;
};

export const copyJson = (json) => {
  if (isJSON(json)) {
    return JSON.parse(JSON.stringify(json));
  }
  return {};
};

/**
 * @description Esta funcion toma un objeto y elemina las llaves que se le estipulen en los siguiente parametros
 * @param {Object} object 
 * @param {*} keys 
 */
export function excludeKeys(object = {}, ...keys) {
  const temp = {};
  for (const attr in object) {
    if (keys.indexOf(attr) === -1) {
      temp[attr] = object[attr];
    }
  }
  return temp;
}

/*export function orderJSON(order = [], json = {}) {
  const result = {};
  const jsonTmp = Object.assign({}, json);
  order.map(item => {
    if (typeof jsonTmp[item] !== 'undefined') {
      result[item] = jsonTmp[item];
      delete jsonTmp[item];
    }
    return;
  });
  for (const attr in jsonTmp) {
    result[attr] = jsonTmp[attr];
  }
  return result;
}*/

/*export function joinJsonKeysByCriteria(criteria = [], json = {}) {
  const result = {};
  criteria.map(item => {
    const tmp = {};
    for (const attr in json) {
      if (attr.indexOf(item) > -1) {
        tmp[attr] = json[attr];
      }
    }
    result[item] = tmp;
  });
  return result;
}*/

export function isEmpty(obj) {
  if(obj) {
    return Object.keys(obj).length === 0;
  }
  return false;
}

/*export default {
  mapObject,
  buildObject,
  whatIsIt,
  verifyData,
  isJSON,
  mergeJSON,
  excludeKeys,
  orderJSON,
  joinJsonKeysByCriteria,
  typeVar,
  isEmpty
};*/