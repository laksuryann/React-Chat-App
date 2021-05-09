import { ChatEngine } from "react-chat-engine"

import ChatFeed from "./components/ChatFeed"

import "./App.css"

const App = () => {
  return(
    <ChatEngine 
      height="100vh"
      projectID="317adac9-5e8c-4402-bb27-7d23f163dd02"
      userName="Venkatesh"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps } />}
    />
  );
}

export default App
