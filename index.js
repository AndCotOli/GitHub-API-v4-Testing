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
 {
   viewer {
     login
     organization(login: "CodingGardenCommunity") {
       url
       name
     }
   }
 }
`;

  const data = await client.request(query);
  console.log(JSON.stringify(data, undefined, 2));
}

main();
