import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
       username: '',
       password: ''
    };
  } 

   handleSubmit = (event) => {
      event.preventDefault()
      if (!this.state.username || !this.state.password) return 
         this.props.onSubmit(this.state) 
   } 

   handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
   }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" type="text" name="password" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
