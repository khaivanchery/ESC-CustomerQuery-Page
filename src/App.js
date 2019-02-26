import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { createForm } from './store/actions/formActions'

class App extends Component {
  state = {
    sel: '',
    txt: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })

  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createForm(this.state);
  }


  render() {
    const { form } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="app-content">

            <div className ="myheader">
              <h1>Contact Us</h1>
            </div>

            <div>
            <form onSubmit={this.handleSubmit} id="form">
              <div className="options">
                <label id= "category">Category:</label>
                <select id= "sel" onChange={this.handleChange}>
                  <option value="sel">Please Select One</option>
                  <option value="finance">Finance</option>
                  <option value="it">IT</option>
                  <option value="general">General</option>
                </select>
              </div>
              <textarea id="txt" name="name" rows="8" cols="80" onChange={this.handleChange}></textarea>
              <button id="but">Submit</button>
            </form>
            </div>

          </div>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    createForm: (form) => dispatch(createForm(form))
  }
}

export default connect(null, mapDispatchToProps)(App);
