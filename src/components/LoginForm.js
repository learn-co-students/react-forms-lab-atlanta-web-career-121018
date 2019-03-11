import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.username.length === 0 || this.state.password.length === 0){
            console.log("Please fill in username and password.")
        } else {
            this.props.onSubmit(this.state)
        }
    }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
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
