const { GraphQLClient } = require("graphql-request");
const { token } = require("./config.json");

async function main() {
  const url = "https://api.github.com/graphql";
  const options = {
    headers: {
      authorization: `Bearer ${token}`
    }
  };

  const client = new GraphQLClient(url, options);

  const query = `
  mutation {
    createPullRequest(input: {
      baseRefName: "master", 
      repositoryId: "MDEwOlJlcG9zaXRvcnkyMDA2NTA2MDQ=", 
      headRefName:"master", #This doesn't work
      body: "test body for the pull request",
      title: "test pull request"
    }) {
      clientMutationId,
    }
  }
`;

  const data = await client.request(query);
  console.log(JSON.stringify(data, undefined, 2));
}

main();
