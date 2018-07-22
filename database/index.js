const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'meditationApp'
});

connection.connect();

function getIds(callback) {
  const q = 'SELECT id FROM videos';
  connection.query(q, function (error, results, fields) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

function getData(callback, id) {
  const q = `SELECT * FROM videos WHERE id = ${id} `;
  connection.query(q, function (error, results, fields) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

function storeData(data, callback) {
  const q = `INSERT INTO videos
            (music, audio, image)
            VALUES (?,?,?)`;

  connection.query(q, [data.music, data.audio, data.image], function (error, results) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = {
  getIds,
  getData,
  storeData
}