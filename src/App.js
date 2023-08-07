import { useState } from "react";
import Notifications from "./Components/Notifications";
import { NotificationsContext } from "./Contexts/NotificationsContext";
import { notificationData } from "./Data/notificationData";

function App() {
  const [messagesState, setMessagesState] = useState(notificationData)

  return (
    <NotificationsContext.Provider value={{messagesState, setMessagesState}}>
      <div className="App">
        <Notifications />
      </div>
    </NotificationsContext.Provider>
  );
}

export default App;
