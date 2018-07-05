import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
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
        {/*interface para login dos exploradores*/}
      <li>
          {/*interface login Facebook*/}
          <FacebookLogin
           appId="1781495368553121"
           fields="name,email,picture"
           size="small"
           callback={responseFacebook}
           render={renderProps => (
             <a className="waves-effect waves-light btn blue darken-3" onClick={renderProps.onClick}>LOGIN COM FACEBOOK</a>
           )}
          />
        </li>
        <li>
          {/*interface login Google*/}
          <GoogleLogin
            clientId="280220453193-emokhhlts65sak7idrcunpu09irer0mq.apps.googleusercontent.com"
            buttonText="LOGIN COM GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={renderProps => (
              <a className="waves-effect waves-light btn red darken-4" onClick={renderProps.onClick}>LOGIN COM GOOGLE</a>
            )}
          />
          </li>
      </div>
    );
  }

}

export default LoginSocial;
