import React, {useState} from 'react'
import { FetchDetailsButton } from "./CategoryElements"

const ChatFooter = ({socket, pdfId}) => {
    const [message, setMessage] = useState("")
    const handleTyping = () => socket.emit("typing",`${localStorage.getItem("userName")} is typing`)

    const handleSendMessage = (e) => {
        e.preventDefault()
        if(message.trim() && localStorage.getItem("userName")) {
        socket.emit("message", 
            {
                text: message, 
                name: localStorage.getItem("userName"), 
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
                pdfId: pdfId
            }
        )
        }
        setMessage("")
    }
  return (
    <div className='chat__footer'>
        <form className='form' onSubmit={handleSendMessage}>
          <input 
            type="text" 
            placeholder='Write message' 
            className='message' 
            value={message} 
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleTyping}
            />
            <FetchDetailsButton
                type="submit"
                style={{marginLeft: "0.5rem"}}
            >
                SEND
            </FetchDetailsButton>
        </form>
     </div>
  )
}

export default ChatFooter