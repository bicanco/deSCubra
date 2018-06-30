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
        <div class="navbar-fixed">
          <nav>
            <div class="nav-wrapper">
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

export default TopMenu;
