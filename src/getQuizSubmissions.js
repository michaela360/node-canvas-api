var buildOptions = require('./internal/util');

var request = require('request-promise');

var linkparser = require('parse-link-header');

var Bottleneck = require('bottleneck');

require('dotenv').config();

const token = process.env.CANVAS_API_TOKEN;

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
});

const requestObj = url => ({
  'method': 'GET',
  'uri': url,
  'json': true,
  'resolveWithFullResponse': true,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
});

const fetchAll = (url, result = []) => request(requestObj(url)).then(response => {
  result = [...result, response.body];
  const links = linkparser(response.headers.link);
  return links.next ? fetchAll(links.next.url, result) : result;
}).catch(err => console.log(err));

const fetchAllRateLimited = limiter.wrap(fetchAll);

const canvasDomain = process.env.CANVAS_API_DOMAIN;

var getOptions = require('./internal/getOptions');


/**
 * Retrieves all quiz submissions in a course
 * @param {Number} courseId the course id.
 * @param {Number} quizId the quiz id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Quiz submission objects: https://canvas.instructure.com/doc/api/submissions.html
 */



function getQuizSubmissions(courseId, quizId, ...options) {
  return fetchAllRateLimited(canvasDomain + `/courses/${courseId}/quizzes/${quizId}/submissions?` + 
  buildOptions([
    getOptions.quiz.quiz,
    getOptions.quiz.user
  ]
  )
  );
}
module.exports = getQuizSubmissions;