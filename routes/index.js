var request = require('request');

module.exports = exports = function (app) {
  app.get('/content', exports.content);
};

exports.content = function (req, res) {
  request({
    url: 'http://baconipsum.com/api/?type=meat-and-filler&paras=1',
    json: true
  }, function (err, result, body) {
    res.send((body || []).join('\n'));
  });
};
