const types = require('./types.json');

const getMime = (name) => {
  const binaryoctet = 'binary/octet-stream';
  const value = types[name.substr(name.lastIndexOf('.'))];
  return value || ({ type: binaryoctet, name: 'Default' });
};

export default getMime;
