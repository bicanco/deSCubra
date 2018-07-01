import React, { Component } from 'react';

class LoginAdmin extends Component {

  handleSignIn(e) {
    e.preventDefault()
    var sha512 = require('js-sha512');
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(sha512(username), sha512(password), 'adm')
  }

  render() {
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
      </div>
    );
  }

}

export default LoginAdmin;
