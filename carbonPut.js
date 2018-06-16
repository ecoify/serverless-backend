'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
  const data = JSON.parse(event.body);
  if (!isFinite(data.carbon)) {
    return callback(new Error('Invalid body'))
  }

  const Item = {
    id: event.pathParameters.id,
    updatedAt: Date.now(),
    carbon: data.carbon,
  }
  const params = {
    TableName: 'carbon',
    Item,
  };

  return dynamoDb.put(params, (error, data) => {
    if (error) {
      return callback(error);
    }
    callback(error, params.Item);
  });
};
