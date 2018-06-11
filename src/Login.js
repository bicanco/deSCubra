import React, { Component } from 'react';

class LoginForm extends React.Component {

  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSignIn.bind(this)}>
          <h3>Sign in</h3>
          <input type="text" ref="username" placeholder="Usuário" />
          <input type="password" ref="password" placeholder="Senha" />
          <button>Login</button>
        </form>
      </div>
    );
  }

}

export default LoginForm;
