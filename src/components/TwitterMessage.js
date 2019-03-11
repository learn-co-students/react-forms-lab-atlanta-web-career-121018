import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        message: ''
    }
  }

  handleMessage = (event) => {
      if (event.target.value.length <= 140) {
          this.setState({
              message: event.target.value
            });
        } else {
          this.setState({
              message: event.target.value.slice(0, 140)
          });
        }
  }

  showChars = () => {
        return ((this.props.maxChars) - (this.state.message.length))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="tweet" value={this.state.message} onChange={this.handleMessage} />
            <p>Remaining Message Characters: {this.showChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
