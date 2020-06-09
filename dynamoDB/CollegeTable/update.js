require("./aws");
var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: "College",
  Key: {
    Name: "saksham",
    ID: 16102124,
  },
  UpdateExpression: "set Age = :Age + :val",
  ExpressionAttributeValues: {
    ":val": 3,
  },
  ReturnValues: "UPDATED_NEW",
};

console.log("Updating the item...");
docClient.update(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to update item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
  }
});
