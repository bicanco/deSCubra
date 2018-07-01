import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class LoginSocial extends Component {
  render() {
    const responseFacebook = (response) => {
      let email = response.email;
      let name = response.name;
      this.props.onSignIn(email, name, 'exp')
      console.log(email, name);
    }

    const responseGoogle = (response) => {
      let email = response.profileObj.email;
      let name = response.profileObj.name;
      this.props.onSignIn(email, name, 'exp')
      console.log(email, name);
    }

    return (
      <div>
        <li>
          <FacebookLogin
           appId="1781495368553121"
           fields="name,email,picture"
           size="small"
           textButton="LOGIN COM FACEBOOK"
           callback={responseFacebook}
          />
        </li>
        <li>
          <GoogleLogin
            clientId="280220453193-emokhhlts65sak7idrcunpu09irer0mq.apps.googleusercontent.com"
            buttonText="LOGIN COM GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </li>
      </div>
    );
  }

}

export default LoginSocial;
