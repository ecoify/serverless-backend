'use strict';

const carbonPut = require('./carbonPut');
const carbonSum = require('./carbonSum');
const carbonOne = require('./carbonOne');
const carbonDelete = require('./carbonDelete');

module.exports.put = (event, context, callback) => {
  carbonPut(event, (error, result) => {
    const response = {
      statusCode: error ? 500 : 200,
      body: JSON.stringify(result),
    };
    context.succeed(response);
  });
};

module.exports.sum = (event, context, callback) => {
  carbonSum(event, (error, result) => {
    const response = {
      statusCode: error ? 500 : 200,
      body: JSON.stringify(result),
    };
    context.succeed(response);
  });
};

module.exports.one = (event, context, callback) => {
  carbonOne(event, (error, result) => {
    const response = {
      statusCode: error ? 500 : 200,
      body: JSON.stringify(result),
    };
    context.succeed(response);
  });
};

module.exports.delete = (event, context, callback) => {
  carbonDelete(event, (error, result) => {
    const response = {
      statusCode: error ? 500 : 200,
      body: JSON.stringify(result),
    };
    context.succeed(response);
  });
};
