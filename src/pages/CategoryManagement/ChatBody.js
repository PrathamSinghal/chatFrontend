import React from 'react'
// import {useNavigate} from "react-router-dom"

const ChatBody = ({messages, typingStatus, lastMessageRef}) => { 
//   const navigate = useNavigate()
  console.log(messages)
  
  return (
    <>


        <div className='message__container'>
          {messages.map(message => (
            message.name === localStorage.getItem("userName") ? (
              <div className="message__chats" key={message.id}>
            <p className='sender__name'>You</p>
            <div className='message__sender'>
                <p>{message.text}</p>
            </div>
          </div>
            ): (
              <div className="message__chats" key={message.id}>
            <p>{message.name}</p>
            <div className='message__recipient'>
              <pre>
                <tag style={{whiteSpace: "pre-wrap"}}>
                {message.text}
                </tag>
              </pre>
            </div>
          </div>
            )
            ))}

          <div className='message__status'>
            <p>{typingStatus}</p>
          </div>
          <div ref={lastMessageRef} />   
        </div>
    </>
  )
}

export default ChatBody