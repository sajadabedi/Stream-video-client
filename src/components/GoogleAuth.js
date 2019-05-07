import React, { Component } from "react";

export default class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "1088909040751-hibu3712cmubgelpkiek8elld2u5965m.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>Google</div>;
  }
}
