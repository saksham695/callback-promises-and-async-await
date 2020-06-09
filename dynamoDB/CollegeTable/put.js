require("./aws");
//var dynamodb = new AWS.DynamoDB();
var AWS = require("aws-sdk");
const params = require("./params");
var docClient = new AWS.DynamoDB.DocumentClient();

docClient.put(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to add item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("Added item:", JSON.stringify(data, null, 2));
  }
});
