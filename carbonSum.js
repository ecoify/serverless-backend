'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
  const params = {
    TableName: 'carbon',
  };

  return dynamoDb.scan(params, (error, data) => {
    if (error) {
      return callback(error);
    }
    data = data || {Items: []}
    const sum = data.Items.reduce((acc, item) => acc + item.carbon, 0)
    callback(error, {sum});
  });
};
