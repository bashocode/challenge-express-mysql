const connection = require('../helpers/connection');

exports.getHero = async (query = '') => {
  return new Promise(async (resolve, reject) => {
    connection.query(query, function (err, result, fields) {
      if (err) {
        return reject(err);
      }

      resolve({
        result
      });
    });
  });
}

exports.postHero = async (query = '', data = []) => {
  return new Promise(async (resolve, reject) => {
    connection.query(query, data, function (err, result, fields) {
      if (err) {
        return reject(err);
      }

      resolve({
        result
      });
    })
  });
}

exports.putHero = async (query) => {
  return new Promise(async (resolve, reject) => {
    connection.query(query, function (err, result) {
      if (err) return reject(err);

      resolve({result});
    })
  });
}

exports.deleteHero = async (query) => {
  return new Promise(async (resolve, reject) => {
    connection.query(query, function (err, result) {
      if (err) return reject(err);
      
      resolve({result});
    })
  });
}
