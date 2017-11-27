import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: "https://pearup.nanoapp.io/oauth/token",
  serverTokenRevocationEndpoint: "https://pearup.nanoapp.io/oauth/revoke"
});
