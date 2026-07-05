import axios from "axios";

const KEYCLOAK_URL = "http://localhost:8080";
const REALM = "travelangola";
const CLIENT_ID = "admin-cli";
const USERNAME = "admin";
const PASSWORD = "admin";

export async function obterTokenAdmin() {
  const response = await axios.post(
    `${KEYCLOAK_URL}/realms/master/protocol/openid-connect/token`,

    new URLSearchParams({
      username: USERNAME,
      password: PASSWORD,
      grant_type: "password",
      client_id: CLIENT_ID,
    }),

    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  return response.data.access_token;
}
