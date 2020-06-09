var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com/",
  accessKeyId: "AKIA2VVYJMA4XKEFN7V4",
  secretAccessKey: "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",
});

var docClient = new AWS.DynamoDB();

table = "College";

var params = {
  TableName: table,

  //   UpdateExpression: "set  enrol_id= :n",
  //   ExpressionAttributeValues: {
  //     ":n": 160101,
  //   },
  //   ReturnValues: "UPDATED_NEW",
};

//console.log("Adding a new item...");
docClient.deleteTable(params, (err, data) => {
  if (err) {
    console.error(
      "Unable to add item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("deleted item:", JSON.stringify(data, null, 2));
  }
});
