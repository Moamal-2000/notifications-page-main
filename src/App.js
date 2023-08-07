import Notifications from "./Components/Notifications";
import { NotificationsContext } from "./Contexts/NotificationsContext";
import { notificationData } from "./Data/notificationData";

function App() {

  const messagesData = notificationData;

  return (
    <NotificationsContext.Provider value={messagesData}>
      <div className="App">
        <Notifications />
      </div>
    </NotificationsContext.Provider>
  );
}

export default App;
