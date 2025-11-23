const { v4: uuidv4 } = require('uuid');
const AWS = require("aws-sdk");
AWS.config.update({region: "eu-west-2"});

const dynamodb = new AWS.DynamoDB.DocumentClient();

const gameID = uuidv4();
var duration = 3600000;

var params = {
  TableName: "Games",
  Item: {
    ID: gameID,
    GameStartTime: Date.now(),
    duration: duration
  },
};

// Call DynamoDB to add the item to the table
dynamodb.put(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
