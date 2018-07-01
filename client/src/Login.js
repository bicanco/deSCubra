import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class LoginForm extends Component {

  handleSignIn(e) {
    e.preventDefault()
    var sha512 = require('js-sha512');
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(sha512(username), sha512(password), 'adm')
  }

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
        <div>
          <form onSubmit={this.handleSignIn.bind(this)}>
            <h5>Login para administradores</h5>
            <input type="text" ref="username" placeholder="Usuário" />
            <input type="password" ref="password" placeholder="Senha" />
            <button>Login</button>
          </form>
        </div>
        <h5>Login para exploradores</h5>
        <div>
          <FacebookLogin
           appId="1781495368553121"
           fields="name,email,picture"
           size="small"
           textButton="LOGIN COM FACEBOOK"
           callback={responseFacebook} />
         <br />
         <br />
           <GoogleLogin
            clientId="280220453193-emokhhlts65sak7idrcunpu09irer0mq.apps.googleusercontent.com"
            buttonText="LOGIN COM GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </div>
    );
  }

}

export default LoginForm;
