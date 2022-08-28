import { MessageFunc } from '../func-components/Message'
import { Component } from 'react'

export class MessageClass extends Component {
  state = {
    messageList: [
        'Class_props1 ',
        'Class_props2 '
    ]
  }

  render() {
    return (
      <div>
        <h3>Message props from App: {this.props.messageList}</h3>
        <MessageFunc messageList={this.state.messageList} />
      </div>
    );
  }
}