import { useState } from 'react';

export const MessageFunc = (props) => {
  const [msg, setMsg] = useState('')
  const [messageItem, setMessageItem] = useState(props.messageList)
  const handleMessage = (event) => {
    setMsg(event.target.value) 
  }
  const addMessage = () => {
    setMessageItem([...messageItem, msg])
    setMsg("")
  }

  const messages = messageItem.map((msg, idx) => {
    return <li key={idx}>{msg}</li>
  })
  return (
    <>
      <h3>Message props from Class: {props.messageList}</h3>
      <hr />
      <div style={{backgroundColor: 'aquamarine'}}>
        <input value={msg} onChange={handleMessage}/>
        <button onClick={addMessage}>Send message</button>
      </div>
      <ol style={{backgroundColor: 'red'}}>{messages}</ol>
    </>
  );
};