require("./aws");
//var dynamodb = new AWS.DynamoDB();
var AWS = require("aws-sdk");
const params = require("./params");
var docClient = new AWS.DynamoDB.DocumentClient();

docClient.get(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to read item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
  }
});
