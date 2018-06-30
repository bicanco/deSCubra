import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class LoginSocial extends Component {
  render() {
    const responseFacebook = (response) => {
      let email = response.email;
      let name = response.name;
      //Client.checkUser(email, name)
      console.log(email, name);
    }

    const responseGoogle = (response) => {
  //    let email = response.profileObj.email;
  //    let name = response.profileObj.name;
      //Client.checkUser(email, name)
  //    console.log(email, name);
    }

    return (
      <div>
        <h5 class="red-text text-accent-4">Login para exploradores</h5>
          <FacebookLogin
           appId="1781495368553121"
           fields="name,email,picture"
           size="small"
           textButton="LOGIN COM FACEBOOK"
           callback={responseFacebook}
            />
        <br />
        <br />
          <GoogleLogin
            clientId="280220453193-emokhhlts65sak7idrcunpu09irer0mq.apps.googleusercontent.com"
            buttonText="LOGIN COM GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
      </div>
    );
  }

}

export default LoginSocial;
