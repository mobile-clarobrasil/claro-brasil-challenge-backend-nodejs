exports.handler = async (event) => {
  const { id, deviceId } = event.pathParameters;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Go Serverless v1.0! Your function executed successfully!  ${id} ${deveiceId} `,
        input: event,
      },
      null,
      2
    ),
  };
};
