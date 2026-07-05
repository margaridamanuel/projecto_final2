import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "Turismo-angola",
  clientId: "turismo-web",
});

export default keycloak;
