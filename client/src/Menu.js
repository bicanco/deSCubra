import React, {Component} from 'react';
import M from 'materialize-css';

export class TopMenu extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        isAdmin: props.isAdmin,
      };
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var options ={};
        var instances = M.Sidenav.init(elems, options);
      });
    }

    renderOptions(isAdmin){
      if(isAdmin){
        return(
          <div>
          <li><a>Log Out</a></li>
          </div>
        );
      }else{
        return(
          <div>
          <li><a>Log Out</a></li>
          <li><a>2</a></li>
          <li><a>3</a></li>
          </div>
        );
      }
    }

    render(){
      return(
        <div class="navbar">
          <nav>
            <div class="nav-wrapper red accent-4">
              <ul class="left hide-on-med-and-down">
                <li><a href="#" class="brand-logo left">Logo</a></li>
              </ul>
              <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                {this.renderOptions(this.state.isAdmin)}
              </ul>
            </div>
          </nav>
          <ul class="sidenav" id="mobile-demo">
            {this.renderOptions(this.state.isAdmin)}
          </ul>
        </div>
      );
    }
}

export class FootMenu extends React.Component{
  render(){
  return(
      <footer class="page-footer red accent-4">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Footer Content</h5>
              <p class="grey-text text-lighten-4">oi</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    );
  }
}
