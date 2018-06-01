import React, { Component } from 'react';
import {Bootstrap, Grid, Row, Col, Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="card">
          <article class="card-body">
          <h4 class="card-title text-center mb-4 mt-1">Sign in</h4><hr></hr>
            <form>
                <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                    </div>
                    <input v-model="username" name="" class="form-control" placeholder="Email or Username" type="email"/>
                </div>
                </div>
                <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                    </div>
                    <input v-model="password" class="form-control" placeholder="******" type="password"/>
                </div>
                </div>
                <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block"> Login </button>
                </div>
              </form>
          </article>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
